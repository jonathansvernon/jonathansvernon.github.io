let navbarHtmlTemplate = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Site title -->
    <a class="navbar-brand">jvernon.net</a>

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
        <!--a class="btn btn-danger" target="_blank" href="https://www.youtube.com/channel/UCiZsiO7Bei3vG1HHsyDTcIw">
            <i class="fab fa-youtube"></i>
            YouTube
        </a-->

        <button type="button" class="btn btn-info" id="theme-button">
            <i class="" id="theme-button-icon"></i>
        </button>
    </div>
</nav>
`;

let navbarData =
[
    "Home", "/",
    "Portfolio", "/portfolio/",
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

        let indexStr = document.getElementsByName("navbarIndex")[0].getAttribute("content");
        if(parseInt(indexStr) == i)
        {
            navitemContainer.classList.add("active");
        }

        let navitem = createElementWithClass("a", "nav-link");
        navitem.innerHTML = navbarData[i * 2];
        navitem.href = navbarData[i * 2 + 1];

        navitemContainer.appendChild(navitem);
        navitemList.appendChild(navitemContainer);
    }
};

populateNavigationBar();