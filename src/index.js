console.log('hello');
let content = document.querySelector('#content');
let header = document.createElement('div');

header.classList.add('header');
header.innerText = 'The Restaraunt'

content.appendChild(header);