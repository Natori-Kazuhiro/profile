// コンタクトフォームに関する機能
const contactDialog = document.getElementById('contactDialog');

// モーダルを開くイベント
let contactDialogOpenNodeList = document.querySelectorAll('.js-contactDialogOpen');
for (let contactDialogOpenNode = 0; contactDialogOpenNode < contactDialogOpenNodeList.length; contactDialogOpenNode++) {
    contactDialogOpenNodeList[contactDialogOpenNode].addEventListener("click", (e) => {
        contactDialog.showModal();
    });
};

// クローズボタンでクリックでモーダルを閉じる
let contactDialogCloseNodeList = document.querySelectorAll('.js-contactDialogClose');
for (let contactDialogCloseNode = 0; contactDialogCloseNode < contactDialogCloseNodeList.length; contactDialogCloseNode++) {
    contactDialogCloseNodeList[contactDialogCloseNode].addEventListener("click", (e) => {
        contactDialog.close();
    });
};

// モーダルの範囲外をクリックするとモーダルを閉じる
contactDialog.addEventListener("click", (e) => {
    // クリック位置がモーダルの外であれば
    if(!e.target.closest(".js-contactDialogInner")) {
        // 現在開いているモーダルをクローズ
        contactDialog.close();
    }
    else{
        // クリック位置がモーダル内であれば処理なし
    };
});



// リサイズイベント
function resizeIframe() {
    var iframe = document.getElementById('contactDialogIframe');
    var iframeBody = iframe.contentDocument.body;
    var iframeHeight = iframeBody.scrollHeight;
    iframe.style.height = iframeHeight + 'px';
  }
  
  // iframe内のコンテンツが変更された場合に、iframeの高さを再計算する
  window.addEventListener('message', function(event) {
    if (event.data === 'resizeIframe') {
      resizeIframe();
    }
  });