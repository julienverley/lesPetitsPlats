
const tagsNode = document.getElementById('tags')

export const addTags = (tag, $tags) => { // $tags le tableau du main passe en paramètre 
    
    $tags.push(tag)
    tagsNode.textContent = tag //.classList.add("tag")
    
    refreshTagList($tags); // $tags le tableau du main passe en paramètre 
}

export const refreshTagList = ($tags) => { // $tags le tableau du main passe en paramètre 
    tagsNode.innerHTML = ''; // Vide ce qui est affiché mais pas les données du tableau $tags (tags dans main.js)
    console.log("tagsNode vidé");
    $tags.forEach(tag => { // ? 
        tagsNode.append(tag) // ?
        // tag.classList.add('tag')
    }) 
}

// Antoine //////////// label = type, pour réintégrer le tag comme item dans le tableau 
export const removeTags = (tagLabel) => {
    tags = tags.filter(tag => tag.label !== tagLabel); 
}

///////// data-type, data-name, le parent ul a le data-type

