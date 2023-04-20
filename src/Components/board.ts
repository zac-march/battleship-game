import { Player } from "../Classes/Player";
import * as Hit from "../images/fire.svg";
import * as Miss from "../images/splash.svg";

export function boardComponent(participant: Player) {
  const boardSize = participant.board.boardArr.length;

  const container = document.createElement("div");
  refresh();

  function refresh() {
    container.innerHTML = "";
    const boardContent = loadBoardContent();
    container.appendChild(boardContent);
  }

  function loadBoardContent() {
    const boardGrid = document.createElement("div");
    boardGrid.style.gridTemplateColumns = `repeat(${boardSize}, 1fr`;
    boardGrid.className = "board";

    for (let i = 0; i < boardSize * boardSize; i++) {
      let cell = document.createElement("div");
      cell.className = "cell";

      const coordinate = [Math.floor(i / boardSize), i % boardSize];
      const cellValue = participant.board.getCell(coordinate).toString();
      cell.dataset.coordinate = coordinate.toString();
      cell.dataset.value = cellValue;

      if (participant.board.isCellShip(coordinate)) {
        if (!participant.isOpponent || cellValue == "-1") {
          const cellColour = getShipColour(coordinate);
          cell.style.backgroundColor = cellColour;
        }
      }

      if (participant.board.isCellHit(coordinate)) {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("attack-image");
        let imageSrc: string;
        if (cellValue == "-1") {
          imageSrc = `url(${Hit})`;
          imageContainer.classList.add("hit-image");
        } else if (cellValue == "-2") {
          imageSrc = `url(${Miss})`;
          imageContainer.classList.add("miss-image");
        }
        imageContainer.style.backgroundImage = imageSrc;
        cell.append(imageContainer);
      }

      boardGrid.appendChild(cell);
    }
    return boardGrid;
  }

  function getShipColour(coordinate: number[]) {
    const shipIndex = participant.board.getIndexOfShip(coordinate);
    const colour =
      ((200 - 100) / participant.board.presetShips.length) * shipIndex + 100;
    return `rgb(${colour}, ${colour}, ${colour})`;
  }

  return { container, refresh };
}
