import { Player } from "../Classes/Player";

function boardComponent(player: Player) {
  const boardArray = player.board.boardArr;
  const boardSize = boardArray.length;

  const boardContainer = document.createElement("div");
  reloadBoard();

  function reloadBoard() {
    boardContainer.innerHTML = "";
    const boardGrid = loadBoardContent();
    boardContainer.appendChild(boardGrid);
  }

  function loadBoardContent() {
    const boardGrid = document.createElement("div");
    boardGrid.style.gridTemplateColumns = `repeat(${boardSize}, 1fr`;
    boardGrid.className = "board";

    for (let i = 0; i < boardSize * boardSize; i++) {
      let cell = document.createElement("div");
      cell.className = "cell";

      const coordinate = [Math.floor(i / boardSize), i % boardSize];
      const cellValue = player.board.getCell(coordinate).toString();
      cell.dataset.coordinate = coordinate.toString();
      cell.dataset.value = cellValue;

      if (cellValue == "1" || cellValue == "-1")
        cell.style.backgroundColor = `#ff9888`;
      if (cellValue == "-1") cell.textContent = "X";
      else if (cellValue == "-2") cell.textContent = "O";

      cell.addEventListener("click", () => {
        if (player.board.getCell(coordinate) > -1)
          player.board.recieveAttack(coordinate[0], coordinate[1]);
        reloadBoard();
      });

      boardGrid.appendChild(cell);
    }
    return boardGrid;
  }
  return boardContainer;
}

export { boardComponent };
