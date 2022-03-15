export function renderSquirrelEl(squirrelObj) {
    const squirrelEl = document.createElement('div');
    const typeEl = document.createElement('h2');
    const squirrelImgEl = document.createElement('img');
    const colorEl = document.createElement('p');
    const sizeEl = document.createElement('p');

    squirrelEl.classList.add('squirrels');
    typeEl.textContent = squirrelObj.type;
    squirrelImgEl.src = `./assets/${squirrelObj.type}.jpg`;
    colorEl.textContent = squirrelObj.color;
    sizeEl.textContent = `The length is ${squirrelObj.size.length}, and the weight is ${squirrelObj.size.weight}`;
    squirrelEl.append(typeEl, squirrelImgEl, colorEl, sizeEl);
    return squirrelEl;
}