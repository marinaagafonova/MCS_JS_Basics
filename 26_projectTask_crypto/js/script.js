console.log('You are at '+window.location);

let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

const h1 = document.getElementsByTagName('h1');
const h2 = document.getElementsByTagName('h2');
const div = document.getElementsByTagName('div');

console.log(h2[2]);

function ready() {
	   for(let i = 0; i < crypto.length; i++)
		{
		 h1[i].innerHTML = crypto[i].name;
		 h2[i].innerHTML = crypto[i].price;
		 div[i].style.width = (crypto[i].price)+'px';
		}
}

document.addEventListener("DOMContentLoaded", ready);

