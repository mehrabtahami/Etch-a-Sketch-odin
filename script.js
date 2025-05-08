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
    gridNumberButton.textContent += ` : ${userGridInput}`;
    gridNumberButton.disabled = "true";

    // CHANGE GRID COLOR *** IT REMOVES COLOR BY SETTING IT's by setting color same as container BG ***
    const grids = document.querySelectorAll(".cell");
    grids.forEach((cell) => {
      cell.addEventListener("click", () => {
        if (
          cell.style.backgroundColor == "" ||
          cell.style.backgroundColor == null ||
          cell.style.backgroundColor == "var(--container-bg)"
        ) {
          cell.style.backgroundColor = "var(--cell-fill-color)";
        } else {
          cell.style.backgroundColor = "var(--container-bg)";
        }
      });
    });
    // *******

    // ADDING RESET BUTTON ****
    const resetButton = document.querySelector(".reset-button");
    resetButton.style.display = "block";
    gridNumberButton.style.display = "none";
    resetButton.addEventListener("click", () => {
      location.reload();
    });
    // ********** RESET BUTTON DONE
  } else {
    alert("❗❗❗ONLY BELOW 50 ALLOWED ❗❗❗");
  }
});
