
// Imports 
import {
    showListbox, 
    hideListbox,
} from "./displays/displayListboxs.js";
import {
  getIngredients,
  getAppliances,
  getUstensils,
  createListboxsLists,
} from "./factories/buildListboxs.js";
/* import {
    //.............
} from "./factories/buildTags.js" */
import { recipes } from "./data/recipes.js";

// Variables
// Listboxs lists nodes
const listboxIngredientsList = document.getElementById("ingredients-list");
const listboxAppliancesList = document.getElementById("appliances-list");
const listboxUstensilsList = document.getElementById("ustensils-list");
// Listboxs buttons nodes
const listboxIngredientsBtn = document.getElementById("ingredients-btn");
const listboxAppliancesBtn = document.getElementById("appliances-btn");
const listboxUstensilsBtn = document.getElementById("ustensils-btn");

// Create listboxs lists on load 
createListboxsLists(recipes, getIngredients, listboxIngredientsList);
createListboxsLists(recipes, getAppliances, listboxAppliancesList);
createListboxsLists(recipes, getUstensils, listboxUstensilsList);

// Click events 
listboxIngredientsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id == "ingredients-btn") {
      showListbox(listboxIngredientsList)
      hideListbox(listboxAppliancesList)
      hideListbox(listboxUstensilsList)
    }
  });
listboxAppliancesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id == "appliances-btn") {
    hideListbox(listboxIngredientsList)
    showListbox(listboxAppliancesList)
    hideListbox(listboxUstensilsList)
  }
});
listboxUstensilsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id == "ustensils-btn") {
    hideListbox(listboxIngredientsList)
    hideListbox(listboxAppliancesList)
    showListbox(listboxUstensilsList)
  }
});
