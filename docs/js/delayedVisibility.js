// 画面内に要素が入ってきた時に表示する
const delayedItems = document.querySelectorAll('.delayedItem');

const delayedItemsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('isVisible');
        } else {
            entry.target.classList.remove('isVisible');
        }
    });
}, {
    threshold: 0.05
});

delayedItems.forEach(delayedItem => {
    delayedItemsObserver.observe(delayedItem);
});