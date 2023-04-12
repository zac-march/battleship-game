import { Player } from "../Classes/Player";
import { Ship } from "../Classes/Ship";

function boardComponent(participant: Player) {
  const boardArray = participant.board.boardArr;
  const boardSize = boardArray.length;

  const container = document.createElement("div");
  reloadBoard();

  function reloadBoard() {
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

      if (participant.board.isCellOccupied(coordinate)) {
        const shipIndex: number = participant.board.getIndexOfShip(coordinate);
        const colour =
          ((200 - 100) / (participant.board.fleet.length - 1)) * shipIndex +
          100;
        const cellColour = `rgb(${colour}, ${colour}, ${colour})`;

        console.log("shipIndex:", shipIndex, "cellColour:", cellColour);
        if (cellValue == "-1") {
          cell.style.backgroundColor = cellColour;
          cell.textContent = "X";
        }
        // if (!participant.isOpponent && cellValue == "-1") {
        cell.style.backgroundColor = cellColour;
        // }
      } else if (cellValue == "-2") {
        cell.textContent = "O";
      }

      boardGrid.appendChild(cell);
    }
    return boardGrid;
  }
  return { container, reloadBoard };
}

export { boardComponent };
