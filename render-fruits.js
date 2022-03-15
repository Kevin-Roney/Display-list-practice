import { fruits } from './fruits-list';

export function renderFruitEl() {
    const fruitEl = document.createElement('div');
    fruitEl.classList.add('fruit');
    return fruitEl;
}