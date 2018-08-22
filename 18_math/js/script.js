console.log('You are at '+window.location);

function moduleSquare(num) {
	return Math.abs(num)/2;
}
console.log(moduleSquare(-3));
console.log(moduleSquare(3));

console.log(Math.floor(2.678));

console.log(Math.round(2.78));

console.log(Math.random());
console.log(Math.random()*(10-5)+5);
console.log(Math.floor(Math.random()*(10-5)+5));

function randowPow(num) {
	return Math.abs(Math.pow(num, Math.floor(Math.random()*(10-1)+1)));
}