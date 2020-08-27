let gamesList =
[
    "RedFox", "/assets/images/project_redfox.png", "2018 - Adobe Flash, ActionScript 3", "During the night, an evil raccoon enters your den and steals your precious teddy bear. Now you must track him down, crush anyone who stands in your way, and save teddy!", "https://github.com/modderwizard/gimm_redfox", "View the source code on GitHub",
    "Gigahurt", "/assets/images/project_gigahurt.png", "2018 - Adobe Flash, ActionScript 3", "It is the year 2XXX. Robots have taken over and plan to eradicate all of humanity. You must fight through hoards of dangerous robots. Killing them all is the only way to save the planet!", "https://github.com/modderwizard/gimm_gigahurt", "View the source code on GitHub",
    "Terra", "/assets/images/project_terra.png", "2019 - Adobe AIR, ActionScript 3", "An alien crash lands on planet earth. His ship's power depleted, he must venture into a local settlement to seek a source of energy. The choices he makes in order to get home will affect more than just himself...", "https://github.com/modderwizard/gimm_terra", "View the source code on GitHub",
    "Mirror", "/assets/images/project_mirror.png", "2019 - Adobe AIR, ActionScript 3, Starling, AGAL", "A superhero and supervillain exist apart in different dimensions, yet they are closely intertwined. Each action they take affects the other in a similar but opposite way. Are \"good\" and \"evil\" as simple as they seem?", "https://github.com/modderwizard/gimm_mirror", "View the source code on GitHub",
];

let listEntryLength = 6;

let populateGames = function()
{
    for(var i = 0; i < gamesList.length; i += listEntryLength)
    {
        var projNumb = i / listEntryLength;

        // Friendly names for the info we need to use
        /*var projectName = gamesList[i];
        var projectImageText = gamesList[i + 1];
        var projectTech = gamesList[i + 2];
        var projectDescription = gamesList[i + 3];
        var projectLink = gamesList[i + 4];
        var projectLinkName = gamesList[i + 5];*/

        // Create elements
        var projectContainer = document.createElement("div");
        projectContainer.className = "project-container";

        var projectImage = document.createElement("img");
        projectImage.className = "project-image";
        projectImage.src = gamesList[i + 1];
        projectContainer.appendChild(projectImage);

        var projectName = document.createElement("h2");
        projectName.classList = ["project-name", "featurette-heading"];
        projectName.innerHTML = gamesList[i];
        projectContainer.appendChild(projectName);

        var projectTech = document.createElement("p");
        projectTech.classList = ["project-tech", "featurette-heading"];
        projectTech.innerHTML = gamesList[i + 2];
        projectContainer.appendChild(projectTech);

        var projectDescription = document.createElement("p");
        projectDescription.classList = ["project-description", "lead"];
        projectDescription.innerHTML = gamesList[i + 3];
        projectContainer.appendChild(projectDescription);

        // Add the project to the correct side
        if(projNumb % 2 == 0)
        {
            document.getElementById("games-left").appendChild(projectContainer);
        }
        else
        {
            document.getElementById("games-right").appendChild(projectContainer);
        }
    }
};

populateGames();