import * as THREE from "three";

import { scene } from "./main.js";

// Ambient light
const ambientLight = new THREE.AmbientLight(0xFFFFFF);

// Hemisphere light
let hemisphereLight = new THREE.HemisphereLight(0xFFFFFF, 0x444444, 0.6);

// Directional light
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight.castShadow = true;

const directionalLightLimits = 500;
directionalLight.shadow.camera.left = -directionalLightLimits;
directionalLight.shadow.camera.right = directionalLightLimits;
directionalLight.shadow.camera.top = directionalLightLimits;
directionalLight.shadow.camera.bottom = -directionalLightLimits;

directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 500;

export function setLighting(lightType)
{
	// Remove all lighting from the scene
	scene.remove(ambientLight);
	scene.remove(hemisphereLight);
	scene.remove(directionalLight);

	// Check what light we're adding
	if(lightType == "none")
	{
		// Add generic ambient light
		scene.add(ambientLight);
	}
	else
	{
		// Set light values depending on time of day
		if(lightType == "sunrise")
		{
			directionalLight.position.set(0, 10, 100);

			hemisphereLight = new THREE.HemisphereLight(0xFF764D, 0x444444, 0.25);
		}
		else if(lightType == "morning")
		{
			directionalLight.position.set(0, 100, 100);

			hemisphereLight = new THREE.HemisphereLight(0xFFFFBD, 0x444444, 0.45);
		}
		else if(lightType == "noon")
		{
			directionalLight.position.set(0, 100, 0);

			hemisphereLight = new THREE.HemisphereLight(0xFFFFFF, 0x444444, 0.6);
		}
		else if(lightType == "night")
		{
			directionalLight.position.set(0, 100, 0);

			hemisphereLight = new THREE.HemisphereLight(0xFFFFFF, 0x444444, 0.05);
		}

		scene.add(hemisphereLight);
		scene.add(directionalLight);
	}
}
