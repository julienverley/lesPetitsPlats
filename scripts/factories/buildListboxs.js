
// No dupicates items in listboxs 
const noDuplicates = ($value, $index, $self) => { 
    return $self.indexOf($value) === $index 
}

// Get items for listboxs
export const getIngredients = ($recipes) => {
    const allIngredients = []
    $recipes.forEach(recipe => { // ça bloque pour filteredItemsListboxs qui renvoie un tableau
        recipe.ingredients.forEach(object => allIngredients.push(object.ingredient))
    })
    const noDuplicatesIngredients = allIngredients.filter(noDuplicates)
    noDuplicatesIngredients.sort((a, b) => a.localeCompare(b))
    return noDuplicatesIngredients // liste d'ingrédients triés non dupliqués 
}
export const getAppliances = ($recipes) => {
    const allAppliances = []
    $recipes.forEach(recipe => {
        allAppliances.push(recipe.appliance)
    })
    const noDuplicatesAppliances = allAppliances.filter(noDuplicates)
    noDuplicatesAppliances.sort((a, b) => a.localeCompare(b))
    return noDuplicatesAppliances
}
export const getUstensils = ($recipes) => {
    const allUstensils = []
    $recipes.forEach(recipe => recipe.ustensils.forEach(ustensil => allUstensils.push(ustensil)))
    const noDuplicatesUstensils = allUstensils.filter(noDuplicates)
    noDuplicatesUstensils.sort((a, b) => a.localeCompare(b))
    return noDuplicatesUstensils
}


// Create listboxs lists 
export const createListboxsLists = ($recipes, $functionGetItems, $listboxElementsList, $attribute, $tags) => { 
    const items = $functionGetItems($recipes);
    $listboxElementsList.innerHTML = '';
    items.forEach(item => {
        const elementList = document.createElement('li')
        elementList.textContent = item.toLowerCase()
        elementList.setAttribute('data-type', $attribute) // CSS data-type 
        if (!$tags.find(tag => tag.name.toLowerCase() === item.toLowerCase())) { // if item ≠ tag... 
            $listboxElementsList.append(elementList); // ... append each item in listboxList
        }     
    });
}

// Refresh listboxs lists on input searchs
export const refreshListboxsLists = ($filteredItemsListboxs, $listboxElementsList, $tags) => {
    $filteredItemsListboxs.forEach(filteredItemListbox => {
        //console.log(filteredItemListbox);
        if (!$tags.find(tag => tag.name.toLowerCase() === filteredItemListbox.innerText.toLowerCase())) { 
            $listboxElementsList.append(filteredItemListbox);
        }     
    })
}
