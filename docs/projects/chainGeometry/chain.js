// シーンを設定
const scene = new THREE.Scene();

// カメラの位置を設定
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;
camera.lookAt(scene.position);

// レンダラーを設定
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ライトを追加
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// 部屋のような点光源
const pointLight = new THREE.PointLight(0xffffff, 200, 60);
scene.add(pointLight);

const createChainLink = () => {
  const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.7, 0, 0),
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(1.25, 0.5, 0),
    new THREE.Vector3(1, 1, 0),
    new THREE.Vector3(0.7, 1, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(-0.7, 1, 0),
    new THREE.Vector3(-1, 1, 0),
    new THREE.Vector3(-1.25, 0.5, 0),
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(-0.7, 0, 0),
    new THREE.Vector3(0, 0, 0),
  ]);

  const geometry = new THREE.TubeGeometry(path, 64, 0.2, 8, false);
  const material = new THREE.MeshPhongMaterial({
    color: 0xaaaaaa,
    metalness: 1.0,
    roughness: 0.5,
    emissive: 0x111111,
  });

  return new THREE.Mesh(geometry, material);
};

const numLinks = 50;
const chainLinks = [];
const linkSize = 1;
const linkDistance = 1.6;

for (let i = 0; i < numLinks; i++) {
  const link = createChainLink();
  const yOffset = i * linkDistance;

  const linkPositionX = 0;
  const linkPositionY = yOffset;

  link.position.set(linkPositionX, linkPositionY, 0);
  link.rotation.z = Math.PI / 2;

  // 偶数の場合の処理
  if (i % 2 === 0) {
    link.rotation.y = Math.PI / 2;

    // Adjust link's position
    link.position.x = -0.5;
    link.position.z = -0.5;
  }

  scene.add(link);
  chainLinks.push(link);
}

function animate() {
  requestAnimationFrame(animate);

  // Update camera rotation around Y-axis
  camera.position.x = 30 * Math.sin(Date.now() * 0.001);
  camera.position.z = 30 * Math.cos(Date.now() * 0.001);
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}

animate();