console.log('You are at '+window.location);

const buttons = document.querySelectorAll('button');

for(button of buttons) {
	button.style.backgroundColor = 'lightblue';
}

// for(key in buttons) {
// 	buttons[key].style.backgroundColor = 'lightblue';
// }

let person = {
	name: 'Alex',
	surname:'Snow',
	teacher:false
}

for(key in person) {
	console.log(person[key]);
}