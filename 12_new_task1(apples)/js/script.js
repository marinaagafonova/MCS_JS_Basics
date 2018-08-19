let sum = prompt('сколько у вас с собой есть денег')
let apples = prompt('сколько вы купили яблок')
let bread = prompt('сколько вы купили батонов хлеба')
let appleprive = Number(apples)*Number(prompt('сколько стоит одно яблоко'))
let breadprice = Number(bread)*Number(prompt('сколько стоит один батон'))

let myText = (element, money, products) => {
	let result = money >= products; 
	if (result) {
		element.innerHTML = 'Вам хватает денег на покупки';
	}
	else {
		element.innerHTML = 'Вам не хватает денег';
	}
}

myText(document.body, +sum, breadprice+appleprive);