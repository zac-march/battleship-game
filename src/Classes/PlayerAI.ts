import { Player } from "./Player";

class PlayerAI extends Player {
  attackQueue: number[][];
  lastAttackedCell: number[];

  constructor(isTurn: boolean, isOpponent: boolean) {
    super(isTurn, isOpponent);
    this.attackQueue = [];
  }

  takeTurn(rival: Player) {
    let targetCells: number[][];
    let usedAttackQueue: boolean = false;
    this.attackQueue.length;
    if (this.attackQueue.length <= 0) {
      targetCells = rival.board.getAttackableCells();
    } else {
      targetCells = this.attackQueue;
      usedAttackQueue = true;
    }

    const randCellIndex = Math.floor(Math.random() * targetCells.length);
    const attackedCell = targetCells[randCellIndex];
    this.lastAttackResult = rival.board.recieveAttack(attackedCell);
    this.lastAttackedCell = attackedCell;

    if (usedAttackQueue) this.attackQueue.splice(randCellIndex, 1);

    this.updateAttackQueue(rival, attackedCell);
  }

  private updateAttackQueue(rival: Player, attackedCell: number[]) {
    if (this.lastAttackResult === "hit") {
      if (rival.board.isShipSunk(attackedCell)) {
        this.attackQueue = [];
      } else {
        this.setAttackQueue(rival, attackedCell);
      }
    }
  }

  setAttackQueue(rival: Player, cell: number[]) {
    let surroundingCells = [
      [cell[0] - 1, cell[1]],
      [cell[0] + 1, cell[1]],
      [cell[0], cell[1] - 1],
      [cell[0], cell[1] + 1],
    ];

    surroundingCells = surroundingCells.filter(
      (cell) => !rival.board.isOutsideBoard(cell)
    );
    const attackableCells = rival.board.getAttackableCells(surroundingCells);
    this.attackQueue.push(...this.attackQueue, ...attackableCells);
    this.attackQueue = [...new Set(attackableCells)];
  }
}

export { PlayerAI };
