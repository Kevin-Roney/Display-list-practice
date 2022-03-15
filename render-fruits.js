import { fruits } from './fruits-list.js';

export function renderFruitEl() {
    const fruitEl = document.createElement('p');
    fruitEl.classList.add('fruit');
    fruitEl.textContent = fruits;
    return fruitEl;
}