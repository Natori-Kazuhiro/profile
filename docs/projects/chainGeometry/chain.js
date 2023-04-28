// シーンを設定
const scene = new THREE.Scene();

// カメラの位置を設定
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;
camera.lookAt(scene.position);

// レンダラーを設定
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ライトを追加
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// 鎖のリンクを作成する関数
const createChainLink = () => {
  const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(    0,     0,   0),
    new THREE.Vector3(    0,   0.7,   0),
    new THREE.Vector3(    0,     1,   0),
    new THREE.Vector3(  0.5,  1.25,   0),
    new THREE.Vector3(    1,     1,   0),
    new THREE.Vector3(    1,   0.7,   0),
    new THREE.Vector3(    1,     0,   0),
    new THREE.Vector3(    1,  -0.7,   0),
    new THREE.Vector3(    1,    -1,   0),
    new THREE.Vector3(  0.5, -1.25,   0),
    new THREE.Vector3(    0,    -1,   0),
    new THREE.Vector3(    0,  -0.7,   0),
    new THREE.Vector3(    0,     0,   0)
  ]);

  const geometry = new THREE.TubeGeometry(path, 64, 0.2, 8, false);
  const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });

  return new THREE.Mesh(geometry, material);
};

// 鎖のリンクを配置し、回転を設定
const numLinks = 10;
const chainLinks = [];
const linkSize = 5;
const linkDistance = linkSize / numLinks;
const rotationyCenter = new THREE.Vector3(0, 0, 0); // y軸の中心

for (let i = 0; i < numLinks; i++) {
  const link = createChainLink();
  const yOffset = i * linkDistance;

  const linkPositionX = 0.5 - linkSize / 2;
  link.position.set(linkPositionX, yOffset, 0);
  link.rotation.z = Math.PI / 2; // z軸を中心に回転

  const rotationyAngle = (i + 1) * Math.PI / 2; // y軸を中心に回転する角度
  link.rotation.y = rotationyAngle;
  const offsety = new THREE.Vector3(0, yOffset - linkSize / 2, 0); // y方向のオフセットを作成
  link.position.add(offsety); // オフセットを適用

  scene.add(link);
  chainLinks.push(link);
}


// レンダリング
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
