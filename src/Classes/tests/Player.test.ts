import { Player } from "../Player";
import { Ship } from "../Ship";

it("Player can attack rival", () => {
  const player1 = new Player(true, false);
  const player2 = new Player(false, true);
  player2.board.placeShip(new Ship(3), [1, 1], "vertical");

  player1.takeTurn(player2, [2, 5]);
  player1.takeTurn(player2, [1, 1]);

  expect(player2.board.getCell([2, 5])).toBe(-2);
  expect(player2.board.getCell([1, 1])).toBe(-1);
});
