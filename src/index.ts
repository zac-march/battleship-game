import "./style.css";
import { boardComponent } from "./Components/boardComponent";
import { Player } from "./Classes/Player";
import { PlayerAI } from "./Classes/PlayerAI";
import { Ship } from "./Classes/Ship";

const main = document.body.querySelector("main");
const boardsContainer = document.createElement("div");
boardsContainer.className = "boards";

const player = new Player(true, false);
const opponent = new PlayerAI(false, true);

player.board.setRandomFleet();
opponent.board.setRandomFleet();

const playerBoard = boardComponent(player);
const opponentBoard = boardComponent(opponent);

opponentBoard.container.addEventListener("click", (e) => {
  const cellElement = e.target as HTMLInputElement;
  const cellValue = parseInt(cellElement.getAttribute("data-value"));
  const coordinatesString = cellElement
    .getAttribute("data-coordinate")
    .split(",");
  const coordinates = [
    parseInt(coordinatesString[0]),
    parseInt(coordinatesString[1]),
  ];

  if (cellValue > -1) {
    player.takeTurn(opponent, coordinates);
    opponent.takeTurn(player);
    refreshBoards();
  }
});

function refreshBoards() {
  playerBoard.reloadBoard();
  opponentBoard.reloadBoard();
}

main.append(boardsContainer);
boardsContainer.append(playerBoard.container, opponentBoard.container);
