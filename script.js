let gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]];



const user1 = createPlayer("Yunus", "X");
const user2 = createPlayer("Computer", "Y");

console.log(user1.name);
console.log(user2.mark);

// Functions
function createPlayer(name, mark) {
	return { name, mark };
}