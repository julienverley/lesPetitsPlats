import { 
  displayListbox, 
  hideListbox 
} from "./displays/displayListboxs.js";
import {
  getIngredients,
  getAppliances,
  getUstensils,
  createListboxsLists,
  refreshListboxsLists,
} from "./factories/buildListboxs.js";
import {
  refreshTagList,
  addTags, 
  removeTags, // 
} from "./factories/buildTags.js"; 
import { 
  recipes 
} from "./data/recipes.js";
 

let tags = []; // array with objects

// Listboxs lists nodes
const listboxIngredientsList = document.getElementById("ingredients-list")
const listboxAppliancesList = document.getElementById("appliances-list")
const listboxUstensilsList = document.getElementById("ustensils-list")
// Listboxs buttons nodes
const listboxIngredientsBtn = document.getElementById("ingredients-btn")
const listboxAppliancesBtn = document.getElementById("appliances-btn")
const listboxUstensilsBtn = document.getElementById("ustensils-btn")

// Create listboxs lists on load
createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients", tags);
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
  const elements = listBoxElementList.querySelectorAll("li") // ? cf. l 70
  elements.forEach(element => {
    element.addEventListener('click', (e) => {
      const dataType = e.target.dataset.type
      const name = e.target.textContent
      const object = {name: name, attribute: dataType} // Modèle 
      addTags(object, tags);
      createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients", tags);
      createListboxsLists(recipes, getAppliances, listboxAppliancesList, "appliances", tags); 
      createListboxsLists(recipes, getUstensils, listboxUstensilsList, "ustensils", tags);
      handleTagClick(listboxIngredientsList); // listBoxElementList
      handleTagClick(listboxAppliancesList);
      handleTagClick(listboxUstensilsList);
      handleRemoveTag();
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
          tags = tags.filter(tag => tag.name !== tagLabel);
          refreshTagList(tags);
          handleRemoveTag();
          createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients", tags); 
          createListboxsLists(recipes, getAppliances, listboxAppliancesList, "appliances", tags);  
          createListboxsLists(recipes, getUstensils, listboxUstensilsList, "ustensils", tags);
          handleTagClick(listboxIngredientsList); 
          handleTagClick(listboxAppliancesList);
          handleTagClick(listboxUstensilsList);
      });
  })
}

// Listboxs list, input search events 
const handleFilterListboxs = (listboxElementList, $listboxInput) => { // ? $listboxInput cf. line 117
  const elements = listboxElementList.querySelectorAll("li")
  const elementsArray = Array.from(elements) // OK array of listbox elements (li)

  // Search inputs 
  const listboxsInputs = document.querySelector($listboxInput)
    listboxsInputs.addEventListener('keyup', (e) => { 
      const searchString = e.target.value// OK search text 
      const filteredItemsListboxs = elementsArray.filter((element) => { // filter, with array
        return element.innerHTML.includes(searchString)
      })
      //console.log("Tableau filtré: ",filteredItemsListboxs); // OK chaque array filtered
      listboxElementList.innerHTML = ""
      refreshListboxsLists(filteredItemsListboxs, listboxElementList, tags);
    })
  }
  handleFilterListboxs(listboxIngredientsList, "#ingredients-input"); // $listboxInput
  handleFilterListboxs(listboxAppliancesList, "#appliances-input");
  handleFilterListboxs(listboxUstensilsList, "#ustensils-input");

  
  
/*
I. Filtrer la liste des ingrédients avec l'input
1. Evenement sur l'input (keyUp de préférence, change) // OK
2. Filtrer le tableau d'ingrédients au complet => liste réduite // OK
3. Rafraîchir l'affichage // OK
4. Recherches input avec màj des tags

II. Filtrer la liste des ingrédients, ustensils et appliance en fonction des tags déjà ajoutés // OK

III. search();
1. Ajout d'un tag 
2. Suppression d'un tag
3. Caractères écrits dans le champs principal

IV. Filtrer les ingrédients, ustensils et appliance en fonction des recettes restantes dans les résultats.

V. Nouvelle branche => forEach, filter, find... => for, while...
*/
