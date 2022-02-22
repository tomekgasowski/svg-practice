import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const counter = document.querySelector('.glass__counter--js');
const addButton = document.querySelector('.button__add--js');
const removeButton = document.querySelector('.button__remove--js');

let glassNumber = ''

addButton.addEventListener('click', () => {
    if (glassNumber < 99) {
        glassNumber++
        counter.innerHTML = glassNumber;
    }
});

removeButton.addEventListener('click', () => {
    if (glassNumber > 0) {
        glassNumber--;
        counter.innerHTML = glassNumber;
    }
})
