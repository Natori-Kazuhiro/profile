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
  metalness: 0.8
});


// シーンを作成
function buildScene() {
  const chainRadius = 0.5;
  const chainLength = 6;
  const chainSegments = 16;

  const cylinderGeometry = new THREE.CylinderGeometry(
    chainRadius,
    chainRadius,
    chainLength,
    chainSegments
  );

  const chainMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });

  // 左側の円柱
  const leftCylinderMesh = new THREE.Mesh(cylinderGeometry, chainMaterial);
  leftCylinderMesh.position.set(-2, chainLength / 2, 0);

  // 右側の円柱
  const rightCylinderMesh = new THREE.Mesh(cylinderGeometry, chainMaterial);
  rightCylinderMesh.position.set(2, chainLength / 2, 0);

  // カーブの始点と終点
  const bottomCurveStart = new THREE.Vector3(-2, 0, 0);
  const bottomCurveEnd = new THREE.Vector3(2, 0, 0);

  // カーブ
  const bottomCurvePoints = [
    bottomCurveStart,
    new THREE.Vector3(0, -2, 0),
    bottomCurveEnd,
  ];
  const curve = new THREE.CatmullRomCurve3(bottomCurvePoints);
  const curveGeometry = new THREE.TubeGeometry(
    curve,
    bottomCurvePoints.length * 4,
    chainRadius,
    chainSegments,
    false
  );
  const curveMesh = new THREE.Mesh(curveGeometry, chainMaterial);

  scene.add(leftCylinderMesh);
  scene.add(rightCylinderMesh);
  scene.add(curveMesh);
}



buildScene();

// ここまでシーン

// ライティング
// 環境光
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

// スポットライト
const spotLight = new THREE.SpotLight(0xffffff, 1);
spotLight.position.set(5, 10, 5);
spotLight.angle = Math.PI / 5;
spotLight.penumbra = 0.5;
spotLight.decay = 2;
spotLight.distance = 500;
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
