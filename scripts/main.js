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
  const elements = listBoxElementList.querySelectorAll("li")
  elements.forEach(element => {
    element.addEventListener('click', (e) => {
      const dataType = e.target.dataset.type
      const name = e.target.textContent
      const object = {name: name, attribute: dataType} // Modèle 
      addTags(object, tags);
      //console.log(tags);
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
          //console.log(tags);
          tags = tags.filter(tag => tag.name !== tagLabel);
          // console.log(tags);
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

//////////////////////////////////////////////////////////////////
// Listboxs data 
const handleFilterListboxs = (listboxElementList, $listboxInput) => {
  const elements = listboxElementList.querySelectorAll("li")
  const elementsArray = Array.from(elements) // OK array of listbox elements (li)
  const elementsArrayNames = elementsArray.map((item) => item.innerHTML) // OK array of listbox elements 
  const elementsArrayDataType = elementsArray.map((item) => item.dataset.type) // OK array of listbox elements 
  // 1/ Créer un tableau d'objets avec name et type // cf. modèle plus haut
  const object = {name: elementsArrayNames, attribute: elementsArrayDataType}
  console.log(object) // OK
  //console.log(elementsArrayNames); //
  //console.log(elementsArrayDataType); //

    // Search inputs 
    const listboxsInputs = document.querySelector($listboxInput) // paramètre ? 
    //listboxsInputs.forEach(listboxsInput => {
      listboxsInputs.addEventListener('keyup', (e) => { //
        const searchString = e.target.value// OK search text 
        const filteredItemsListboxs = object.name.filter((element) => { 
          // 2/ passer l'array avec name et type, donc passer le nouveau tableau d'objet // probleme, filter ne traite que des tableaux (pas des objets)
          return element.includes(searchString) // ...
          // 3/ return element.name.includes(searchString)
        })
        console.log(filteredItemsListboxs); // OK chaque array filtered
        listboxIngredientsList.innerHTML = ""
        // 4/ Recréer le modèle de createListboxsLists, sauf $dataRecipes qui sera filteredItemsListboxs
        createListboxsLists(recipes, getIngredients, listboxIngredientsList, "ingredients", tags); // Pb avec recipes, bloque au forEach de getIngredients
      })
    //})
  }
  handleFilterListboxs(listboxIngredientsList, "#ingredients-input");
  handleFilterListboxs(listboxAppliancesList, "#appliances-input");
  handleFilterListboxs(listboxUstensilsList, "#ustensils-input");
//////////////////////////////////////////////////////////////////
 
  
/*
I. Filtrer la liste des ingrédients avec l'input
1. Evenement sur l'input (keyUp de préférence, change) // OK
2. Filtrer le tableau d'ingrédients au complet => liste réduite // OK (console.log) A finir 
3. Rafraîchir l'affichage // A faire

II. Filtrer la liste des ingrédients, ustensils et appliance en fonction des tags déjà ajoutés // OK

III. search();
1. Ajout d'un tag 
2. Suppression d'un tag
3. Caractères écrit dans le champs principal

IV. Filtrer les ingrédients, ustensils et appliance en fonction des recettes restantes dans les résultats.

V. Nouvelle branche => forEach, filter, find... => for, while...
*/
