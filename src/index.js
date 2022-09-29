import './style.css'
let content = document.querySelector('#content');
let header = document.createElement('div');

header.classList.add('header');
header.innerText = 'The Restaraunt'

content.appendChild(header);

let tabContainer = document.createElement('div');
let homeBtn = document.createElement('button');
let aboutBtn = document.createElement('button');
let contactBtn = document.createElement('button');

homeBtn.textContent = "Home";
aboutBtn.textContent = "About";
contactBtn.textContent = "Contact";

tabContainer.appendChild(homeBtn);
tabContainer.appendChild(aboutBtn);
tabContainer.appendChild(contactBtn);

content.appendChild(tabContainer);