import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const text=document.querySelector(".form__input");
const load=document.querySelector(".form__button-load");
const save=document.querySelector(".form__button-save");
const info=document.querySelector(".container__info");

function message(text) {
    console.log('function message was called, text value is: ' + text)
    info.innerText=text;
    info.classList.add("animation");
    window.setTimeout(animation => {
        
        info.innerText="";
        info.classList.remove("animation");
        
        }, 3000);
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


window.addEventListener('load', event => {
    
    if(localStorage.getItem('text')!=null) {
        
        
        message("There is a text saved, you can load it");
        
    } else {
        message("Local file is empty, there is no previous save");
    }
})