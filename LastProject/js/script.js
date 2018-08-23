document.addEventListener("DOMContentLoaded", ready);
function ready() {
	form.onsubmit = function(e) {
	e.preventDefault();
	console.log('Submitted');
}
}

const APIKey = '099715979800997fed902c8c415868c1';
const city = 'Москва';
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
let xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();


class Person {
	constructor(name, happiness) {
		this.name = name;
		this.happiness = happiness;
	}
	hasCat() {
		return this.happiness++;
	}
	hasRest() {
		return this.happiness++;
	}
	hasMoney() {
		return this.happiness++;
	}
	isSunny() {
		if(xhr.status == 200) {
			let DATA = JSON.parse(xhr.responseText);
			//alert(DATA.main.temp - 273);
			if (15 < DATA.main.temp - 273) {
				this.happiness++;
			}
		}
		return this.happiness;
	}
}

var form = document.querySelector('form');
const inputname = document.querySelector('.personName');
const icon = document.querySelector('.icon');
const cat = document.getElementsByName('cat');
const rest = document.getElementsByName('rest');
const money = document.getElementsByName('money');

form.addEventListener("submit", function(event) {
	const name = document.getElementsByName('name')[0];
    const person = new Person(name, 0);
	if(cat[0].checked) {person.hasCat()}
	if(rest[0].checked) {person.hasRest()}
	if(money[0].checked) {person.hasMoney()}
	person.isSunny();
	inputname.innerHTML = name.value;
	if(person.happiness == 4) { icon.innerHTML = "😁";}
	else if(person.happiness == 3 || person.happiness==2) { icon.innerHTML = "😐"}
	else { icon.innerHTML = "☹️"}
  });