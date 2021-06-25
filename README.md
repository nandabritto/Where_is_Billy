# Where is Billy?

Billy is terrible linking famous landmarks around the world and their locations. He really needs your help!

If you would like to test your geolocalization and landmarks knowledge, this game is for you!

Click [here](https://nandabritto.github.io/MS2/index.html) to help Billy. 

## UX

### User Stories

+ As a user, I would like to be able to …

1.	easily navigate throughout the website and questions.
2.  see in which question I am answering and how many more I have;
3.	add my name and save my score;
4.	see how I rank on the High Scores.
5.  quickly check the High Scores when coming back to game later on.

### 1. Strategy 

 * Project Purpose

    Create an interactive quiz with consistent styling across all pages ensuring that the application runs flawlessly across all devices. 

Project Goals

   + Provide a fun and interactive application;
   + Test general peoplo knowledge about landmarks and places around the world;
   + Allow user to los scores and compare with previews attempts.


### 2. Scope

 * I wanted a simple, straightforward UX experience.
 * I wanted my content to be clear. 
 * A site that is visually appealing on most devices.


### 3. Structure

*	A clear and simple layout is in place to ensure users can navigate in a inuitive way and have an easy experience.

* Navbar is sticky to facilitate user to navigate through pages easily. A small navigaton is the same on all pages to ensure easy navigation.
* Index page displays game and character introduction and instructions to the game. 
* Game page effectively show one question, four answer options, countdown timer and progress bar and text to show what question you are on.
* End game page can be found a for to add you name on your score. 
* High Scores page shows ranking scores.	

### 4. Skeleton

Wireframes created with Balsamiq. The project was developed from initial wireframes and some modifications were made during the development process to assure better usability. 

Click to see wireframes:

[Index page](assets/images/readme_ screenshots/wireframes/index_page.png) %20 [Game page](assets/images/readme_ screenshots/wireframes/game_page.png) %20 [High Score Page](assets/images/readme_ screenshots/wireframes/high_scores_page.png)

### 5. Surface

* Colours

The Images and text colour had contrasted the theme of the logo and website well.


<p align="center" width="100%">
  <img width="90%" src="assets/images/readme_ screenshots/color_pallete.png">
</p>

* Font Selection
 
Two complimentary fonts were chosen with [Google Fonts](https://fonts.google.com/) to be used across the whole of the website. The chosen fonts were Montserrat for headings and Lato for lists and paragraphs.

<img src="">

## Existing Features 

# Navbar 

+ High Scores and Home 

<p align="center" width="100%">
  <img width="90%" src="assets/images/readme_ screenshots/navbar_desktop.png">
</p>

+ Colapsed navbar 

<p align="center" width="100%">
  <img width="33%" src="assets/images/readme_ screenshots/navbar_mobile.png"></p>

# Introduction page 

+ Game introduction
<p align="center" width="100%">
  <img width="50%" src="assets/images/readme_ screenshots/introduction.png"></p>

+ Game instruction
<p align="center" width="100%">
  <img width="50%" src="assets/images/readme_ screenshots/instructions.png"></p>

# Game Page 

question
hint image
disable buttons when click an answer 

+ google maps api on wrong answer
<img src="assets/images/readme_ screenshots/instructions.png">

# End Game 
+ form to add name on score

<p align="center" width="100%">
  <img width="50%" src="assets/images/readme_ screenshots/end_page.png"></p>

# High Scores

+ List of top 5 players

<p align="center" width="100%">
  <img width="50%" src="assets/images/readme_ screenshots/high_scores_page.png"></p>

go home button - link to index
   
## Future Features 

I would like to add:

+ more questions to question bank and storage it on an API;
+ choose difficult option;
+ sound effects to enhance the user experience;
+ storage score data on external storage;
+ option to know more about the question even if user answer it correctly.

## Code Validation

### Automated tests

   + HTML

  Passing the HTML from all templates and base into the W3C Markup Validator no errors have been found [W3C validator](https://validator.w3.org/).
  Code Validation results:
  
   + CSS

No errors were found when passing through the official [W3C validator](https://jigsaw.w3.org/css-validator/). 

CSS validation results can be viewed [here]()

<a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>

     
### Manual Testing

   + Desktop

 Mozilla Firefox, Google Chrome, Microsoft Edge: everything is working good. Page loads and all of the page features are working.

   + Mobile
 
 Tested with Samsumg A30, Xiaomi Mi6, Xiaomi Mi8 and webpage works well. It responsive as intended and with no page deformations.

   + Mozilla Dev Tools
 
 Tested for available devices, webpage works well. It is responsive as intended, with no page deformations.
 
 ## Accessibility tests
 
 The entire website was verified about accessibility using [Wave](https://wave.webaim.org/). 

   + Errors

 + Alerts

   - 
 
 ## Project Bugs and Solutions:



  ## Deployment

 The site was deployed to GitHub pages. 
 
 * The steps to deploy are as follows: 

  - In the GitHub repository, navigate to the Settings tab; 
  - From the source section drop-down menu, select the Master Branch;
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found [here](https://nandabritto.github.io/MS2/).

### Forking the GitHub Repository:

By forking the GitHub Repository you will be able to make a copy of the original repository on your own GitHub account allowing you to view and/or make changes without affecting the original repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/nandabritto/MS2)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/nandabritto/MS2)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

## Credits 

### Content

All quiz questions were created based on two free night quiz webpages. The links can be founded here:

[RadioTimes](https://www.radiotimes.com/quizzes/pub-quiz-geography/) %20 [Khon Kaen Quiz](https://www.kkquiz.com/category/landmarks/1)

All questions were modified to atend character and game characteristics. 

+
### Media

- All pictures and images used in this project are from [Depositphotos](https://depositphotos.com) and [freepik](https://www.freepik.com/home).

### Worked based in other code

+ [Favicon generator](https://www.favicon-generator.org/) – Used to create favicon used on website.
+ [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k) – Used to help with the first basic quiz function on JS. 
+ [James Q Quick Youtube Channel](https://www.youtube.com/watch?v=4bctmtuZVcM)] - Used to help with the many quiz function on JS (like timer, progress bar, etc). 
+ [W3 Schools](https://www.w3schools.com) - Used to help building several functions like [error popup](https://www.w3schools.com/howto/howto_js_popup.asp).
+ [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/) - Used to help with footer localization on pages.
+ [Bootstrap](https://getbootstrap.com/docs/4.0/components/navbar/) - Used to help building collapsed navbar.


### Acknowledgements

-	To the Code Institute course material, as the basis of all my knowledge is from here.
-	To the Slack community as I have used the different channels to find answers to problems!
- Stack Overflow as a valuable resource for solving a couple of issues.
- [W3schools](https://www.w3schools.com/) for general reference.

I would also like to thank:

-	My husband Guilherme for all the support on stressfull moments, help to figure out some bugs and for reviewing everything. 
-	My mentor Rahul Lakhanpal for his time, support and guidance.
-	Code institute tutors, for help with several issues and bugs.





