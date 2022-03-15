export function renderDogsEl(dog) {
    const dogEl = document.createElement('div');
    const breedEl = document.createElement('h3');
    const furColorEl = document.createElement('p');
    const typeEl = document.createElement('p');

    dogEl.classList.add('dogs');
    
    breedEl.textContent = dog.breed;
    furColorEl.textContent = dog.furColor;
    typeEl.textContent = dog.type;

    dogEl.append(breedEl, furColorEl, typeEl);
    return dogEl;
}
