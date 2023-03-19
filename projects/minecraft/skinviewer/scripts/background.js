import { GLTFLoader } from "./jsm/loaders/GLTFLoader.js"

import { scene } from "./main.js";

const backgroundModelLoader = new GLTFLoader();

let backgroundModel = null;
let backgroundModelName = "none";

export function setBackground(backgroundName)
{
	// Check if this background is different from the current one
	if(backgroundName != backgroundModelName)
	{
		// Remove existing background from the scene
		if(backgroundModel != null)
		{
			scene.remove(backgroundModel);
		}

		backgroundModelName = backgroundName;

		// Load the new background model
		if(backgroundName != "none")
		{
			backgroundModelLoader.load(
				`./models/background/${backgroundName}.glb`,
				model =>
				{
					backgroundModel = model.scene;

					// Set model offset
					backgroundModel.position.set(0, -18, 0);

					// Iterate model children
					backgroundModel.traverse(
						child =>
						{
							if(child.isMesh)
							{
								// Set shadow stuff
								child.castShadow = true;
								child.receiveShadow = true;

								// Get rid of the awful specular shininess
								child.material.shininess = 0;
							}
						}
					);

					// Add the new model to the scene
					scene.add(backgroundModel);
				},
				xhr => {},
				error =>
				{
					console.log("Failed to load background model: " + error);
				}
			);
		}
	}
}
