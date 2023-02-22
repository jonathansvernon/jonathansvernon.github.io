// --------------
// Model Creation
// --------------

// Pixel size of the 2nd layer on body, arms and legs is 0.25 pixel bigger than the skin pixel (inner layer). For head 2nd layer (Hat layer) it is 0.5 pixels bigger than the skin layer (inner layer)

function createModel(doubleHeightTexture, thinArms, flipBottomTextures)
{
	// Head
	const headModel = new THREE.BoxGeometry(8, 8, 8);

	// Head overlay
	const headOverlayModel = new THREE.BoxGeometry(8.5, 8.5, 8.5);

	// Body
	const bodyModel = new THREE.BoxGeometry(8, 12, 4);

	// Left arm
	const leftArmModel = new THREE.BoxGeometry(4, 12, 4);

	// Right arm
	const rightArmModel = new THREE.BoxGeometry(4, 12, 4);

	// Left leg
	const leftLegModel = new THREE.BoxGeometry(4, 12, 4);

	// Right leg
	const rightLegModel = new THREE.BoxGeometry(4, 12, 4);

	// Extra overlays for double height texture
	if(doubleHeightTexture)
	{
		// Body overlay
		const bodyOverlayModel = new THREE.BoxGeometry(8.25, 12.25, 4.25);

		// Left arm overlay
		const leftArmOverlayModel = new THREE.BoxGeometry(4.25, 12.25, 4.25);

		// Right arm overlay
		const rightArmOverlayModel = new THREE.BoxGeometry(4.25, 12.25, 4.25);

		// Left leg overlay
		const leftLegOverlayModel = new THREE.BoxGeometry(4.25, 12.25, 4.25);

		// Right leg overlay
		const rightLegOverlayModel = new THREE.BoxGeometry(4.25, 12.25, 4.25);
	}
}

// Set up scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000.0);

// Set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// TEMP
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

// Render function
function doRender()
{
	requestAnimationFrame(doRender);
	renderer.render(scene, camera);
}

doRender();
