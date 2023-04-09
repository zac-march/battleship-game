import { Ship } from "./Ship";

class Gameboard {
  board: number[][];
  ships: any[];

  constructor() {
    this.board = [
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

  placeShip(shipObj: Ship, x: number, y: number, orientation: string) {
    const occupiedCells = [];

    for (let i = 0; i < shipObj.length; i++) {
      occupiedCells.push([x, y]);
      this.board[x][y] = 1;
      orientation === "vertical" ? (x += 1) : (y += 1);
    }
    this.ships.push({
      shipObj,
      occupiedCells,
    });
  }

  recieveAttack(x: number, y: number) {
    let wasAttackSuccess = false;

    this.ships.forEach((ship) => {
      ship.occupiedCells.forEach((cell: number[]) => {
        if (cell[0] === x && cell[1] === y) {
          ship.shipObj.hit();
          this.board[x][y] = -1;
          wasAttackSuccess = true;
          return;
        }
      });
      if (wasAttackSuccess) return;
    });

    if (!wasAttackSuccess) this.board[x][y] = -2;
  }

  detectGameOver() {
    const sunkValues = this.ships.map((ship) => ship.shipObj.isSunk());
    return sunkValues.every((value) => value);
  }
}

export { Gameboard };
