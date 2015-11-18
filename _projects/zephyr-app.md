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
- [Pixate prototype](https://app.pixate.com/pd5cfa667fcce "Zephyr Prototype") (requres download of free pixate app)

### Conceptual overview
The concept of Zephyr is an app that will take existing map data (topography, road ways, bike lanes, traffic), combine it with user-sourced data (anonymous tracking, issue reports)

I love my city. I also love bicycles like a lot of other Austinites. I've lived here for 26+ years (at the the time of this writing), and I have yet to figure out why Austin is considered "bike-friendly". Excluding recreational cyclists, there's not as many cyclists on the road as you'd expect. I wanted to find out why Austin has a minuscule bicycle-commuting population, and go about creating a digital, user-centered application to help put some truth into "bike-friendly Austin".

### Research & Discovery
Jumping into design without research might as well be like diving into an empty pool. You've got to have data to backup your design direction, and I like to have lots of it.

My hypothesis regarding why there's a dearth of commuting cyclists is primarily centered around a lack of routing knowledge and fear of being in amongst the traffic. Most motorists would be hard pressed to find a new route if they were forced to commute by bike. Scouting routes is a pain in the ass (sometimes literally), and results can be skewed &emdash most people won't scout a route at the same time of day they'd as their commute.

#### Questioning & surveys
I began my research by creating a survey using [Google Forms](http://www.google.com/forms/ "Google Forms") (the actual form can be seen [here](http://goo.gl/forms/iIKEmh38Yj/ "bicycle commuting form")). Getting unbiased responses always seems easier with anonymous forms, especially when they're pinged to social media by the form creator. I needed answers quickly given the compressed time line for the project so I sent the form on a local slack channel, social media, and out to friends and family.

While waiting on form responses, I solicited friends who are active in the cycling community to get their opinions on commuting and cycling in Austin. The responses were generally in line with each other and pointed out that despite the perceived Austin bike infrastructure's goodness, it was in fact poor.

>"The bike lanes are worse than a joke--they're on major roads and they'll just disappear for a block or two..."

After seeing the survey responses slow down, I pulled the data and took a look. While some things are outside of a rider's control (distance to destination or weather), what can be controlled is largely thought to be overwhelming and pertains to routing and traffic/safety concerns. Even though my sample size was very small, it closely matched the Austin bicycle-commuter percentage of ~1.5%.

[View the survey results and analysis](https://github.com/ellcorey/zephyr/blob/master/discovery_research/survey_results.md/ "survey says...")

#### Lists & general research
After verifying my hypothesis with some potential user-mined data, it was time to make some lists and read about bicycle commuting. I started with a [word list](https://github.com/ellcorey/zephyr/blob/master/discovery_research/wordlist.md/ "word list") of things pertaining to bicycles and commuting to aid in future design direction and personas. 

I used resources like [Bike Austin](www.bikeaustin.org/ "Bike Austin"), [The League of American Bicyclists](http://www.bikeleague.org/ "League of American Bicyclists"), and [Copenhagenize](http://copenhagenize.eu/ "Copenhagenize") to back up the data I'd collected myself. I also made notes of information that may not directly pertain to my problem, but could assist in the direction.

A competitive market analysis was created to see if a similar product already existed. The cycling app market is cluttered with apps targeted at recreational cyclists. While many of them are good, and some are fantastic, they do not help the commuting cyclist. 

[Ride the City](http://www.ridethecity.com/ "Ride the City") is one app that offers "safer routes" as a solution. The app has a pretty mediocre rating, with users citing a cumbersome, unattractive UI, and poor routes specifically in Austin. There was difficulty locating information on exactly how routes are chosen and that could potentially lead to pain points with a user having issues after already beginning their trip. Lastly, I see a large opportunity to add community aspects to retain users and grow the user base holistically.

The last list I assembled was for inspirational use. I chose a few apps that I enjoy using and believe have well designed and thought out UI. Out of the several I chose, Strava and Waze provided the most inspiration. Strava for a clean and modern UI high on contrast with plenty of gamification, and Waze for clever hands-free actions and a similar idea, only targeted towards fastest routes for motorists. Something Waze is also known well for is the ability for users to report issues along their commute that can then serve as temporary alerts, or even help to re-route other users.

#### Personas
Given that a wide range of people may use a bicycle for commuting, I needed to create a few personas to help narrow down design decisions. The personas were widely based on information I received from my survey and those I spoke directly with while researching. Even people who already use a bicycle for common commutes, said they would bike more if it was easier to get safe routes on the fly.

The three personas I used primarily indicate people who are already willing to use a bike as transportation and have a leaning towards a smaller environmental footprint or inclination to spend less. In the earlier stages of this concept, it would be easier to get them on board and would allow a quick growth rate before concentrating on people who require more persuasion.

#### Joanna
- Neighborhood: Mueller
- Commute: 5 miles
- Title: software developer
- Age: 33
Joanna is renting in Mueller and working downtown in the Tech industry. Moved to Austin from Raleigh, NC a little over a year ago. After renting in South Austin, she moved to Mueller to live more centrally and stop relying on her car as much. Determined but a bit of a procrastinator.

    + loves finding new restaurants
    + often attends live music shows
    + plays recreational adult team sports (kickball, whiffle ball, etc.)
    + prefers movie experience at Alamo Drafthouse
    + travels with Southwest Airlines
    + comfortable with hand tools

#### Michael
- Neighborhood: Duval Estates
- Commute: 16 miles
- Title: education admin
- Age: 40
Longtime Austin resident, Michael, hates driving, especially in traffic. Environmentally conscious, active in local community non-profits. Family of 4 with 2 children, living in North Austin for over a decade. Commutes across town to South Austin and primarily uses mass transit. Cycles on weekends without prior engagements.

    + donates time to educational assistance for children
    + has a woodworking shop set up in his garage
    + spends time gardening home grown vegetables
    + adopted a pit bull with his kids
    + owns a 7 year old Subaru wagon
    + enjoys an evening downtown with his wife every other month

#### Dale
- Neighborhood: Zilker
- Commute: 4 miles
- Title: server
- Age: 28
Dale rents a small place in Zilker from a friend. He works as a server at a couple different locations on the East side, and relies solely on a bicycle for transportation.

    + doesn't spend much time at home
    + has had poor experiences with public transportation
    + plays in a honky tonk band and is heavy into the local music community
    + tries to be outside in his free time
    + donates a little time when he can to work with Austin Pets Alive
    + enjoys a stiff, cheap drink daily

### Let's get to B
The concept of Zephyr is an app that will take existing map data (topography, road ways, bike lanes, traffic), combine it with user-sourced data (anonymous tracking, issue reports)

In a perfect world, research starts before a project, and continues right up until it's unsupported. The Iron Yard is not a perfect world, and with research set, design began.









