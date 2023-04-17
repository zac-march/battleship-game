import { Gameboard } from "./Gameboard";

class Player {
  board: Gameboard;
  isTurn: boolean;
  isOpponent: boolean;
  lastAttackResult: string;

  constructor(isTurn: boolean, isOpponent: boolean) {
    this.board = new Gameboard();
    this.isTurn = isTurn;
    this.isOpponent = isOpponent;
  }

  takeTurn(rival: Player, coordinates?: number[]) {
    this.lastAttackResult = rival.board.recieveAttack(coordinates);
  }
}

export { Player };
