# GOOGLE DINOSAUR PROJECT

The trex runner game abstracted from chrome offline err page.

![chrome offline game cast](main-project/img/chrome_offline_game.gif)

## A Vision Statement

<strong>FOR</strong>: everyone is able to get offline .

<strong>WHO</strong>: need to have something to do when the connection is down.

The <strong>Google Dinosaur</strong> is a <strong>Browser Extension</strong>

<strong>THAT</strong> allows users to change the level of difficulty and allows the dinosaur to fky, jump or eat candy in the game based on the original game.

<strong>UNLIKE</strong> this extension is able to display your name and the top 5 highest score at the end of the game.

Players can <strong>CHANGE</strong> character model or the background theme.

<strong>OUR PRODUCT</strong> will provide a new trend and design pattern for users to play more attractive.

## Personas

<strong>Tuyen Pham:</strong>

Sunny, age 25, is a master student in San Diego, a city in the US state of California on the coast of The Pacific Ocean. She has responsibility for some research related to building a web server, host web application and tests the communication between the platform and server. She had a Bachelor of Science degree in Computer Science major in 2017 and then retrained as a researcher to gain a master's degree at university after 3 years working as a web developer in SAP company. 

As her routine studying and working life, she always works with computers, laptops and phones. Therefore,Google Dinosaur Game is one of the options that offers her a various levels of difficulty and gives her access to entertainment without Internet connection. Sunny would love a little dinosaur because this game helps her not only interact with her eyes and her hands together but also kill time during the Internet connection is not working well.

<strong>Ziwei Gao</strong>

Tom, a high school student, has to use his Chromebook in every school day. He has a varies of hobbies and interests, but he still cannot beat the bored when he has no internet connection, but he has to finish the schoolwork so he cannot simply go outside and hang out with his friends. The only choice is waiting for the connection becomes good.  At this time, he has opened the webpage and saw ‘no internet connects’ but a small dinosaur game appears. Then, he knows that he will press the space key on the keyboard.

<strong>Zidong Wang</strong>

Jay is a student in class 2, grade 3 in federal primary school. His hobby is piano and basketball. He really wants to be a singer when he grows up. But his father doesn’t think so. He wants Jay to be a programmer becasue he thinks that programmer is easier to find a job in the future. However, Jay is not interested in this field. His father may need an enlighten game to spark Jay's interest. I think that the Google Dinosaur game is a best software for them. It is easy and funny. I am sure Jay would like it.

<strong>Junxiang Wen</strong>

Ray is a college student who studies software engineering. Usually, he often use his computers for studying. When his computer does not have network connections, he will choose to play GOOGLE DINOSAUR. It's lovely and interesting to jump around in the screen. This game can also make him to relax his mood and reduce the pressure of work and study. Sometimes, he will disconnect the network to play  GOOGLE DINOSAUR.

## Feature List

- Increase the difficulty level.
- Display the player name and the top 5 highest scores at scoreboard managment when it is gameover.
- Two players can play together at the same computer.
- Player can change the background theme, either day or night.
- Allow the trex move left or right or fly or jump twice.
- Player can choose the character to play.
- Display the magic candy.

## Programming language and development environment

<strong>Programming language</strong>: JavaScript, CSS, GUI and HTML.

<strong>Development environment</strong>: Microsoft Studio Code or any IDE is needed for writing web application and enable developer mode in the browser.

## How to Run & Deploy

Since this project was under a smaller time constraint, we decided the best way to reproduce and potentially contribute back to the project is by downloading the program as a ZIP file, extracting and running it by double-clicking the "index.html" file.

## Project Management

<strong>Trello</strong>: [Google Dinasour](https://trello.com/b/VbdpN3TF/final-projec-google-dinosaur)

## Minimal Project.

We can run the program correctly, after that, we adjust some parameters in runner.js. It works for the game.
Now, we can make any changes on this project to  achieve our goal

![Graphs](https://github.com/3296Spring2020/project-01-google-dinosaur/blob/Wang/little.png)

 Runner.config = {
 
        ACCELERATION: 0.001,
        
        BG_CLOUD_SPEED: 0.2,
        
        BOTTOM_PAD: 10,
        
        CLEAR_TIME: 3000,
        
        CLOUD_FREQUENCY: 0.5,
        
        GAMEOVER_CLEAR_TIME: 750,
        
        GAP_COEFFICIENT: 0.6,
        
        GRAVITY: 0.6,
        
        INITIAL_JUMP_VELOCITY: 12,
        
        MAX_CLOUDS: 6,
        
        MAX_OBSTACLE_LENGTH: 3,
        
        MAX_SPEED: 12,
        
        MIN_JUMP_HEIGHT: 35,
        
        MOBILE_SPEED_COEFFICIENT: 1.2,
        
        RESOURCE_TEMPLATE_ID: 'audio-resources',
        
        SPEED: 60,
        
        SPEED_DROP_COEFFICIENT: 3
        
    };
    
 ## Week 1

- The Trex can move to right and left. Besides, when user click F, Trex will fly. This function is for the future development

- Recast index.html which can choose player for gaming
origin index.html rename to gaming.html and selector.js will selector the corresponding JS file(runner.js/twoRunner.js) which combine with gaming.html.
Add twoRunner.js for 2 palyers(in process)
Add jquery for both html file.

## Week 2

- Now the Trex can jump twice or more
- Display the name and the top 5 scores at scoreboard management when the game is end.
- Two players can play together in the same computer

## Week 3

- One Player model and Two Player model can choose their own actor for playing.
- Display the magic candy.
- Extension structure is done.

## Week 4

- Display the difficulty of level.
- When Trex eats the candy, the candy will disappear instead of going through the body of the dinosaur.
- Display the night mode for version 1 player.
- Extension structure is a final version.


## Instruction

Version1: Game Only
 Open main-project folder and open index.html to start the game

VerSion2: Web Server With Sign In Option 
-  Step 1: Open usbwebserver or install PHP operating environment and phpAdmin
-  Step 2: Start Apache and MySQL
-  Step 3: goto localhost/phpAdmin to creat a database which name "user", then creat a table which name player and have element userName and password.
- Step 4:put file into usbwebserver\root
- Step 5: Go to localhost/main-project and start using the server.
