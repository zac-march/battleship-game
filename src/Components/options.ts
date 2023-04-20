export function loadGameOptions() {
  const container = document.querySelector(".game-message-container");
  const gameOptions = document.createElement("div");
  gameOptions.classList.add("game-options");
  container.append(gameOptions);

  function loadEndOptions() {
    clearOptions();
    const resetButton = document.createElement("button");
    resetButton.classList.add("reset-btn");
    resetButton.textContent = "Reset";
    gameOptions.append(resetButton);
  }

  function loadSetupOptions() {
    clearOptions();
    const rotationCb = document.createElement("input");
    rotationCb.type = "checkbox";
    rotationCb.classList.add("hidden");
    rotationCb.id = "rotation-cb";
    rotationCb.name = "rotation-cb";

    const rotationLbl = document.createElement("label");
    rotationLbl.htmlFor = "rotation-cb";
    rotationLbl.textContent = "Rotation: Vertical";
    gameOptions.append(rotationCb, rotationLbl);

    rotationCb.addEventListener("change", function () {
      if (this.checked) {
        rotationLbl.textContent = "Rotation: Horizontal";
      } else {
        rotationLbl.textContent = "Rotation: Vertical";
      }
    });
  }

  function clearOptions() {
    gameOptions.innerHTML = "";
  }

  return { loadEndOptions, loadSetupOptions, clearOptions };
}
