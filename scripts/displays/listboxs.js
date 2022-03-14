//import { getIngredients, getAppliances, getUstensils } from "../factories/tags.js";
// import { recipes } from "../data/recipes.js";


// Displays fonctions 
export const displayIngredients = ($recipes, $getTags, $listboxList) => { // informative (red), $parameters
    document.getElementById("ingredients-list").textContent = $getTags($recipes) // cf. getIngredients()
    $listboxList.classList.remove('hidden')
}
export const displayAppliances = ($listboxList) => { ////////////////////// Changer les noms : pas display, pex showListbox = ($listboxList)
    //document.getElementById('appliances-list').textContent = $getTags($recipes)
    $listboxList.classList.remove('hidden')
}
/* export const displayUstensils = ($recipes, $getTags, $listboxList) => {
    document.getElementById('ustensils-list').textContent = $getTags($recipes)
    console.log(document.getElementById('ustensils-list').textContent);
    $listboxList.classList.remove('hidden')
} */

export const displayUstensils = ($recipes, $functionGetTags, $elemListboxList) => { // create lists of listboxs // nom : createListboxsLists
    //const ustensilsList = document.getElementById('ustensils-list')
    const list = $functionGetTags($recipes)
    list.forEach(item => {
        const elementList = document.createElement('li')
        elementList.textContent = item
        $elemListboxList.append(elementList)        
    });
    // ustensilsList.textContent = $getTags($recipes)
}

/* const creeListe = (liste) => {
    liste.forEach(item => {
        const elementListe = document.createElement('li')
        elementListe.textContent = item
        ustensilsList.append(elementListe)        
    });
}

 */