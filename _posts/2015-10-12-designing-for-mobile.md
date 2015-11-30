---
layout: post
title: Designing for Mobile
date: 2015-10-12
categories: TIY UI design mobile ios
permalink: designing-for-mobile
---

Designing for mobile is an ever changing and intriguing task. Always reevaluating how people use a product, adapting to an endless stream of new device technology. Some designers find themselves questioning not just what mobile will mean tomorrow, but what it means today.

Let's take a look at the environment a mobile device is likely used. For this post's sake, let's put wearables aside and discuss phones and tablets only. Mobile devices could be, and likely are, used in almost any environment. Often, with little to moderate attention as someone tries to achieve the task at hand quick. Luke Wroblewski in his book, [Mobile First](http://www.lukew.com/resources/mobile_first.asp), refers to this on the go, low attention use case as 

>"one eyball and one thumb." 

I this this is an accurate description, and feel that if you think this way, your product will maintain its focus.

Covering the external environment shows how important it is to maintain focus within your mobile product so a user can achieve the desired task. Now the device itself can be added to the equation. Devices have a multitude of display sizes, display resolutions, hardware abilities, physical button layouts, and various ways to connect to the internet. If you're designing for mobile web, it is imperative to consider many, if not all, of these variables. Building a native app may allow you to narrow down some of these, dependent on the OS, but that's another discussion.

We've narrowed down to a device with a diagonal screen size upwards of 13", probably has a resolution between 72 and 300 dpi, may or may not have built in GPS/accelerometers/microphone/camera, is probably touch screen (but might have full physical keyboard), has a random number of physical buttons that do various things, and may or may not connect to cellular data networks. This is [hopefully] where your client or in house team has user data and research to narrow this down, because that is a lot to consider. It's also a giant reason to fly the responsive web design flag if your product is for mobile web. But, what about software and different mobile web browsers? Yeah, different browsers handle your site differently and often device dependent. I'm willing to bet the majority of mobile web traffic is on the built in browser.

Once you've got an idea of where you're headed, you can begin to work on the product. Again, mobile web arguably requires more consideration. With proper media queries in your CSS, your site or web app can function on target devices with incredible accuracy. Yeah, it may need updates (then further updates) as you begin to gather more device data from analytics. Thankfully, it's not that difficult to establish a viable product that functions well on a variety of devices.

With layout and text, I've learned that it's important to remember our distracted user. If you have content clutter and/or text that's too small, how's your content is difficult to use in a distracted environment. Some designers try to make up for smaller screens by  making shrinking content and cramming it into the viewport. That's an incorrect approach and doing the opposite is better. I would rather scroll than strain. But really, this moment gives you the chance to focus on what is essential to your core feature[s] and drop the superfluous that may creep in. It also shows the importance of good content management.

With most devices these days being touch screen, layout is more important than ever. Touch targets that are small or close don't offer much room for error and the thumb is not an instrument of accuracy. Try holding a baseball card (or similar item) with hand and tracing the players face with that same hand's thumb. You could draw a smiley face if you're dexterous. Now do it while walking. That's the environment and the level of error you need to account for in your mobile design. The placement of touch targets is just as important. You don't want to place destructive, and possibly frustrating buttons in high-error locations. Deleting data or closing a window due to an errant tap could cause your user base to shrink.

That covers the one thumb, but what about the one eyeball? Type sizing is obviously important, but so is the type face. Some fonts won't scale down well and become blurred, or they generally become difficult to read on smaller screens. It's important to test on various displays so your product doesn't become unusable at certain screen sizes and resolutions. The text should also have strong contrast. Users may not know how to adjust the brightness on their device. What is legible in the dark could become illegible with the smallest amount of light. Also, a decent percentatge of the population is colorblind on some level.

All these things and more must be considered with mobile product design. It is just the tip of an ever growing iceberg, but rest assured that with proper leg work and data, it is achievable. Why not simply target the bullseye and leave a lot of users without? The market you leave unattended is the same market where a competitor can grow. Mobile products can become outdated just as quickly as the mobile devices they're used on.

A lot of this post may sound awfully familiar to anyone who's read Luke Wroblewski's "Mobile First" book. That's solely out of my absolute respect for Mr. Wroblewski. If you haven't yet, buy it and read it &mdash; it is worth every penny of it's absurdly reasonable price.