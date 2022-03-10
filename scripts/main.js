// Dans le main.js, j'importe la logique et je fais fonctionner

import { displayIngredients, displayAppliances, displayUstensils } from "./displays/listboxs.js";
import { getIngredients, getAppliances, getUstensils } from "./factories/tags.js";
import { recipes } from "./data/recipes.js";

// Listboxs lists nodes
const listboxIngredientsList = document.getElementById("ingredients-list")
const listboxAppliancesList = document.getElementById("appliances-list")
const listboxUstensilsList = document.getElementById("ustensils-list")
// Listboxs buttons nodes
const listboxIngredientsBtn = document.getElementById('ingredients-btn')
const listboxAppliancesBtn = document.getElementById('appliances-btn')
const listboxUstensilsBtn = document.getElementById('ustensils-btn')

// Listbox click events
listboxIngredientsBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.id == 'ingredients-btn') {
        displayIngredients(recipes, getIngredients, listboxIngredientsList); 
        // displayTruc('ingredients-list', getIngredients)
    } 
})
listboxAppliancesBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.id == 'appliances-btn') {
        displayAppliances(recipes, getAppliances, listboxAppliancesList); 
    }
})
listboxUstensilsBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.id == 'ustensils-btn') {
        displayUstensils(recipes, getUstensils, listboxUstensilsList); 
    }
})


/* const callback = (e, $id, $function, $getTags) => {
    if (e.target.id == $id) {
        $function(recipes, $getTags, listboxList); 
    }
} */