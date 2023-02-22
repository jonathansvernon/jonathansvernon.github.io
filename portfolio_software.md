---
layout: default
title: Software
navbar_name: Portfolio
stylesheet_name: page_project_list
permalink: /portfolio/software/
---
<div class="title-container">
	<h1>Software</h1>
</div>

<div style="padding: 25px;"></div>

<div class="projects-list container marketing">
	{% assign software = site.software | sort: "release_date" | reverse %}
	{% for program in software %}
		{% include element_software_preview.html %}
	{% endfor %}
</div>

