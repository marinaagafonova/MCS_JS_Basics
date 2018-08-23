const APIKey = 'ebbb3bfc0df0bc847ed112a0b55dda40';
const city = 'London';
const url = 'https://samples.openweathermap.org/data/2.5/weather?q='+city+',uk&appid='+APIKey;

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();

if(xhr.status != 200) {
	console.log(xhr.status + '' + xhr.statusText);
}
else {
	let Data = JSON.parse(xhr.responseText);
	console.log(Data);
	document.write(Data.main.temp - 273);
}

