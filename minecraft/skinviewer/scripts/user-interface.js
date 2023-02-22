import { togglePlayerModelType, loadPlayerModel, loadPlayerSkin } from "./player-model.js";

function uiLoadSkin()
{
	// Open a file selector dialog
	let fileSelector = document.createElement("input");
	fileSelector.type = "file";

	fileSelector.onchange = e =>
	{
		// Set the player skin
		loadPlayerSkin(URL.createObjectURL(e.target.files[0]));
	}

	fileSelector.click();
}

function uiChangeModel()
{
	// Choose model type name
	togglePlayerModelType();

	// Update player model
	loadPlayerModel();
}

/*function uiChangeCamera()
{
	cameraIsOrthographic = !cameraIsOrthographic;

	// Set camera object
	setupCamera(cameraIsOrthographic);
}
*/

export function registerUserInterfaceBindings()
{
	document.getElementById("ui-load-skin").addEventListener("click", uiLoadSkin, false);
	document.getElementById("ui-change-model").addEventListener("click", uiChangeModel, false);
	//document.getElementById("ui-change-camera").addEventListener("click", uiChangeCamera, false);
}