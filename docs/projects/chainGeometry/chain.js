const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1);
document.body.appendChild(renderer.domElement);


// Create scene object
function buildScene() {
  const chainRadius = 0.3;
  const chainLength = 10;
  const chainSegments = 16;

  const cylinderTopY = 0;
  const cylinderMarginX = 3;

  const leftCylinderTopX = -1;
  const rightCylinderTopX = leftCylinderTopX + cylinderMarginX;

  const topCurveEdgeY = 3;
  const topCurveEdgeX = rightCylinderTopX - (cylinderMarginX / 2);

  const chainMaterial = new THREE.MeshStandardMaterial({
    color: 0x999999,
    roughness: 0.5,
    metalness: 0.8
  }); 

  const cylinderGeometry = new THREE.CylinderGeometry(
    chainRadius,
    chainRadius,
    chainLength,
    chainSegments
  );

  // Left cylinder
  const leftCylinderMesh = new THREE.Mesh(cylinderGeometry, chainMaterial);
  leftCylinderMesh.position.set(leftCylinderTopX, cylinderTopY, 0);

  // Right cylinder
  const rightCylinderMesh = new THREE.Mesh(cylinderGeometry, chainMaterial);
  rightCylinderMesh.position.set(rightCylinderTopX, cylinderTopY, 0);

  // Top curve start and end points
  const topCurveStart = new THREE.Vector3(leftCylinderTopX, cylinderTopY, 0);
  const topCurveEdge = new THREE.Vector3(topCurveEdgeX, topCurveEdgeY, 0);
  const topCurveEnd = new THREE.Vector3(rightCylinderTopX, cylinderTopY, 0);

  // Top curve
  const topCurvePoints = [
    topCurveStart,
    topCurveEdge,
    topCurveEnd
  ];
  const topCurve = new THREE.CatmullRomCurve3(topCurvePoints);

  // Bottom curve
  const bottomCurve = new THREE.CatmullRomCurve3(topCurvePoints.slice().reverse());

  // Tube geometry
  const numPoints = topCurvePoints.length;
  const geometry = new THREE.TubeGeometry(
    topCurve,
    numPoints * 99,
    chainRadius,
    chainSegments,
    false,
    false
  );

  // Tube mesh
  const mesh = new THREE.Mesh(geometry, chainMaterial);

  // Bottom curve mesh
  const bottomCurveGeometry = new THREE.TubeGeometry(
    bottomCurve,
    numPoints * 4,
    chainRadius,
    chainSegments,
    false,
    true // generate bottom cap
  );
  const bottomCurveMesh = new THREE.Mesh(bottomCurveGeometry, chainMaterial);

  // Create group object
  const group = new THREE.Group();
  group.add(leftCylinderMesh, rightCylinderMesh, mesh, bottomCurveMesh);

  // Rotate and position the group object
  group.rotation.x = Math.PI / 2;
  group.position.y = -chainLength / 2;

  // Add the group object to the scene
  scene.add(group);
}

buildScene();

// ライティング
// 環境光
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// スポットライト
const spotLight = new THREE.SpotLight(0xffffff, 0.5);
spotLight.position.set(5, 10, 5);
spotLight.angle = Math.PI / 5;
spotLight.penumbra = 0.5;
spotLight.decay = 2;
spotLight.distance = 500;
scene.add(spotLight);

// レンダリングする
function render() {
  renderer.render(scene, camera);
  const now = Date.now() * 0.001;
  spotLight.position.set(Math.sin(now) * 10, 10, Math.cos(now) * 10);
  requestAnimationFrame(render);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

render();