
/* const buildtags = () => {
}
buildtags();  */



let tags = [];

function refreshTagList() {
    document.getElementById('tags').innerHTML = ''; 
    /*  tags.forEach(tag => {
        document.getElementById('tags').appendChild(.....)
    }) */
}

function addTags(tag) {
    tags.push(tag) ;
    refreshTagList();
}

function removeTags(tagLabel) {
    tags = tags.filter(tag => tag.label !== tagLabel); 
}
