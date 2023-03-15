// シーン、カメラ、レンダラーを作成
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1);
document.body.appendChild(renderer.domElement);

// マテリアルを定義
const chainMaterial = new THREE.MeshStandardMaterial({
  color: 0x999999,
  roughness: 0.5,
  metalness: 0.5
});

function buildScene() {
  const chainRadius = 0.5;
  const chainLength = 2;
  const chainSegments = 16;

  const cylinderGeometry = new THREE.CylinderGeometry(chainRadius, chainRadius, chainLength, chainSegments);

  // 円柱１
  const topCylinderMesh = new THREE.Mesh(cylinderGeometry, chainMaterial);
  topCylinderMesh.position.set(0, chainLength / 2, 0);

  // 円柱２
  const bottomCylinderMesh = new THREE.Mesh(cylinderGeometry, chainMaterial);
  bottomCylinderMesh.position.set(0, -chainLength / 2, 0);
  bottomCylinderMesh.rotation.x = Math.PI;

  // カーブ１、カーブ２
  const curvePoints = [
    new THREE.Vector3(chainRadius, -chainLength / 2, 0),
    new THREE.Vector3(chainRadius, -chainLength / 4, 0),
    new THREE.Vector3(chainRadius * 2, 0, 0)
  ];
  const curve1 = new THREE.CatmullRomCurve3(curvePoints);
  const curve2 = new THREE.CatmullRomCurve3(curvePoints);

  // カーブ１メッシュ
  const curve1Geometry = new THREE.TubeGeometry(curve1, chainSegments, chainRadius, 8, false);
  const curve1Mesh = new THREE.Mesh(curve1Geometry, chainMaterial);
  curve1Mesh.position.set(0, -chainLength / 2, 0);

  // カーブ２メッシュ
  const curve2Geometry = new THREE.TubeGeometry(curve2, chainSegments, chainRadius, 8, false);
  const curve2Mesh = new THREE.Mesh(curve2Geometry, chainMaterial);
  curve2Mesh.position.set(0, chainLength / 2, 0);

  scene.add(topCylinderMesh);
  scene.add(bottomCylinderMesh);
  scene.add(curve1Mesh);
  scene.add(curve2Mesh);

  // 接続
  const topCurvePoint = curve1.getPoint(1);
  topCylinderMesh.position.copy(topCurvePoint);

  const bottomCurvePoint = curve2.getPoint(0);
  bottomCylinderMesh.position.copy(bottomCurvePoint);
}



buildScene();



// スポットライトを作成
const spotLight = new THREE.SpotLight(0xffffff, 1);
spotLight.position.set(5, 10, 5);
spotLight.angle = Math.PI / 5;
spotLight.penumbra = 0.5;
spotLight.decay = 2;
spotLight.distance = 200;
scene.add(spotLight);

// レンダリングする
function render() {
    renderer.render(scene, camera);
    spotLight.position.x = Math.sin(Date.now() * 0.001) * 10;
    spotLight.position.z = Math.cos(Date.now() * 0.001) * 10;
    requestAnimationFrame(render);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

render();
