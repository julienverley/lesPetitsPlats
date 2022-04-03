import {
  getIngredients,
  getAppliances,
  getUstensils,
  createListboxsLists,
} from "./buildListboxs.js";
import { handleTagClick } from '../main.js' 

const listboxIngredientsList = document.getElementById("ingredients-list")
const listboxAppliancesList = document.getElementById("appliances-list")
const listboxUstensilsList = document.getElementById("ustensils-list")

export const search = ($recipes, $tags) => { // $searchInput getRecipesBySearchInput()
  const searchInput = document.getElementById("search-input").value.toLowerCase() // Avant, dans main.js
  const recipesAfterTagFilter = getRecipesByTags($recipes, $tags);
  console.log('result tags', recipesAfterTagFilter);
  const recipesAfterSearchInput = getRecipesBySearchInput(recipesAfterTagFilter, searchInput);
  console.log('finalResult', recipesAfterSearchInput);

  createListboxsLists(recipesAfterSearchInput, getIngredients, listboxIngredientsList, "ingredients", $tags);
  createListboxsLists(recipesAfterSearchInput, getAppliances, listboxAppliancesList, "appliances", $tags); 
  createListboxsLists(recipesAfterSearchInput, getUstensils, listboxUstensilsList, "ustensils", $tags); 
  handleTagClick(listboxIngredientsList); // addEventlistener à l'écoute en global 
  handleTagClick(listboxAppliancesList);
  handleTagClick(listboxUstensilsList);
  
  displayRecipes(recipesAfterSearchInput);

  // recipesAfterSearchInput ===> liste de recettes finales
  // si recipesAfterSearchInput.length === 0 =>> afficher un message "Pas de résultat"
  // sinon affichage ==> displayRecipes(recipesAfterSearchInput); // map/filter des deux [] pour créer un [] prêt à afficher
};

const getRecipesByTags = ($recipes, $tags) => { // liste de recettes qui ont les tags sélectionnés
  if ($tags.length === 0) {
    return $recipes;
  }
  const newRecipes = [];
  $recipes.forEach((recipe) => { // $recipes.forEach
    let containsAllTags = true;
    $tags.forEach((tag) => {
      const tagName = tag.name;
      let containsIngredientTag = false;
      if (tag.attribute === "appliances") {
        if (recipe.appliance.toLowerCase() !== tagName.toLowerCase()) {
          containsAllTags = false;
        }
      } else if (tag.attribute === "ustensils") {
        if (!recipe.ustensils.includes(tagName)) {
          containsAllTags = false;
        }
      } else if (tag.attribute === "ingredients") {
        recipe.ingredients.forEach((object) => {
          if (object.ingredient.toLowerCase() === tagName) {
            containsIngredientTag = true;
          }
        });
        if (containsIngredientTag === false) {
          containsAllTags = false;
        }
      }
    })
    if (containsAllTags) {
      newRecipes.push(recipe);
    }
  });
  return newRecipes;
};

const getRecipesBySearchInput = ($recipes, $searchInput) => { // main.js document.querySelector('#search-input')...
  const newRecipes = []; 
  if ($searchInput.length < 3) { 
    return $recipes;
  }
  if ($searchInput.length >= 3) {
    // Ingredients search
    $recipes.filter((recipe) =>
    recipe.ingredients.forEach((object) => {
      const objectIngredient = object.ingredient.toLowerCase()
      //console.log(objectIngredient);
      if (objectIngredient.includes($searchInput)) { 
        if (!newRecipes.includes(recipe)) {
          newRecipes.push(recipe)
        }
      }
    })); 
    // Recipe name search
    $recipes.filter((recipe) => {
      const recipeName = recipe.name.toLowerCase()
      //console.log(recipeName);
      if (recipeName.includes($searchInput)) { 
        if (!newRecipes.includes(recipe)) {
          newRecipes.push(recipe); // console.log(newRecipes.push(recipe));
        }
      }
    });
    // Description search
    $recipes.filter((recipe) => {
      const recipeDescription = recipe.description.toLowerCase()
      //console.log(recipeDescription);
      if (recipeDescription.includes($searchInput)) { 
        if (!newRecipes.includes(recipe)) {
          newRecipes.push(recipe);
        }
      }
    });
  }
  return newRecipes; 
};




const displayRecipes = (recipesAfterSearchInput) => { // avant $recipes
  const cardNode = document.querySelector('.card'); 
  console.log(cardNode); // OK
  // soit 1 ou plus => affichage
  // 0 => "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
 
  const createFactoryCard = (recipeAfterSearchInput) => {
    const {
      name, time, ingredients, description
    } = recipeAfterSearchInput; // not defined 

    const card = document.createElement('card')
    // card.classList.add('card') // class déjà existante 

    const createCardDom =
    `<div class="card-header"></div>
    <div class="card-body">
      <div class="card-body-top">
        <h6 class="card-title">{name}</h6>
        <h6> <i class="bi bi-clock"></i> {time} </h6>
      </div>
      <div class="card-body-bottom">
        <div class="recipe-ingredients">
          <li class="ingredient-quantity-unit">{ingredient} : {quantity} {unit}</li>
        </div>
        <p class="recipe-text card-text">{description}</p>
      </div>
    </div>`

    card.innerHTML = createCardDom; 
    return card; 
    
  }


  if (recipesAfterSearchInput.length >= 1) {
    console.log(recipesAfterSearchInput);
    console.log(recipesAfterSearchInput.length);
   
    recipesAfterSearchInput.forEach(recipeAfterSearchInput => {
      console.log(recipeAfterSearchInput);
      cardNode.append(createFactoryCard(recipeAfterSearchInput))
    }); 
  
  }

  


};
