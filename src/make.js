export default function makeHome(){
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
}
