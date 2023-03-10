const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

const darkModeClass = 'dark-mode';
// console.log(button);
//  console.log(body);

function changeMode(){
   //  console.log('cliquei')
   changeClasses();
   changeText(); 
}
function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}
function changeText(){
    const LightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = LightMode;
        h1.innerHTML =  darkMode + ": ON";
        return;   
    }
    button.innerHTML = darkMode;
    h1.innerHTML =  LightMode + ": ON";
}


button.addEventListener('click', changeMode);

