import * as THREE from "three";
import init, { RubiksCube, Move } from "../pkg/rubiks_cube_wasm.js";

let cube;
let scene, camera, renderer;
let cubeGroup;
let isAnimating = false;
let raycaster, mouse;
let controls = {
  rotateX: 0,
  rotateY: 0,
  zoom: 1,
};
let mouseDown = false;
let lastMouseX = 0;
let lastMouseY = 0;

// Face colors (Rubik's Cube standard)
const COLORS = [
  0xff0000, // Red (Front)
  0xff8800, // Orange (Back)
  0x0000ff, // Blue (Right)
  0x00ff00, // Green (Left)
  0xffffff, // White (Up)
  0xffff00, // Yellow (Down)
];

const FACE_NAMES = ["Front", "Back", "Right", "Left", "Up", "Down"];

const BASE_CUBIE_SIZE = 0.56;
const STICKER_INSET = 0.08;
const STICKER_SIZE = BASE_CUBIE_SIZE - STICKER_INSET;
const STICKER_OFFSET = BASE_CUBIE_SIZE / 2 + 0.025;

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

const SCRAMBLE_MOVES = Object.keys(MOVE_KEY_TO_ENUM);
const HISTORY_CHUNK_SIZE = 12;

let moveHistory = [];
let scrambleSequence = [];

async function initApp() {
  try {
    console.log("Initializing WASM...");
    await init();
    console.log("WASM initialized");

    // Check if RubiksCube is available
    if (!RubiksCube) {
      console.error("RubiksCube class is not available after init");
      return;
    }

    console.log("RubiksCube class:", RubiksCube);
    console.log("RubiksCube constructor:", typeof RubiksCube);

    cube = new RubiksCube();
    console.log("RubiksCube instance created:", cube);

    initThreeJS();
    console.log("Three.js initialized:", {
      scene: !!scene,
      camera: !!camera,
      renderer: !!renderer,
    });

    if (!scene || !camera || !renderer) {
      console.error("Three.js initialization failed");
      return;
    }

    createCube();
    console.log("Cube created, scene children:", scene.children.length);
    setupControls();
    animate();
    updateStatus();
    console.log("App initialized successfully");
  } catch (error) {
    console.error("Failed to initialize app:", error);
    console.error(error.stack);
  }
}

function initThreeJS() {
  const canvas = document.getElementById("cube-canvas");
  const container = document.getElementById("canvas-container");

  if (!canvas || !container) {
    console.error("Canvas or container element not found", {
      canvas: !!canvas,
      container: !!container,
    });
    return;
  }

  console.log("Container size:", {
    width: container.clientWidth,
    height: container.clientHeight,
    containerDisplay: window.getComputedStyle(container).display,
    containerPosition: window.getComputedStyle(container).position,
  });

  console.log("Canvas element:", {
    canvasDisplay: window.getComputedStyle(canvas).display,
    canvasWidth: window.getComputedStyle(canvas).width,
    canvasHeight: window.getComputedStyle(canvas).height,
    canvasVisible: canvas.offsetWidth > 0 && canvas.offsetHeight > 0,
    canvasOffsetWidth: canvas.offsetWidth,
    canvasOffsetHeight: canvas.offsetHeight,
  });

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x090b16);
  scene.fog = new THREE.Fog(0x090b16, 18, 42);

  const width = container.clientWidth || 800;
  const height = container.clientHeight || 600;

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  // Position camera to view the cube (which is centered at origin)
  // Cube is about 4 units wide, so position camera at about 8 units away
  camera.position.set(8, 8, 8);
  camera.lookAt(0, 0, 0);

  // Check WebGL support (compatible with different Three.js versions)
  let webglSupported = false;
  try {
    const testCanvas = document.createElement("canvas");
    const testGl =
      testCanvas.getContext("webgl") ||
      testCanvas.getContext("experimental-webgl");
    webglSupported = !!testGl;
    if (testGl) {
      const debugInfo = testGl.getExtension("WEBGL_debug_renderer_info");
      if (debugInfo) {
        console.log(
          "WebGL Renderer:",
          testGl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        );
      }
    }
  } catch (e) {
    console.warn("WebGL support check failed:", e);
  }

  if (!webglSupported) {
    console.error("WebGL is not supported in this browser!");
    alert(
      "WebGL is not supported in this browser. Please use a modern browser."
    );
    return;
  }

  try {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    if ("outputColorSpace" in renderer) {
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.physicallyCorrectLights = true;

    const glContext = renderer.getContext();
    console.log("Renderer created:", {
      width,
      height,
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      renderer: !!renderer,
      glContext: !!glContext,
      webglVersion: glContext
        ? glContext.getParameter(glContext.VERSION)
        : null,
    });

    // Test render
    renderer.render(scene, camera);
    console.log("Test render completed");
  } catch (error) {
    console.error("Failed to create WebGL renderer:", error);
    return;
  }

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0xf2f4ff, 0x10101a, 0.55);
  hemiLight.position.set(0, 6, 0);
  scene.add(hemiLight);

  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight1.position.set(5, 10, 5);
  directionalLight1.castShadow = true;
  directionalLight1.shadow.mapSize.width = 1024;
  directionalLight1.shadow.mapSize.height = 1024;
  scene.add(directionalLight1);

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
  directionalLight2.position.set(-5, -5, -5);
  scene.add(directionalLight2);

  const floorGeometry = new THREE.CircleGeometry(10, 48);
  const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0x111523,
    metalness: 0.15,
    roughness: 0.85,
    transparent: true,
    opacity: 0.96,
  });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.receiveShadow = true;
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.4;
  scene.add(floor);

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  window.addEventListener("resize", onWindowResize);
}

function createCube() {
  if (!cube || !scene) {
    console.error("Cube or scene not initialized", {
      cube: !!cube,
      scene: !!scene,
    });
    return;
  }

  if (cubeGroup) {
    scene.remove(cubeGroup);
  }

  cubeGroup = new THREE.Group();
  const state = cube.get_state();

  if (!state || state.length !== 54) {
    console.error("Invalid cube state:", state);
    return;
  }

  const gap = 0.14;
  const stride = BASE_CUBIE_SIZE + gap;

  // Create 27 cubies (3x3x3)
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      for (let z = 0; z < 3; z++) {
        const cubie = createCubie(x, y, z, state);
        cubie.position.set(
          (x - 1) * stride,
          (y - 1) * stride,
          (z - 1) * stride
        );
        cubeGroup.add(cubie);
      }
    }
  }

  scene.add(cubeGroup);

  const logInfo = {
    cubiesCount: cubeGroup.children.length,
    sceneChildren: scene.children.length,
    cubeGroupPosition: {
      x: cubeGroup.position.x,
      y: cubeGroup.position.y,
      z: cubeGroup.position.z,
    },
    cubeGroupRotation: {
      x: cubeGroup.rotation.x,
      y: cubeGroup.rotation.y,
      z: cubeGroup.rotation.z,
    },
  };

  console.log("Cube created and added to scene", logInfo);
  console.log(
    "Full log info (expand to see details):",
    JSON.stringify(logInfo, null, 2)
  );

  // Force a render to verify everything works
  if (renderer && scene && camera) {
    renderer.render(scene, camera);
    console.log("Initial render completed");
  }
}

function createCubie(x, y, z, state) {
  const group = new THREE.Group();

  const core = new THREE.Mesh(BASE_CUBIE_GEOMETRY, BASE_CUBIE_MATERIAL);
  core.castShadow = true;
  core.receiveShadow = true;
  group.add(core);

  const edgeFrame = new THREE.LineSegments(EDGE_GEOMETRY, EDGE_MATERIAL);
  edgeFrame.renderOrder = 1;
  group.add(edgeFrame);

  const addSticker = (faceIndex, stickerIndex, position, rotation = {}) => {
    const colorIndex = state[faceIndex * 9 + stickerIndex];
    if (colorIndex === undefined) {
      return;
    }

    const sticker = new THREE.Mesh(
      STICKER_GEOMETRY,
      STICKER_MATERIALS[colorIndex]
    );
    sticker.position.set(position.x, position.y, position.z);
    sticker.rotation.set(
      rotation.x || 0,
      rotation.y || 0,
      rotation.z || 0
    );
    sticker.renderOrder = 2;
    sticker.castShadow = false;
    sticker.receiveShadow = false;
    group.add(sticker);
  };

  if (z === 0) {
    const faceIndex = 0;
    const stickerIndex = (2 - y) * 3 + x;
    addSticker(
      faceIndex,
      stickerIndex,
      { x: 0, y: 0, z: STICKER_OFFSET },
      { y: 0 }
    );
  }

  if (z === 2) {
    const faceIndex = 1;
    const stickerIndex = (2 - y) * 3 + (2 - x);
    addSticker(
      faceIndex,
      stickerIndex,
      { x: 0, y: 0, z: -STICKER_OFFSET },
      { y: Math.PI }
    );
  }

  if (x === 2) {
    const faceIndex = 2;
    const stickerIndex = (2 - y) * 3 + (2 - z);
    addSticker(
      faceIndex,
      stickerIndex,
      { x: STICKER_OFFSET, y: 0, z: 0 },
      { y: Math.PI / 2 }
    );
  }

  if (x === 0) {
    const faceIndex = 3;
    const stickerIndex = (2 - y) * 3 + z;
    addSticker(
      faceIndex,
      stickerIndex,
      { x: -STICKER_OFFSET, y: 0, z: 0 },
      { y: -Math.PI / 2 }
    );
  }

  if (y === 2) {
    const faceIndex = 4;
    const stickerIndex = (2 - z) * 3 + x;
    addSticker(
      faceIndex,
      stickerIndex,
      { x: 0, y: STICKER_OFFSET, z: 0 },
      { x: -Math.PI / 2 }
    );
  }

  if (y === 0) {
    const faceIndex = 5;
    const stickerIndex = z * 3 + x;
    addSticker(
      faceIndex,
      stickerIndex,
      { x: 0, y: -STICKER_OFFSET, z: 0 },
      { x: Math.PI / 2 }
    );
  }

  return group;
}

function setupControls() {
  const canvas = document.getElementById("cube-canvas");

  // Mouse controls
  canvas.addEventListener("mousedown", (e) => {
    mouseDown = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });

  canvas.addEventListener("mousemove", (e) => {
    if (mouseDown && !isAnimating) {
      const deltaX = e.clientX - lastMouseX;
      const deltaY = e.clientY - lastMouseY;

      controls.rotateY += deltaX * 0.01;
      controls.rotateX += deltaY * 0.01;

      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    }
  });

  canvas.addEventListener("mouseup", () => {
    mouseDown = false;
  });

  canvas.addEventListener("mouseleave", () => {
    mouseDown = false;
  });

  // Wheel zoom
  canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    controls.zoom += e.deltaY * 0.001;
    controls.zoom = Math.max(0.5, Math.min(2, controls.zoom));
  });

  const scrambleLengthInput = document.getElementById("scramble-length");
  const scrambleLengthValue = document.getElementById("scramble-length-value");
  if (scrambleLengthInput && scrambleLengthValue) {
    scrambleLengthValue.textContent = scrambleLengthInput.value;
    scrambleLengthInput.addEventListener("input", (event) => {
      scrambleLengthValue.textContent = event.target.value;
    });
  }

  const scrambleButton = document.getElementById("scramble");
  if (scrambleButton) {
    scrambleButton.addEventListener("click", () => {
      if (!isAnimating) {
        scrambleCube();
      }
    });
  }

  const undoButton = document.getElementById("undo");
  if (undoButton) {
    undoButton.addEventListener("click", () => {
      if (!isAnimating) {
        undoLastMove();
      }
    });
  }

  const resetViewButton = document.getElementById("reset-view");
  if (resetViewButton) {
    resetViewButton.addEventListener("click", () => {
      if (!isAnimating) {
        resetView();
      }
    });
  }

  const resetButton = document.getElementById("reset");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      if (!isAnimating) {
        resetCube();
      }
    });
  }

  const moveButtonIds = Object.keys(MOVE_KEY_TO_ENUM);
  moveButtonIds.forEach((id) => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", () => {
        applyMoveKey(id);
      });
    }
  });

  document.addEventListener("keydown", (e) => {
    if (isAnimating) return;

    const key = e.key.toLowerCase();
    const baseMoves = {
      f: "F",
      r: "R",
      u: "U",
      b: "B",
      l: "L",
      d: "D",
    };

    const baseMove = baseMoves[key];
    if (!baseMove) {
      return;
    }

    let moveKey = baseMove;
    if (e.altKey) {
      moveKey = `${baseMove}2`;
    } else if (e.shiftKey) {
      moveKey = `${baseMove}'`;
    }

    applyMoveKey(moveKey);
  });
}

let frameCount = 0;
let hasLoggedInitialState = false;

function applyMoveKey(moveKey, options = {}) {
  if (!cube) {
    return;
  }

  const moveEnum = MOVE_KEY_TO_ENUM[moveKey];
  if (moveEnum === undefined) {
    console.warn("Unknown move key:", moveKey);
    return;
  }

  const { record = true } = options;

  cube.apply_move(moveEnum);

  if (record) {
    moveHistory.push(moveKey);
  }

  createCube();
  updateStatus();
}

function scrambleCube() {
  if (!cube) {
    return;
  }

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
    } while (previousFace && candidate.charAt(0) === previousFace.charAt(0));

    sequence.push(candidate);
    previousFace = candidate;
  }

  scrambleSequence = sequence;
  moveHistory = [];

  sequence.forEach((moveKey) => {
    applyMoveKey(moveKey, { record: false });
  });

  updateStatus();
}

function undoLastMove() {
  if (!cube || moveHistory.length === 0) {
    return;
  }

  const lastMove = moveHistory.pop();
  const inverse = INVERSE_MOVE_MAP[lastMove];

  if (!inverse) {
    console.warn("Inverse move not found for:", lastMove);
    moveHistory.push(lastMove);
    return;
  }

  cube.apply_move(MOVE_KEY_TO_ENUM[inverse]);
  createCube();
  updateStatus();
}

function resetCube() {
  if (!cube) {
    return;
  }

  cube.reset();
  moveHistory = [];
  scrambleSequence = [];
  createCube();
  updateStatus();
}

function resetView() {
  controls.rotateX = 0;
  controls.rotateY = 0;
  controls.zoom = 1;
  renderScene();
}

function renderScene() {
  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

function animate() {
  requestAnimationFrame(animate);

  if (!scene || !camera || !renderer) {
    if (!hasLoggedInitialState) {
      console.error("Cannot animate - missing components", {
        scene: !!scene,
        camera: !!camera,
        renderer: !!renderer,
      });
      hasLoggedInitialState = true;
    }
    return;
  }

  if (frameCount === 0) {
    console.log("Animation started successfully");
  }

  // Apply rotation controls
  if (cubeGroup) {
    cubeGroup.rotation.y = controls.rotateY;
    cubeGroup.rotation.x = controls.rotateX;
  }

  // Apply zoom - orbit around the cube
  const baseDistance = 12 / controls.zoom;
  camera.position.set(
    Math.sin(controls.rotateY) * Math.cos(controls.rotateX) * baseDistance,
    Math.sin(controls.rotateX) * baseDistance,
    Math.cos(controls.rotateY) * Math.cos(controls.rotateX) * baseDistance
  );
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);

  if (frameCount === 60) {
    // Log once after 1 second (assuming 60fps)
    console.log("Rendering check:", {
      sceneChildren: scene.children.length,
      cubeGroupExists: !!cubeGroup,
      cubeGroupChildren: cubeGroup ? cubeGroup.children.length : 0,
      cameraPosition: camera.position,
      cameraRotation: camera.rotation,
    });
  }
  frameCount++;
}

function updateStatus() {
  const statusText = document.getElementById("status-text");
  if (!cube || !statusText) {
    return;
  }

  const solved = cube.is_solved();
  statusText.textContent = solved
    ? "状態: ✅ 解かれています"
    : "状態: 🔀 スクランブル中";
  statusText.classList.toggle("solved", solved);

  const moveCounter = document.getElementById("move-counter");
  if (moveCounter) {
    moveCounter.textContent = `手数: ${moveHistory.length}`;
  }

  const lastMove = document.getElementById("last-move");
  if (lastMove) {
    if (moveHistory.length > 0) {
      lastMove.textContent = `直近の操作: ${
        moveHistory[moveHistory.length - 1]
      }`;
    } else if (scrambleSequence.length > 0) {
      lastMove.textContent = "直近の操作: スクランブル完了";
    } else {
      lastMove.textContent = "直近の操作: なし";
    }
  }

  const undoButton = document.getElementById("undo");
  if (undoButton) {
    undoButton.disabled = moveHistory.length === 0;
  }

  const historyList = document.getElementById("history-list");
  if (historyList) {
    const lines = [
      ...formatMoveLines("スクランブル", scrambleSequence),
      ...formatMoveLines("手順", moveHistory),
    ];

    if (lines.length === 0) {
      historyList.textContent = "まだ動きがありません";
    } else {
      historyList.textContent = lines.join("\n");
    }
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
  if (!camera || !renderer) return;

  const container = document.getElementById("canvas-container");
  if (!container) return;

  const width = container.clientWidth || 800;
  const height = container.clientHeight || 600;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

initApp().catch(console.error);
