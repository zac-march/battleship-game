import { Ship } from "./Ship";

class Gameboard {
  boardArr: number[][];
  fleet: any[];
  presetShips: Ship[];

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

    this.fleet = [];

    this.presetShips = [
      new Ship(5),
      new Ship(4),
      new Ship(3),
      new Ship(3),
      new Ship(2),
    ];
  }

  getPlacedCells(shipObj: Ship, coordinates: number[], orientation: string) {
    const placedCells = [];
    for (let i = 0; i < shipObj.length; i++) {
      const [x, y] = coordinates;
      placedCells.push([x, y]);
      orientation === "vertical" ? coordinates[0]++ : coordinates[1]++;
    }
    return placedCells;
  }

  placeShip(shipObj: Ship, coordinates: number[], orientation: string) {
    const placedCells = this.getPlacedCells(shipObj, coordinates, orientation);
    placedCells.forEach((cell) => this.setCell([cell[0], cell[1]], 1));

    this.fleet.push({
      shipObj,
      placedCells: placedCells,
    });
  }

  recieveAttack([x, y]: number[]) {
    const hitShip = this.fleet.find((ship) =>
      ship.placedCells.some((cell: number[]) => cell[0] === x && cell[1] === y)
    );

    if (hitShip) {
      hitShip.shipObj.hit();
      this.setCell([x, y], -1);
      return "hit";
    } else {
      this.setCell([x, y], -2);
      return "miss";
    }
  }

  detectGameOver() {
    const sunkValues = this.fleet.map((ship) => ship.shipObj.isSunk());
    return sunkValues.every((value) => value);
  }

  getAttackableCells(subset?: number[][]) {
    if (subset !== undefined) {
      return subset.filter((cell: number[]) => this.getCell(cell) >= 0);
    } else {
      const attackableCells: number[][] = [];
      for (let x = 0; x < this.boardArr.length; x++) {
        for (let y = 0; y < this.boardArr[x].length; y++) {
          if (this.getCell([x, y]) >= 0) attackableCells.push([x, y]);
        }
      }
      return attackableCells;
    }
  }

  getCell([x, y]: number[]) {
    return this.boardArr[x][y];
  }

  setCell([x, y]: number[], value: number) {
    this.boardArr[x][y] = value;
  }

  isValidPlacement(shipObj: Ship, coordinates: number[], orientation: string) {
    const placedCells = this.getPlacedCells(shipObj, coordinates, orientation);

    if (isOutsideBoard()) {
      return false;
    } else {
      return isSpaceEmpty(this.boardArr);
    }

    function isOutsideBoard() {
      for (let cell of placedCells) {
        if (cell[0] > 9 || cell[1] > 9) return true;
      }
      return false;
    }

    function isSpaceEmpty(boardArray: number[][]) {
      for (let cell of placedCells) {
        if (boardArray[cell[0]][cell[1]] == 1) return false;
      }
      return true;
    }
  }
  isCellOccupied([x, y]: number[]) {
    return this.boardArr[x][y] === 1 || this.boardArr[x][y] === -1;
  }

  setRandomFleet() {
    for (let ship of this.presetShips) {
      let isValid = false;
      while (!isValid) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
        isValid = this.isValidPlacement(ship, [x, y], orientation);
        if (isValid) {
          this.placeShip(ship, [x, y], orientation);
        }
      }
    }
  }

  getIndexOfShip(coordinate: number[]) {
    for (let index = 0; index < this.fleet.length; index++) {
      const ship = this.fleet[index];
      for (let i = 0; i < ship.placedCells.length; i++) {
        const cell = ship.placedCells[i];
        if (cell[0] === coordinate[0] && cell[1] === coordinate[1]) {
          return index;
        }
      }
    }
  }
}

export { Gameboard };