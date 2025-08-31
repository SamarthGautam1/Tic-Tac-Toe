const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
cells.forEach(cell=>{
    ell.addEventListener("click", () => {
    if (cell.textContent !== "") return;
    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
})