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

  placeShip(ship: Ship, x: number, y: number, orientation: string) {
    const occupiedCells = [];

    for (let i = 0; i < ship.length; i++) {
      occupiedCells.push([x, y]);
      orientation === "vertical" ? (x += 1) : (y += 1);
    }
    this.ships.push({ ship: ship, x: x, y: y, orientation: orientation });
  }

  recieveAttack(x: number, y: number) {}
}

export { Gameboard };
