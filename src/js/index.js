import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const counter = document.querySelector('.glass__counter--js');
const addButton = document.querySelector('.button__add--js');
const removeButton = document.querySelector('.button__remove--js');

const key = new Date().toISOString().slice(0,10);

if (!(localStorage.getItem(key))) {
    counter.innerHTML = 0;
    localStorage.setItem(key, 0);
} else {
    counter.innerHTML = localStorage.getItem(key);
}

let glassNumber = localStorage.getItem(key);

addButton.addEventListener('click', () => {
    if (glassNumber < 99) {
        glassNumber++
        counter.innerHTML = glassNumber;
    }
    localStorage.setItem(key, glassNumber);
});

removeButton.addEventListener('click', () => {
    if (glassNumber > 0) {
        glassNumber--;
        counter.innerHTML = glassNumber;
    }
    localStorage.setItem(key, glassNumber);
})

// const lenght = localStorage.length;

// for (let i = 0; i < lenght; i++) {
//     let keyName = window.localStorage.key(i);
//     if (keyName.length < 11) {
//     console.log(keyName)
//     }
// }

// console.log(Date.parse(window.localStorage.key(2)));
// console.log(Date.parse(window.localStorage.key(3)));


// let dt = new Date();
// let month = dt. getMonth();
// let year = dt. getFullYear();
// let daysInMonth = new Date(year, month, 0). getDate();

// console.log(dt);
// console.log(month);
// console.log(year);
// console.log(daysInMonth);