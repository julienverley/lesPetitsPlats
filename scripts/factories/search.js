import {
  getIngredients,
  getAppliances,
  getUstensils,
  createListboxsLists,
} from "./buildListboxs.js";
import { handleTagClick } from "../main.js";

// Listboxs lists nodes :
const listboxIngredientsList = document.getElementById("ingredients-list");
const listboxAppliancesList = document.getElementById("appliances-list");
const listboxUstensilsList = document.getElementById("ustensils-list");
// Error message node :
const noSearchResult = document.getElementById('no-search-result')

export const search = ($recipes, $tags, $toRefresh = true) => {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase(); 
  const recipesAfterTagFilter = getRecipesByTags($recipes, $tags);
  const recipesAfterSearchInput = getRecipesBySearchInput(
    recipesAfterTagFilter,
    searchInput
  );

  if ($toRefresh === true) {
    displayAfterSearch(recipesAfterSearchInput, $tags);
  }

  return recipesAfterSearchInput;
};

export const displayAfterSearch = ($refreshedRecipes, $tags) => {
  createListboxsLists(
    $refreshedRecipes,
    getIngredients,
    listboxIngredientsList,
    "ingredients",
    $tags
  );
  createListboxsLists(
    $refreshedRecipes,
    getAppliances,
    listboxAppliancesList,
    "appliances",
    $tags
  );
  createListboxsLists(
    $refreshedRecipes,
    getUstensils,
    listboxUstensilsList,
    "ustensils",
    $tags
  );
  handleTagClick(listboxIngredientsList); 
  handleTagClick(listboxAppliancesList);
  handleTagClick(listboxUstensilsList);

  displayRecipes($refreshedRecipes);
}

const getRecipesByTags = ($recipes, $tags) => {
  if ($tags.length === 0) {
    return $recipes;
  }
  const newRecipes = [];
  $recipes.forEach((recipe) => {
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
    });
    if (containsAllTags) {
      newRecipes.push(recipe);
    }
  });
  return newRecipes;
};


const getRecipesBySearchInput = ($recipes, $searchInput) => {
  const newRecipes = [];
  if ($searchInput.length < 3) {
    return $recipes;
  }
  if ($searchInput.length >= 3) {
    // Recipe ingredients search :
    for(let i = 0; i < $recipes.length; i++) {
      for(let j = 0; j < $recipes[i].ingredients.length; j++) {
        const objectIngredient = $recipes[i].ingredients[j].ingredient.toLowerCase()
        if (objectIngredient.includes($searchInput)) {
          if (!newRecipes.includes($recipes[i])) {
            newRecipes.push($recipes[i]);
          }
        }
      }
    }
    // Recipe name search : 
    for(let i = 0; i < $recipes.length; i++){
      const recipeName = $recipes[i].name.toLowerCase()
      if (recipeName.includes($searchInput)) {
        if (!newRecipes.includes($recipes[i])) {
          newRecipes.push($recipes[i]); 
        }
      }
    }
    // Description search : 
    for(let i = 0; i < $recipes.length; i++) {
      const recipeDescription = $recipes[i].description.toLowerCase()
      if (recipeDescription.includes($searchInput)) {
        if (!newRecipes.includes($recipes[i])) {
          newRecipes.push($recipes[i]);
        }
      }
    }
  }
  //console.log(newRecipes); // Ok objects
  return newRecipes;
};

export const displayRecipes = (recipesAfterSearchInput) => {
  document.querySelector('.cards').innerHTML = ""
  const cardNode = document.querySelector(".cards");

  const createFactoryCard = (recipeAfterSearchInputObject) => {
    const {
      name,
      time,
      ingredients,
      description, 
    } = recipeAfterSearchInputObject; 

    const ingredientsLi = document.createElement("ul"); 

    ingredients.forEach((object) => {
      // no undefined :
      if ((object.ingredient !== undefined) 
       && (object.quantity !== undefined) 
       && (object.unit !== undefined)) {
         ingredientsLi.innerHTML += `<li class="ingredient-quantity-unit"><b>${object.ingredient}</b> : ${object.quantity} ${object.unit}</li>`;
      } 
      // unit undefined : 
      if ((object.ingredient !== undefined) 
       && (object.quantity !== undefined) 
       && (object.unit == undefined)) {
        ingredientsLi.innerHTML += `<li class="ingredient-quantity-unit"><b>${object.ingredient}</b> : ${object.quantity}</li>`;
      } 
      // unit and quantity undefined :
      if ((object.ingredient !== undefined) 
        && (object.quantity == undefined) 
        && (object.unit == undefined)) {
        ingredientsLi.innerHTML += `<li class="ingredient-quantity-unit"><b>${object.ingredient}</b></li>`;
      }
    });

    const createCardDom = `<div class="card-header"></div>
    <div class="card-body">
      <div class="card-body-top">
        <h6 class="card-title">${name}</h6>
        <h6 class="time"><i class="bi bi-clock"></i> ${time} min</h6>
      </div>
      <div class="card-body-bottom">
        <ul class="recipe-ingredients">${ingredientsLi.innerHTML}</ul>
        <p class="recipe-text card-text">${description}</p>
      </div>
    </div>`;
    return createCardDom;
  };

  if (recipesAfterSearchInput.length >= 1) {
    recipesAfterSearchInput.forEach((recipeAfterSearchInput) => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = createFactoryCard(recipeAfterSearchInput);
      cardNode.append(div);
      noSearchResult.classList.add('hidden')
    });
  } else {
    noSearchResult.classList.remove('hidden') 
  }
};