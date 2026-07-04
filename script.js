let Gameboard = createGameboard();

const user1 = createPlayer("Yunus", "X");
const user2 = createPlayer("Computer", "Y");


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

	const checkGameEnd = () => {
		if (board[0] === board[1] && board[0] != "")
	}
	return {putMark, printBoard};
}