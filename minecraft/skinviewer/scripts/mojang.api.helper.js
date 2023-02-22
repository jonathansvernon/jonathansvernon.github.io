export async function getUUIDFromUsername(username)
{
	// Fetch the user information from Mojang's api
	const response = await fetch(
		"https://api.mojang.com/users/profiles/minecraft/" + username,
		{
			method: "GET"
		}
	);

	return response.json().id;
}

export async function getSkinUrlFromUsername(username)
{
	// Get the user's UUID from their username
	const uuid = await getUUIDFromUsername(username);

	// Fetch the user information from Mojang's api
	const response = await fetch(
		"https://sessionserver.mojang.com/session/minecraft/profile/" + uuid,
		{
			method: "GET"
		}
	);

	// Iterate over every property in the user data
	const userData = response.json();
	for(userProperty in userData.properties)
	{
		// Check for the user texture property
		if(userProperty.name == "textures")
		{
			// Decode the base64 texture data
			const textureData = JSON.parse(atob(userProperty.value));

			// Iterate over the textures
			// TODO: Return skin type (classic, slim) and cape URLs
			return textureData.textures.SKIN.url;
		}
	}

	return "./models/steve.png"
}
