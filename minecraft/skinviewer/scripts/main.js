import * as THREE from 'three';

import { OrbitControls } from "./jsm/controls/OrbitControls.js"
import { OBJLoader } from "./jsm/loaders/OBJLoader.js";

// -----------
// Scene Setup
// -----------
const scene = new THREE.Scene();

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

// --------------
// Model Creation
// --------------
const playerModelLoader = new OBJLoader();
let playerModel = null;

function selectPlayerModel(texture)
{
	// Choose what player model to load
	let playerModelPath = null;
	if(texture.image.height == texture.image.width)
	{
		playerModelPath = "./models/steve.obj";
	}
	else if(texture.image.height == (texture.image.width / 2))
	{
		playerModelPath = "./models/steve_classic.obj";
	}
	else
	{
		alert("Invalid skin dimensions!");
	}

	// Load the desired player model
	if(playerModelPath != null)
	{
		playerModelLoader.load(
			playerModelPath,
			model =>
			{
				model.rotation.y = -90 * (Math.PI / 180);

				// Remove existing player model from the scene
				if(playerModel != null)
				{
					scene.remove(playerModel);
				}

				// Set the player model
				playerModel = model;

				// Update the material for each child mesh of the player model
				playerModel.traverse(
					child =>
					{
						if(child.isMesh)
						{
							// Create a clone of the material so each "part" has a unique material
							const clonedMaterial = child.material.clone();

							// Mark overlay meshes as transparent
							if(child.name.endsWith("_overlay"))
							{
								clonedMaterial.transparent = true;
								clonedMaterial.depthWrite = false;
							}

							// Set the texture, and notify material of updates
							clonedMaterial.map = texture;
							clonedMaterial.needsUpdate = true;

							// Assign the new material to the child
							child.material = clonedMaterial;
						}
					}
				);

				// Add the player model to the scene
				scene.add(playerModel);
			},
			xhr => {},
			error =>
			{
				console.log("Failed to load player model: " + error);
			}
		);
	}
}

function setPlayerSkin(texturePath)
{
	new THREE.TextureLoader().load(
		texturePath,
		texture =>
		{
			// Set texture parameters
			texture.magFilter = THREE.NearestFilter;
			texture.minFilter = THREE.NearestFilter;

			// Update the player model
			selectPlayerModel(texture);
		},
		xhr => {},
		error =>
		{
			console.log("Failed to load texture: " + error);
		}
	);
}

setPlayerSkin("./models/steve.png");

// --------------
// User Interface
// --------------
function uiLoadSkin()
{
	// Open a file selector dialog
	let fileSelector = document.createElement("input");
	fileSelector.type = "file";

	fileSelector.onchange = e =>
	{
		// Set the player skin
		setPlayerSkin(URL.createObjectURL(e.target.files[0]));
	}

	fileSelector.click();
}
document.getElementById("ui-load-skin").addEventListener("click", uiLoadSkin, false);

/*function uiChangeCamera()
{
	cameraIsOrthographic = !cameraIsOrthographic;

	// Set camera object
	setupCamera(cameraIsOrthographic);
}
document.getElementById("ui-change-camera").addEventListener("click", uiChangeCamera, false);*/

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
