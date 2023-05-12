# SDSL: Surprisingly Deep Song Lyrics

### By: Daniel Loewenstein

[GitHub](https://github.com/loewenst) | [LinkedIn](https://www.linkedin.com/in/daniel-loewenstein-849a67213/) | [Play SDSL](https://sdsl.surge.sh/)

### Date: 5/4/2023

---

## _**Welcome**_

</br>

Welcome to Surprisingly Deep Song Lyrics

Welcome! Whether you love paying attention to song lyrics or you never paid any attention to them before, I hope this game opens your eyes to some really profound, powerful prose (or I guess poetry, technically). In this ReadMe, I’ll walk you through the premise and the mechanics of the game.
</br>
</br>

### **Game Premise**

</br>

Surprisingly Deep Song Lyrics (SDSL) works largely the same way as Who Wants to be a Millionaire: there are a series of questions, with four possible answers to each one, and if you get all the questions right, you win. Get a question wrong, you lose. There are even hints you can use - three per turn on easy mode, and three for the whole game on hard - kind of like Millionaire’s lifelines. The main difference - besides for not actually being able to win a million dollars - is that all the questions are song lyrics, and the answers are artists, one of which sang the song with the lyrics being displayed. And because the deeper purpose of this game is to showcase the awesome depth song lyrics can have, after each question a popup displays some of my reflections on why the lyrics pack a punch.
</br>
</br>

### **Game Flow**

</br>
The game begins with a hazy screen and a play button, as well as a difficulty button. Clicking play loads the first question set (the lyrics and the four possible artists) and enables clicking the hint bar. After an answer is chosen, the correct answer is highlighted, and if a wrong answer was chosen, it also gets highlighted, in a different color. Then the explainer text gets displayed in a popup, followed by one of three things: a lose screen, if a wrong answer was chosen; a new question; or, if the question was the tenth question, a win screen. The win and lose screens both promt the user to replay, and the win screen also prompts the user to modify the difficulty.
</br>
</br>

<img src="images/Game Flow Updated.jpg">

</br>

### _Technical Stuff_

</br>

**Play Button**
</br>
Most of the page is blocked by an element covering the whole screen (except the difficulty button) that gets set to hidden - along with the play button - when the play button is clicked.
</br>

**Question Set**
</br>
This is data that gets pulled from a question object. With each new question, a variable currentQuestion pulls a random question object from an array and removes the previous question from that array, and then a function populateQuestion pulls data from currentQuestion to fill in the inner HTML of the question space and the answer spaces - and the hint bar and explainer popup, too. The answers and hints are randomly assigned using a Durstenfeld shuffle. Question objects also have a correctAnswer key-value pair that a click function checks against the user choice.

**Highlighted Answers**
</br>
The click function for the answers toggles CSS classes for incorrect answers and correct answers (comparing the clicked answer and all answers to the correctAnswer value in the currentSong object), to modify the backgrounds to make the answers stand out.

**Explainer Popup**
</br>
There is an HTML element called “popup” that’s set to hidden, and gets set to visible under certain conditions, including after a question is answered. The explainer popup text also draws data from the currentSong object, specifically from the values of the heading and text keys of an explainer object within the currentSong object. Answering a question also sets the functionality of the button in the popup to check for a win, lose, or neither, and to then move to a win screen, lose screen, or the next question.

**Win/Lose Popups**
</br>
This version of the popup gets populated depending on whether the gameOver is set to 1 (win) or -1 (lose). The next function that gets called when an explainer popup button is clicked checks for these, and then runs win() or lose() functions, that fill the heading and center of the popup with the correct text. Both of these functions remove the next button, so the only option is to click replay, or difficulty in the case of a win.

**Replay/Difficulty Buttons**
</br>
In the event of a win, the difficulty button is rendered visible again (it disappears on clicking the initial play), as well as a replay button. These buttons toggle through two CSS classes, through a setInterval function, to make them scale back and forth between 1 and 1.5, so that the user’s eye is drawn to them. In the event of a lose, only the replay button is displayed.
</br>
</br>

### **Other Features**

</br>

**Hintbar and Hints**
</br>
The hintbar consists of four buttons inside of an element set to the right side of the screen, which is set to hidden by default, as well as a small element jutting out from the right side of the screen that says “Hints.” When hints is clicked, the element with the buttons is set to visible, and the element that says “Hints” moves from the right border of the screen to the left border of the first element. Clicking hints a second time reverses this - every time “Hints is clicked, the click function checks if the variable hintbar is true or false, renders accordingly, and then switches hintbar to the opposite value.

Clicking on a hint button in the larger element will render the popup visible, and populate it with one of four random hints pulled from the currentSong object. The click also changes the variable popupSetting to hints, so that the next function called by clicking the button on the popup knows to close the hint, and not, say, move to the next question.
</br>

**Scorebar**
</br>
The scorebar consists of ten divs whose CSS can be modified by a renderScorebar function that checks the array scoreArray, which is set to ten zeroes by default. Each time a correct answer is clicked, the click function checks for scoreArray.indexOf(0), and sets it to 1. If a wrong answer is clicked, the same function sets the first zero index to -1. renderScorebar then changes the CSS, so that the div corresponding to each scoreArray element is filled in if the element is 1, and gets an X if the element is -1.

**Ready Set Go**
</br>
Each time an explainer popup’s button is clicked, if gameOver is still 0, a render function is called that uses a setInterval to display “Ready,” Set,” and “Go” before populating the question. This improves the UX, so that there’s transition time between experiences.

**Homepage Menu**
</br>
The index.html page uses display: grid to set items nicely in a symmetrical pattern. Each of the four side divs render a popup visible and populate its heading and inner HTML depending on what was clicked, locating the correct popup object from an array by comparing the array elements to evt.target.id. This actually created an interesting problem, because evt.target.id returns a string, and the array contains variables. I called eval() on evt.target.id to transform it into a variable, after checking with several sources that this was a safe use case for calling an eval() function.

**Homepage Play Element**
</br>
I call the user’s attention to the play button by toggling between different CSS classes using a setInterval function, using the ease-in-out transition property to make the color change smooth.
</br>
</br>

### **Thanks**

</br>

Thanks to the GE instructors for helping me out with different parts of the code, especially Ashley Sands and Jan Horak.</br></br>
Thanks to GE SEI-R-4-24 Pod 3 (you know who you are) for all the chances to learn from your code and to talk things out. Special shoutout to Anthony Medina for pointing me to some solid sound libraries.
