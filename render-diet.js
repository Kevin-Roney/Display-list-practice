export function squirrelsDietFunc(dietObj) {
    const dietTypeEl = document.createElement('div');
    const squirrelDietEl = document.createElement('h2');
    const dietEl = document.createElement('ul');

    dietTypeEl.classList.add('diet');
    
    squirrelDietEl.textContent = dietObj.type;
    for (let sqdiet of dietObj.diet) {
        const sqDietEl = document.createElement('li');
        sqDietEl.textContent = sqdiet;
        dietEl.append(sqDietEl);
    }
}