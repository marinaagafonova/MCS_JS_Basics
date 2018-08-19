console.log('You are at '+window.location);

const background = prompt('Какой будет фон у страницы');
document.body.style.backgroundColor = background;

const text = prompt('Какой будет цвет текста на странице?');
const textcolorbyClass = document.getElementsByClassName('page');
for (var i=0; i<textcolorbyClass.length; ++i)
  textcolorbyClass[i].style.color=text;

const person = prompt('Как зовут человека, который вас вдохновляет?');
const firstBySelector = document.querySelector('span');
firstBySelector.innerHTML = person;

const pic = prompt('Введите адрес картинки');
const image = document.querySelector('img');
image.setAttribute('src', pic);

const quest = prompt('Введите текст страницы');
const bio = document.querySelector('p');
bio.innerHTML = quest;
// const shortBio = document.querySelector('.shortBio');
// ball.className += ' animated';