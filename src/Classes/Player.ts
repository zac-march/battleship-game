import { Gameboard } from "./Gameboard";

export class Player {
  board: Gameboard;
  isTurn: boolean;
  isOpponent: boolean;
  lastAttackSuccess: boolean;

  constructor(isTurn: boolean, isOpponent: boolean) {
    this.board = new Gameboard();
    this.isTurn = isTurn;
    this.isOpponent = isOpponent;
  }

  takeTurn(rival: Player, coordinates?: number[]) {
    rival.board.recieveAttack(coordinates);
    this.lastAttackSuccess = rival.board.lastAttackSuccess;
  }
}
