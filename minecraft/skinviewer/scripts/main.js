import * as THREE from 'three';
import { OrbitControls } from "./jsm/controls/OrbitControls.js"

import { loadPlayerSkin } from './player-model.js';
import { registerUserInterfaceBindings } from './user-interface.js';

// -----------
// Scene Setup
// -----------
export const scene = new THREE.Scene();

// Set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x888888, 1);

document.body.appendChild(renderer.domElement);

// Setup camera
let cameraIsOrthographic = false;
let camera = null;
let cameraControls = null;

function setupCamera(isOrthographic)
{
	// Setup camera
	if(isOrthographic)
	{
		camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000)

		camera.zoom = 18;
		camera.updateProjectionMatrix();
	}
	else
	{
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000.0);
	}

	// Setup camera controls
	cameraControls = new OrbitControls(camera, renderer.domElement);
}

setupCamera(cameraIsOrthographic);

// Set default camera position
camera.position.z = 40;
cameraControls.update();

// Add light to the scene
const light = new THREE.AmbientLight(0xFFFFFF);
scene.add(light);

// Listen for window resize
function onWindowResize()
{
	// Update camera
	camera.aspect = (window.innerWidth / window.innerHeight);
	camera.updateProjectionMatrix();

	// Update renderer
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

// --------------
// Model Creation
// --------------
loadPlayerSkin("./models/steve.png", scene);

// Bind user interface buttons to their functions
registerUserInterfaceBindings();

// ---------------
// Render function
// ---------------
function doRender()
{
	requestAnimationFrame(doRender);

	cameraControls.update();

	renderer.render(scene, camera);
}

doRender();
