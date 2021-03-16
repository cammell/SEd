import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const text=document.querySelector(".editor");
const load=document.querySelector(".load");
const save=document.querySelector(".save");


load.addEventListener('click', event => {
    if(!localStorage.getItem('text')) {
        text.value = localStorage.getItem('text');
    }
})

save.addEventListener('click', event => {
    localStorage.setItem('text',text.value);
})
console.log(text);
console.log(load);
console.log(save);