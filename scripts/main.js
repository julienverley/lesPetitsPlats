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
 

let tags = []; // array with objects
/* let tags = [[texte, ingredients], []]
tag[0]
tag[1] */
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
    console.log(e.target.dataset.type) //
    const dataType = e.target.dataset.type
    const ingredient = e.target.textContent
    const object = {name: ingredient, attribute: dataType} //(option objet)
    //const array = [ingredient, dataType] (option array)
    addTags(object, tags) // ingredient --> object (or array)
    // addTags(ingredient, tags)
    console.log(tags);
    //...
  })
}
const appliances = listboxAppliancesList.getElementsByTagName("li")
for (var i = 0; i < appliances.length; ++i) {
  appliances[i].addEventListener('click', (e) => {
    const dataType = e.target.dataset.type
    const appliance = e.target.textContent
    const object = {name: appliance, attribute: dataType}
    addTags(object, tags) 
    console.log(tags);
  })
}
const ustensils = listboxUstensilsList.getElementsByTagName("li")
for (var i = 0; i < ustensils.length; ++i) {
  ustensils[i].addEventListener('click', (e) => {
    const dataType = e.target.dataset.type
    const ustensil = e.target.textContent
    const object = {name: ustensil, attribute: dataType}
    addTags(object, tags) 
    console.log(tags);
  })
}

// Tags, to remove click events

/* const tagsList = document.getElementById('tags') // Antoine : comment rendre le tag cliquable ?
console.log(tagsList)
for (var i = 0; i < tagsList.length; ++i) {
  tagsList[i].addEventListener('click', (e) => {
    console.log('clickkkkKKK')
  })
} */