import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const text=document.querySelector(".container__input");
const load=document.querySelector(".container__button-load");
const save=document.querySelector(".container__button-save");
const info=document.querySelector(".container__info");

function message(text) {
    console.log('function message was called, text value is: ' + text)
    info.innerText=text;
}

load.addEventListener('click', event => {
    
    if(localStorage.getItem('text')!=null) {
        
        text.value=localStorage.getItem('text');
        message("Saved text have been just loaded");
        
    }
})

save.addEventListener('click', event => {
    
    localStorage.setItem('text',text.value);
    message("Text have been saved in local storage");
})


