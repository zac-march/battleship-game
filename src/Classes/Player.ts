import { Gameboard } from "./Gameboard";

class Player {
  board: Gameboard;
  isTurn: boolean;
  isComputer: boolean;

  constructor(isTurn: boolean, isComputer: boolean) {
    this.board = new Gameboard();
    this.isTurn = isTurn;
    this.isComputer = isComputer;
  }

  takeTurn(rival: Player, coordinates?: number[]) {
    if (this.isComputer) {
      const attackableCells = rival.board.getAttackableCells();
      const randCellIndex = Math.floor(Math.random() * attackableCells.length);
      coordinates = attackableCells[randCellIndex];
    }

    rival.board.recieveAttack(coordinates[0], coordinates[1]);
  }
}

export { Player };
