import { Player } from "../Classes/Player";
import { PlayerAI } from "../Classes/PlayerAI";
import { boardComponent } from "./board";

function game() {
  const main = document.body.querySelector("main");
  const boardsContainer = document.createElement("div");
  main.append(boardsContainer);
  boardsContainer.className = "boards";
  let opponentBoard: { container: any; reloadBoard: any };
  let playerBoard: { container: any; reloadBoard: any };
  let opponent: PlayerAI;
  let player: Player;
  setGame("setup");

  function setGame(gameState: string) {
    switch (gameState) {
      case "setup":
        setupGame();
        break;
      case "play":
        playGame();
        break;
      case "end":
        endGame();
        break;
    }
  }

  function setupGame() {
    opponent = new PlayerAI(false, true);
    player = new Player(true, false);

    opponent.board.setRandomFleet();

    playerBoard = boardComponent(player);
    opponentBoard = boardComponent(opponent);

    boardsContainer.append(playerBoard.container, opponentBoard.container);

    playerBoard.container.addEventListener("click", placePlayerShip);
    playerBoard.container.addEventListener("mouseover", handlePlacementHover);
    playerBoard.container.addEventListener("mouseout", handlePlacementHover);

    function placePlayerShip(e: { target: HTMLInputElement }) {
      const cell = getCellElement(e.target);
      const shipIndex = player.board.fleet.length;

      if (cell.value != 0) return;

      const currentShip = player.board.presetShips[shipIndex];

      const isValid = player.board.isValidPlacement(
        currentShip,
        cell.coordinates,
        "vertical"
      );

      if (!isValid) {
        console.log("Invalid placement");
        return;
      }

      player.board.placeShip(currentShip, cell.coordinates, "vertical");
      playerBoard.reloadBoard();

      if (player.board.fleet.length >= player.board.presetShips.length) {
        console.log("All ships placed");
        playerBoard.container.removeEventListener(
          "mouseover",
          handlePlacementHover
        );
        playerBoard.container.removeEventListener(
          "mouseout",
          handlePlacementHover
        );
        playerBoard.container.removeEventListener("click", placePlayerShip);
        setGame("play");
      }
    }

    function handlePlacementHover(e: any) {
      const isMouseOver = e.type === "mouseover" ? true : false;
      if (!e.target.classList.contains("cell")) return;
      const elements = getHoveredCells(e.target);
      if (elements.length < 0) return;
      elements.forEach((element) => {
        if (isMouseOver) element.classList.add("cell-hover");
        else element.classList.remove("cell-hover");
      });
    }

    function getHoveredCells(currentCell: HTMLInputElement) {
      const currentShip = player.board.presetShips[player.board.fleet.length];
      const orientation = "vertical";
      const cell = getCellElement(currentCell);

      if (
        !player.board.isValidPlacement(
          currentShip,
          cell.coordinates,
          orientation
        )
      )
        return [];

      return player.board
        .getPlacedCells(currentShip, cell.coordinates, orientation)
        .map((coordinate) =>
          document.querySelector(`[data-coordinate="${coordinate}"]`)
        )
        .filter((element) => element !== null);
    }
  }

  function playGame() {
    opponentBoard.container.addEventListener("click", handlePlayerAttack);

    function handlePlayerAttack(e: { target: HTMLInputElement }) {
      const cell = getCellElement(e.target);
      if (cell.value < 0) return;
      player.takeTurn(opponent, cell.coordinates);
      opponent.takeTurn(player);
      playerBoard.reloadBoard();
      opponentBoard.reloadBoard();

      if (player.board.detectGameOver() || opponent.board.detectGameOver()) {
        console.log("Game over!");
        setGame("end");
      }
    }
  }

  function endGame() {
    const isPlayerWinner = opponent.board.detectGameOver();
    let message: string;
    if (isPlayerWinner) message = "You win!";
    else message = "You lose :(";
    console.log(message);
  }

  function getCellElement(element: HTMLInputElement) {
    const value = parseInt(element.getAttribute("data-value"));
    const coordinatesString = element
      .getAttribute("data-coordinate")
      .split(",");
    const coordinates = [
      parseInt(coordinatesString[0]),
      parseInt(coordinatesString[1]),
    ];
    return { element, value, coordinates };
  }
}

export { game };
