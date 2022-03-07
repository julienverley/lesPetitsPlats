import { recipes } from "./recipes.js";
//console.log(recipes);

/* const buildtags = () => {
}
buildtags();  */

/* let i; 
for (i = 0; i < recipes.length; i++) {
    console.log(recipes[i].ingredients[0].ingredient); 
}  */

/* const ingredients = []; 
const appliance = []; // = appareil */ // Antoine

/* recipes.forEach(recipe => { // Antoine 
    recipe.ingredients.forEach(ingredient => {
        console.log(ingredient); // PB l'objet avec ingredient, quantity et unit
         if (ingredients.includes(ingredient.ingredient)) { // A revoir car doublons 
             console.log('EXISTE DEJA');
         } else {
             ingredients.push(ingredient.ingredient); 
         }
    })
})
console.log(ingredients); */

/* recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredientQuantityUnit => {
        
        console.log(ingredientQuantityUnit); // PB l'objet avec ingredient, quantity et unit
         if (ingredients.includes(ingredientQuantityUnit.ingredient)) { // A revoir car doublons 
             console.log('EXISTE DEJA');
         } else {
             ingredients.push(ingredientQuantityUnit.ingredient); 
         }
    })
})
console.log(ingredients);
 */

function onlyUnique (value, index, self) {
    return self.indexOf(value) === index
}

function getIngredients (recipes) {
    const totalIngredients = []
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(object => totalIngredients.push(object.ingredient))
    })
    const filteredIngredients = totalIngredients.filter(onlyUnique)
    filteredIngredients.sort((a, b) => a.localeCompare(b))
    return filteredIngredients
}

export { getIngredients }
