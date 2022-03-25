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
    // nous renvoyer une liste de recette qui correspondent à ce qui a été tapé dans le champs => par rapport au nom des recettes
    // (identique à ce que t'as fait dans la recherche de tags)
    // ex: Limo ===> Limonade, Limousine
    // return $recipes.filter(recipe => recipe.name.includes($search));
};

const displayRecipes = ($recipes) => {
    // affichage
};