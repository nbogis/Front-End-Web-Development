//// Dear Reviewer, I'm aiming for the exceeding grade so please return it back to me if it doesn't exceed. Thank you ////

/**************     Global Section     ************* /
/** myHero: variable to hold the number of the chosen character 
*   collisionFlag: true if a collision happen and false if not.
*   winFlag: true if the player reaches the water and false otherwise.
*   loseFlag: true if the player used all the attempts. 
*   score: holds the score that increases when collectables are collected.
*   attempts: the player starts 3 attempts and it decremented when he is hit by an enemy.
*   allBugs: array of all enemy sprites.
*   allHeroes: array of all player sprites. 
*   diamond: array of sprites of jewels with different colors. */

var myHero;

var collisionFlag = false;

var winFlag = false;
var loseFlag = false;

var score = 0;
var attempts = 3;

var allBugs = ['images/enemy-bug1.png',
        'images/enemy-bug2.png',
        'images/enemy-bug3.png',
        'images/enemy-bug4.png',
        'images/enemy-bug5.png'];

var allHeroes = ['images/char-boy.png',
        'images/char-cat-girl.png',
        'images/char-horn-girl.png',
        'images/char-pink-girl.png',
        'images/char-princess-girl.png'];

var diamond = ['images/Jewel Blue.png',
        'images/Jewel Green.png',
        'images/Jewel Orange.png'];

/** global function to get a random number within (inclusive) min and (exclusive) max */
function maxMin(max, min) { 
    return Math.random() * (max - min) + min;
};

/*******    Audio Section    ******/
/** create audio object to play background music with medium volume and continues loop */
var music = new Audio('main.mp3');
music.volume = 0.5;
music.play();
music.loop = true;

/** audio object to play explode sound when accident happen with medium volume */
var crash = new Audio('explode.wav');
crash.volume = 0.5;

/** audio object to play winning sound indicating winning */
var winning = new Audio('winning.wav');

/** audio object to play winning sound indicating winning */
var losing = new Audio('Boo.mp3');

/** audio object when Collectables are collected */
var coin = new Audio('coin.wav');

/** get the canvas and add text(show you win or you lose), score(show collected score) 
*   and attempts(show number of attempts left) labels to it */
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
$('<span id="text" type="text">').insertAfter('canvas');
$('<span id="score" type="text">').insertAfter('#text');
$('<span id="attempt" type="text">').insertAfter('#score');

/**************     End - Global Section     ************* /

/**************     Classes Section     ************* /

/*********     Enemy Section     *********/
/** ALL CLASSES ATART WITH CALLING A START METHOD **/

/** Enemy class with start, update, collision detection, and render 
*   methods. horizontal and vertical: variables to use to define edges (collision box)
*   of the bug. They were chosen after testing the locations of the bugs. This class take in 
*   number as a parameter representing the bug number. */
var Enemy = function(number) {
    this.number = number;
    this.horizontal = 35;
    this.vertical = 65;
    this.start();
};
/** start method to randomly select a bug, poisition it off the screen to give some 
*   delay and strat it with a random speed */
Enemy.prototype.start = function() {
    val = Math.round(maxMin(5,1));
    this.sprite = allBugs[val-1];
    /** -1000 and -800 were chosen since they give some time to the player to move */
    this.x = Math.round(maxMin(-1000, -800));
    /** the bug is positoned depending on its number. 50 and 80 were chosen to place bugs correctly */
    this.y = 50 + (this.number%3) * 80;
    this.speed = maxMin(4, 1);
};
/** method to update enemy location, speed, and collision box. It resatrts the bug with random color,
*   rndom speed, and random location when it reaches the furthest right. 
*   dt: variable to multiply movement to insure the game runs at the same speed for all computers. */
Enemy.prototype.update = function(dt) {
    /** restart when reaching the end */
    if (this.x > 505) {
        this.start();
    }
    /** if not at the furthest right, just keep going straight with the same speed */
    else {
        this.x += Math.round(this.speed* 100 *dt);
    }

    /** update the collision box around the player for collision detection by adding horizontal and vertical */
    this.front = this.x + this.horizontal;
    this.back = this.x - this.horizontal;
    this.top = this.y - this.vertical;
    this.bottom = this.y;
    /** if the user has won or lost the game, restart it */
    if (winFlag || loseFlag) this.start();
};
/** method that draws the enemy on the screen only when the user is playing the game. It takes
*   the sprite and the coordinates of the enemy and draw them. It continuesly show the score and the number
*   of attempts left at the bottom of the screen. */
Enemy.prototype.render = function() {
    if (select.unselect && !winFlag && !loseFlag)
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    
    ctx.font = "17px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText('score: '+ score, 15, 570);
    document.getElementById('score').style.display = 'visible';

    ctx.fillText('attempts: '+ attempts, 410, 570);
    document.getElementById('score').style.display = 'visible';
};
/** method that detects collision of bugs with the player. It detects if 
*   the collision box of enemy and player intersect. When collided, it sets collision flag,
*   plays the crash sound, decrement number of attempts. */
Enemy.prototype.collisionDetection = function() {
    if ((player.bottom >= this.top && player.top <= this.bottom) && (player.front >= this.back && player.back <= this.front)){
        collisionFlag = true;
        crash.play();
        attempts--;

        /** if attempts is 0, play losing sound */
        if (attempts < 1) losing.play();
    }
};

/*********     Player Section     *********/
/** Player class is a subclass of Enemy. The class has extra method called handleInput to handle
*   user's inputs to move the player. It inherit the horizontal value from Enemy class. */
var Player = function() {
    Enemy.call(this);
    this.vertical = 80;
    this.start();
};
Player.prototype = new Enemy;
/** start method to start the player at the bottom third grass with a collision box. */
Player.prototype.start = function() {
    /** start from the middle of grass */
    this.x = 203;
    this.y = 380;
    /** collision box around the player for collision detection */
    this.front = this.x + this.horizontal;
    this.back = this.x - this.horizontal;
    this.top = this.y - this.vertical;
    this.bottom = this.y - 4;
};
/** method to update the player's locations and collision box. It checks if the player 
*   collided with an enemy, it moves back to the starting location. It also makes sure 
*   to not let the player get off the screen. If the player reaches the water, it sets 
*   winning flag. */
Player.prototype.update = function() {
    /** if collision happens, reposition the player to the starting point and reset the flag */
    if (collisionFlag == true) {
        this.x = 203;
        this.y = 380;
        collisionFlag = false;
    }
    /** if to the furthest right, stay there */
    if (this.x > 403){
        this.x = 403;
    }
    /** if the furthest left, stay there */
    else if (this.x < 3) {
        this.x = 3;
    }
    /** if at the bottom, stay there */
    if (this.y > 380){
        this.y = 380;
    }
    /* if player reaches the water, he wins the round. Winning sound is played 
    *  the game restarts */
    else if (this.y < 0) {
        this.y = 0;
        winFlag = true;
        winning.play();
        this.start();
    }
    /** update the collision box */
    this.front = this.x + this.horizontal;
    this.back = this.x - this.horizontal;
    this.top = this.y - this.vertical;
    this.bottom = this.y - 4;
};
/** method to draw the chosen player on the screen and messages in the right times. If the player 
*   wins or loses, he goes back to starting point. */
Player.prototype.render = function() {
    /** the sprite is the chosen character which number is held ib myHero */
    this.sprite = allHeroes[myHero-1];
    /** if the player wins, show congratulation messgge on the water and the final score on rocks.
    *   the game freezes and a messag eto hit enter to restart the game is displayed */
    if (winFlag) {
        ctx.font = "50px Arial";
        ctx.fillStyle = 'red';
        ctx.fillText('You Win!', 140, 115);
        ctx.fillText('Your Score is '+score, 70, 270);

        ctx.font = "17px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText('Hit Enter to restart', 200, 570);

        this.x = 203;
        this.y = 380;
    }
    /** if the player loses, set the losing flag, display losing message and ask user to restart */
    if (attempts < 1) {
        loseFlag = true;

        ctx.font = "50px Arial";
        ctx.fillStyle = 'red';
        ctx.fillText('You Lose!', 140, 115);

        ctx.font = "17px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText('Hit Enter to restart', 200, 570);

        this.x = 203;
        this.y = 380;
    }
    /** if not selecting the character, draw the player to play the game */
    if (select.unselect)
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
/** method to handle key input to move the player. If enter key is hit, restart the game by 
*   going to characters selection mode. */
Player.prototype.handleInput = function(key) {
    if (key == 'left') {
        this.x = this.x - 100;
    }
    else if (key == 'right') {
        this.x = this.x + 100;
    }
    else if (key == 'up') {
        this.y = this.y - this.vertical;
    }
    else if (key == 'down') {
        this.y = this.y + this.vertical;
    }
    else if (key == 'enter') {
        /** if user hit enter and he won, reset win flag and attemts and start the selector and characters */
        if (winFlag) {
            winFlag = false;
            attempts = 3;
            select.start();
            characters.start();
        }
        /** if user hit enter and he lost, reset lose flag and attempts and start the selector and characters */
        if (loseFlag) {
            loseFlag = false;
            attempts = 3;
            select.start();
            characters.start();
        }
    }
};

/*********     Selector Section     *********/
/** Selector class is used to create selector object that moves right and left to select
*   The user's chosen character. It chooses one of the 5 characters. Once decision is made,
*   the user starts with the selcted character from the starting point. */
var Selector = function(){
    /** the selector sprite from images */
    this.sprite = 'images/Selector.png';
    this.start();
};
/** start the selector from the middle and reset the score and some variables */
Selector.prototype.start = function() {
    /** start the selector from the bottom middle */
    this.x = 203;
    this.y = 375;

    /** choose: holds the chosen character number. It's set to 3 as a default
    *   unselect: a flag is reset indicating selection mode and set to start game mode */
    this.choose = 3;
    this.unselect = false;

    score = 0;
};
/** method to draw the selector and ask user to hit enter to finialize his selection */
Selector.prototype.render = function() {
    if (!select.unselect) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

        ctx.font = "40px Arial";
        ctx.fillStyle = 'red';
        ctx.fillText('The Frogger Game', 80, 105);
        ctx.font = "30px Arial";
        ctx.fillStyle = '#1A237E';
        ctx.fillText('Avoid bugs and reach to the water', 30, 180);
        
        ctx.fillText('Collect jewels on your way', 70, 250);
        ctx.font = "20px Arial";
        ctx.fillStyle = '#0277BD';
        ctx.fillText('Blue', 130, 320);
        ctx.fillText('1 point ', 120, 350);
        ctx.fillStyle = '#43A047';
        ctx.fillText('Green', 225, 320);
        ctx.fillText('5 points', 215, 350);
        ctx.fillStyle = '#FF8F00';
        ctx.fillText('Gold', 335, 320);
        ctx.fillText('10 points', 315, 350);

        ctx.font = "17px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText('Hit Enter to select', 190, 570);
    }
};
/** method to handle key input to move the selector and make a desicion when user hit enter key */
Selector.prototype.handleInput = function(key) {
    /** move the selector according to the pressed key */ 
    if (key == 'left') {
        this.choose--;
        this.x -= 100;
    }
    else if (key == 'right') {
        this.choose++;
        this.x += 100;
    }
    /** when enter key is hit, the global variable myHero will be assigned to the chosen 
    *   character's number. The unselect property is set to indicate a character is chosen */
    else if (key == 'enter') {
        myHero = this.choose;
        this.unselect = true;
    }
    /** take care of going beyond the canvas border. Set choose back to the character at the border 
    *   and reposition the selector back to the border position */
    if (this.choose < 1) {
        this.choose = 1;
        this.x += 100;
    }
    else if (this.choose > 5) {
        this.choose = 5; 
        this.x -= 100;
    }
};

/*********     Characters Section     *********/
/** Characters class to display a character object at the beginning of the game. */
var Characters = function(number) {
    /** sprite is based on the character number in allHeroes array */
    this.sprite = allHeroes[number-1];

    /** the character will be displayed at x depending its number and y = 380. Each character is 100
    *   unit away from the previous one */
    if (number == 1) {
        this.x = 3;
    }
    else if (number == 2){
        this.x = 103;
    }
    else if (number == 3){
        this.x = 203;
    }
    else if (number == 4){
        this.x = 303;
    }
    else {
        this.x = 403;
    }
    this.y = 380;
};
/** render the character with the sprite and location x and y if the use is still selecting characters */
Characters.prototype.render = function() {
    if (!select.unselect)
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*********     Collectables Section     ********* /
/** Collectables class to randomly position and display jewels on the rocks. Jewels 
*   are collected by the player to increase the score.  */
var Collectables = function() {
    /** locationsX: x coordinate of the possible locations of the jewel
    *   locationsY: y coordinate of the possible locations of the jewel 
    *   The location of the jewel can be any combination of locationsX and locationsY */
    this.locationsX = [30,130,230,330,430];
    this.locationsY = [120,200,280];

    this.start();
};
/** method to start the object with random sprite and location */
Collectables.prototype.start = function() {
    /** a flag set when the jewel has not been collected and reset when not */
    this.jewelFlag = true;
    /** randomly choose a jewel color from diamond array and randomly position it */
    this.val = Math.round(maxMin(2,0));
    this.sprite = diamond[this.val];
    this.x = this.locationsX[Math.round(maxMin(4,0))];
    this.y = this.locationsY[Math.round(maxMin(2,0))];

    /** set the collision box of the jewel. These numbers were obtained by testing */
    this.front = this.x + 35;
    this.back = this.x - 35;
    this.top = this.y - 65;
    this.bottom = this.y-65;
};
/** method to update the jewel by checking for collection. If collected play collecting sound,
*   reset the flag and move the collectable away from the screen. */
Collectables.prototype.update = function() {
    /** call collisionDetection to check for collision. If collided, meaning the jewel is collected,
    *   play the collecting sound and restart with another jewel and position */
    this.collisionDetection();
    if (!this.jewelFlag) {
        coin.play();
        this.start();      
    }
    /** restart the jewel if the user won or lost the game */ 
    if (winFlag || loseFlag) {
        this.start();
    }
};
/** method to detect collision with the player */
Collectables.prototype.collisionDetection = function() {
    /** check if the player's collision box hit the jewel's box. Reset the flag if so */
    if ((player.bottom >= this.top && player.top <= this.bottom) && (player.front >= this.back && player.back <= this.front)){
       this.jewelFlag = false;

       /** collecting blue jewel increments the score
       *   green jewel increases the score by 5
       *   orange jewel increases the score by 10 */
       if (this.val == 0) score++;
       else if (this.val == 1) score +=5;
       else if (this.val == 2) score += 10;
    }
};
/** method to draw the jewel if in the game mode and the user hasn't won or lost yet */
Collectables.prototype.render = function() {
    if(select.unselect && !winFlag && !loseFlag){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

/*********     End - Classes Section     ********* /

/*********     Instantiation Section     ********* /
/** instantiate heroes selection. 5 Characters objetcs are created and displayed based
*   on each one's locations. */
var heroes = [];
for (var i = 1; i < 6; i++) {
    heroes.push(new Characters(i));
}

/** instantiate the selector */
var select = new Selector();

/** create Collectables object with a random value from 0 to 2 to randomly select the jewel color */
var jewel = new Collectables(Math.round(maxMin(2,0)));

/** instantiate enemies with random colors and locatios. Total are 6 enemies moving randomly */
var allEnemies = [];
for (i = 0; i < 6; i++) {
    /** create array of Enemy objects */
    allEnemies.push(new Enemy(i));
}

/** instantiate player object. The player starts the game with 
*   the character he chooses starting from the starting point */
var player = new Player();
/*********     End - Instantiation Section     ********* /

/** This method listens for key presses and sends the keys to 
*   player.handleInput() and select.handleInput() methods */
document.addEventListener('keyup', function(e) {
    document.getElementById('text').style.display = 'none';
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        13: 'enter'
    };
    /** allow ony left, right and enter keys in selection mode */
    var Keys = {
        37: 'left',
        39: 'right',
        13: 'enter'
    };
    /** in game mode, allow the player to move */
    if (select.unselect) player.handleInput(allowedKeys[e.keyCode]);
    else 
    select.handleInput(Keys[e.keyCode]);
});
