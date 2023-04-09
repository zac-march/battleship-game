import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

function getTotalValue(gameboard: Gameboard) {
  let totalCellValue = 0;
  gameboard.boardArr.forEach((row) => {
    totalCellValue += row.reduce((acc, curr) => acc + curr, 0);
  });
  return totalCellValue;
}

it("New gameboard is empty", () => {
  const gameboard = new Gameboard();
  expect(getTotalValue(gameboard)).toBe(0);
});

it("Placed ship: ship exists on gameboard", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(new Ship(3), [2, 2], "vertical");

  expect(getTotalValue(gameboard)).not.toBe(0);

  expect(gameboard.boardArr[2][2]).toBe(1);
  expect(gameboard.boardArr[3][2]).toBe(1);
  expect(gameboard.boardArr[4][2]).toBe(1);
});

it("Place ship: populates ship list", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(new Ship(5), [4, 3], "vertical");
  gameboard.placeShip(new Ship(2), [4, 3], "vertical");

  expect(gameboard.ships.length).toBe(2);
  expect(gameboard.ships[0].shipObj.length).toEqual(5);
});

it("Recieve attack: ship can be hit", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(new Ship(5), [4, 3], "vertical");
  gameboard.recieveAttack(4, 3);

  expect(gameboard.boardArr[4][3]).toBe(-1);
});

it("Recieve attack: attack can miss", () => {
  const gameboard = new Gameboard();
  gameboard.recieveAttack(4, 3);

  expect(gameboard.boardArr[4][3]).toBe(-2);
});

it("Can detect game over", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(new Ship(3), [4, 3], "vertical");
  gameboard.placeShip(new Ship(2), [1, 1], "horizontal");
  gameboard.recieveAttack(4, 3);
  gameboard.recieveAttack(5, 3);
  gameboard.recieveAttack(6, 3);
  gameboard.recieveAttack(1, 1);
  gameboard.recieveAttack(1, 2);

  expect(gameboard.detectGameOver()).toBe(true);
});
