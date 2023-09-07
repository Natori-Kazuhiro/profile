// シーンを設定
const scene = new THREE.Scene();

// カメラの位置を設定
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;
camera.position.y = 10;
camera.lookAt(scene.position);

// レンダラーを設定
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ライトを追加
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// 各点光源の設定
const pointLight1 = new THREE.PointLight(0xffffff, 1.5, 300);
const pointLight2 = new THREE.PointLight(0xffffff, 1.5, 300);
const pointLight3 = new THREE.PointLight(0xffffff, 1.5, 150);

// 点光源の配置
pointLight1.position.set(  100, 100,  20);
pointLight2.position.set( -100, 100,  20);
pointLight3.position.set(  -10,  80, -20);

// シーンに点光源を追加
scene.add(pointLight1);
scene.add(pointLight2);
scene.add(pointLight3);

// 鎖を作成
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
    color: 0x555555,
    metalness: 0.9,
    roughness: 0.3,
    emissive: 0x111111
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
    link.position.x = -0.5;
    link.position.z = -0.5;
  }

  scene.add(link);
  chainLinks.push(link);
}
// ここまで鎖の作成

// 地面の作成
const groundGeometry = new THREE.PlaneGeometry(5000, 5000, 1);
const groundMaterial = new THREE.MeshPhongMaterial({
  color: 0xaaaaaa,
  roughness: 0.8
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);

// 地面の配置と回転
ground.position.y = -5;
ground.rotation.x = -Math.PI / 2;

scene.add(ground);

// 壁の作成
const wallGeometry = new THREE.PlaneGeometry(5000, 3000, 1);
const wallMaterial = new THREE.MeshPhongMaterial({
  color: 0xaaaaaa,
  metalness: 1.0,
  roughness: 0.8
});
const wall = new THREE.Mesh(wallGeometry, wallMaterial);

// 壁の配置と回転
wall.position.z = -30;
wall.position.y = 1500;

scene.add(wall);

// 金属球の作成
const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
const sphereMaterial = new THREE.MeshPhongMaterial({
  color: 0x888888,
  metalness: 1.0,
  roughness: 1.0
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

// 金属球の配置
sphere.position.set(10, 0, 0);

scene.add(sphere);


// マウスイベントを設定
const mouse = new THREE.Vector2(0, 0);
const minCameraY = 2;

document.addEventListener("mousemove", (event) => {
  const canvasBounds = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
  mouse.y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;
});

function animate() {
  requestAnimationFrame(animate);

  // カメラの位置をマウスの位置に関連付ける
  camera.position.x = 10 * mouse.x;
  camera.position.y = Math.max(10 * mouse.y, minCameraY);

  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}

animate();