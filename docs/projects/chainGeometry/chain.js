// シーン、カメラ、レンダラーを設定
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ライトを追加
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// 鎖のリンクを作成する関数
const createChainLink = () => {
  const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
  const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
  return new THREE.Mesh(geometry, material);
};


// 鎖のリンクを配置し、回転を設定
const numLinks = 50;
const chainLinks = [];
const linkSize = 5;
const linkDistance = linkSize / 3;

for (let i = 0; i < numLinks; i++) {
  const link = createChainLink();

  let yOffset = 0;

  if (i > 0) {
    const prevLink = chainLinks[i - 1];
    yOffset = prevLink.position.y - linkDistance;
  }

  link.position.y = yOffset;
  link.rotation.y = (i + 1) * Math.PI / 2;

  scene.add(link);
  chainLinks.push(link);
}



// カメラの位置を設定
camera.position.z = 50;
camera.lookAt(scene.position);

// レンダリング
renderer.render(scene, camera);