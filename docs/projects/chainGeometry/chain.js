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

  // 左側の円柱
  const leftCylinderMesh = new THREE.Mesh(cylinderGeometry, chainMaterial);
  leftCylinderMesh.position.set(-2, chainLength / 2, 0);

  // 右側の円柱
  const rightCylinderMesh = new THREE.Mesh(cylinderGeometry, chainMaterial);
  rightCylinderMesh.position.set(2, chainLength / 2, 0);

  // 上側のカーブ
  const topCurvePoints = [
    new THREE.Vector3(0, chainLength / 2, 0),
    new THREE.Vector3(1.5, chainLength / 2, 0),
    new THREE.Vector3(2.5, chainLength / 4, 0),
    new THREE.Vector3(1.5, 0, 0),
    new THREE.Vector3(0, 0, 0)
  ];
  const topCurve = new THREE.CatmullRomCurve3(topCurvePoints);
  const topCurveGeometry = new THREE.TubeGeometry(
    topCurve,
    topCurvePoints.length * 4,
    chainRadius,
    chainSegments,
    false
  );
  const topCurveMesh = new THREE.Mesh(topCurveGeometry, chainMaterial);
  topCurveMesh.position.set(0, chainLength / 2, 0);

  // 下側のカーブ
  const bottomCurvePoints = [
    new THREE.Vector3(0, -chainLength / 2, 0),
    new THREE.Vector3(1.5, -chainLength / 2, 0),
    new THREE.Vector3(2.5, -chainLength / 4, 0),
    new THREE.Vector3(1.5, 0, 0),
    new THREE.Vector3(0, 0, 0)
  ];
  const bottomCurve = new THREE.CatmullRomCurve3(bottomCurvePoints);
  const bottomCurveGeometry = new THREE.TubeGeometry(
    bottomCurve,
    bottomCurvePoints.length * 4,
    chainRadius,
    chainSegments,
    false
  );
  const bottomCurveMesh = new THREE.Mesh(bottomCurveGeometry, chainMaterial);
  bottomCurveMesh.position.set(0, -chainLdsength / 2, 0);
  

  scene.add(leftCylinderMesh);
  scene.add(rightCylinderMesh);
  scene.add(topCurveMesh);
  scene.add(bottomCurveMesh);


}

buildScene();

// ここまでシーン


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
