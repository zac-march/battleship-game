import { Ship } from "../Ship";

it("New ship length matches input", () => {
  const testShip = new Ship(6);
  expect(testShip.length).toBe(6);
});

it("Hit count increments on hit", () => {
  const testShip = new Ship(6);
  testShip.hit();
  expect(testShip.hitCount).toBe(1);
});

it("A ship will sink if hit too many times", () => {
  const testShip = new Ship(2);
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
