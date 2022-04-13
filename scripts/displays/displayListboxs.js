// Show or hide listboxs :
export const displayListbox = ($listboxList, $chevron) => { 
    $listboxList.classList.remove('hidden')
    $listboxList.classList.add('show')
    $chevron.classList.remove('fa-chevron-down') 
    $chevron.classList.add('fa-chevron-up')
}
export const hideListbox = ($listboxList, $chevron) => {
    $listboxList.classList.add('hidden')
    $listboxList.classList.remove('show')

    $chevron.classList.remove('fa-chevron-up')
    $chevron.classList.add('fa-chevron-down')
}

/* 
// Close dropdown if user clicks outside of it // ////////////////// fonction exportée ? 
window.onclick = function (event) { //////////////////////////////// problème : click dans la listbox ferme tout
    if (!event.target.matches('.fa-chevron-down')) {
      const listboxs = document.getElementsByClassName('listbox-list'); 
      let i;
      for (i = 0; i < listboxs.length; i++) {
        const openedListbox = listboxs[i];
        if (!openedListbox.classList.contains('hidden')) {
            // openedListbox.classList.remove('show');
            openedListbox.classList.add('hidden');
        }
      }
    }
  }; 
 */
