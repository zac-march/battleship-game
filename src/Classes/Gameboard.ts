import { NumericLiteral } from "typescript";
import { Ship } from "./Ship";

class Gameboard {
  boardArr: number[][];
  ships: any[];

  constructor() {
    this.boardArr = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    this.ships = [];
  }

  placeShip(shipObj: Ship, coordinates: number[], orientation: string) {
    const occupiedCells = [];

    for (let i = 0; i < shipObj.length; i++) {
      const [x, y] = coordinates;
      occupiedCells.push([x, y]);
      this.setCell([x, y], 1);
      orientation === "vertical" ? coordinates[0]++ : coordinates[1]++;
    }
    this.ships.push({
      shipObj,
      occupiedCells,
    });
  }

  recieveAttack(x: number, y: number) {
    const hitShip = this.ships.find((ship) =>
      ship.occupiedCells.some(
        (cell: number[]) => cell[0] === x && cell[1] === y
      )
    );

    if (hitShip) {
      hitShip.shipObj.hit();
      this.setCell([x, y], -1);
    } else {
      this.setCell([x, y], -2);
    }
  }

  detectGameOver() {
    const sunkValues = this.ships.map((ship) => ship.shipObj.isSunk());
    return sunkValues.every((value) => value);
  }

  getAttackableCells() {
    const attackableCells: number[][] = [];
    for (let x = 0; x < this.boardArr.length; x++) {
      for (let y = 0; y < this.boardArr[x].length; y++) {
        if (this.getCell([x, y]) >= 0) attackableCells.push([x, y]);
      }
    }
    return attackableCells;
  }

  getCell([x, y]: number[]) {
    return this.boardArr[x][y];
  }

  setCell([x, y]: number[], value: number) {
    this.boardArr[x][y] = value;
  }
}

export { Gameboard };
