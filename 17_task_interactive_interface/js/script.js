console.log('You are at '+window.location);

const button = document.querySelector('.request');
const block = document.querySelector('.popup');
const closeelem = document.querySelector('.closePopup');
const openm = document.querySelector('.openMenu');
const closem = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');

button.onclick = function(){
	block.style.display = 'flex';
}

closeelem.addEventListener('click', function(){
	block.style.display = 'none';
})

openm.addEventListener('click', function(){
	menu.style.left = 0;
})

closem.addEventListener('click', function(){
	menu.style.left = '-50vw';
})