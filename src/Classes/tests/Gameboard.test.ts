import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

describe("Gameboard", () => {
  let gameboard: Gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  it("New gameboard is empty", () => {
    expect(getTotalValue(gameboard)).toBe(0);
  });

  it("Placed ship: ship exists on gameboard", () => {
    gameboard.placeShip(new Ship(3), [2, 2], "vertical");

    expect(getTotalValue(gameboard)).not.toBe(0);

    expect(gameboard.boardArr[2][2]).toBe(1);
    expect(gameboard.boardArr[3][2]).toBe(1);
    expect(gameboard.boardArr[4][2]).toBe(1);
  });

  it("Place ship: populates ship list", () => {
    gameboard.placeShip(new Ship(5), [4, 3], "vertical");
    gameboard.placeShip(new Ship(2), [4, 3], "vertical");

    expect(gameboard.fleet.length).toBe(2);
    expect(gameboard.fleet[0].shipObj.length).toEqual(5);
  });

  it("Recieve attack: ship can be hit", () => {
    gameboard.placeShip(new Ship(5), [4, 3], "vertical");
    gameboard.recieveAttack([4, 3]);

    expect(gameboard.boardArr[4][3]).toBe(-1);
  });

  it("Recieve attack: attack can miss", () => {
    gameboard.recieveAttack([4, 3]);

    expect(gameboard.boardArr[4][3]).toBe(-2);
  });

  it("Can detect game over", () => {
    gameboard.placeShip(new Ship(3), [4, 3], "vertical");
    gameboard.placeShip(new Ship(2), [1, 1], "horizontal");
    gameboard.recieveAttack([4, 3]);
    gameboard.recieveAttack([5, 3]);
    gameboard.recieveAttack([6, 3]);
    gameboard.recieveAttack([1, 1]);
    gameboard.recieveAttack([1, 2]);

    expect(gameboard.detectGameOver()).toBe(true);
  });

  it("Invalid placement: ship overlap", () => {
    gameboard.placeShip(new Ship(3), [1, 1], "horizontal");
    expect(gameboard.isValidPlacement(new Ship(3), [1, 1], "vertical")).toBe(
      false
    );
  });

  it("Invalid placement: outside board", () => {
    expect(gameboard.isValidPlacement(new Ship(3), [1, 8], "horizontal")).toBe(
      false
    );
    expect(gameboard.isValidPlacement(new Ship(4), [5, 9], "horizontal")).toBe(
      false
    );
  });

  it("Get placed cells", () => {
    const placedCells = gameboard.getPlacedCells(
      new Ship(3),
      [1, 1],
      "vertical"
    );
    expect(placedCells).toEqual([
      [1, 1],
      [2, 1],
      [3, 1],
    ]);
  });

  it("Get attackable cells", () => {
    expect(gameboard.getAttackableCells().length).toBe(100);
    gameboard.placeShip(new Ship(3), [4, 3], "vertical");
    gameboard.recieveAttack([4, 3]);
    gameboard.recieveAttack([1, 1]);
    expect(gameboard.getAttackableCells().length).toBe(98);
  });

  it("Get index of ship in fleet", () => {
    gameboard.placeShip(new Ship(3), [2, 2], "vertical");
    gameboard.placeShip(new Ship(3), [6, 6], "vertical");
    gameboard.placeShip(new Ship(3), [2, 9], "vertical");

    expect(gameboard.getIndexOfShip([2, 2])).toBe(0);
    expect(gameboard.getIndexOfShip([3, 9])).toBe(2);
  });
});

function getTotalValue(gameboard: Gameboard) {
  let totalCellValue = 0;
  gameboard.boardArr.forEach((row) => {
    totalCellValue += row.reduce((acc, curr) => acc + curr, 0);
  });
  return totalCellValue;
}
