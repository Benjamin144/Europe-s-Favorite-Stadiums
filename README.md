<h1 align="center">Joseph Roberts Super Arenas Website</h1>

**2nd Milestone Project: Interactive Frontend Development - Code Institute**

## Contents
- [Introduction](#joe-roberts-super-arenas---second-milestone-project)
- [Demo](#demo)
- [UX](#ux)
    * [Strategy](#strategy)
    * [Scope](#scope)
    * [Structure](#structure)
    * [Skeleton](#skeleton)
    * [Surface](#surface)
- [Features](#features)
    * [Existing Features](#existing-features)
    * [Features Left to Implement](#features-left-to-implement)
- [Technologies Used](#technologies-used")
- [Testing](#testing)
- [Deployment](#deployment)
    * [Deployment on GitHub Pages](#deployment-on-github-pages)
    * [Cloning the Repository](#cloning-the-repository)
- [Credits](#credits)
    * [Content](#content)
    * [Media](#media)
    * [Acknowledgments](#acknowledgements)


## Introduction

Initial idea

To design a functional styled website that purposefully pushes the user through a series of navigational links so that they can navigate through the site
in a logical manner, whilst stopping at various points to absorb content.

The main thrust of the site is to try and create an opportunity for the customer to learn about great venues and surrounding areas across the world with the view of one day having 
a chance to visit them by winning a competition funded by Super Arenas. Super Arenas is a fictional based charitable organisation that wishes to raise awarenes of Stadium structures
in sporting venues across the globe and promotes exclusive tours to far flung destinations, but wishes nothing more that people join their organisation and push back the proceeds of 
their respective revenues into grassroots sports to help developing talent and fitness in children primarily and adults alike who enbark upon a sport made accessable in their own 
communities.

The name of the website changed a few times! Elite Football Stadiums then World Stadiums then European Stadium Tours, was my first set of ideas....Fast forward to my conclusion to the story,...I then realized that a solution to
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

Finalizing the idea

I then realized that this concept might not stoke the interests of the public at large. So I thought why not increase the scope and development to all types of sporting arenas across 
World and then make the app a travelling companion called World Stadium Tours - This might solve a business problem geared towards the Hospitality industry. I would then go on to build 
a three page site, with the understanding of adding in future links to storys, popular posts, newsletters, articles, blogs and promotions.

Therefore the site would comprise.

1st page - Landing with optional Register - Sign in and search functionality
2nd page - Table format of 26 clickable sporting disciplines (has navigation button to go back to previous page)
3rd page - information which highlights a stadium venue to the left, stats and info to the right and google api features on the bottom. 
This also has a navigation button to go back to the previous page and also a forward button for the next stadium venue. 
The 2nd and 3rd pages will also have a home button to navigate back to the Landing page

Conclusion

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

Current Issues

#emailJS implementation fails - unable to retrieve emails from subscriber page, - script tags incorrectly coded. **resolved**
#was unable to resolve a loading issue with the google map - correct function used **resolved**

Some research about JS presentation question I had
Is it bad or good practice to include JavaScript in an HTML ...?
Dev option that tracks/updates/logs new information and changes to the database
It all depends on what you want your web page to do. If you are looking at a static web page with no user interaction, you can probably make do without javascript. 
JavaScript or HTML or PHP or any of the others are tools that are there to help you. There is no good or bad practice in using them.

## Demo

<h2 align="center"><img src="https://github.com/Benjamin144/Europes-Favorite-Arenas/blob/master/super-arenas.pdf"></h2>

## User Experience (UX)

### Strategy
To design a functional styled website that acts as a basis of information but the site guides the user through a series of navigational links throughout the site
in a logical manner, whilst stopping at various points to open various content features. The purpose of which is to highlight Sports Stadiums across the world to make the user aware 
of existence of the structure and the enviromnment surrounding it using the google API's. The stadium structures will be updated periodically as new competitons arise.
This would keep the possibility of users coming back to use the site because of interest and intrigue.

### Scope
The pages allow the intended user to access visual information about various Sports Arenas around the world in a manual fashion.
The options preconcieved in this project is firstly to use a self dragging Carousel or secondly a  card style information window as a display mechanism.
I then opted for a customized carousel that gives slick access to imagery and implementation of JS language.
As there was an option to use card style displays, I realised this would take up lot of room on the website and may overwhelm the user.
*Future development would be to link each image directly to google maps geo interface (I was unable to implement this because of time constraints)


-   ### User stories

    -   #### First Time Visitor Goals

        1. As an Partner               ||  I want to understand the global purpose of the site and learn more about the site content in terms of understanding local community projects and developments.
        2. As a Service Provider       ||  I want to be able navigate throughout the site to work in conjunction with organisers & members exclusively. 
        3. As a Subscriber             ||  I am a sports enthusiast or have world interests & curious about large events and themes wanting to explore more. 

    -   #### Returning Visitor Goals

        1. As an Partner               ||  I want to look for testimonials to understand what our users think of us in the media posts.
        2. As a Service Provider       ||  I want to find the best way to get in contact with the organisation with any questions I may have.
        3. As a Subscriber             ||  I want to locate their organizations social media links to see their followings on social media to determine how trusted and known they are.

    -   #### Frequent User Goals
        1. As a Partners               ||  I want to check to see if your evolving and if you're interested in how to inprove things for others
        2. As a Service Provider       ||  I want to check to see if there are any service/development based sites linked to the main site
        3. As a Subscriber             ||  I would like inspiration and an openess to different ways of looking at the world events and would engage on that basis and become a member.


### Structure
I want to make the website scrolls down the page site but also has nav items, i.e (about me). The links would help the user understand the nature of the website, which is to promote an organisation that is willing
to contribute to community projects, by raising funds to help develop sports of all genres at grassroots level. In this case the 'About' navlink takes the user to a seperate page which gives the user an opportunity
to subscribe and return to the home page. 'Learn more' button is only linked t the home page at present, but as the project develops the link will be updated to other site areas such as 'Articles', 'Newsletters' Blog posts' and 'News feeds'
Yet on the home page the user can click on the 'Explore' nav-item, to immediatly scroll down the page to a presentation of various Arenas across the World. The user may also use a mouse
to either drag the slider left and right to loop throught the images. There is also an option to use the buttons to work the slider. I expected that this form of presentation would be the main feature that
the user would be working from, therefore added some additional features such as 'dots' to help the user understand what position they are in on the slider, and 'i' information tool tip modal  
and some text to further solidify operation. This was done because a design issue of the carousel not set to auto play meant that if the user click the carousel in the white space by accident
the href points to maps.html. Carousel in essence is a 'Touch' enabled jQuery plugin that lets developers create responsive carousel slider.

#issues, that needed further development - unable to implement a workable 'autoplay' solution as an option, so the carousel remained manually operated. 
                                         - pressing between images whilst trying to swip the display left or right could inadvertantly navigate the user to map.html
                                            the solution to this would have been to have the white space unclickable.
Additional site structure would have storylines/storyboards and experiences of travelling adventures to venues on tour, Newsletters for forthcoming promotional events. Blog posts for trending and popular posts concerning travel, 
hospitatilty experience, critic's.


### Skeleton

-   ### Design
    -   #### Colour Scheme
        -   I have used the following global palette of colors for this project: --evergreen: #38855d; --text-gray: #112d60; --text-light: #686666da; --bg-color: #0e3746; --white: #fffaf2; --midnight: #104f55; --sky: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    -   #### Typography
            I have used light font themes to add a friendly non formal appearence: "Carter_One", "Josefin", "Livvic", "Roboto".
        -   The Livvic font=family for nav links across the site & Carter_One commonly used across the site, with Josefin secondary font, which is light non invasive, 
            
    -   #### Imagery
        -   The imagery for this site is very minimal and reflects transparency and not flashy. The images of the stadium convert well on all screen sizes
 

[Landing Page](https://github.com/Benjamin144/My-Resume/blob/master/Landing.png)

[About, Skills](https://github.com/Benjamin144/My-Resume/blob/master/Skills.png)

[Contact](https://github.com/Benjamin144/My-Resume/blob/master/Contact.png)

### Surface

My site has a simple, unassuming, look and feel. And the functionality is smooth and engaging. I have used 'green' background images to celebrate sports development at grassroots level
but did not want to overwhelm the user with images totally geared to sport because I wanted to attract a neutral audience
<p align="right">
  <a href="joseph-roberts-super-arenas---second-milestone-project">Back to Top :arrow_heading_up:</a> 
</p>

## Features

-   Responsive on all device sizes

-   Interactive elements, such as, pull down nav bars, carousel, modals, maps API and email functionality. 

## Technologies Used

All of the Features within the Super Arenas website  using  Javascript, Jquery CSS & HTML core, 'OWL' and 'Bootstrap' Front-end Component Libaries, GoogleMaps API, and EmailJS.

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JS](https://en.wikipedia.org/wiki/JavaScript)
-   [JQ](https://en.wikipedia.org/wiki/jQuery)



### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Owl.Carousel 2:](https://owlcarousel2.github.io/OwlCarousel2/)
    - Touch enabled jQuery plugin that lets you create a beautiful responsive carousel slider.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Titillium Web' font into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Paint 3D:](https://www.microsoft.com/en-gb/p/paint-3d/9nblggh5fv99)
    - Paint 3D s a built-in creative application that comes free with Windows 10*.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.

    <p align="right">
  <a href="joseph-roberts-super-arenas---second-milestone-project">Back to Top :arrow_heading_up:</a> 
</p>

## Testing

I have tested my portfolio using Chromes developer tools, and Light House
The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.


-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)


#TESTING#
#Check site UX for navigational completeness - make sure links work - log links in readMe that are in development. 
#Check site UI - Ensure ease of use (does the site make sense).
#Check rating with lighthouse (screenshot results and use in readMe)
#Check responsiveness on all devices
#Check responsiveness on all web browsers
#Clear bugs - reference, the Slack community, tutors & online support, i.e console log, "Uncaught exceptions", "emailJS - tutorial"
#Run the code through (W3C) validators

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

    **resolved by changing the order of content in the main.js file - **resolved**
    **resolved uncaught not defined type error in console for modal by moving JS to index.html file under modal because te complier was not reading the request from the js file **resolved** 
    


### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the person.

        1. Upon entering the site, users are met with a solid deep bl ue navigation bar to go to explore a choice of three other pages. Beneath the nav bar the user is impacted by a dynamic full width background image that bears my full animated name and 
           job title. The user can click simultaneously switch between arrow and job title once clicked on scrolls down to the lower extremities of the page.  
        2. Once there the user will quickly understand the purpose of the website which really is pre marketing a call to action, considering me as a potential employee, candidate or collaborator.
        3. The user is free to scroll back up or back down the page to the footer, to see the details on how to stay in touch with me or choose to delve deeper into the website if still interested. With a handy 'back to the top' feature to save excessive scrolling.

    2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.

        1. The site has been designed to aid the user in making simple traditional choices when navigating around the site and the use of catchy imagery has been chosen to maintain interest, throughout their journey.
           Each nav bar item is featured to keep the user engaged as much as possible with delayed hover/time effect. The logo in the top right hand corner is non desript and it's purpose is to lead the user to the homepage when on other pages of the site.
        2. In keeping with the home page style of presentation, I have kept the style very basic and honest with alot of white-space with symbolism. The idea behind this is to help the user push through the site as quickly as possible, only focussing in on what is necessary at the time of reading.
           I have therefore minimized my profile to a modal button where again the user can breifly access it or stay interested.
        3. When the user clicks on the Skills Page, they are met with more bold inviting images and quote to keep the user further engaged. Purpose being that it may help the user to focus on the content and information they were seeking. 
           The use of the carousel is to further confirm the skillset on offer by me as a Front end web developer and how I would rate myself.
        4. The user will be spending most of their time on this page, I have added a portfolio dropdown nav-item here so the user can see further examples of my learning of differing web development presentations.
           On the final Contact Page the user can easily scroll down to a section where they have an option to get in touch with me 
        

    3. As a First Time Visitor, I want to look for testimonials to understand what their users think of them and see if they are trusted. I also want to locate their social media links to see their following on social media to determine how trusted and known they are.
        1. Once the new visitor has read the About Us and What We Do text, they will notice the Why We are Loved So Much section.
        2. The user can also scroll to the bottom of any page on the site to locate social media links in the footer.
        3. At the bottom of the Contact Us page, the user is told underneath the form, that alternatively they can contact the organisation on social media links below which highlights the links to them.

-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to find the new programming challenges or hackathons.

        1. This is in development but links to blog sites on the 'Say Hello page was intended for this purpose.
        2. As the purpose of the site goals are not consistent at this early stage nevertheless will be introduced in the future.

    2. As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.

        1. The navigation bar has an opportnity to contact me with a 'Call to action' as a Nav-item link to the Contact Page.
        2. The visitor can then  fill out a form on the page or are told that alternatively they can message the organisation on social media.
        3. The footer contains links to the organisations Facebook, Twitter Reddit, Google, YouTube and Pinterest page as well as the organization's email.
        4. Whichever link they click, it will be open up in a new tab to ensure the user can easily get back to the website.
        5. The personal information section is set up to autofill 

    3. As a Returning Visitor, I want to find the Facebook Group link so that I can join and interact with others in the community.

        1. The Facebook Page can be found at the footer of every page and will open a new tab for the user and more information can be found on the Facebook page.
        
-   #### Frequent User Goals

    1. As a Frequent User, I want to check to see if there are any newly added challenges or hackathons.

        1. The user can use search components in the navigation bar to look for challenges

    2. As a Frequent User, I want to check to see if there are any new blog posts.

        1. The user would already be comfortable with the website layout and can easily click the blog link



### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iphone6 iPhone7, iPhone 8 iPhoneX, iPad, iPad Pro and Pixel 2XL
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

<h2 align="center"><img src="https://github.com/Benjamin144/Europes-Favorite-Arenas/blob/master/super-arenas.pdf"></h2>
<h2 align="center"><img src="https://github.com/Benjamin144/Europes-Favorite-Arenas/blob/master/super-arenas.pdf"></h2>
<h2 align="center"><img src="https://github.com/Benjamin144/Europes-Favorite-Arenas/blob/master/super-arenas.pdf"></h2>
<h2 align="center"><img src="https://github.com/Benjamin144/Europes-Favorite-Arenas/blob/master/super-arenas.pdf"></h2>
<h2 align="center"><img src="https://github.com/Benjamin144/Europes-Favorite-Arenas/blob/master/super-arenas.pdf"></h2>


### Known Bugs

-   On some mobile devices the landing page background image appears to not fluidly stretch across the extremities of the navigation bar. 
-   A white gap can be seen down the sides of the landing page and navigation bar as a result looks wider
-   Last link in Navbar can appear relatively obscure or pushed sidways out of view when when screen sizes are rendered for Moto G4, Galaxy S5 and Pixel 2.
-   On Microsoft Edge and Internet Explorer Browsers....

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://benjamin144.github.io/My-Resume/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   The full-screen hero image code came from this [Google Images Back End Server post](https://google.com)

-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

-   [Animate.css](https://animate.style/) : For intro annimation on Landing page

-   [Clever Techie](https://www.youtube.com/watch?v=L0uNai3XyKQ) : For useful video tutorials discussing and demontrating Responsive Nav Bar with Bootstraps

-   [Buckie Roberts (The New Boston)](https://www.youtube.com/watch?v=qIULMnbH2-o) : For useful video tutorials discussing and demontrating Bootstraps tips and tricks

-   [Drew Ryan](https://www.youtube.com/watch?v=Zn64_IVLO88) : Took inspiration from building a Responsive Bootstrap Website Tutorial with Full Screen Landing Page

-   [Lawrence McDaniel](lawrencemcdaniel.com/home) : Inspired by this absolute Legend of a Web developer

-   [Stackoverflow)](https://stackoverflow.com/questions/19827605/change-bootstrap-navbar-collapse-breakpoint-without-using-less) : Change bootstrap navbar collapse breakpoint without using LESS

-   [Perishable Press](https://perishablepress.com/a-killer-collection-of-global-css-reset-styles/) : Killer Collection of CSS Resets

-   [Stock Adobe](https://stock.adobe.com/) : Took inspiration from Stock of Architural type Imagery

-   [Google Images](https://https://www.google.com/search?q=images+of+mainframe+computer&rlz=1C1CHBF_enGB896GB896&sxsrf=ALeKk00SBTdlKtEkNjLq2buy-mTbJzwn6g:1592084670906&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjj0ovK4f_pAhVCZMAKHRZ4Ca4Q_AUoAXoECBMQAw&biw=1920&bih=975#imgrc=xgulmTYgskvm-M/) 
                    For Landing page I took inspiration from google images of how mainframe servers have changed over the years

-   [Snook](https://snook.ca/archives/html_and_css/font-size-with-rem) : Font sizing with rem

-   [Stock Adobe](https://stock.adobe.com/) : Took inspiration from Stock of Architural type Imagery

-   [Awwwards](https://www.awwwards.com/) : Took inspiration from 'self proclained' The awards of design, creativity and innovation on the internet

-   [Hacker News](https://news.ycombinator.com/item?id=11098891) : Took inspiration from a paraphrased quote by Joe Armstrong

-   [The Code Institute](https://courses.codeinstitute.net/courses/course-v1:CodeInstitute+CF101+2017_T1/courseware/1f0ccaac7a3e43d895c1beae5363f46c/79eac486cc0c4c9aa54cbe54d009287c/?child=last) 
                    Took inspiration from a series of Code Institute Tutorials - This was one of my favorites.





   


### Content

-   All content was written by Joseph Roberts.

-   Psychological properties of colours text in the README.md was found [here](http://www.colour-affects.co.uk/psychological-properties-of-colours)

### Media

-   All Images were created by the Joseph Roberts.

### Acknowledgements

-   My Mentor Gerard McBride for continuous helpful feedback.

-   Tutor support at Code Institute for their support.

-   The Code Institute Slack community for their ongoing support.

-   I would also like to say a special thanks to Brian O'Grady, Programme Director & Matt Rudge a Senior Product Developer at The Code Institute for their teaching .

####################################################################################################################################################################################

###

####Reduce file sizes - Previously changed from jpeg to png.. but may have to compress ping further if possible and replace all image file batches

################################################################################################################################################################################


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
[View the live project here.](https://benjamin144.github.io/europes-favorite-arenas










                

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



#SUBMITTING#
#Complete png file presentation of front-end site visual across all screen sizes for readMe.
#Check brief again and ensure all answers are met to the best of your ability
#Complete MS2 submission on the code institute website - make sure correct email address is used.
#Deploy live website post submission.





###############################################################################################################################################################################
##SCOPE         
                
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
#Would have populated explore link with a dropdown menu to navigate to marker locations but have more detail about venue

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
- could not get THIS  emailjs.send("gmail","template_8q5b5bd",{name: "Joe", notes: "I want to donate £100000000...."); line of code to work!
#Run the code through (W3C) validators

#OUTCOMES#
#Directional arrow buttons need to be more responsive on smaller monbile devcies (size of buttons squewed, try changing media queries)

#SUBMITTING#
#Complete png file presentation of front-end site visual across all screen sizes for readMe.
#Check brief again and ensure all answers are met to the best of your ability
#Complete MS2 submission on the code institute website - make sure correct email address is used.
#Deploy live website post submission.

#Complete readMe
#upload wire Frameworks
Record References

#Final Testing
Test Site with all popular browsers
Test with lighthouse and resolve errors
cross check with last critic
submit project.




