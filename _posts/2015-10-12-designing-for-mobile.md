---
layout: post
title: Designing for Mobile
date: 2015-10-12
categories: TIY, UI, design, mobile, ios
---

Designing for mobile is an ever changing and intriguing task. We're constantly reevaluating how people use a product and adapting to an endless supply of new device technology. Some designers find themselves questioning not just what mobile means tomorrow, but even what it means today.

Let's take a look at the environment a mobile device is likely to be used, and for this post's sake, let's say mobile devices consist solely of phones and tablets (I won't even touch on the $MM market that is wearables). Mobile devices could be and practically are used everywhere, in almost any environment. Often, they're used with little to moderate attention as someone tries to achieve the task at hand quickly. Luke Wroblewski says in his book, [Mobile First](http://www.lukew.com/resources/mobile_first.asp), refers to this on the go, low attention use case as "one eyball and one thumb." I find this to be an accurate description and feel strongly that if you think this way, your product will maintain its focus.

Quickly covering the external environment shows how important it is to maintain laser focus within your mobile product so a user can achieve the desired task. Now the device itself can be added to the equation. Devices have a multitude of display sizes, display resolutions, hardware abilities, physical button layouts, and various ways to connect to the internet. If you're designing for mobile web, it is imperative to consider many if not all of these variables. Building a native app may allow you to narrow down some of these, dependent on the OS, but that's another discussion entirely.

Now we're looking at a device with a diagonal screen size upwards of 13", probably has a resolution between 72 and 300 dpi, may or may not have built in GPS/accelerometers/microphone/camera, is probably touch screen (but might have full physical keyboard), has a random number of physical buttons that do various things, and may or may not connect to cellular data networks. This is hopefully where your client or in house team has some user data and discovery to help you narrow this down, because that is a lot to take into consideration. It's also a giant reason to fly the responsive web design flag if your product is for mobile web. But, what about software and different mobile web browsers? Yeah, different browsers handle your site differently and that's a lot of times device dependent. I'm willing to bet the majority of mobile web traffic is on the built in browser.

Once you've got an idea of where you're headed, you can begin to work on the product. Again, mobile web probably has to take more into consideration here. With proper media queries in your CSS, you can effectively get your site to function on target devices with incredible accuracy. Yeah, it may require a release and then further releases as you begin to acquire more device data from analytics, but it's not exceptionally difficult to establish something that functions well on a large variety of devices.

With layout and text, I've learned that it's important to remember our friend with one eyeball and one thumb. If your content is crammed together and/or text is too small, how's your content going to be read it while walking to his destination or just generally being distracted? A lot of designers have tried to make up for smaller screens by making everything smaller and cramming it into the viewport. That's an incorrect approach and you should do the opposite. I personally would rather scroll than strain. Additionally, this moment gives you the chance to really consider what is essential to your core feature[s] and eliminate the superfluous that may creep in.

With most devices these days being touch screen, layout is more important than ever. Touch targets that are small or close don't offer much room for error and the thumb is not necessarily an instrument of accuracy. Try holding a baseball card (or similar item) with hand and tracing the players face with that same hand's thumb. You could draw a smiley face if you're dexterous. Now do it while walking. That's the environment and the level of error you need to account for in your mobile design. The placement of these touch targets is just as important in that you don't want to place destructive, and possibly frustrating buttons in accidentally accessible locations. A delete data or close window button that's near the thumb's resting spot could potentially cause your user base to shrink and head over to your competitor.

That covers the one thumb, but what about the one eyeball? Font sizing is obviously important, but so is the type face. Some fonts won't scale down cleanly and become blurred, or they generally become difficult to read on smaller screens. It's very important to take this into consideration because your product may become unusable at certain screen sizes and resolutions. That text should also be full on contrast. Half the time a user won't know how to adjust the brightness on their device and what is legible in the dark could become illegible with the smallest amount of light.

All of these things and much more must be considered with mobile product design. It really is just the tip of an ever growing iceberg, but rest assured that with proper leg work and data, it is achievable. Why not simply target the bullseye and leave a lot of users without? The market you leave unattended is the same market where a competitor can grow, and mobile products can become outdated just as quickly as the mobile devices they're used on.

A lot of this post may sound awfully familiar to anyone who's read Luke Wroblewski's "Mobile First" book in the A Book Apart series, and that's solely out of my absolute respect for Mr. Wroblewski. If you haven't read it, buy it and do so as it is worth every penny of it's absurdly reasonable price.





