console.log('You are at '+window.location);

const cools = document.getElementsByClassName('cool');
console.log(cools);

cools[0].innerHTML = "First"; 

const coolsv2 = document.getElementsByTagName('div');
const coolsv3 = document.querySelectorAll('.cool');