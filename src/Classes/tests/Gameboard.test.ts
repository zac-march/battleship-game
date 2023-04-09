import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

function getTotalValue(gameboard: Gameboard) {
  let totalCellValue = 0;
  gameboard.board.forEach((row) => {
    totalCellValue += row.reduce((acc, curr) => acc + curr, 0);
  });
  return totalCellValue;
}

it("New gameboard is empty", () => {
  const gameboard = new Gameboard();
  expect(getTotalValue(gameboard)).toBe(0);
});

it("Placed ship exists on gameboard", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(new Ship(3), 2, 2, "vertical");

  expect(getTotalValue(gameboard)).not.toBe(0);

  expect(gameboard.board[2][2]).toBe(1);
  expect(gameboard.board[3][2]).toBe(1);
  expect(gameboard.board[4][2]).toBe(1);
});

it("Place ship populates ship list", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(new Ship(5), 4, 3, "vertical");
  gameboard.placeShip(new Ship(2), 4, 3, "vertical");

  expect(gameboard.ships.length).toBe(2);
  expect(gameboard.ships[0].ship.length).toEqual(5);
});

it("Place ship populates ship list", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(new Ship(5), 4, 3, "vertical");
  gameboard.recieveAttack(4, 3);
});
