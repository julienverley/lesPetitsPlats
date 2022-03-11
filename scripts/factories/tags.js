import { recipes } from "../data/recipes.js"; // Supprimable

/* const buildtags = () => {
}
buildtags();  */

const noDuplicates = ($value, $index, $self) => { // Callback à revoir
    return $self.indexOf($value) === $index // 
}

// Get tags
// $getTags (f° displays)
export const getIngredients = ($recipes) => {
    const allIngredients = []
    $recipes.forEach(recipe => {
        recipe.ingredients.forEach(object => allIngredients.push(object.ingredient))
    })
    const noDuplicatesIngredients = allIngredients.filter(noDuplicates)
    noDuplicatesIngredients.sort((a, b) => a.localeCompare(b))
    return noDuplicatesIngredients
}
// $getTags (f° displays)
export const getAppliances = ($recipes) => {
    const allAppliances = []
    $recipes.forEach(recipe => {
        allAppliances.push(recipe.appliance)
    })
    const noDuplicatesAppliances = allAppliances.filter(noDuplicates)
    noDuplicatesAppliances.sort((a, b) => a.localeCompare(b))
    return noDuplicatesAppliances
}
// $getTags (f° displays)
export const getUstensils = ($recipes) => {
    const allUstensils = []
    $recipes.forEach(recipe => recipe.ustensils.forEach(ustensil => allUstensils.push(ustensil)))
    const noDuplicatesUstensils = allUstensils.filter(noDuplicates)
    noDuplicatesUstensils.sort((a, b) => a.localeCompare(b))
    return noDuplicatesUstensils
}

// console.table(getIngredients(recipes)) // called to display in console.log
// console.table(getAppliances(recipes)) // called to display in console.log
//console.table(getUstensils(recipes)) // called to display in console.log


// Commment accéder pex aux ustensils du DOM ? 
// Quand comment où modifier l'apparence des ustensils dans la listbox ().class li) ? 

