
/* const buildtags = () => {
}
buildtags();  */



let tags = [];
const tagsNode = document.getElementById('tags')

export function refreshTagList() {
    tagsNode.innerHTML = ''; 
    tags.forEach(tag => {
        tagsNode.appendChild(tagCreated)
    }) 
    tagsNode.innerHTML = ''; 
    /*  tags.forEach(tag => {
        document.getElementById('tags').appendChild(.....)
    }) */
}


export const addTags = ($tag) => { // OK ça fonctionne
    tags.push($tag)
    tagsNode.textContent = $tag
    // refreshTagList();
}


export const removeTags = (tagLabel) => {
    tags = tags.filter(tag => tag.label !== tagLabel); 
}