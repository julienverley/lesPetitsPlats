
// No dupicates items in listboxs 
const noDuplicates = ($value, $index, $self) => { 
    return $self.indexOf($value) === $index 
}

// Get items for listboxs
export const getIngredients = ($recipes) => {
    const allIngredients = []
    $recipes.forEach(recipe => { 
        recipe.ingredients.forEach(object => allIngredients.push(object.ingredient)) 
    })
    const noDuplicatesIngredients = allIngredients.filter(noDuplicates)
    noDuplicatesIngredients.sort((a, b) => a.localeCompare(b))
    return noDuplicatesIngredients
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
export const createListboxsLists = ($dataRecipes, $functionGetTags, $listboxElementsList, $attribute, $tags) => { 
    const list = $functionGetTags($dataRecipes);
    $listboxElementsList.innerHTML = '';
    list.forEach(item => {
        const elementList = document.createElement('li')
        elementList.textContent = item.toLowerCase()
        elementList.setAttribute('data-type', $attribute) // CSS data-type 
        if (!$tags.find(tag => tag.name.toLowerCase() === item.toLowerCase())) {
            $listboxElementsList.append(elementList);
        }     
    });
}