export const toggleListBox = ($listboxList, $chevron) => {
  if ($listboxList.classList.contains('hidden')) {
    $listboxList.classList.remove('hidden')
    $listboxList.classList.add('show')
    $chevron.classList.add('fa-chevron-up') ///// $chevron
    $chevron.classList.remove('fa-chevron-down') ///// $chevron
  } else {
    $listboxList.classList.add('hidden')
    $listboxList.classList.remove('show')
    $chevron.classList.remove('fa-chevron-up') ///// $chevron
    $chevron.classList.add('fa-chevron-down') ///// $chevron
  }
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
