
export const search = ($recipes, $tags, $searchInput) => { // $searchInput getRecipesBySearchInput()
  const recipesAfterTagFilter = getRecipesByTags($recipes, $tags);
  // const removeRecipesByTags(recipesAfterTagFilter, $tags)
  console.log(recipesAfterTagFilter); // J'obtiens les recettes cumulées des tags (pas les recettes des tags cumulés)
  const recipesAfterSearchInput = getRecipesBySearchInput($recipes, $searchInput); // [] recettes triées par texte

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
  return newRecipes;
};

// CF. YT JavaScript Search Bar Harry Potter
const getRecipesBySearchInput = ($recipes, $searchInput) => { // 3 caractères
  // ($recipes, $search)
  // document.querySelector('#searchInput').value
  const newRecipes = []; // 2è [], à return à la fin
   //console.log(e.target.keyValue);
   if ($searchInput.length === 0) {
    return $recipes;
  }
   if ($searchInput.length >= 3) {
    console.log('Tu cherches dans  le input', $searchInput)
  }
  // nous renvoyer une liste de recette qui correspondent à ce qui a été tapé dans le champs => par rapport au nom des recettes
  // (identique à ce qui a été fait dans la recherche de tags)
  // ex: Limo ===> Limonade, Limousine
  // return $recipes.filter(recipe => recipe.name.includes($search));
};

const displayRecipes = ($recipes) => {
  // cf. fin de search()
  // affichage
  // Node
  // bootstrap
};