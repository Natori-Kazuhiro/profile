// シーン、カメラ、レンダラーを設定
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 鎖のリンクを作成する関数
const createChainLink = () => {
  const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
  const material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
  return new THREE.Mesh(geometry, material);
};

// 鎖のリンクを配置し、回転を設定
const numLinks = 10;
const chainLinks = [];
const linkDistance = 1.85;
const linkSize = 2; // 鎖のサイズ

for (let i = 0; i < numLinks; i++) {
  const link = createChainLink();

  let yOffset = 0;
  let zOffset = 0;

  if (i > 0) {
    const prevLink = chainLinks[i - 1];
    yOffset = prevLink.position.y - linkDistance * Math.cos(prevLink.rotation.z) - (linkSize / 2);
    zOffset = prevLink.position.z - linkDistance * Math.sin(prevLink.rotation.z);
  }

  link.position.y = yOffset;
  link.position.z = zOffset;

  link.rotation.x = (i % 2) * Math.PI / 2;
  link.rotation.z = i * Math.PI / 2;

  scene.add(link);
  chainLinks.push(link);
}


// カメラの位置を設定
camera.position.z = 20;
camera.lookAt(scene.position);

// レンダリング
renderer.render(scene, camera);