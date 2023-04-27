// contactフォームの開閉に関わるfunction
const contactDialog = document.getElementById('contactDialog');
const body = document.body;
const contactDialogOpenNodes = document.querySelectorAll('.js-contactDialogOpen');
const contactDialogCloseNodes = document.querySelectorAll('.js-contactDialogClose');

function toggleDialog(open) {
  contactDialog[open ? 'showModal' : 'close']();
  body.style.overflow = open ? 'hidden' : 'auto';
}

function dialogToggleSwitch(event) {
  const contactDialogOpenNode = event.target.closest('.js-contactDialogOpen');
  const contactDialogCloseNode = event.target.closest('.js-contactDialogClose');
  const contactDialogInnerNode = event.target.closest('.js-contactDialogInner');
  
  if (contactDialogOpenNode) {
    toggleDialog(true);
  } else if (contactDialogCloseNode || !contactDialogInnerNode) {
    toggleDialog(false);
  }
}

contactDialogOpenNodes.forEach(node => node.addEventListener('click', dialogToggleSwitch));
contactDialogCloseNodes.forEach(node => node.addEventListener('click', dialogToggleSwitch));
contactDialog.addEventListener('click', dialogToggleSwitch);