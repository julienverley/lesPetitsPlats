//import { getIngredients, getAppliances, getUstensils } from "../factories/tags.js";
// import { recipes } from "../data/recipes.js";


// Displays fonctions 
export const displayIngredients = ($recipes, $getTags, $listboxList) => { // informative (red), $parameters
    document.getElementById("ingredients-list").textContent = $getTags($recipes) // cf. getIngredients()
    $listboxList.classList.remove('hidden')
}
export const displayAppliances = ($recipes, $getTags, $listboxList) => {
    document.getElementById('appliances-list').textContent = $getTags($recipes)
    $listboxList.classList.remove('hidden')
}
export const displayUstensils = ($recipes, $getTags, $listboxList) => {
    document.getElementById('ustensils-list').textContent = $getTags($recipes)
    $listboxList.classList.remove('hidden')
}

