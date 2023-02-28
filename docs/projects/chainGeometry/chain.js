// シーン、カメラ、レンダラーを作成
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1);
document.body.appendChild(renderer.domElement);

// 立体の金属的な鎖のマテリアルを作成
const chainMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.5 });

// 鎖の形状オブジェクトを作成し、シーンに追加する
const chainLength = 10; // 鎖の長さ
const curvature = 0.5; // 鎖の曲率
const angle = Math.PI / 4; // 鎖の角度
const linkGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 16);

const chain = new THREE.Group(); // 鎖をまとめるグループ

for (let i = 0; i < chainLength; i++) {
// 鎖のリンクのマテリアルを作成
const linkMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.5 });

// リンクの位置と回転を計算
const link = new THREE.Mesh(linkGeometry, linkMaterial);
link.position.set((i + 1) * curvature * Math.sin(angle), (i + 1) * curvature * Math.cos(angle), (i + 1) * 2);
link.rotation.set(angle, 0, Math.PI / 2);

chain.add(link);
}

scene.add(chain);

// レンダリングする
function render() {
renderer.render(scene, camera);
requestAnimationFrame(render); // requestAnimationFrame を使ってアニメーションをスムーズにする
}

// レンダリングを実行する
render();