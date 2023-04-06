function makeShip(length: number) {
  interface Ship {
    length: number;
    hitCount: number;
    isSunk: boolean;
    hit(): any;
    getIsSunk(): any;
  }
  let hitCount = 0;
  let isSunk = false;

  const hit = () => (hitCount += 1);
  const getIsSunk = () => {
    if (hitCount === length) isSunk = true;
  };

  const ship: Ship = { length, hitCount, isSunk, hit, getIsSunk };

  return ship;
}

export { makeShip };
