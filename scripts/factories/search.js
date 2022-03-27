// Qu'est-ce que $search ? search() ?
// Comment avoir de la visibilité par exemple sur getRecipesByTags ? 
// Mettre en place la fonction search() dans main.js ?

export const search = ($recipes, $tags) => { // 3e argument $searchInput pour f° getRecipesBySearchInput
    

    const recipesAfterTagFilter = getRecipesByTags($recipes, $tags); // liste de recettes réduites  // [] de recettes triées par tag
    //const recipesAfterSearchInput = getRecipesBySearchInput(recipesAfterTagFilter, $search); // [] de recettes triées par texte
    
    // recipesAfterSearchInput ===> liste de recettes finales
    // si recipesAfterSearchInput.length === 0 =>> afficher un message "Pas de résultat"
    // sinon affichage ==> displayRecipes(recipesAfterSearchInput); // map/filter des deux [] pour créer un [] prêt à afficher 
};

const getRecipesByTags = ($recipes, $tags) => {
   console.log("Search déclenché")

    // nous renvoyer une liste de recette qui ont les tags sélectionnés
    if ($tags.length === 0) {
        return $recipes;
    }

    const newRecipes = [];
    $recipes.forEach(recipe => {
        console.log(recipe.ingredients);
        let containsTags = true;
        
        /* 
        $tags.forEach(tag => { // si tag.attribute (pex appliance), alors recherche dans appliance, si ingredients, chercher dans ingredients etc. // { donc ? pex tag.attribute (appliance) présent dans recipes.appliance ? etc. 
            // si le tag n'est pas dans la recette "recipe" => containsTags = false;
            /////

        })
        if (containsTags === true) {
            newRecipes.push(recipe);
        }

 */    });
    return newRecipes; // []

};


const getRecipesBySearchInput = ($recipes, $search) => {
    // document.querySelector('#searchInput').value
    const newRecipes = []; // 2è [], à return à la fin 
    $search.addEventListener('keyup', (e) => {
        if ($search.length === 0) {
            return $recipes;
        }
    })
    
    // nous renvoyer une liste de recette qui correspondent à ce qui a été tapé dans le champs => par rapport au nom des recettes
    // (identique à ce qui a été fait dans la recherche de tags)
    // ex: Limo ===> Limonade, Limousine
    // return $recipes.filter(recipe => recipe.name.includes($search));
};

const displayRecipes = ($recipes) => { // cf. fin de search()
    // affichage
    // Node 
    // bootstrap 

};






/* // Original 
import { 
    recipes // array with recipes 
  } from "./data/recipes.js";

export const search = ($tags, $search) => {
    // document.querySelector('#searchInput').value
    const recipesAfterTagFilter = getRecipesByTags(recipes, $tags); // liste de recettes réduites
    const recipesAfterSearchInput = getRecipesBySearchInput(recipesAfterTagFilter, $search);
    // recipesAfterSearchInput ===> liste de recettes finales
    // si recipesAfterSearchInput.length === 0 =>> afficher un message "Pas de résultat"
    // sinon affichage ==> displayRecipes(recipesAfterSearchInput);
};

const getRecipesByTags = ($recipes, $tags) => {
    // nous renvoyer une liste de recette qui ont les tags sélectionnés
    if ($tags.length === 0) {
        return $recipes;
    }
    const newRecipes = [];
    $recipes.forEach(recipe => {
        let containsTags = true;
        $tags.forEach(tag => {
            // si le tag est pas dans la recette "recipe" => containsTags = false;
        })
        if (containsTags === true) {
            newRecipes.push(recipe);
        }
    });
    return newRecipes;
};

const getRecipesBySearchInput = ($recipes, $search) => {
    if ($search.length === 0) {
        return $recipes;
    }
    // nous renvoyer une liste de recette qui correspondent à ce qui a été tappé dans le champs => par rapport au nom des recettes
    // (identique à ce que t'as fait dans la recherche de tags)
    // ex: Limo ===> Limonade, Limousine
    // return $recipes.filter(recipe => recipe.name.includes($search));
};

const displayRecipes = ($recipes) => {
    // affichage
};
 */