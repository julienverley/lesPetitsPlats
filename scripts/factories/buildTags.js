
const tagsNode = document.getElementById('tags')

// Add tag(s)
export const addTags = (tag, $tags) => { // $tags le tableau du main passe en paramètre // parameter tag --> object
    $tags.push(tag)
    refreshTagList($tags); // $tags le tableau du main passe en paramètre 
    document.getElementById("ingredients-input").value = "";
    document.getElementById("appliances-input").value = ""; 
    document.getElementById("ustensils-input").value = ""; 
}
// Refresh list of tag(s)
export const refreshTagList = ($tags) => { // $tags le tableau du main passe en paramètre 
    tagsNode.innerHTML = ''; // Vide ce qui est affiché mais pas les données du tableau $tags (tags dans main.js)
    $tags.forEach(tag => { 
        const tagCard = document.createElement('div')
        tagCard.innerHTML = `<div>${tag.name}</div> <i class="bi bi-x-circle"></i>`
        tagCard.classList.add('tag')
        tagCard.setAttribute('data-type', `${tag.attribute}`)
        tagCard.setAttribute('data-name', `${tag.name}`) 
        tagsNode.append(tagCard)
    });
}
// Remove tag(s)
export const removeTags = (tagLabel) => { // Pourquoi grisé dans main.js ? 
    tags = tags.filter(tag => tag.label !== tagLabel); 
}
