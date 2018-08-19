console.log('You are at '+window.location);

const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if (player == computer){
	alert("nobody");
}
else if (player == 0 || computer == 0) {
	if (player == 0) {
		if(computer == 1) {
			alert('player won');
		}
		else {
			alert('computer won');
		}
	}
	else {
		if(player == 1) {
			alert('computer won');
		}
		else {
			alert('player won');
		}
	}
}
else if (player == 1 || computer == 1) {
	if (player == 1) {
		if(computer == 2) {
			alert('player won');
		}
		else {
			alert('computer won');
		}
	}
	else {
		if(player == 2) {
			alert('computer won');
		}
		else {
			alert('player won');
		}
	}
}
else if (player == 2 || computer == 2) {
	if (player == 2) {
		if(computer == 0) {
			alert('player won');
		}
		else {
			alert('computer won');
		}
	}
	else {
		if(player == 0) {
			alert('computer won');
		}
		else {
			alert('player won');
		}
	}
}