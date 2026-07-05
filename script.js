let gameBoardDivs = document.querySelectorAll(".game > div");
let Gameboard = createGameboard();

const user1 = createPlayer("Yunus", "X");
const user2 = createPlayer("Computer", "Y");

gameBoardDivs.forEach(
	function (div) {
		div.addEventListener("click", () => {div.textContent = "X"})
	}
);









// Functions
function createPlayer(name, mark) {
	let score = 0;

	const getScore = () => score;
	const increaseScore = () => {
		score++;
	}; 
	return { name, mark, getScore, increaseScore };
}

function createGameboard() {
	let board = [
		"", "", "",
		"", "", "",
		"", "", ""
	];

	const putMark = (pos, mark) => {
		if (board[pos] != "")
			return (1);
		board[pos] = mark;
		return (0);
	};

	const printBoard = () => {
		for (let i = 0; i < 3; i++) {
			console.log(`${board[0+ 3*i]}   |   ${board[1+ 3*i]}   |   ${board[2 + 3*i]}`);
		}
	};

	const checkWin = () => {
		// Check rows
		for (let i = 0; i < 3; i++) {
			if (board[0 + 3*i] === "X" && board[1 + 3*i] === "X" && board[2 + 3*i] === "X")
				return ("X");
			if (board[0 + 3*i] === "O" && board[1 + 3*i] === "O" && board[2 + 3*i] === "O")
				return ("O");
		}
		// Check columns
		for (let i = 0; i < 3; i++) {
			if (board[i] === "X" && board[i + 3] === "X" && board[i + 6] === "X")
				return ("X");
			if (board[i] === "O" && board[i + 3] === "O" && board[i + 6] === "O")
				return ("O");
		}
		// Check crosses
		if (board[0] === "X" && board[4] === "X" && board[8] === "X")
			return ("X");
		if (board[0] === "O" && board[4] === "O" && board[8] === "O")
			return ("O");
		if (board[2] === "X" && board[4] === "X" && board[6] === "X")
			return ("X");
		if (board[2] === "O" && board[4] === "O" && board[6] === "O")
			return ("O");
		return ("");
	}
	return {putMark, printBoard, checkWin};
}