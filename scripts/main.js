// Functions are called and used here

// IMPORTS

import { displayIngredients, displayAppliances, displayUstensils } from "./displays/listboxs.js";
import { getIngredients, getAppliances, getUstensils } from "./factories/tags.js";
import { recipes } from "./data/recipes.js";

// VARIABLES

// Listboxs lists nodes
// $listboxList (f° displayIngredients-Appliances-Ustensils)
const listboxIngredientsList = document.getElementById("ingredients-list")
const listboxAppliancesList = document.getElementById("appliances-list")
const listboxUstensilsList = document.getElementById("ustensils-list")

// Listboxs buttons nodes
const listboxIngredientsBtn = document.getElementById('ingredients-btn')
const listboxAppliancesBtn = document.getElementById('appliances-btn')
const listboxUstensilsBtn = document.getElementById('ustensils-btn')

// EVENTS 

// Listboxs buttons click events
listboxIngredientsBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.id == 'ingredients-btn') {
        displayIngredients(recipes, getIngredients, listboxIngredientsList);
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

