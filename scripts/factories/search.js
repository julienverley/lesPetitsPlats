
export const search = ($recipes, $tags, $searchInput) => { // $searchInput getRecipesBySearchInput()
  const recipesAfterTagFilter = getRecipesByTags($recipes, $tags);
  // const removeRecipesByTags(recipesAfterTagFilter, $tags)
  console.log(recipesAfterTagFilter); ///////////////// J'obtiens les recettes cumulées des tags (pas les recettes des tags cumulés) /////////////////
  const recipesAfterSearchInput = getRecipesBySearchInput($recipes, $searchInput);
  console.log(recipesAfterSearchInput); // [] recettes triées par texte

  // recipesAfterSearchInput ===> liste de recettes finales
  // si recipesAfterSearchInput.length === 0 =>> afficher un message "Pas de résultat"
  // sinon affichage ==> displayRecipes(recipesAfterSearchInput); // map/filter des deux [] pour créer un [] prêt à afficher
};

const getRecipesByTags = ($recipes, $tags) => { // liste de recettes qui ont les tags sélectionnés
  console.table($tags); // OK [tag(s) sélectionné(s)]
  if ($tags.length === 0) {
    return $recipes;
  }

  const newRecipes = [];
  let containsTags = true; // pas utilisé 

  $tags.forEach((tag) => {
    // si le tag n'est pas dans la recette "recipe" => containsTags = false;
    if (tag.attribute === "appliances") {
      let tagApplianceName = tag.name;
      console.log(tagApplianceName); // Tags's name
      $recipes.filter((recipe) => {
        if (recipe.appliance.toLowerCase() === tagApplianceName.toLowerCase()) {
          if (!newRecipes.includes(recipe)) {
            newRecipes.push(recipe); // idem pour removeRecipesByTags : newRecipes... remove removed tag's recipe
          }
        }
      });
    } if (tag.attribute === "ustensils") {
      let tagUstensilName = tag.name;
      console.log(tagUstensilName); // Tags's name
      $recipes.filter((recipe) => {
        if (recipe.ustensils.includes(tagUstensilName)) {
          if (!newRecipes.includes(recipe)) {
            newRecipes.push(recipe);
          }
        }
      }); 
    } if (tag.attribute === "ingredients") {
      let tagIngredientName = tag.name;
      console.log(tagIngredientName); // Tags's name
      $recipes.filter((recipe) =>
        recipe.ingredients.forEach((object) => {
          if (object.ingredient.toLowerCase() === tagIngredientName) {
            if (!newRecipes.includes(recipe)) {
              newRecipes.push(recipe);
            }
          }
        })
      );
    }
  });
        /* if (containsTags === true) {
            newRecipes.push(recipe);
        }*/

  /////////////////// A faire : tri avec seulement les recettes contenant plusieurs tags ///////////////////

  
  return newRecipes;
};

// CF. YT JavaScript Search Bar Harry Potter
const getRecipesBySearchInput = ($recipes, $searchInput) => { // main.js document.querySelector('#search-input')...
  const newRecipes = []; 

  console.log($searchInput);
  if ($searchInput.length === 0) { ////////////// Erreur au tag ///////////////
    return $recipes;
  }
  
  if ($searchInput.length >= 3) {
    console.log("Dans le search input :", $searchInput)

    
    // Ingredients search
    $recipes.filter((recipe) =>
    recipe.ingredients.forEach((object) => {
      const objectIngredient = object.ingredient.toLowerCase()
      //console.log(objectIngredient);
      if (objectIngredient.includes($searchInput)) { 
        if (!newRecipes.includes(recipe)) {
          newRecipes.push(recipe)
          //console.log(newRecipes); ///////////// J'obtiens le nombre de correspondances //////////
        }
      }
    })); 

    // Recipe name search
    $recipes.filter((recipe) => {
      const recipeName = recipe.name.toLowerCase()
      //console.log(recipeName);
      if (recipeName.includes($searchInput)) { 
        if (!newRecipes.includes(recipe)) {
          console.log(newRecipes.push(recipe)); ///////////// J'obtiens le nombre de correspondances //////////
        }
      }
    });

    // Description search
    $recipes.filter((recipe) => {
      const recipeDescription = recipe.description.toLowerCase()
      //console.log(recipeDescription);
      if (recipeDescription.includes($searchInput)) { 
        if (!newRecipes.includes(recipe)) {
          console.log(newRecipes.push(recipe)); ///////////// J'obtiens le nombre de correspondances //////////
        }
      }
    });

  }
  // nous renvoyer une liste de recette qui correspondent à ce qui a été tapé dans le champs => par rapport au #titre de la recette, liste des #ingrédients et #description 
  // (identique à ce qui a été fait dans la recherche de tags)
  // ex: Limo ===> Limonade, Limousine
  // return $recipes.filter(recipe => recipe.name.includes($search));
  return newRecipes; 
};

const displayRecipes = ($recipes) => {
  // cf. fin de search()
  // affichage
  // Node
  // bootstrap
};