import { getIngredients, getAppliances, getUstensils } from "../factories/tags"; 



const listboxList = document.querySelector('.listbox-list')
const listboxIngredientsBtn = document.getElementById('ingredients-btn')
const listboxAppliancesBtn = document.getElementById('appliances-btn')
const listboxUstensilsBtn = document.getElementById('ustensils-btn')

const displayIngredients = () => {
    document.getElementById('ingredients-list').textContent = getIngredients(recipes)
    listboxList.classList.remove('hidden')
}
function displayAppliances() {
    document.getElementById('appliances-list').textContent = getAppliances(recipes)
    listboxList.classList.remove('hidden')
}
function displayUstensils() {
    document.getElementById('ustensils-list').textContent = getUstensils(recipes)
    listboxList.classList.remove('hidden')
}

/* const displayTruc = (listID, customFunction ) => {
    document.getElementById(listID).textContent = customFunction(recipes)
    listboxList.classList.remove('hidden')
}

displayTruc('ingredients-list', getIngredients)
displayTruc('ingredients-list', getIngredients)
displayTruc('ingredients-list', getIngredients) */


listboxIngredientsBtn.addEventListener('click', (e) => {
    if (e.target.id == 'ingredients-btn') {
        displayIngredients(); 
        // displayTruc('ingredients-list', getIngredients)
    } else if (e.target.id == 'appliances-btn') {
        displayAppliances(); 
    } else if (e.target.id == 'ustensils-btn') {
        displayUstensils(); 
    }
})
