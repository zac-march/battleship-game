class Ship {
  length: number;
  hitCount: number;

  constructor(length: number) {
    this.length = length;
    this.hitCount = 0;
  }

  isSunk() {
    return this.hitCount === this.length;
  }

  hit() {
    this.hitCount += 1;
  }
}

export { Ship };
