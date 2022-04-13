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
  removeTags, //////////////////// ? 
} from "./factories/buildTags.js"; 
import {
  search, 
  displayRecipes,
} from "./factories/search.js"
import { 
  recipes // array with recipes 
} from "./data/recipes.js";

let tags = []; 

// Listboxs lists nodes :
const listboxIngredientsList = document.getElementById("ingredients-list")
const listboxAppliancesList = document.getElementById("appliances-list")
const listboxUstensilsList = document.getElementById("ustensils-list")
// Listboxs buttons nodes : 
const listboxIngredientsBtn = document.getElementById("ingredients-btn")
const listboxAppliancesBtn = document.getElementById("appliances-btn")
const listboxUstensilsBtn = document.getElementById("ustensils-btn")
// Listboxs chevrons nodes :
const listboxIngredientsChevron = document.getElementById('ingredients-btn-chevron')
const listboxAppliancesChevron = document.getElementById('appliances-btn-chevron') 
const listboxUstensilsChevron = document.getElementById('ustensils-btn-chevron') 
// Listboxs inputs nodes :
const listboxIngredientsInput = document.getElementById("ingredients-input")
const listboxAppliancesInput = document.getElementById("appliances-input")
const listboxUstensilsInput = document.getElementById("ustensils-input")

// Display all recipes on load :
displayRecipes(recipes)

// Create listboxs lists on load :
createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients", tags);
createListboxsLists(recipes, getAppliances, listboxAppliancesList, "appliances", tags); 
createListboxsLists(recipes, getUstensils, listboxUstensilsList, "ustensils", tags); 


// Listboxs display buttons click events :
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

// Listboxs display inputs click events : 
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

// Tags, add click events :
export const handleTagClick = (listboxElementList) => { 
  const elements = listboxElementList.querySelectorAll("li") 
  elements.forEach(element => {
    element.addEventListener('click', (e) => {
      const dataType = e.target.dataset.type
      const name = e.target.textContent
      const object = {name: name, attribute: dataType} 
      addTags(object, tags);
      createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients", tags); 
      createListboxsLists(recipes, getAppliances, listboxAppliancesList, "appliances", tags); 
      createListboxsLists(recipes, getUstensils, listboxUstensilsList, "ustensils", tags);
      handleTagClick(listboxIngredientsList); 
      handleTagClick(listboxAppliancesList);
      handleTagClick(listboxUstensilsList);
      handleRemoveTag();
      
      search(recipes, tags) 
    });
  });
};
handleTagClick(listboxIngredientsList); 
handleTagClick(listboxAppliancesList);
handleTagClick(listboxUstensilsList);

// Tags, remove click events :
const handleRemoveTag = () => {
  const tagListHtml = document.querySelectorAll('#tags .tag');
  tagListHtml.forEach(tag => {
      tag.addEventListener('click', () => {
          const tagLabel = tag.getAttribute('data-name');
          tags = tags.filter(tag => tag.name !== tagLabel); //
          createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients", tags);
          createListboxsLists(recipes, getAppliances, listboxAppliancesList, "appliances", tags);  
          createListboxsLists(recipes, getUstensils, listboxUstensilsList, "ustensils", tags);
          handleTagClick(listboxIngredientsList); 
          handleTagClick(listboxAppliancesList);
          handleTagClick(listboxUstensilsList);
          refreshTagList(tags);
          handleRemoveTag();

          search(recipes, tags) 
        });
  })
}

// Input search keyup event :
document.querySelector("#search-input").addEventListener("keyup", (e) => {
    search(recipes, tags)
});

// Listboxs list, input search events :
const handleFilterListboxs = (listboxElementList, $listboxInput, $functionTag, $attribute) => { // $attibute = prototype f° 
  // Search inputs 
  const listboxsInputs = document.querySelector($listboxInput)
    listboxsInputs.addEventListener('keyup', (e) => {
      const refreshedRecipes = search(recipes, tags, false); // cf. search.js search()
      const elementsArray = $functionTag(refreshedRecipes); 
      const searchString = e.target.value;
      
      if (searchString.length >= 3) {
        const filteredItemsListboxs = elementsArray.filter((element) => { 
          return element.toLowerCase().includes(searchString.toLowerCase()) //
        });
        console.log('filtered', filteredItemsListboxs); // 
        listboxElementList.innerHTML = ""
        refreshListboxsLists(filteredItemsListboxs, listboxElementList, tags, $attribute); //
        handleTagClick(listboxElementList); 
      } else {
        listboxElementList.innerHTML = ""
        refreshListboxsLists(elementsArray, listboxElementList, tags, $attribute); //
        handleTagClick(listboxElementList);
      }
    })
}
handleFilterListboxs(listboxIngredientsList, "#ingredients-input", getIngredients, 'ingredients');
handleFilterListboxs(listboxAppliancesList, "#appliances-input", getAppliances, 'appliances');
handleFilterListboxs(listboxUstensilsList, "#ustensils-input", getUstensils, 'ustensils');


//////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////