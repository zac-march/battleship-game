export function loadGameOptions() {
  const playerBoard = document.querySelector(".game-message-container");
  const container = document.createElement("div");
  container.classList.add("game-options");
  playerBoard.append(container);

  loadRotationOption();

  function loadRotationOption() {
    const rotationCb = document.createElement("input");
    rotationCb.type = "checkbox";
    rotationCb.classList.add("hidden");
    rotationCb.id = "rotation-cb";
    rotationCb.name = "rotation-cb";

    const rotationLbl = document.createElement("label");
    rotationLbl.htmlFor = "rotation-cb";
    rotationLbl.textContent = "Rotation: Vertical";
    container.append(rotationCb, rotationLbl);

    rotationCb.addEventListener("change", function () {
      if (this.checked) {
        rotationLbl.textContent = "Rotation: Horizontal";
      } else {
        rotationLbl.textContent = "Rotation: Vertical";
      }
    });
  }
}
