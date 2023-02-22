import * as THREE from 'three';
import { OBJLoader } from "./jsm/loaders/OBJLoader.js";

import { scene } from './main.js';

const playerModelLoader = new OBJLoader();

let playerModel = null;
let playerModelType = "steve";
let playerTexture = null;

export function togglePlayerModelType()
{
	if(playerModelType == "steve")
	{
		playerModelType = "alex";
	}
	else
	{
		playerModelType = "steve";
	}
}

export function loadPlayerModel()
{
	// Choose what player model to load
	let playerModelPath = null;
	
	if(playerTexture.image.height == playerTexture.image.width)
	{
		playerModelPath = `./models/${playerModelType}.obj`;
	}
	else if(playerTexture.image.height == (playerTexture.image.width / 2))
	{
		playerModelPath = `./models/${playerModelType}_classic.obj`;
	}
	else
	{
		alert("Failed to load player skin. Invalid image dimensions!");
		return;
	}

	// Load the chosen player model
	playerModelLoader.load(
		playerModelPath,
		model =>
		{
			// Remove previous model from the scene
			if(playerModel != null)
			{
				scene.remove(playerModel);
			}

			playerModel = model;

			// Set initial model rotation
			playerModel.rotation.y = -90 * (Math.PI / 180);

			// Update the material for each child mesh of the player model
			playerModel.traverse(
				child =>
				{
					if(child.isMesh)
					{
						// By default, each mesh of the model shares the same material instance
						// Clone the material so each mesh has it's own instance
						child.material = child.material.clone();

						// Check if this is an "overlay" mesh
						if(child.name.endsWith("overlay"))
						{
							// Enable transparency for this material
							child.material.transparent = true;
							child.material.depthWrite = false;
						}

						// Set the texture
						child.material.map = playerTexture;

						// Mark material as dirty
						child.material.needsUpdate = true;
					}
				}
			);

			// Add the new model to the scene
			scene.add(playerModel);
		},
		xhr => {},
		error =>
		{
			console.log("Failed to load player model: " + error);
		}
	);
}

export function loadPlayerSkin(texturePath)
{
	new THREE.TextureLoader().load(
		texturePath,
		texture =>
		{
			playerTexture = texture;

			// Set texture filter to nearest
			playerTexture.magFilter = THREE.NearestFilter;
			playerTexture.minFilter = THREE.NearestFilter;

			// Update player model
			loadPlayerModel();
		},
		xhr => {},
		error =>
		{
			console.log("Failed to load player skin texture: " + error);
		}
	);
}
