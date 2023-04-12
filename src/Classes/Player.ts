import { Gameboard } from "./Gameboard";

class Player {
  board: Gameboard;
  isTurn: boolean;
  isOpponent: boolean;

  constructor(isTurn: boolean, isOpponent: boolean) {
    this.board = new Gameboard();
    this.isTurn = isTurn;
    this.isOpponent = isOpponent;
  }

  takeTurn(rival: Player, coordinates?: number[]) {
    rival.board.recieveAttack(coordinates);
  }
}

export { Player };