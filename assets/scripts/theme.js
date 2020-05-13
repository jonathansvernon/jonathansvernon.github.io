// Modified cookie helper functions (thanks to Mandeep Janjua on StackOverflow)
// https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
function setCookie(name, value)
{
	document.cookie = name + "=" + (value || "") + "; path=/";
}

function getCookie(name)
{
	var nameEQ = name + "=";
	var cookieArray = document.cookie.split(";");

	for(var i = 0; i < cookieArray.length; i++)
	{
		var cookie = cookieArray[i];
		
		while(cookie.charAt(0) == ' ')
		{
			cookie = cookie.substring(1, cookie.length);
		}

		if(cookie.indexOf(nameEQ) == 0)
		{
			return cookie.substring(nameEQ.length, cookie.length);
		}
	}

	return null;
}

// Figure out what the user's theme is
var currentTheme = (getCookie("theme") || "light");

// Get reference to the theme button
var themeButton = document.getElementById("theme-button");
var themeButtonIcon = document.getElementById("theme-button-icon");

function changeTheme()
{
	// Change the name of the new theme
	currentTheme = (currentTheme == "dark" ? "light" : "dark");

	setTheme(currentTheme);

	// Finally, set the user's new theme preference
	setCookie("theme", currentTheme);
}

function setTheme()
{
	// Change the theme colors
	var isLight = (currentTheme == "light");

	themeButtonIcon.className = (isLight ? "fas fa-sun" : "fas fa-moon");
	//document.body.style.backgroundColor = (isLight ? "#FFFFFF" : "#141719");
	document.body.style.backgroundColor = (isLight ? "#FFFFFF" : "#161616");
	document.body.style.color = (isLight ? "#5A5A5A" : "#EEEEEE");

	let test = document.getElementById("mc-picture");
	if(test != null)
	{
		test.src = (isLight ? "/assets/images/minecraft_0_day.png" : "/assets/images/minecraft_0_night.png");
	}
};

themeButton.onclick = changeTheme;

setTheme(currentTheme);