let websitesList =
[
    "jvernon.net", "/assets/images/project_jvernonnet.png", "2020 - Bootstrap", "Hey, it's the website you're on right now! This website was created to show off all of the content that I have created.", "/",
    "Brent Coles for Boise", "/assets/images/project_colesformayor.png", "2019 - HTML, PHP, CSS, JavaScript", "This website was created for Brent Coles' campaign for Boise mayor. I was in charge of creating, hosting, and maintaining the website throughout the duration of his election campaign. The website is now defunct, but you can view a screenshot gallery of the website.", "/websites/colesformayor/",
];

let listEntryLength = 5;

let populateGames = function()
{
    for(var i = 0; i < websitesList.length; i += listEntryLength)
    {
        // Create elements
        var projectContainer = document.createElement("div");
        projectContainer.className = "project-container";

        var projectImage = document.createElement("img");
        projectImage.className = "project-image";
        projectImage.src = websitesList[i + 1];
        projectContainer.appendChild(projectImage);

        var projectName = document.createElement("h2");
        projectName.classList = ["project-name", "featurette-heading"];
        
        var projectNameLink = document.createElement("a");
        projectNameLink.innerHTML = websitesList[i];
        projectNameLink.href = websitesList[i + 4];
        projectName.appendChild(projectNameLink);

        projectContainer.appendChild(projectName);

        var projectTech = document.createElement("p");
        projectTech.classList = ["project-tech", "featurette-heading"];
        projectTech.innerHTML = websitesList[i + 2];
        projectContainer.appendChild(projectTech);

        var projectDescription = document.createElement("p");
        projectDescription.classList = ["project-description", "lead"];
        projectDescription.innerHTML = websitesList[i + 3];
        projectContainer.appendChild(projectDescription);

        // Add the project to the page
        document.getElementById("websites-list").appendChild(projectContainer);
    }
};

populateGames();