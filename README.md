# QuizardOfJav

# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. For this challenge, you will build a timed code quiz that's made up of multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers.

---------  Things I'll need to incorporate  -----------
1) a timer
2) score calc
3) listeners
4) array/hash of questions/mult choices
5) functions with loops, conditions
6) input text box - must have text entered to submit player name/initials
7) update highscores if you keep re-playing, scoreboard updated only when new initials are entered
8) have a ranking system, when there's a tie score use time remaining 
    to attain same score ie - 3 players score 80 but one had 15 secs remaining others had 10 secs remaining
9) when you no longer want to play, whole system resets all records and starts new
10) 10 questions - 5 seconds alotted per question, 10 second penalty for Any wrong answer

-------------------------------------------------------
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the Start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:
![Example Demo of Quiz](./assets/pics/04-web-apis-homework-demo.gif)

### Review

* The URL of the functional, deployed application.
* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.