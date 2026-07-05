// Start elements
const mainMenu = document.querySelector(".main-menu");
const playBtn = document.querySelector(".play");
const player1Input = document.querySelector("#player1");
const player2Input = document.querySelector("#player2");

// End elements
const resultCard = document.querySelector(".result-card");
const playAgainBtn = document.querySelector(".play-again");

// Other elements
const mainContainer = document.querySelector(".main-container");

// Result Board elements
const player1Name = document.querySelector(".player1-name");
const player2Name = document.querySelector(".player2-name");
const player1Score = document.querySelector(".player1-score");
const player2Score = document.querySelector(".player2-score");

playBtn.addEventListener("click", () => {
	playGame(player1Input.value, player2Input.value);
	mainMenu.style.display = "none";
	player1Name.textContent = player1Input.value;
	player2Name.textContent = player2Input.value;
});


playAgainBtn.addEventListener("click", () => {
	playGame();
	resultCard.style.display = "none";
	mainContainer.style.filter = "none";
});

// Functions
function playGame(player1Name, player2Name) {
	const user1 = createPlayer(player1Name, "X");
	const user2 = createPlayer(player2Name, "O");
	let Gameboard = createGameboard(user1, user2);
	Gameboard.renderBoard();
}

function createPlayer(name, mark) {
	let score = 0;

	const getScore = () => score;
	const increaseScore = () => {
		score++;
	}; 
	return { name, mark, getScore, increaseScore };
}

function createGameboard(user1, user2) {
	let board = [
		"", "", "",
		"", "", "",
		"", "", ""
	];

	let gameBoardDivs = document.querySelectorAll(".game > div");
	gameBoardDivs.forEach( function (div, pos) {
		div.addEventListener("click", () => {
			putMark(pos, "X");
		});
	});

	let markOrder = 0;
	let winner = "";

	const putMark = (pos, mark) => {
		if (board[pos] !== "" || winner !== "")
			return (1);
		if (markOrder === 0) {
			board[pos] = user1.mark;
			markOrder = 1;
		}
		else {
			board[pos] = user2.mark;
			markOrder = 0;
		}
		renderBoard();
		winner = checkWin();
		if (winner !== "") {
			console.log(`${winner} wins!`);
			mainContainer.style.filter = "blur(5px)";
			resultCard.style.display = "flex";
		}
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

	const renderBoard = () => {
		for (let i = 0; i < 9; i++) {
			gameBoardDivs[i].textContent = board[i];
		}
	}
	return {putMark, printBoard, renderBoard};
}