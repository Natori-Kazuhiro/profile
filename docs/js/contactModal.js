const contactDialog = document.getElementById('contactDialog');
const body = document.body;

function closeDialog() {
  // モーダルを閉じる
  contactDialog.close();
  // 「モーダル以外のスクロール禁止」を解除
  body.style.overflow = 'auto';
}

function openDialog() {
  // モーダルを開く
  contactDialog.showModal();
  // モーダル以外のスクロール禁止
  body.style.overflow = 'hidden';
}

document.querySelectorAll('.js-contactDialogOpen').forEach((contactDialogOpenNode) => {
  contactDialogOpenNode.addEventListener('click', openDialog);
});

document.querySelectorAll('.js-contactDialogClose').forEach((contactDialogCloseNode) => {
  contactDialogCloseNode.addEventListener('click', closeDialog);
});

contactDialog.addEventListener('click', (e) => {
  if (!e.target.closest('.js-contactDialogInner')) {
    closeDialog();
  }
});