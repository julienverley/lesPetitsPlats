//import { getIngredients, getAppliances, getUstensils } from "../factories/tags.js";
//import { recipes } from "../data/recipes.js";

const displayIngredients = ($recipes, $getTags, $listboxList) => { // informative (red), $parameters
    document.getElementById("ingredients-list").textContent = $getTags($recipes) // cf. getIngredients()
    $listboxList.classList.remove('hidden')
}
function displayAppliances($recipes, $getTags, $listboxList) {
    document.getElementById('appliances-list').textContent = $getTags($recipes)
    $listboxList.classList.remove('hidden')
}
function displayUstensils($recipes, $getTags, $listboxList) {
    document.getElementById('ustensils-list').textContent = $getTags($recipes)
    $listboxList.classList.remove('hidden')
}

/* const displayTruc = (listID, customFunction ) => {
    document.getElementById(listID).textContent = customFunction(recipes)
    listboxList.classList.remove('hidden')
}

displayTruc('ingredients-list', getIngredients)
displayTruc('ingredients-list', getIngredients)
displayTruc('ingredients-list', getIngredients) */


export { displayIngredients, displayAppliances, displayUstensils }