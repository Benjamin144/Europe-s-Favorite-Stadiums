####################################################################################################################################################################################

###Initial idea

#To design a functional styled website that purposefully pushes the user through a series of navigational links so that they can navigate through the site
in a logical manner, whilst stopping at various points to absorb content.

##The main thrust of the site is to try and create an opportunity for the customer to learn about great venues and surrounding areas across the world with the view of one day having 
a chance to visit them by winning a competition funded by Super Arenas. Super Arenas is a fictional based charitable organisation that wishes to raise awarenes of Architectual design 
in sporting venues across the globe and promotes exclusive tours to far flung destinations, but wishes nothing more that people join their organisation and push back the proceeds of 
their respective revenues into grassroots sports to help developing talent and fitness in children primarily and adults alike who enbark upon a sport made accessable in their own 
communities.

Elite Football Stadiums then World Stadiums then European Stadium Tours, was my first set of ideas....Fast forward to my conclusion to the story,...I then realized that a solution to
the idea was going to be impacted by COVID 19 because of major restrictions to travel. Therefore the site could become functional for the purpose of presenting an alternative way of
presenting information about particular venues across the world for now. However I wanted to use the idea to explore my learning and make the site interactive using javascript

So the back story was that the original idea came from a distant admiration for major architecture in general and exclusively in sport and the history of arenas used across the world 
since time began. The first idea was to build the Worlds Elite Football Stadiums app - (WEFS) or Elite League Football Grounds.
The idea was to create a website which lists all of this years Champions League Football Grounds information. Then use the Google's api as a ground locator.
The code would then attempt to split the locations into Northern, Eastern, Southern and Western European regions which would aid in the use of easy travel optimization.

In graphical terms this would look like a simple circle that splits into four zonal perimeters. This format then allows the user to click on each zonal area to reveal the information 
about the football ground location and it's amenities, i.e. capacity, parking, access points so on and so forth.

Further development would engage upon using the current statistical trends to predict which teams will make up the new World Elite League that is under current discussion.
There would then have to be a method of storing the information of all stadiums in Europe and a way to retrieve the data when an upcoming event occurs in the future champions league 
scenarios.

I understand that the scope of this project might be beyond the scope of my skill set and I only had a limited window of opportunity to complete the development

###Finalizing the idea

I then realized that this concept might not stoke the interests of the public at large. So I thought why not increase the scope and development to all types of sporting arenas across 
Europe and then make the app a travelling companion called World Stadium Tours - This might solve a business problem geared towards the Hospitality industry. I would then go on to build 
a three page site, with the understanding of adding in future links to storys, popular posts, newsletters, articles, blogs and promotions.

###Therefore the site would comprise.

1st page - Landing with optional Register - Sign in and search functionality
2nd page - Table format of 26 clickable sporting disciplines (has navigation button to go back to previous page)
3rd page - information which highlights a stadium venue to the left, stats and info to the right and google api features on the bottom. 
This also has a navigation button to go back to the previous page and also a forward button for the next stadium venue. 
The 2nd and 3rd pages will also have a home button to navigate back to the Landing page

###Conclusion

Travel Companion Website/App
Card style graphics

Features
Google Driven API - Marker locators
Email JS driven Subscription Service
Tec Stack: Bootstrap HTML, CSS, Javascript, Jquery, Jasmine

The learning outcomes for this project are using JavaScript and jQuery, both to manipulate the DOM and to make Ajax calls to the Google Maps, GitHub, and email service APIs.

Future Development - Features
Tech Stack: C# - ASP.net Core MVC application

Learn and Implement a C.R.U.D. database - for future proofing.
Make the site secure - by using Log in - Admin/User (security|), I.e. (Later using this method for Authorization and Authentication)

#Current Issues

#emailJS implementation fails - unable to retrieve emails from subscriber page

####Is it bad or good practice to include JavaScript in an HTML ...
A way of tracking incidents/bugs - like an alert system in conjunction with google maps
could not justify not using js in map.html was unable to resolve a loading issue with the google map - read this article concerning an outstanding question, I have


Dev option that tracks/updates/logs new information and changes to the database
It all depends on what you want your web page to do. If you are looking at a static web page with no user interaction, you can probably make do without javascript. 
JavaScript or HTML or PHP or any of the others are tools that are there to help you. There is no good or bad practice in using them.

####Reduce file sizes - Previously changed from jpeg to png.. but may have to compress ping further if possible and replace all image file batches

################################################################################################################################################################################

#Testing Errors - Struggling to get past these...type of error sample below:

####jquery-3.5.1.min.js:2 Uncaught TypeError: el.owlCarousel is not a function
    at initialize_owl (main.js:50)
    at HTMLDocument.<anonymous> (main.js:38)
    at e (jquery-3.5.1.min.js:2)
    at t (jquery-3.5.1.min.js:2)

####jquery-3.5.1.min.js:2 Uncaught TypeError: el.owlCarousel is not a function
    at initialize_owl (main.js:50)
    at HTMLDocument.<anonymous> (main.js:77)
    at e (jquery-3.5.1.min.js:2)
    at t (jquery-3.5.1.min.js:2)

####initialize_owl @ main.js:50
    (anonymous) @ main.js:77
    e @ jquery-3.5.1.min.js:2
    t @ jquery-3.5.1.min.js:2
    setTimeout (async)
###############################################################################################################################################################################
##SCOPE         Options are the Carousel or card style as a display mechanism
                opted for a customized carousel that gives slick access to imagery and easy to implement
                Thought about using a card style display but realised this would take yo lot of room on the website and become huge
                future development would be to drill in to each image and link them directly to google maps geo location. (unable to implement this due to time constraints
                
###############################################################################################################################################################################

##STRUCTURE     Navigational links for:
                Home 
                Storylines/storyboards and experiences of travelling adventures to venues on tour, could be linked to profile stadium thumbnails.
                Newsletters for forthcoming promotional events.
                Blog posts for trending and popular posts concerning travel, hospitatilty experience, critic's

###############################################################################################################################################################################

#Solutions

###Able to reference markers by index.html "country" & mapdata.js "latling" "venue name"

###I need to further develop buttons on index.html file. I was unable to re-position pop up at this points
at lower end of index.html site wanted to instruct user to swipe left but modal button is currently merged with pop up button. wanted to place icons
side by side...

#####################################################################################################################################################################################

##TO DO lists:

#Complete wireframes mark up for mobile, tablet & desktop design
#Improve upon marker InfoWindows presention - (if there is time)
#Implement Geolocation - (if there is time)

#FINISHING UP#
#Tidy code - comment on specific code in Javascript files - (Delete 'stray', 'duplicate', or 'unused' code)
#Source reference material about code used on the project 
#Revise Mark up cheat sheet and use acordingly
#Complete readMe template - covering all aspects of the web development for this project (including five planes)C

#TESTING#
#Check site UX for navigational completeness - make sure links work - log links in readMe that are in development. 
#Check site UI - Ensure ease of use (does the site make sense).
#Check rating with lighthouse (screenshot results and use in readMe)
#Check responsiveness on all devices
#Check responsiveness on all web browsers
#Clear bugs - reference, the Slack community, tutors & online support, i.e console log, "Uncaught exceptions", "emailJS - tutorial"
#Run the code through (W3C) validators

#SUBMITTING#
#Complete png file presentation of front-end site visual across all screen sizes for readMe.
#Check brief again and ensure all answers are met to the best of your ability
#Complete MS2 submission on the code institute website - make sure correct email address is used.
#Deploy live website post submission.




