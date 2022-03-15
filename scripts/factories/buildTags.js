
let tags = [];
// Tags node
const tagsNode = document.getElementById('tags')
const tagCreated = document.createElement('h2')

export function refreshTagList() {
    tagsNode.innerHTML = ''; 
    
    tags.forEach(tag => {
        tagsNode.appendChild(tagCreated)
    }) 
}

export const addTags = ($tag) => { // OK ça fonctionne
    tags.push($tag)
    tagsNode.textContent = $tag
    // refreshTagList();
}


/* 
export function removeTags(tagLabel) {
    tags = tags.filter(tag => tag.label !== tagLabel); 
}

 */