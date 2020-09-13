let navbarHtmlTemplate = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Site title -->
    <!--a id="theme-button" class="navbar-brand">jvernon.net</a-->
    <button type="button" id="theme-button" class="btn navbar-brand">jvernon.net</button>

    <!-- Hamburger menu -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar content container -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left side content -->
        <ul id="navitemlist" class="navbar-nav mr-auto">
        </ul>

        <!-- Right side content -->
        <!-- YouTube link -->
        <a class="btn btn-outline-danger socialbtn" target="_blank" href="https://www.youtube.com/channel/UCiZsiO7Bei3vG1HHsyDTcIw">
            <i class="fab fa-youtube"></i>
        </a>
        <!-- Twitter link -->
        <!--a class="btn btn-outline-info socialbtn" target="_blank" href="https://twitter.com/modderwizard">
            <i class="fab fa-twitter"></i>
        </a-->
        <!-- GitHub link -->
        <a class="btn btn-outline-secondary socialbtn" target="_blank" href="https://github.com/modderwizard">
            <i class="fab fa-github"></i>
        </a>
    </div>
</nav>
`;

let navbarData =
[
    "Home", "/",
    "Games", "/games/",
    "Websites", "/websites/",
    "Contact", "/contact/",
];

let createElementWithClass = function(tagName, className)
{
    let element = document.createElement(tagName);
    element.className = className;

    return element;
}

let populateNavigationBar = function()
{
    // Add the navbar template
    document.write(navbarHtmlTemplate);

    // Get the nav items container
    let navitemList = document.getElementById("navitemlist");

    // Populate the navbar
    for(let i = 0; i < navbarData.length / 2; i++)
    {
        let navitemContainer = createElementWithClass("li", "nav-item");

        let elementsTemp = document.getElementsByName("navbarName");
        if(elementsTemp.length > 0)
        {
            let highlightedItemName = elementsTemp[0].getAttribute("content");
            if(highlightedItemName == navbarData[i * 2])
            {
                navitemContainer.classList.add("active");
                navitemContainer.classList.add("forceunderline");
            }
        }

        let navitem = createElementWithClass("a", "nav-link");
        navitem.innerHTML = navbarData[i * 2];
        navitem.href = navbarData[i * 2 + 1];

        navitemContainer.appendChild(navitem);
        navitemList.appendChild(navitemContainer);
    }
};

populateNavigationBar();
