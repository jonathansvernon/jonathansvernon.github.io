let carouselItemIndex = 0;

let addImage = function(imageLocation)
{
    let carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";

    if(carouselItemIndex == 0)
    {
        carouselItem.className = "carousel-item active";
    }

    // Add the image to the carousel
    let image = document.createElement("img");
    image.className = "carousel-image";
    image.src = imageLocation;

    carouselItem.appendChild(image);
    document.getElementsByClassName("carousel-inner")[0].appendChild(carouselItem);

    // Add an indicator
    let indicatorsList = document.getElementsByClassName("carousel-indicators")[0];

    let indicator = document.createElement("li");
    indicator.setAttribute("data-target", "#projectPics");
    indicator.setAttribute("data-slide-to", carouselItemIndex.toString());
    
    if(carouselItemIndex == 0)
    {
        indicator.className = "active";
    }
    
    indicatorsList.appendChild(indicator);

    carouselItemIndex++;
};