// シーン、カメラ、レンダラーを作成
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1);
document.body.appendChild(renderer.domElement);


// シーンを作成
function buildScene() {
  const chainRadius = 0.3;
  const chainLength = 4;
  const chainSegments = 16;
  const leftCylinderTopX = -2;
  const cylinderMarginX = 3;
  const cylinderTopY = 0;

  const rightCylinderTopX = leftCylinderTopX + cylinderMarginX;
  const cylinderBottomY = cylinderTopY + chainLength;
  const leftCylinderBottomX = rightCylinderTopX;
  const rightCylinderBottomX = leftCylinderTopX + cylinderMarginX;

  const topCurveEdgeX = rightCylinderTopX - (cylinderMarginX / 2);
  console.log(topCurveEdgeX);
  // const topCurveEdgeX = 0.3;
  const topCurveEdgeY = 4;


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
  const bottomCurvePoints = topCurvePoints.slice().reverse();
  const bottomCurve = new THREE.CatmullRomCurve3(bottomCurvePoints);

  // Rotate top curve 180 degrees
  topCurve.points.forEach((point) => {
    point.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
  });

  // Tube geometry
  const geometry = new THREE.TubeGeometry(
    topCurve,
    topCurvePoints.length * 4,
    chainRadius,
    chainSegments,
    false
  );

  // Tube mesh
  const mesh = new THREE.Mesh(geometry, chainMaterial);

  // Bottom curve mesh
  const bottomCurveGeometry = new THREE.TubeGeometry(
    bottomCurve,
    bottomCurvePoints.length * 4,
    chainRadius,
    chainSegments,
    false
  );
  const bottomCurveMesh = new THREE.Mesh(bottomCurveGeometry, chainMaterial);

  // Add objects to scene 

  
  scene.add(leftCylinderMesh, rightCylinderMesh, topCurve, bottomCurveMesh);
}

buildScene();

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

// レンダリンcグする
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