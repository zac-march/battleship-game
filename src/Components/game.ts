import { Player } from "../Classes/Player";
import { PlayerAI } from "../Classes/PlayerAI";
import { boardComponent } from "./board";

function game() {
  const gameStateMessage = document.querySelector("#game-message");
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
    gameStateMessage.textContent = "Setup you fleet!\n";
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
      const orientation = getOrientation();
      const cell = getCellData(e.target);
      const shipIndex = player.board.fleet.length;

      if (cell.value != 0) return;

      const currentShip = player.board.presetShips[shipIndex];

      const isValid = player.board.isValidPlacement(
        currentShip,
        cell.coordinates,
        orientation
      );

      if (!isValid) return;

      player.board.placeShip(currentShip, cell.coordinates, orientation);
      playerBoard.reloadBoard();

      if (player.board.fleet.length >= player.board.presetShips.length) {
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

    function getOrientation() {
      const rotationCb = document.querySelector(
        "#rotation-cb"
      ) as HTMLInputElement;
      if (rotationCb.checked) {
        return "horizontal";
      } else return "vertical";
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
      const orientation = getOrientation();
      const cell = getCellData(currentCell);

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
    gameStateMessage.textContent = "Attack the enemy!";
    opponentBoard.container.addEventListener("click", handlePlayerAttack);

    function handlePlayerAttack(e: { target: HTMLInputElement }) {
      const cellData = getCellData(e.target);
      if (cellData.value < 0) return;

      player.takeTurn(opponent, cellData.coordinates);
      opponentBoard.reloadBoard();

      if (player.lastAttackSuccess) {
        const cellElement = getCellElement(
          cellData.coordinates,
          opponentBoard.container
        );
        handleShakeEffect(cellElement);
      }

      setTimeout(() => {
        opponent.takeTurn(player);
        playerBoard.reloadBoard();
        if (opponent.lastAttackSuccess) {
          const cellElement = getCellElement(
            opponent.lastAttackedCell,
            playerBoard.container
          );
          handleShakeEffect(cellElement);
        }
      }, Math.random() * (1200 - 300) + 300);

      function handleShakeEffect(element: HTMLElement) {
        element.classList.add("shake");
        setTimeout(() => element.classList.remove("shake"), 500);
      }

      if (player.board.detectGameOver() || opponent.board.detectGameOver()) {
        opponentBoard.container.removeEventListener(
          "click",
          handlePlayerAttack
        );
        setGame("end");
      }
    }
  }

  function endGame() {
    let message: string;
    message = opponent.board.detectGameOver() ? "You win!" : "You lose :(";
    gameStateMessage.textContent = "Game over!\n" + message;
  }

  function getCellElement(coordinates: number[], boardContainer: any) {
    return boardContainer.querySelector(`[data-coordinate="${coordinates}"]`);
  }
  function getCellData(element: HTMLInputElement) {
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
