import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import init, { RubiksCube, Move } from "../pkg/rubiks_cube_wasm.js";

const MOVE_KEY_TO_ENUM = {
  F: Move.F,
  "F'": Move.FPrime,
  F2: Move.F2,
  R: Move.R,
  "R'": Move.RPrime,
  R2: Move.R2,
  U: Move.U,
  "U'": Move.UPrime,
  U2: Move.U2,
  B: Move.B,
  "B'": Move.BPrime,
  B2: Move.B2,
  L: Move.L,
  "L'": Move.LPrime,
  L2: Move.L2,
  D: Move.D,
  "D'": Move.DPrime,
  D2: Move.D2,
};

const INVERSE_MOVE_MAP = {
  F: "F'",
  "F'": "F",
  F2: "F2",
  R: "R'",
  "R'": "R",
  R2: "R2",
  U: "U'",
  "U'": "U",
  U2: "U2",
  B: "B'",
  "B'": "B",
  B2: "B2",
  L: "L'",
  "L'": "L",
  L2: "L2",
  D: "D'",
  "D'": "D",
  D2: "D2",
};

const FACE_ROTATION_CONFIG = {
  F: { axis: "z", level: 2, direction: 1 },
  B: { axis: "z", level: 0, direction: -1 },
  R: { axis: "x", level: 2, direction: 1 },
  L: { axis: "x", level: 0, direction: -1 },
  U: { axis: "y", level: 2, direction: 1 },
  D: { axis: "y", level: 0, direction: -1 },
};

const SCRAMBLE_MOVES = Object.keys(MOVE_KEY_TO_ENUM);
const HISTORY_CHUNK_SIZE = 12;
const THEME_STORAGE_KEY = "rubiks-cube-theme";

const BASE_CUBIE_SIZE = 0.56;
const STICKER_INSET = 0.08;
const STICKER_SIZE = BASE_CUBIE_SIZE - STICKER_INSET;
const STICKER_OFFSET = BASE_CUBIE_SIZE / 2 + 0.025;
const CUBIE_GAP = 0.14;
const STRIDE = BASE_CUBIE_SIZE + CUBIE_GAP;

const BASE_CUBIE_GEOMETRY = new THREE.BoxGeometry(
  BASE_CUBIE_SIZE,
  BASE_CUBIE_SIZE,
  BASE_CUBIE_SIZE
);
const STICKER_GEOMETRY = new THREE.PlaneGeometry(
  STICKER_SIZE,
  STICKER_SIZE,
  1,
  1
);
const EDGE_GEOMETRY = new THREE.EdgesGeometry(
  new THREE.BoxGeometry(
    BASE_CUBIE_SIZE + 0.02,
    BASE_CUBIE_SIZE + 0.02,
    BASE_CUBIE_SIZE + 0.02
  )
);

const EDGE_MATERIAL = new THREE.LineBasicMaterial({ color: 0x000000 });
const BASE_CUBIE_MATERIAL = new THREE.MeshStandardMaterial({
  color: 0x0f101c,
  metalness: 0.35,
  roughness: 0.55,
});

const COLORS = [
  0xff0000, // Front - Red
  0xff8800, // Back - Orange
  0x0000ff, // Right - Blue
  0x00ff00, // Left - Green
  0xffffff, // Up - White
  0xffff00, // Down - Yellow
];

const STICKER_MATERIALS = COLORS.map((hex) => {
  const color = new THREE.Color(hex);
  return new THREE.MeshStandardMaterial({
    color,
    metalness: 0.15,
    roughness: 0.32,
    emissive: color.clone().multiplyScalar(0.08),
    emissiveIntensity: 0.6,
    side: THREE.DoubleSide,
  });
});

const INITIAL_CAMERA_POSITION = new THREE.Vector3(8, 8, 8);

const ANIMATION_SETTINGS = {
  baseDuration: 320,
  speed: 1,
  easing(t) {
    return 1 - Math.pow(1 - t, 3);
  },
};

let cube;
let scene;
let camera;
let renderer;
let cubeGroup;
let orbitControls;
let raycaster;
let pointer;

let isAnimating = false;
let moveHistory = [];
let moveQueue = [];
let scrambleSequence = [];
let lastActionLabel = "なし";

let pointerDownInfo = null;
let pointerMoved = false;

async function initApp() {
  try {
    await init();
    cube = new RubiksCube();
    initThreeJS();
    createCube();
    setupControls();
    setupTheme();
    animate();
    updateStatus();
  } catch (error) {
    console.error("Failed to initialize app:", error);
  }
}

function initThreeJS() {
  const canvas = document.getElementById("cube-canvas");
  const container = document.getElementById("canvas-container");

  if (!canvas || !container) {
    console.error("Canvas or container element missing");
    return;
  }

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x090b16);
  scene.fog = new THREE.Fog(0x090b16, 22, 46);

  const width = container.clientWidth || 800;
  const height = container.clientHeight || 600;

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.copy(INITIAL_CAMERA_POSITION);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  if ("outputColorSpace" in renderer) {
    renderer.outputColorSpace = THREE.SRGBColorSpace;
  }
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.06;
  renderer.physicallyCorrectLights = true;

  orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDamping = true;
  orbitControls.dampingFactor = 0.08;
  orbitControls.enablePan = false;
  orbitControls.minDistance = 6;
  orbitControls.maxDistance = 18;
  orbitControls.target.set(0, 0, 0);
  orbitControls.maxPolarAngle = Math.PI * 0.92;
  orbitControls.update();

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
  scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0xf2f4ff, 0x10101a, 0.6);
  hemiLight.position.set(0, 6, 0);
  scene.add(hemiLight);

  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight1.position.set(6, 9, 6);
  directionalLight1.castShadow = true;
  directionalLight1.shadow.mapSize.width = 1024;
  directionalLight1.shadow.mapSize.height = 1024;
  directionalLight1.shadow.camera.near = 0.5;
  directionalLight1.shadow.camera.far = 30;
  scene.add(directionalLight1);

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.35);
  directionalLight2.position.set(-6, -4, -6);
  scene.add(directionalLight2);

  const floorGeometry = new THREE.CircleGeometry(12, 64);
  const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0x111523,
    metalness: 0.18,
    roughness: 0.85,
    transparent: true,
    opacity: 0.97,
  });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.receiveShadow = true;
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.45;
  scene.add(floor);

  raycaster = new THREE.Raycaster();
  pointer = new THREE.Vector2();

  renderer.domElement.addEventListener("pointerdown", handlePointerDown);
  renderer.domElement.addEventListener("pointermove", handlePointerMove);
  renderer.domElement.addEventListener("pointerup", handlePointerUp);
  renderer.domElement.addEventListener("pointerleave", handlePointerUp);

  window.addEventListener("resize", onWindowResize);
}

function createCube() {
  if (!cube || !scene) {
    return;
  }

  if (cubeGroup) {
    scene.remove(cubeGroup);
  }

  cubeGroup = new THREE.Group();
  const state = cube.get_state();

  if (!state || state.length !== 54) {
    console.error("Unexpected cube state", state);
    return;
  }

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      for (let z = 0; z < 3; z++) {
        const cubie = createCubie(x, y, z, state);
        cubie.position.set(
          (x - 1) * STRIDE,
          (y - 1) * STRIDE,
          (z - 1) * STRIDE
        );
        cubie.userData.gridPosition = { x, y, z };
        cubeGroup.add(cubie);
      }
    }
  }

  scene.add(cubeGroup);
  renderScene();
}

function createCubie(x, y, z, state) {
  const cubieGroup = new THREE.Group();

  const core = new THREE.Mesh(BASE_CUBIE_GEOMETRY, BASE_CUBIE_MATERIAL);
  core.castShadow = true;
  core.receiveShadow = true;
  cubieGroup.add(core);

  const edgeFrame = new THREE.LineSegments(EDGE_GEOMETRY, EDGE_MATERIAL);
  edgeFrame.renderOrder = 1;
  cubieGroup.add(edgeFrame);

  const addSticker = (faceIndex, stickerIndex, position, rotation = {}) => {
    if (stickerIndex < 0 || stickerIndex > 8) {
      return;
    }
    const material = STICKER_MATERIALS[state[faceIndex * 9 + stickerIndex]];
    const sticker = new THREE.Mesh(STICKER_GEOMETRY, material);
    sticker.position.set(position.x, position.y, position.z);
    sticker.rotation.set(rotation.x || 0, rotation.y || 0, rotation.z || 0);
    sticker.renderOrder = 2;
    cubieGroup.add(sticker);
  };

  if (z === 2) {
    const stickerIndex = (2 - y) * 3 + x;
    addSticker(0, stickerIndex, { x: 0, y: 0, z: STICKER_OFFSET });
  }

  if (z === 0) {
    const stickerIndex = (2 - y) * 3 + (2 - x);
    addSticker(
      1,
      stickerIndex,
      { x: 0, y: 0, z: -STICKER_OFFSET },
      { y: Math.PI }
    );
  }

  if (x === 2) {
    const stickerIndex = (2 - y) * 3 + (2 - z);
    addSticker(
      2,
      stickerIndex,
      { x: STICKER_OFFSET, y: 0, z: 0 },
      { y: Math.PI / 2 }
    );
  }

  if (x === 0) {
    const stickerIndex = (2 - y) * 3 + z;
    addSticker(
      3,
      stickerIndex,
      { x: -STICKER_OFFSET, y: 0, z: 0 },
      { y: -Math.PI / 2 }
    );
  }

  if (y === 2) {
    const stickerIndex = (2 - z) * 3 + x;
    addSticker(
      4,
      stickerIndex,
      { x: 0, y: STICKER_OFFSET, z: 0 },
      { x: -Math.PI / 2 }
    );
  }

  if (y === 0) {
    const stickerIndex = z * 3 + x;
    addSticker(
      5,
      stickerIndex,
      { x: 0, y: -STICKER_OFFSET, z: 0 },
      { x: Math.PI / 2 }
    );
  }

  return cubieGroup;
}

function setupControls() {
  const scrambleLengthInput = document.getElementById("scramble-length");
  const scrambleLengthValue = document.getElementById("scramble-length-value");
  if (scrambleLengthInput && scrambleLengthValue) {
    scrambleLengthValue.textContent = scrambleLengthInput.value;
    scrambleLengthInput.addEventListener("input", (event) => {
      scrambleLengthValue.textContent = event.target.value;
    });
  }

  const animationSpeedInput = document.getElementById("animation-speed");
  const animationSpeedValue = document.getElementById("animation-speed-value");
  if (animationSpeedInput && animationSpeedValue) {
    animationSpeedValue.textContent = `${parseFloat(animationSpeedInput.value).toFixed(1)}x`;
    animationSpeedInput.addEventListener("input", (event) => {
      const speed = parseFloat(event.target.value);
      ANIMATION_SETTINGS.speed = speed;
      animationSpeedValue.textContent = `${speed.toFixed(1)}x`;
    });
  }

  const scrambleButton = document.getElementById("scramble");
  scrambleButton?.addEventListener("click", () => {
    if (!isAnimating && moveQueue.length === 0) {
      scrambleCube();
    }
  });

  const undoButton = document.getElementById("undo");
  undoButton?.addEventListener("click", () => {
    if (!isAnimating && moveQueue.length === 0) {
      undoLastMove();
    }
  });

  const resetViewButton = document.getElementById("reset-view");
  resetViewButton?.addEventListener("click", () => {
    if (!isAnimating) {
      resetView();
    }
  });

  const resetCubeButton = document.getElementById("reset");
  resetCubeButton?.addEventListener("click", () => {
    if (!isAnimating) {
      resetCube();
    }
  });

  Object.keys(MOVE_KEY_TO_ENUM).forEach((id) => {
    const button = document.getElementById(id);
    button?.addEventListener("click", () => {
      enqueueMove(id, { record: true, source: "button" });
    });
  });

  document.addEventListener("keydown", (event) => {
    if (isAnimating || moveQueue.length > 0) return;

    const key = event.key.toLowerCase();
    const baseMoves = {
      f: "F",
      r: "R",
      u: "U",
      b: "B",
      l: "L",
      d: "D",
    };

    const base = baseMoves[key];
    if (!base) {
      return;
    }

    const moveKey = buildMoveKeyFromModifiers(base, event);
    enqueueMove(moveKey, { record: true, source: "keyboard" });
  });
}

function setupTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) {
    return;
  }

  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const initialTheme = storedTheme || (prefersLight ? "light" : "dark");
  applyTheme(initialTheme);

  themeToggle.addEventListener("click", () => {
    const current = document.body.dataset.theme === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  });
}

function applyTheme(theme) {
  document.body.dataset.theme = theme === "light" ? "light" : "dark";
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.textContent = theme === "light" ? "☀️" : "🌙";
    themeToggle.setAttribute(
      "aria-label",
      theme === "light" ? "ダークテーマに切り替え" : "ライトテーマに切り替え"
    );
  }
}

function enqueueMove(moveKey, options = {}) {
  if (!MOVE_KEY_TO_ENUM[moveKey]) {
    console.warn("Unknown move requested:", moveKey);
    return;
  }

  if (isAnimating) {
    moveQueue.push({ moveKey, options });
    updateStatus();
    return;
  }

  moveQueue.push({ moveKey, options });
  updateStatus();
  processMoveQueue();
}

function processMoveQueue() {
  if (isAnimating) {
    return;
  }

  const next = moveQueue.shift();
  if (!next) {
    updateStatus();
    return;
  }

  animateMove(next.moveKey, next.options);
}

function animateMove(moveKey, options) {
  if (!cubeGroup) {
    return;
  }

  const faceKey = moveKey.charAt(0);
  const faceConfig = FACE_ROTATION_CONFIG[faceKey];
  if (!faceConfig) {
    return;
  }

  const rotationGroup = new THREE.Group();
  rotationGroup.position.set(0, 0, 0);
  cubeGroup.add(rotationGroup);

  const selectedCubies = cubeGroup.children.filter((child) => {
    const coords = child.userData?.gridPosition;
    if (!coords) {
      return false;
    }
    return coords[faceConfig.axis] === faceConfig.level;
  });

  selectedCubies.forEach((cubie) => {
    rotationGroup.attach(cubie);
  });

  const targetAngle = computeTargetAngle(moveKey, faceConfig.direction);
  const duration = getAnimationDuration(moveKey);
  const startTime = performance.now();

  isAnimating = true;

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = ANIMATION_SETTINGS.easing(progress);

    rotationGroup.rotation[faceConfig.axis] = targetAngle * eased;
    renderScene();

    if (progress < 1) {
      requestAnimationFrame(step);
      return;
    }

    finalizeMove(rotationGroup, selectedCubies, moveKey, options);
  }

  requestAnimationFrame(step);
}

function computeTargetAngle(moveKey, direction) {
  const baseAngle = -direction * (Math.PI / 2);

  if (moveKey.endsWith("2")) {
    return baseAngle * 2;
  }

  if (moveKey.includes("'")) {
    return -baseAngle;
  }

  return baseAngle;
}

function getAnimationDuration(moveKey) {
  const base = ANIMATION_SETTINGS.baseDuration;
  const multiplier = moveKey.endsWith("2") ? 1.8 : 1;
  return Math.max(80, (base * multiplier) / ANIMATION_SETTINGS.speed);
}

function finalizeMove(rotationGroup, rotatedCubies, moveKey, options) {
  rotatedCubies.forEach((cubie) => {
    cubeGroup.attach(cubie);
  });
  cubeGroup.remove(rotationGroup);

  snapCubiesToGrid(rotatedCubies);

  const moveEnum = MOVE_KEY_TO_ENUM[moveKey];
  cube.apply_move(moveEnum);

  handleMoveCompletion(moveKey, options);

  isAnimating = false;
  updateStatus();
  processMoveQueue();
}

function snapCubiesToGrid(cubies) {
  cubies.forEach((cubie) => {
    const pos = cubie.position;

    const gridX = clampIndex(Math.round(pos.x / STRIDE) + 1);
    const gridY = clampIndex(Math.round(pos.y / STRIDE) + 1);
    const gridZ = clampIndex(Math.round(pos.z / STRIDE) + 1);

    cubie.position.set(
      (gridX - 1) * STRIDE,
      (gridY - 1) * STRIDE,
      (gridZ - 1) * STRIDE
    );

    cubie.userData.gridPosition = { x: gridX, y: gridY, z: gridZ };
    cubie.quaternion.normalize();
  });
}

function clampIndex(value) {
  return Math.min(2, Math.max(0, value));
}

function handleMoveCompletion(moveKey, options) {
  if (options.record) {
    moveHistory.push(moveKey);
    lastActionLabel = moveKey;
    scrambleSequence = [];
  } else if (options.source === "undo") {
    lastActionLabel = options.undoneMove
      ? `一手戻し (${options.undoneMove})`
      : "一手戻し";
  } else if (options.source === "scramble") {
    lastActionLabel = `スクランブル (${moveKey})`;
  } else {
    lastActionLabel = moveKey;
  }
}

function scrambleCube() {
  const scrambleLengthInput = document.getElementById("scramble-length");
  const scrambleCount = scrambleLengthInput
    ? parseInt(scrambleLengthInput.value, 10) || 20
    : 20;

  const sequence = [];
  let previousFace = null;

  for (let i = 0; i < scrambleCount; i++) {
    let candidate;
    do {
      candidate =
        SCRAMBLE_MOVES[Math.floor(Math.random() * SCRAMBLE_MOVES.length)];
    } while (previousFace && candidate.charAt(0) === previousFace);

    sequence.push(candidate);
    previousFace = candidate.charAt(0);
  }

  scrambleSequence = sequence.slice();
  moveHistory = [];
  lastActionLabel = "スクランブル準備中";
  updateStatus();

  sequence.forEach((moveKey) => {
    enqueueMove(moveKey, { record: false, source: "scramble" });
  });
}

function undoLastMove() {
  if (!cube || moveHistory.length === 0) {
    return;
  }

  const lastMove = moveHistory.pop();
  const inverse = INVERSE_MOVE_MAP[lastMove];

  if (!inverse) {
    moveHistory.push(lastMove);
    return;
  }

  enqueueMove(inverse, { record: false, source: "undo", undoneMove: lastMove });
  updateStatus();
}

function resetCube() {
  moveQueue.length = 0;
  cube.reset();
  moveHistory = [];
  scrambleSequence = [];
  lastActionLabel = "リセット";
  createCube();
  updateStatus();
  renderScene();
}

function resetView() {
  camera.position.copy(INITIAL_CAMERA_POSITION);
  orbitControls.target.set(0, 0, 0);
  orbitControls.update();
  renderScene();
}

function animate() {
  requestAnimationFrame(animate);
  if (orbitControls) {
    orbitControls.update();
  }
  renderScene();
}

function renderScene() {
  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

function updateStatus() {
  const statusText = document.getElementById("status-text");
  const moveCounter = document.getElementById("move-counter");
  const lastMove = document.getElementById("last-move");
  const historyList = document.getElementById("history-list");
  const undoButton = document.getElementById("undo");
  const queueIndicator = document.getElementById("queue-indicator");

  if (statusText && cube) {
    const solved = cube.is_solved();
    statusText.textContent = solved
      ? "状態: ✅ 解かれています"
      : "状態: 🔀 スクランブル中";
    statusText.classList.toggle("solved", solved);
  }

  if (moveCounter) {
    moveCounter.textContent = `手数: ${moveHistory.length}`;
  }

  if (lastMove) {
    lastMove.textContent = `直近の操作: ${lastActionLabel}`;
  }

  if (queueIndicator) {
    queueIndicator.textContent = `待機中の操作: ${moveQueue.length}`;
  }

  if (undoButton) {
    undoButton.disabled = moveHistory.length === 0 || isAnimating || moveQueue.length > 0;
  }

  if (historyList) {
    const lines = [
      ...formatMoveLines("スクランブル", scrambleSequence),
      ...formatMoveLines("手順", moveHistory),
    ];

    historyList.textContent =
      lines.length === 0 ? "まだ動きがありません" : lines.join("\n");
  }
}

function formatMoveLines(label, moves) {
  if (!moves || moves.length === 0) {
    return [];
  }

  const chunks = [];
  for (let i = 0; i < moves.length; i += HISTORY_CHUNK_SIZE) {
    chunks.push(moves.slice(i, i + HISTORY_CHUNK_SIZE).join(" "));
  }

  const indent = " ".repeat(label.length + 2);
  return chunks.map((chunk, index) =>
    index === 0 ? `${label}: ${chunk}` : `${indent}${chunk}`
  );
}

function onWindowResize() {
  if (!camera || !renderer) {
    return;
  }

  const container = document.getElementById("canvas-container");
  const width = container?.clientWidth || window.innerWidth;
  const height = container?.clientHeight || window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderScene();
}

function handlePointerDown(event) {
  if (isAnimating || moveQueue.length > 0) {
    pointerDownInfo = null;
    return;
  }

  setPointerFromEvent(event);
  const intersection = intersectCube();
  if (!intersection) {
    pointerDownInfo = null;
    return;
  }

  const baseMove = determineMoveFromIntersection(intersection);
  if (!baseMove) {
    pointerDownInfo = null;
    return;
  }

  pointerDownInfo = {
    baseMove,
    startX: event.clientX,
    startY: event.clientY,
    pointerEvent: event,
  };
  pointerMoved = false;
}

function handlePointerMove(event) {
  if (!pointerDownInfo) {
    return;
  }

  const dx = event.clientX - pointerDownInfo.startX;
  const dy = event.clientY - pointerDownInfo.startY;
  if (Math.hypot(dx, dy) > 6) {
    pointerMoved = true;
  }
}

function handlePointerUp(event) {
  if (!pointerDownInfo) {
    return;
  }

  if (!pointerMoved) {
    const moveKey = buildMoveKeyFromModifiers(pointerDownInfo.baseMove, event);
    enqueueMove(moveKey, { record: true, source: "pointer" });
  }

  pointerDownInfo = null;
  pointerMoved = false;
}

function setPointerFromEvent(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
}

function intersectCube() {
  if (!cubeGroup || !raycaster || !camera) {
    return null;
  }

  raycaster.setFromCamera(pointer, camera);
  const intersections = raycaster.intersectObjects(cubeGroup.children, true);
  return intersections[0] || null;
}

function determineMoveFromIntersection(intersection) {
  if (!intersection) {
    return null;
  }

  const ma = new THREE.Matrix3().getNormalMatrix(intersection.object.matrixWorld);
  const worldNormal = intersection.face.normal
    .clone()
    .applyMatrix3(ma)
    .normalize();

  const absX = Math.abs(worldNormal.x);
  const absY = Math.abs(worldNormal.y);
  const absZ = Math.abs(worldNormal.z);

  if (absX > absY && absX > absZ) {
    return worldNormal.x > 0 ? "R" : "L";
  }

  if (absY > absX && absY > absZ) {
    return worldNormal.y > 0 ? "U" : "D";
  }

  if (absZ > absX && absZ > absY) {
    return worldNormal.z > 0 ? "F" : "B";
  }

  return null;
}

function buildMoveKeyFromModifiers(baseMove, event) {
  if (event.altKey) {
    return `${baseMove}2`;
  }
  if (event.shiftKey) {
    return `${baseMove}'`;
  }
  return baseMove;
}

initApp().catch(console.error);
