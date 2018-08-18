let sum = prompt('сколько у вас с собой есть денег')
let apples = prompt('сколько вы купили яблок')
let bread = prompt('сколько вы купили батонов хлеба')
let appleprive = Number(apples)*Number(prompt('сколько стоит одно яблоко'))
let breadprice = Number(bread)*Number(prompt('сколько стоит один батон'))
let result = +sum > (breadprice+appleprive)
document.body.innerHTML = result