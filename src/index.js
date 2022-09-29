import './style.css'
let content = document.querySelector('#content');
let header = document.createElement('div');

header.classList.add('header');
header.innerText = 'The Restaurant'

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
tabContainer.classList.add('tabContainer');
content.appendChild(tabContainer);

let main = document.createElement('div');
let home = document.createElement('div');
let homeImg = new Image();
homeImg.src = '../src/food.webp';
let homeText = document.createElement('div');
main.classList.add('main');
home.classList.add('home');
homeText.textContent = "welcome to the restaurant! image from freepik.com";
homeText.classList.add('homeText');
main.appendChild(home);
home.appendChild(homeImg);
home.appendChild(homeText);

content.appendChild(main);


function makeHome(){

}
