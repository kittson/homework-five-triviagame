//homework-five, trivia game
//trivia_questions.js
// putting these in here due to unwieldy length of things


var congratulations = [];
var questions = [];
var answers = [];
var imageForQuestions = ["images/libertesmall.png", "images/hebdo.png", "images/toureiffel.png"];
var colorForBackground = ["background-color: #9D2322;", "background-color: #9D2322;", "background-color: #9D2322;"];

var choiceFrenchRev = {
    answerZero: ["five years, from 1790 through 1794", false],
    answerOne: ["eleven years, from 1789 through 1799", true],
    answerTwo: ["two years, from 1888 through 1889", false],
    answerThree: ["fifteen years, from 1794 through 1808", false]    
};

var choiceJeSuisCharlie = {
    answerZero: ["Je suis la liberté d\x27expression", false],
    answerOne: ["Liberté, Égalité, Fraternité", false],
    answerTwo: ["Je Suis Charlie", true],
    answerThree: ["We Are Charlie Hebdo", false]    
};

var choiceEiffel = {
    answerZero: ["six inches", true],
    answerOne: ["five feet", false],
    answerTwo: ["five centimeters", false],
    answerThree: ["fifteen inches", false]    
};

var choices = [choiceFrenchRev, choiceJeSuisCharlie, choiceEiffel];

questions[0] = "The French Revolution was a time of political and social upheaval resulting in the overthrow of the French monarchy." +
	"How many years and when did the French Revolution occur?";
answers[0] = choiceFrenchRev.answerOne;

questions[1] = "In January of 2015, twelve people were shot at the officies of the weekly newspaper \x22Charlie Hebdo\x22 " +
	"in response to cartoons and articles satirizing Islamic terrorist groups.  " +
	"What slogan spontaneously arose and became a popular expression of solidarity with the victims and the free speech cause?";
answers[1] = choiceJeSuisCharlie.answerTwo;

questions[3] = "In the summer, how much taller is the Eiffel Tower than in the winter?";
answers[3] = choiceEiffel.answerZero;

// congratulations array for right answers
congratulations[0] = "Excellent!";
congratulations[1] = "Excellent, try again to get 100%!"
congratulations[2] = "Well done, that is a good score, can you do better?";
congratulations[3] = "Nice one, you got more than half of the questions right, can you do better?";
congratulations[4] = "You got some questions right, you can do better!";
congratulations[5] = "You didn\x27t do too well, why not try again?";
congratulations[6] = "Hmm back to school with you!  Try again to improve!";
congratulations[7] = "Ru-roh.  It\x27s hopeless.";