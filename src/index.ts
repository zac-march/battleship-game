import "./style.css";
import { boardComponent } from "./Components/boardComponent";
import { Player } from "./Classes/Player";
import { Ship } from "./Classes/Ship";

const main = document.body.querySelector("main");

const player = new Player(true, false);
const computer = new Player(false, true);

player.board.setRandomFleet();

player.board.recieveAttack(1, 2);
const board = boardComponent(player);

console.log("boards:", board);

main.appendChild(board);
