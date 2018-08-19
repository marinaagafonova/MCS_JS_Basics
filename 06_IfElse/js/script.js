console.log('You are at '+window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt("How old are you?");
answe = parseInt(answer);

if (answer < 18) {
	Image.style.backgroundImage = "url(img/school.jpg)";
}
else if(answer <= 25) {
	Image.style.backgroundImage = "url(img/party.png)";
}
else if(answer <= 50) {
	Image.style.backgroundImage = "url(img/pub.png)";
}
else {
	Image.style.backgroundImage = "url(img/home.jpg)";
}