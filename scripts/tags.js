import { recipes } from "./data/recipes.js";

/* const buildtags = () => {
    
}
buildtags();  */

function noDuplicates (value, index, self) { // A revoir 
    return self.indexOf(value) === index // A revoir 
}

function getIngredients (recipes) {
    const allIngredients = []
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(object => allIngredients.push(object.ingredient))
    })
    const noDuplicatesIngredients = allIngredients.filter(noDuplicates)
    noDuplicatesIngredients.sort((a, b) => a.localeCompare(b))
    console.table(noDuplicatesIngredients); // Modifier le .json ? 
    return noDuplicatesIngredients
}

function getAppliances (recipes) {
    const allAppliances = []
    recipes.forEach(recipe => {
        allAppliances.push(recipe.appliance)
    })
    const noDuplicatesAppliances = allAppliances.filter(noDuplicates)
    noDuplicatesAppliances.sort((a, b) => a.localeCompare(b))
    //console.table(noDuplicatesAppliances); // Modifier le .json ? 
    return noDuplicatesAppliances
}

function getUstensils (recipes) {
    const allUstensils = []
    recipes.forEach(recipe => recipe.ustensils.forEach(ustensil => allUstensils.push(ustensil)))
    const noDuplicatesUstensils = allUstensils.filter(noDuplicates)
    noDuplicatesUstensils.sort((a, b) => a.localeCompare(b))
    //console.table(noDuplicatesUstensils) // Modifier le .json ? 
    return noDuplicatesUstensils
}

getIngredients(recipes) // called to display in console.log
getAppliances(recipes) // called to display in console.log
getUstensils(recipes) // called to display in console.log

export { getIngredients, getAppliances, getUstensils } 

