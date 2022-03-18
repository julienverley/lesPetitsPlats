
const tagsNode = document.getElementById('tags')

export const addTags = (tag, $tags) => { // $tags le tableau du main passe en paramètre // parameter tag --> object
    console.log(tag)
    $tags.push(tag)
    //tagsNode.textContent = tag //.classList.add("tag")
    refreshTagList($tags); // $tags le tableau du main passe en paramètre 
}

export const refreshTagList = ($tags) => { // $tags le tableau du main passe en paramètre 
    tagsNode.innerHTML = ''; // Vide ce qui est affiché mais pas les données du tableau $tags (tags dans main.js)
    console.log("tagsNode vidé");
    $tags.forEach(tag => { // ? 
        const tagCard = document.createElement('div')
        //tagCard.innerHTML = `<div data-type="${tag.attribute}" data-name="${tag.name}">${tag.name}</div> <i class="bi bi-x-circle"></i>`
        tagCard.innerHTML = `<div>${tag.name}</div> <i class="bi bi-x-circle"></i>`
        tagCard.classList.add('tag')
        tagCard.setAttribute('data-type', `${tag.attribute}`)
        tagCard.setAttribute('data-name', `${tag.name}`) 

        // 
        tagsNode.append(tagCard)
    });
}

// A continuer //////////// label = type, pour réintégrer le tag comme item dans le tableau 
export const removeTags = (tagLabel) => {
    tags = tags.filter(tag => tag.label !== tagLabel); 
}
////////////////////////// 

////////////////////////// data-type, data-name, le parent ul a le data-type

