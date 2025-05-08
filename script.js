const sketchContainer = document.querySelector(".sketch-container");

const gridNumberButton = document.querySelector(".grid-numbers-button");

gridNumberButton.addEventListener("click", () => {
  let userGridInput = prompt("Enter how many grids do you want per side?", "");
  if (userGridInput <= 50) {
    let gridSize = 800 / userGridInput;
    let gridNumbers = 640000 / (gridSize * gridSize);

    for (let i = 1; i <= gridNumbers; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell", "cell-" + i);
      sketchContainer.appendChild(cell);
      cell.style.width = `${gridSize}px`;
      cell.style.height = `${gridSize}px`;
    }
  } else {
    alert("❗❗❗ONLY BELOW 50 ALLOWED ❗❗❗");
  }
});
