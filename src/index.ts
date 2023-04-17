import "./style.css";
import { game } from "./Components/game";

const main = document.querySelector("main");
const container = document.createElement("div");
main.append(container);

const gameStateMessage = document.createElement("p");
gameStateMessage.id = "game-message";
container.append(gameStateMessage);

game();
