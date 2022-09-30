import './style.css'
import makeHome from './make.js'
//header
let content = document.querySelector('#content');
let header = document.createElement('div');
header.classList.add('header');
header.innerText = 'The Restaurant'
content.appendChild(header);

//tabs initialization
let tabContainer = document.createElement('div');
let homeBtn = document.createElement('button');
let aboutBtn = document.createElement('button');
let contactBtn = document.createElement('button');
homeBtn.textContent = "Home";
aboutBtn.textContent = "About";
contactBtn.textContent = "Contact";


//handling tab actions
function setActive(){
    if (homeBtn.classList.contains('activeBtn')){
        homeBtn.classList.remove('activeBtn')
    };
    if (aboutBtn.classList.contains('activeBtn')){
        aboutBtn.classList.remove('activeBtn')
    };
    if (contactBtn.classList.contains('activeBtn')){
        contactBtn.classList.remove('activeBtn')
    };


    this.classList.add('activeBtn');
    if (this == aboutBtn){
        clearMain();
        makeAbout();
    }
    if (this == homeBtn){
        clearMain();
        makeHome();
    }
    if (this == contactBtn){
        clearMain();
        makeHome();
    }
}

homeBtn.addEventListener('click', setActive);
aboutBtn.addEventListener('click', setActive);
contactBtn.addEventListener('click', setActive);

tabContainer.appendChild(homeBtn);
tabContainer.appendChild(aboutBtn);
tabContainer.appendChild(contactBtn);
tabContainer.classList.add('tabContainer');
content.appendChild(tabContainer);

//container for home,about,contact tabs
let main = document.createElement('div');

//Add to module and make 2 similar
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

//reset to ready for tab change
function clearMain(){
    if (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}


