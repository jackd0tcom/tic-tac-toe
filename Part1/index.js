const board = Array(9).fill(null);

const play = (clickedId) => {
  let playerSpan = document.querySelector("#player");
  let clickedElement = document.getElementById(clickedId);

  clickedElement.innerText = playerSpan.innerText;

  const won = winner();
  if (won) {
    alert(`${won} is the winner!`);
  }

  const isBoardFull = board.every((square) => square !== null);
  if (isBoardFull) {
    alert("Cats game!");
  }

  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
  } else playerSpan.innerText = "X";

  board.splice(clickedId, 1, clickedElement.innerText);

  console.log(board);
};

let winner = () => {
  const lines = [
    // Horizontal lines
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical lines
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal lines
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
};
