---
layout: project
title: Zephyr
permalink: zephyr-app
---

# Zephyr
## A conceptual app for bicycle routing

### Project overview
This project took place over a two week period at the end of my course with The Iron Yard. The project encompassed much of what we'd learned (and some we didn't).

The process involved a hefty amount of research prior to the design process. Requirements were to have a prototype showing main app screens and functions, and a responsive single page site that would act as an overview on the web.

The project is hosted through a combination of Github and Pixate and can be easily viewed.

- [Full project](https://github.com/ellcorey/zephyr "Zephyr Project on Github")
- [Responsive splash site](http://ellcorey.github.io/zephyr "Zephyr website")
- [Pixate prototype](https://app.pixate.com/pd5cfa667fcce "Zephyr Prototype") (requres download of free Pixate app)

### Concept overview
The concept of Zephyr is an app that will take existing map data (topography, road ways, bike lanes, traffic), combine it with user-sourced data (anonymous tracking, issue reports), and use that information to provide bicycle commuters with a safe route that attempts to negate geographical.

With this app, we could increase bicycle commuting in Austin. There are many advantages to having a larger bicycling population, but one of the largest is that overall the city becomes happier and safer.

### Research & Discovery
Even though I had an idea, I needed to verify my hypothetical solution with research. Research also provides direction in design and is required when taking on a project (it can also be pretty neat and insightful).

#### Questioning & surveying
Research began with a survey I created using [Google Forms](http://www.google.com/forms/ "Google Forms") (the actual form can be seen [here](http://goo.gl/forms/iIKEmh38Yj/ "bicycle commuting form")). I sent this form out via a variety of channels and waited for incoming response frequency to slow before analyzing the data. Responses varied, but unsurprisingly fell within several key areas of focus. Traffic, routing, and weather were predominant issues.

I solicited friends who are active in the cycling community in addition to the survey. The responses were generally in line with each other and pointed out Austin's bike infrastructure is better perceived than it actually is.

>"The bike lanes are worse than a joke--they're on major roads and they'll just disappear for a block or two..."

[View the survey results and analysis](https://github.com/ellcorey/zephyr/blob/master/discovery_research/survey_results.md/ "survey says...")

#### General research
Throughout the project, I used resources like [Bike Austin](www.bikeaustin.org/ "Bike Austin"), [The League of American Bicyclists](http://www.bikeleague.org/ "League of American Bicyclists"), and [Copenhagenize](http://copenhagenize.eu/ "Copenhagenize") to back up the data I'd collected myself. I also made notes of information that may not directly pertain to my problem, but could assist in the direction.

#### Competitive market analysis
A competitive market analysis was created to see if a similar product already existed and what competing products may offer. The cycling app market is cluttered with apps targeted at recreational cyclists --- they do not help the commuting cyclist. 

[Ride the City](http://www.ridethecity.com/ "Ride the City") is one app that offers "safer routes" as a solution. Users cite a cumbersome, unattractive UI, and poor routes specifically in Austin as issues. I had difficulty locating information on how routes are built --- the lack of transparency potentially leading to pain points while en route. A large opportunity to add community aspects also exists.

#### Inspirational apps
I looked to a few apps for well designed and thought out UI. Strava and Waze are two that provided inspiration. Strava for a clean and modern UI high on contrast with plenty of gamification, and Waze for clever hands-free actions. Waze is also known well for users reports --- reported issues that can serve as temporary alerts, or even help to re-route other users.

#### Personas
I used personas to help distill down my possible user base and aid in design decisions, and were created using my research. The personas primarily indicate people who are already willing to use a bike as transportation. The personas I used can be [seen on github](https://github.com/ellcorey/zephyr/blob/master/discovery_research/personas.md "Zephyr Personas").

### Design
The Design process was split between the app prototype and the website. Throughout this process, I sought out and received feedback for verification that the design direction matched my intentions.

#### Style tiles
Style tiles were created to give a rough idea of color palettes, fonts, patterns, and other elements and how they would work together. After putting together 3, I received feedback and created the 4th that ultimately became the chosen tile.

Using vibrant, bright blue hues allowed me to create contrast with dark greys for legibility, while providing a fun and calming overall feeling. Zephyr's main font is Museo Sans Rounded which is a modern and friendly sans-serif. Ostrich Sans Black was chosen for dashboard numbers due to its modern, sleek appearance, and its condensed nature.

#### User flows
I mapped out primary functions using rough user flows to get a mental road-map prior to low-fidelity sketches. User flows often provide me with great opportunities to imagine the interface while making sure to stay focused on feature begin mapped. These are essential for me when working with mobile design.

#### Low-fidelity sketches
Sketching provided an easy way to begin taking UI inventory and solidifying layout ideas.

#### Wire frames
Wire frames were created for two screens --- both portrait and landscape --- using sketch. I find Sketch's artboards feature makes creating wireframes much easier. Even though landscape was not used in the prototype, I wanted to consider it as a possibility while doing the design --- thinking about the layout helped me better create the portrait components.

#### High-fidelity mockups
High-fidelity mockups were created with Adobe Illustrator. After the mockups were created, I created individual UI assets by exporting layers as .png files for use in the prototyping stage.

#### Pixate prototyping
Prototyping was done in Pixate --- chosen due to a relatively easy learning curve and powerful interaction creation. The process required learning the application while planning out appropriate layering, user interactions, and conditional animations.

During the prototyping phase, I was constantly aware of how the product would be used environmentally, and the feedback I wanted the user to receive. That meant deciding on simple, responsive animations that would prevent disorientation within the app, and minimizing the steps to complete a task.

### Website rapid-prototyping
Once the app prototype was complete, I needed to create a single-page site to display Zephyr's use and feeling. I used responsive web design principles and technologies with mobile first thinking throughout this process. 

Technology used:
- HTML5 w. semantic markup
- CSS pre-processor (SCSS)
- Media queries for responding to different screen sizes
- Bourbon by Thoughtbot (SCSS Library)
- Jquery w. Slick carousel plugin

