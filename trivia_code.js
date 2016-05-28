////homework-five, trivia game
////trivia_code.js
////see trivia_questions.js for question lists, arrays, etc.

var questions = [
{
	questions: "The French Revolution was a time of political and social upheaval resulting in the overthrow of the French monarchy." + 
	"How many years and when did the French Revolution occur?",
	choices:["five years, from 1790 through 1794", "eleven years, from 1789 through 1799",
	"two years, from 1888 through 1889","fifteen years, from 1794 through 1808"],
	correctAnswer: "eleven years, from 1789 through 1799",
	imageForQuestions: "images/libertesmall.png",
	color: "#9D2322"
},
{
	questions: "In January of 2015, twelve people were shot at the officies of the weekly newspaper \x22Charlie Hebdo\x22 " +
	"in response to cartoons and articles satirizing Islamic terrorist groups.  " +
	"What slogan spontaneously arose and became a popular expression of solidarity with the victims and the free speech cause?",
	choices:["Je suis la liberté d\x27expression", "Liberté, Égalité, Fraternité",
	"Je Suis Charlie","We Are Charlie Hebdo"],
	correctAnswer: "Je Suis Charlie",
	imageForQuestions: "images/hebdo.png",
	color: "#00AF48"
},
{	 
	questions: "In the summer, how much taller is the Eiffel Tower than in the winter?",
	choices:["six inches", "five feet",
	"five centimeters","fifteen inches"],
	correctAnswer: "six inches",
	imageForQuestions: "images/toureiffel.png",
	color: "#D17624"
},

{
   questions: "Which non-French national designed the architecture for the Louvre?",
   choices:["I. M. Pei", "Mies van der Rohe",
   "Zaha Hadid","Le Corbusier"],
   correctAnswer: "I. M. Pei",
   imageForQuestions: "images/louvre.png",
   color: "#234463"
},
{
   questions: "Which cult movie did the iconic French actress, Catherine Deneuve, star in with David Bowie and Susan Sarandon?",
   choices:["\x22La Belle Epoch\x22", "\x22The Calling\x22",
   "\x22The Hunger\x22","\x22Breathless\x22"],
   correctAnswer: "\x22The Hunger\x22",
   imageForQuestions: "images/deneuve.png",
   color: "#6A6087"
},
]; // questions

//$('.bg-primary').css({'background-color':'blue'});​

var tallyResults = [];

$(document).ready(function(){
	$('.btn-start').on('click', function() {
		location.href = "./game.html";
	});
	var questionNum = 0; //counts the number of questions
	var answerChoice;
	number = 20; // for the timer
	counter = 0; // for the timer's counter
	goodAnswers = 0;
	badAnswers = 0;
	
	newQuestion(questionNum);

	function runTimer(){
		counter = setInterval(decrement, 1000);
	}
	function stop(){
		clearInterval(counter);		
	}
	function decrement(){
		number--;
		$('#displayTime').html('<h2>' + number + '</h2>');
		if (number === 0){
			stop();
			number = 20;
			questionNum++;
			newQuestion(questionNum);
		}
	}

	function newQuestion(num){
		number = 20;
		
		//fix up the display, including the new question
		$('#displayTime').html('<h2>' + number + '</h2>');
		$("#choicesArea").html("");
		$("#imageArea").html("");
		$("#question-area").html("<p>"+questions[num].questions+"</p>");
		$("#messageArea").html("<h4>Please Mark One Answer</h4>");
		$(".pageImage").attr("src", questions[num].imageForQuestions);
		$(".bg-primary").css({"background-color": questions[num].color});
		//$("#submit-answer").html("<a>Submit Your Response</a>");
		$(".button-mysubmit").html("<h5>Submit Your Response</h5>");

		//start the timer
		runTimer();

		for(var i =0; i < questions[num].choices.length; i++){
			$("#choicesArea").append("<input value="+i+" name='choices' class='answers' type='radio'><label>"+ questions[num].choices[i]+"</label><br>")
		}
		$(".answers").change(function(e){			
			answerChoice = questions[questionNum].choices[e.target.value];			
		});	

	}//newQuestion

	$("#submit-answer").click(function(event){
		//$("#submit-answer").removeClass("btn-start");
		//console.log(event.preventDefault());
		$("#error").html("");
		//
		//if no radio button is clicked but they click submit
		if(!answerChoice){
			$("#error").html("You must select an answer choice!");
		} 
		//they click submit and there is a radio button selected
		//this is for the correct answer
		else if (answerChoice === questions[questionNum].correctAnswer) {
			//console.log("click correcto");
			goodAnswers++;
			questionNum++;

			if (questionNum < questions.length) {
				stop();
				answerChoice = null;
				newQuestion(questionNum);		
			} 
			else {							
				clearQuestionsDisplayScore();			
			}			
		} 
		//they click submit and there is a radio button selected
		//they click and it's the wrong answer
		else if (answerChoice != questions[questionNum].correctAnswer){
			//console.log("click bad");
			badAnswers++;
			questionNum++;

			if (questionNum < questions.length) {
				stop();
				answerChoice = null;
				newQuestion(questionNum);			
			} 
			else {			
				clearQuestionsDisplayScore();			
			}
		}
	});//click event
	
	// if ( !answerChoice){
	// 	console.log("no click");
	// 	badAnswers++;
	// 	questionNum++;		
	// }

	//this clears all the old question stuff when game is over and displays how many answers were right/wrong
	function clearQuestionsDisplayScore() {
		stop();
		tallyResults.push("<h3>Correct Answers: "+goodAnswers+"</h3>");
		tallyResults.push("<h3>Wrong Answers: "+badAnswers+"</h3>");
		$("#question-area").html("");
		$("#choicesArea").html(tallyResults);
		$("#imageArea").html("");
		$(".pageImage").attr("src", "images/genekelly.png");
		$(".bg-primary").css({"background-color": "#4D3C2B"});
		$("#messageArea").html("<h4>Game Over!</h4>");
		$("#displayTime").remove();
		$("#timeLeft").remove();
		//$("#submit-answer").remove();
		//$("#submit-answer").addClass('btn-start');
		//$(".button-mysubmit").html("<a>Click Me to Start!</a>");
		$("#submit-answer").addClass('btn-start').removeClass('button-mysubmit');
		$(".btn-start").html("<h5>Click Me to Start!</h5>");		
	}
});
