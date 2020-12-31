var carouselHtml = `
<div id="projectPics" class="carousel slide carousel-fade" data-ride="carousel">
    <ol class="carousel-indicators"></ol>

    <div class="carousel-inner"></div>

    <div class="carousel-control-prev" href="#projectPics" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </div>
    <div class="carousel-control-next" href="#projectPics" data-slide="next">
        <span class="carousel-control-next-icon"></span>
    </div>
</div>
`;

var carouselItemIndex = 0;

var projectFolderPath = "";

let populateProjectPage = function(projectPath, pageDescription, downloadLink, sourceLink, platform)
{
    projectFolderPath = "/assets/images/projects/" + projectPath;

    // Add the title logo
    var titleContainer = document.getElementsByClassName("title-container")[0];

    var titleLogo = document.createElement("img");
    titleLogo.className = "title-logo";
    titleLogo.src = projectFolderPath + "/logo.png";

    titleContainer.appendChild(titleLogo);

    // Create image carousel
    document.write(carouselHtml);

    // Buttons div
    var buttonsDiv = document.createElement("div");
    buttonsDiv.className = "project-buttons-container";
    
    document.getElementById("automatic-content").appendChild(buttonsDiv);

    // Add download button
    var downloadButton = document.createElement("a");
    downloadButton.className = "project-button";
    downloadButton.innerHTML = "Download" + platform;
    downloadButton.target = "_blank";
    downloadButton.href = downloadLink;

    buttonsDiv.appendChild(downloadButton);

    var sourceButton = document.createElement("a");
    sourceButton.className = "project-button";
    sourceButton.innerHTML = "Source Code";
    sourceButton.target = "_blank";
    sourceButton.href = sourceLink;

    buttonsDiv.appendChild(sourceButton);

    // Add description
    var descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description-container";

    var descriptionText = document.createElement("p");
    descriptionText.innerHTML = pageDescription;

    descriptionDiv.appendChild(descriptionText);

    document.getElementById("automatic-content").appendChild(descriptionDiv);
};

let addImage = function(imageLocation)
{
    var carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";

    if(carouselItemIndex == 0)
    {
        carouselItem.className = "carousel-item active";
    }

    // Add the image to the carousel
    var image = document.createElement("img");
    image.className = "carousel-image";
    image.src = projectFolderPath + imageLocation;

    carouselItem.appendChild(image);
    document.getElementsByClassName("carousel-inner")[0].appendChild(carouselItem);

    // Add an indicator
    var indicatorsList = document.getElementsByClassName("carousel-indicators")[0];

    var indicator = document.createElement("li");
    indicator.setAttribute("data-target", "#projectPics");
    indicator.setAttribute("data-slide-to", carouselItemIndex.toString());
    
    if(carouselItemIndex == 0)
    {
        indicator.className = "active";
    }
    
    indicatorsList.appendChild(indicator);

    carouselItemIndex++;
};