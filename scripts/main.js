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

// Antoine
// Create listboxs lists on load
// const ingredients = getIngredients();
// const filteredIngredients = ingredients.filter()
// createListboxsLists(recipes, filteredIngredients, listboxIngredientsList, "ingredients");
createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients", tags); // tags
createListboxsLists(recipes, getAppliances, listboxAppliancesList, "appliances", tags); 
createListboxsLists(recipes, getUstensils, listboxUstensilsList, "ustensils", tags); 

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

// Tags, add click events
const handleTagClick = (listBoxElementList) => {
  const elements = listBoxElementList.querySelectorAll("li")
  elements.forEach(element => {
    element.addEventListener('click', (e) => {
      const dataType = e.target.dataset.type
      const name = e.target.textContent
      const object = {name: name, attribute: dataType}

      addTags(object, tags);
      console.log(tags);
      createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients", tags);
      createListboxsLists(recipes, getAppliances, listboxAppliancesList, "appliances", tags); 
      createListboxsLists(recipes, getUstensils, listboxUstensilsList, "ustensils", tags);
      handleTagClick(listboxIngredientsList);
      handleTagClick(listboxAppliancesList);
      handleTagClick(listboxUstensilsList);
      handleRemoveTag();
      //...
    });
  });
};

handleTagClick(listboxIngredientsList);
handleTagClick(listboxAppliancesList);
handleTagClick(listboxUstensilsList);

// Tags, remove click events
const handleRemoveTag = () => {
  const tagListHtml = document.querySelectorAll('#tags .tag');
  tagListHtml.forEach(tag => {
      tag.addEventListener('click', () => {
          const tagLabel = tag.getAttribute('data-name');
          console.log(tags);
          tags = tags.filter(tag => tag.name !== tagLabel);
          console.log(tags);
          refreshTagList(tags);
          handleRemoveTag();
          createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients", tags); // Ajoutés
          createListboxsLists(recipes, getAppliances, listboxAppliancesList, "appliances", tags); // ... 
          createListboxsLists(recipes, getUstensils, listboxUstensilsList, "ustensils", tags);
          handleTagClick(listboxIngredientsList); 
          handleTagClick(listboxAppliancesList);
          handleTagClick(listboxUstensilsList);
      });
  })
}


/*
I. Filtrer la liste des ingrédients avec l'input
1. Evenement sur l'input (keyUp de préférence, change)
2. Filtrer le tableau d'ingrédients au complet => liste réduite
3. Rafraîchir l'affichage

II. Filtrer la liste des ingrédients, ustensils et appliance en fonction des tags déjà ajoutés

III. search();
1. Ajout d'un tag
2. Suppression d'un tag
3. Caractères écrit dans le champs principal

IV. Filtrer les ingrédients, ustensils et appliance en fonction des recettes restantes dans les résultats.

V. Nouvelle branche => forEach, filter, find... => for, while...
*/