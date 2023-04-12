import { Player } from "./Player";

class PlayerAI extends Player {
  attackQueue: number[][];

  constructor(isTurn: boolean, isOpponent: boolean) {
    super(isTurn, isOpponent);
    this.attackQueue = [];
  }

  takeTurn(rival: Player) {
    let attackResult: string;
    let attackedCell: number[];
    this.attackQueue.length;
    if (this.attackQueue.length <= 0) {
      const attackableCells = rival.board.getAttackableCells();
      const randCellIndex = Math.floor(Math.random() * attackableCells.length);
      attackedCell = attackableCells[randCellIndex];
    } else {
      attackedCell = this.attackQueue.shift();
    }
    attackResult = rival.board.recieveAttack(attackedCell);
    if (attackResult === "hit") {
      if (rival.board.isShipSunk(attackedCell)) {
        this.attackQueue = [];
      } else {
        this.updateAttackQueue(rival, attackedCell);
      }
    }
  }

  updateAttackQueue(rival: Player, cell: number[]) {
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
