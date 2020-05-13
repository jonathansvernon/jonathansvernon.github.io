let projectTemplate = `
<!-- %PROJECT_NAME% -->
<div class="row featurette">
    <div class="col-md-5">
        <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" style="width: 500px; height: auto" src="%PROJECT_IMAGE%" data-holder-rendered="true">
    </div>
    <div class="col-md-7">
        <h2 class="featurette-heading">%PROJECT_NAME%</h2>
        <p class="lead">%PROJECT_TECH%</p>
        <p class="lead">%PROJECT_DESCRIPTION%</p>
        <p class="lead"><a target="_blank" href="%PROJECT_LINK%">%PROJECT_LINK_NAME%</a></p>
    </div>
</div>
`;

let projectInfo =
[
    "RedFox", "/assets/images/project_redfox.png", "2018 - Adobe Flash, ActionScript 3", "This was the first big project I created for the GIMM program. It was an individual project, and we were given two weeks to create a single level prototype for a game. This project taught me the basics of ActionScript 3 and contains a quadrilateral based two-dimensional physics system I created myself.", "https://github.com/modderwizard/gimm_redfox", "View the source code on GitHub",
    "Gigahurt", "/assets/images/project_gigahurt.png", "2018 - Adobe Flash, ActionScript 3", "Our second project for GIMM 110 was a group project game. I worked with some great people: Joey Rowell and Parker Ussery. This project introduced us to the concept of state machines, and featured improvements to my physics system, such as culling physics objects based on the camera view.", "https://github.com/modderwizard/gimm_gigahurt", "View the source code on GitHub",
    "Terra", "/assets/images/project_terra.png", "2019 - Adobe AIR, ActionScript 3", "For GIMM 250, we created an interactive comic in groups. Credit also goes to my group members: Alex Becerril, Caleb Cram, Cole Rene, Hannah Wiles, and Sydney Wayne-Riddle. This was a great introduction to working in large teams, as we all had completely seperate things to work on which we had to figure out how to integrate together at the end.", "https://github.com/modderwizard/gimm_terra", "View the source code on GitHub",
    "Mirror", "/assets/images/project_mirror.png", "2019 - Adobe AIR, ActionScript 3, Starling, AGAL", "This interactive animation project required us to represent a physical theory described in a book we read; we chose quantum entanglement. We used the a super-hero and super-villain to represent this idea. I handled porting my previous Flash based code from Gigahurt to the Starling framework to use as a base for the project. I also wrote the CRT shader for the game using Adobe's AGAL shader language.", "https://github.com/modderwizard/gimm_mirror", "View the source code on GitHub",
    "Brent Coles for Boise", "/assets/images/project_colesformayor.png", "2019 - HTML, PHP, CSS, JavaScript", "This website was created for Brent Coles' campaign for Boise mayor. I was in charge of creating, hosting, and maintaining the website throughout the duration of his election campaign. The website is now defunct, but you can view a screenshot gallery of the website.", "/portfolio/colesformayor/", "View screenshots of the website here",
    "ConstructAR", "/assets/images/project_arconstruction.png", "2020 - Unity, C#, REST, Firebase Realtime Database", "This application prototype was created for GIMM 300. I, along with my team members: Caleb Cram and Parker Ussery, created an augmented reality app to show information about concrete sample tests at construction sites. I was responsible for creating a database using Firebase, and linking it together with our application. Thanks to Caleb for creating a demonstration video.", "https://www.youtube.com/watch?v=aXE_FJV0iMc", "View a demonstration video",
];

let populateProjects = function()
{
    for(var i = 0; i < projectInfo.length / 6; i++)
    {
        // Have to replace project name twice
        var projectHtml = projectTemplate.replace("%PROJECT_NAME%", projectInfo[i]);

        let j = i * 6;
        projectHtml = projectHtml.replace("%PROJECT_NAME%", projectInfo[j]);
        projectHtml = projectHtml.replace("%PROJECT_IMAGE%", projectInfo[j + 1]);
        projectHtml = projectHtml.replace("%PROJECT_TECH%", projectInfo[j + 2]);
        projectHtml = projectHtml.replace("%PROJECT_DESCRIPTION%", projectInfo[j + 3]);
        projectHtml = projectHtml.replace("%PROJECT_LINK%", projectInfo[j + 4]);
        projectHtml = projectHtml.replace("%PROJECT_LINK_NAME%", projectInfo[j + 5]);

        document.write(projectHtml);

        document.write("<hr class=\"featurette-divider\">");
    }
};

populateProjects();