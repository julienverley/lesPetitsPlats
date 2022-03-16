import { 
  displayListbox, 
  hideListbox 
} from "./displays/displayListboxs.js";
import {
  getIngredients,
  getAppliances,
  getUstensils,
  createListboxsLists,
} from "./factories/buildListboxs.js";
import {
  refreshTagList,
  addTags, 
  removeTags,
} from "./factories/buildTags.js"; 
import { 
  recipes 
} from "./data/recipes.js";
 

let tags = [];
// Listboxs lists nodes
const listboxIngredientsList = document.getElementById("ingredients-list")
const listboxAppliancesList = document.getElementById("appliances-list")
const listboxUstensilsList = document.getElementById("ustensils-list")
// Listboxs buttons nodes
const listboxIngredientsBtn = document.getElementById("ingredients-btn")
const listboxAppliancesBtn = document.getElementById("appliances-btn")
const listboxUstensilsBtn = document.getElementById("ustensils-btn")

// Create listboxs lists on load
createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients");
createListboxsLists(recipes, getAppliances, listboxAppliancesList, "appliances"); 
createListboxsLists(recipes, getUstensils, listboxUstensilsList, "ustensils"); 

// Listboxs display click events
listboxIngredientsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayListbox(listboxIngredientsList);
  hideListbox(listboxAppliancesList);
  hideListbox(listboxUstensilsList);
});
listboxAppliancesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  hideListbox(listboxIngredientsList);
  displayListbox(listboxAppliancesList);
  hideListbox(listboxUstensilsList);
});
listboxUstensilsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  hideListbox(listboxIngredientsList);
  hideListbox(listboxAppliancesList);
  displayListbox(listboxUstensilsList);
});

// Listboxs items to build tags, click events
const ingredients = listboxIngredientsList.getElementsByTagName("li")
for (var i = 0; i < ingredients.length; ++i) {
  ingredients[i].addEventListener('click', (e) => {
    const ingredient = e.target.textContent
    console.log(ingredient) //
    addTags(ingredient, tags) // array tags
    console.log(tags);
    //...
  })
}
const appliances = listboxAppliancesList.getElementsByTagName("li")
for (var i = 0; i < appliances.length; ++i) {
  appliances[i].addEventListener('click', (e) => {
    const appliance = e.target.textContent
    console.log(appliance) // 
    addTags(appliance, tags) // array tags
    //...
  })
}
const ustensils = listboxUstensilsList.getElementsByTagName("li")
for (var i = 0; i < ustensils.length; ++i) {
  ustensils[i].addEventListener('click', (e) => {
    const ustensil = e.target.textContent
    console.log(ustensil) // 
    addTags(ustensil, tags) // array tags
    //...
  })
}

// Tags, to remove click events
