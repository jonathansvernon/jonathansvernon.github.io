let listEntryLength = 5;

let populateProjects = function(dataList)
{
    for(var i = 0; i < dataList.length; i += listEntryLength)
    {
        // Create elements
        var projectContainer = document.createElement("div");
        projectContainer.className = "project-container";

        // Project image
        var projectImage = document.createElement("img");
        projectImage.className = "project-image";
        projectImage.src = dataList[i + 1];
        projectContainer.appendChild(projectImage);

        // Project name
        var projectName = document.createElement("h2");
        projectName.classList = ["project-name", "featurette-heading"];

        var projectNameLink = document.createElement("a");
        projectNameLink.innerHTML = dataList[i];
        projectNameLink.href = dataList[i + 4];
        projectName.appendChild(projectNameLink);

        projectContainer.appendChild(projectName);

        // Date/tech line
        var projectTech = document.createElement("p");
        projectTech.classList = ["project-tech", "featurette-heading"];
        projectTech.innerHTML = dataList[i + 2];
        projectContainer.appendChild(projectTech);

        // Description
        var projectDescription = document.createElement("p");
        projectDescription.classList = ["project-description", "lead"];
        projectDescription.innerHTML = dataList[i + 3];
        projectContainer.appendChild(projectDescription);

        // Add project to page
        document.getElementById("projects-list").appendChild(projectContainer);
    }
}