const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("resetBtn");
let currentPlayer = "X";
let gameActive = true;

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // cols
    [0,4,8], [2,4,6]           // diagonals
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      alert(`${cells[a].textContent} wins!`);
      return true;
    }
  }

  const isDraw = [...cells].every(cell => cell.textContent !== "");
  if (isDraw) {
    alert("It's a draw! 🤝");
    gameActive = false;
    return true;
  }

  return false;
}

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (!gameActive || cell.textContent !== "") return;

    cell.textContent = currentPlayer;

    if (!checkWinner()) {
      switchPlayer();
    }
  });
});

resetBtn.addEventListener("click", () => {
  cells.forEach(cell => (cell.textContent = ""));
  currentPlayer = "X";
  gameActive = true;
});
