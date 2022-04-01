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
  search, 
} from "./factories/search.js"
import { 
  recipes // array with recipes 
} from "./data/recipes.js";
 

let tags = []; // array with objects
// let searchInput = ""; // utilisée plus tard avec f° getRecipesBySearchInput

// Listboxs lists nodes
const listboxIngredientsList = document.getElementById("ingredients-list")
const listboxAppliancesList = document.getElementById("appliances-list")
const listboxUstensilsList = document.getElementById("ustensils-list")
// Listboxs buttons nodes
const listboxIngredientsBtn = document.getElementById("ingredients-btn")
const listboxAppliancesBtn = document.getElementById("appliances-btn")
const listboxUstensilsBtn = document.getElementById("ustensils-btn")
// Listboxs chevrons nodes
const listboxIngredientsChevron = document.getElementById('ingredients-btn-chevron')
const listboxAppliancesChevron = document.getElementById('appliances-btn-chevron') 
const listboxUstensilsChevron = document.getElementById('ustensils-btn-chevron') 
// Listboxs inputs nodes
const listboxIngredientsInput = document.getElementById("ingredients-input")
const listboxAppliancesInput = document.getElementById("appliances-input")
const listboxUstensilsInput = document.getElementById("ustensils-input")
// Main search input node
const searchInput = document.getElementById("search-input").value //////// .value en plus 


/* 
searchInput.addEventListener('keyup', (e) => { ///////////
  search = e.target.value 
  console.log(search)
});
 */


// Create listboxs lists on load
createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients", tags);
createListboxsLists(recipes, getAppliances, listboxAppliancesList, "appliances", tags); 
createListboxsLists(recipes, getUstensils, listboxUstensilsList, "ustensils", tags); 

// Listboxs display buttons click events
listboxIngredientsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayListbox(listboxIngredientsList, listboxIngredientsChevron);
  hideListbox(listboxAppliancesList, listboxAppliancesChevron);
  hideListbox(listboxUstensilsList, listboxUstensilsChevron);
});
listboxAppliancesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  hideListbox(listboxIngredientsList, listboxIngredientsChevron);
  displayListbox(listboxAppliancesList, listboxAppliancesChevron);
  hideListbox(listboxUstensilsList, listboxUstensilsChevron);
});
listboxUstensilsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  hideListbox(listboxIngredientsList, listboxIngredientsChevron);
  hideListbox(listboxAppliancesList, listboxAppliancesChevron);
  displayListbox(listboxUstensilsList, listboxUstensilsChevron);
});

// Listboxs display inputs click events
listboxIngredientsInput.addEventListener("click", (e) => {
  e.preventDefault();
  displayListbox(listboxIngredientsList, listboxIngredientsChevron);
  hideListbox(listboxAppliancesList, listboxAppliancesChevron);
  hideListbox(listboxUstensilsList, listboxUstensilsChevron);
});
listboxAppliancesInput.addEventListener("click", (e) => {
  e.preventDefault();
  hideListbox(listboxIngredientsList, listboxIngredientsChevron);
  displayListbox(listboxAppliancesList, listboxAppliancesChevron);
  hideListbox(listboxUstensilsList, listboxUstensilsChevron);
});
listboxUstensilsInput.addEventListener("click", (e) => {
  e.preventDefault();
  hideListbox(listboxIngredientsList, listboxIngredientsChevron);
  hideListbox(listboxAppliancesList, listboxAppliancesChevron);
  displayListbox(listboxUstensilsList, listboxUstensilsChevron);
});

// Tags, add click events
const handleTagClick = (listboxElementList) => { 
  const elements = listboxElementList.querySelectorAll("li") 
  elements.forEach(element => {
    element.addEventListener('click', (e) => {
      const dataType = e.target.dataset.type
      const name = e.target.textContent
      const object = {name: name, attribute: dataType} 
      addTags(object, tags);
      createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients", tags); // model pour search(recipes, tags, searchInput )
      createListboxsLists(recipes, getAppliances, listboxAppliancesList, "appliances", tags); 
      createListboxsLists(recipes, getUstensils, listboxUstensilsList, "ustensils", tags);
      handleTagClick(listboxIngredientsList); 
      handleTagClick(listboxAppliancesList);
      handleTagClick(listboxUstensilsList);
      handleRemoveTag();
      
      search(recipes, tags, searchInput) // 3e argument $searchInput pour f° getRecipesBySearchInput
    });
  });
};
handleTagClick(listboxIngredientsList); // addEventlistener à l'écoute en global 
handleTagClick(listboxAppliancesList);
handleTagClick(listboxUstensilsList);

// Tags, remove click events
const handleRemoveTag = () => {
  const tagListHtml = document.querySelectorAll('#tags .tag');
  tagListHtml.forEach(tag => {
      tag.addEventListener('click', () => {
          const tagLabel = tag.getAttribute('data-name');
          tags = tags.filter(tag => tag.name !== tagLabel);
          createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients", tags); // model 
          createListboxsLists(recipes, getAppliances, listboxAppliancesList, "appliances", tags);  
          createListboxsLists(recipes, getUstensils, listboxUstensilsList, "ustensils", tags);
          handleTagClick(listboxIngredientsList); 
          handleTagClick(listboxAppliancesList);
          handleTagClick(listboxUstensilsList);
          refreshTagList(tags);
          handleRemoveTag();

          search(recipes, tags, searchInput) // 3e argument $searchInput pour f° getRecipesBySearchInput
        });
  })
}


// Input search keyup event 
document.querySelector("#search-input").addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase() // searchTextInput
    search(recipes, tags, searchInput) // searchTextInput
});


// Listboxs list, input search events 
const handleFilterListboxs = (listboxElementList, $listboxInput) => { 
  const elements = listboxElementList.querySelectorAll("li")
  const elementsArray = Array.from(elements);
  // Search inputs 
  const listboxsInputs = document.querySelector($listboxInput)
    listboxsInputs.addEventListener('keyup', (e) => {
      const searchString = e.target.value;
      const filteredItemsListboxs = elementsArray.filter((element) => { 
        return element.innerHTML.includes(searchString)
      });
      listboxElementList.innerHTML = ""
      refreshListboxsLists(filteredItemsListboxs, listboxElementList, tags);
    })
  }
  handleFilterListboxs(listboxIngredientsList, "#ingredients-input"); 
  handleFilterListboxs(listboxAppliancesList, "#appliances-input");
  handleFilterListboxs(listboxUstensilsList, "#ustensils-input");


  
/*
I. Filtrer la liste des ingrédients avec l'input
1. Evenement sur l'input (keyUp de préférence, change) // OK
2. Filtrer le tableau d'ingrédients au complet => liste réduite // OK
3. Rafraîchir l'affichage // OK

II. Filtrer la liste des ingrédients, ustensils et appliance en fonction des tags déjà ajoutés // OK  

III. search($tags, $search);
1. Ajout d'un tag
2. Suppression d'un tag
3. Caractères écrits dans le champs principal

// []

IV. Filtrer les ingrédients, ustensils et appliance en fonction des recettes restantes dans les résultats.

V. Nouvelle branche => forEach, filter, find... => for, while...
*/
