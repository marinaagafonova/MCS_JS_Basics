console.log('You are at '+window.location);

var a = 'Hi';

funtion myFunc() {
	a = 'Hello';
	return a;
}

console.log(a);

function myFunc2() {
	var b = 3;
	console.log(b);
}

myFunc2();

if(true) {
	var c = 5; //global
	let e = 8; //only in block
}

console.log(c);
console.log(e); //error