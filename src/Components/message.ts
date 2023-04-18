export function loadGameMessage() {
  const main = document.querySelector("main");
  const container = document.createElement("div");
  container.classList.add("game-message-container");
  main.append(container);

  const gameStateMessage = document.createElement("p");
  gameStateMessage.id = "game-message";
  container.append(gameStateMessage);
}
