
// No dupicates items in listboxs 
const noDuplicates = ($value, $index, $self) => { 
    return $self.indexOf($value) === $index 
}
/* 
// Lowercase
const lowerCase = () => {

}
 */

// Get items for listboxs
export const getIngredients = ($recipes) => {
    const allIngredients = []
    $recipes.forEach(recipe => { 
        recipe.ingredients.forEach(object => allIngredients.push(object.ingredient)) 
    })
    const noDuplicatesIngredients = allIngredients.filter(noDuplicates)
    //const noDuplicateslowerCaseIngredients = noDuplicatesIngredients.toLowerCase()
    
    noDuplicatesIngredients.sort((a, b) => a.localeCompare(b))
    
    return noDuplicatesIngredients

    ///  OK ///
    //const lowerCaseIngredients = noDuplicatesIngredients.toLowerCase()
    //return lowerCaseIngredients
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
export const createListboxsLists = ($recipes, $functionGetTags, $elemListboxList) => { 
    const list = $functionGetTags($recipes)
    list.forEach(item => {
        const elementList = document.createElement('li')
        elementList.textContent = item
        $elemListboxList.append(elementList)        
    });
}



