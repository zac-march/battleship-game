import "./style.css";
import { boardComponent } from "./Components/boardComponent";
import { Player } from "./Classes/Player";
import { Ship } from "./Classes/Ship";

const main = document.body.querySelector("main");
const boardsContainer = document.createElement("div");
boardsContainer.className = "boards";

const player = new Player(true, false);
const opponent = new Player(false, true);

player.board.setRandomFleet();
opponent.board.setRandomFleet();

const playerBoard = boardComponent(player);
const opponentBoard = boardComponent(opponent);

console.log("boards:", playerBoard);

main.append(boardsContainer);
boardsContainer.append(playerBoard, opponentBoard);
