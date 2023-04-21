// ビューポートが#fvを超えるとfixedCircleにフィルターを付与する
const fixedCircle = document.getElementById('fixedCircle');

const observer = new IntersectionObserver(([entry]) => {
    fixedCircle.classList.toggle('isFiltered', !entry.isIntersecting);
}, { threshold: 1 });

// 監視対象を定義する
observer.observe(document.getElementById('fv'));