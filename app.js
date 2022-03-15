// import functions and grab DOM elements

import { renderFruitEl } from './render-fruits.js';
import { renderDogsEl } from './render-dogs.js';
import { dogsList } from './dogs-list.js';
// initialize global state


const fruitListEl = document.querySelector('.fruit-list');
const fruitsEl = renderFruitEl();
fruitListEl.append(fruitsEl);

const doglistEl = document.querySelector('.dogs');

for (let dog of dogsList) {
    const dogsEl = renderDogsEl(dog);
    doglistEl.append(dogsEl);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
