
/* const buildtags = () => {
}
buildtags();  */



let tags = [];

export function refreshTagList() {
    tagsNode.innerHTML = ''; 
    
    tags.forEach(tag => {
        tagsNode.appendChild(tagCreated)
    }) 
    document.getElementById('tags').innerHTML = ''; 
    /*  tags.forEach(tag => {
        document.getElementById('tags').appendChild(.....)
    }) */
}

function addTags(tag) {
    tags.push(tag) ;
export const addTags = ($tag) => { // OK ça fonctionne
    tags.push($tag)
    tagsNode.textContent = $tag
    // refreshTagList();
}

function removeTags(tagLabel) {
    tags = tags.filter(tag => tag.label !== tagLabel); 
}
