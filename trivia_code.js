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
	   imageForQuestions: "images/libertesmall.png"
	 },
	 {
	   questions: "In January of 2015, twelve people were shot at the officies of the weekly newspaper \x22Charlie Hebdo\x22 " +
		"in response to cartoons and articles satirizing Islamic terrorist groups.  " +
		"What slogan spontaneously arose and became a popular expression of solidarity with the victims and the free speech cause?",
	   choices:["Je suis la liberté d\x27expression", "Liberté, Égalité, Fraternité",
	   "Je Suis Charlie","We Are Charlie Hebdo"],
	   correctAnswer: "Je Suis Charlie",
	   imageForQuestions: "images/hebdo.png"
	 },
	 {	 
	   questions: "In the summer, how much taller is the Eiffel Tower than in the winter?",
	   choices:["six inches", "five feet",
	   "five centimeters","fifteen inches"],
	   correctAnswer: "six inches",
	   imageForQuestions: "images/toureiffel.png"
	 },
	 {
	   questions: "Which non-French national designed the architecture for the Louvre?",
	   choices:["I. M. Pei", "Mies van der Rohe",
	   "Zaha Hadid","Le Corbusier"],
	   correctAnswer: "I. M. Pei",
	   imageForQuestions: "images/louvre.png"
	 },
	 {
	   questions: "Which cult movie did the iconic French actress, Catherine Deneuve, star in with David Bowie and Susan Sarandon?",
	   choices:["\x22La Belle Epoch\x22", "\x22The Calling\x22",
	   "\x22The Hunger\x22","\x22Breathless\x22"],
	   correctAnswer: "\x22The Hunger\x22",
	   imageForQuestions: "images/deneuve.png"
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
	number = 10; // for the timer
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
        //alert('Time Up!')               
      }
    }

	function newQuestion(num){
		
		$("#choicesArea").html("");
		$("#imageArea").html("");
		$("#question-area").html("<p>"+questions[num].questions+"</p>");
		$("#messageArea").html("<h4>Please Mark One Answer</h4>");
		$(".pageImage").attr("src", questions[num].imageForQuestions);
		//console.log("questions num " + questions[num].imageForQuestions);
		runTimer();
		for(var i =0; i < questions[num].choices.length; i++){
			$("#choicesArea").append("<input value="+i+" name='choices' class='answers' type='radio'><label>"+ questions[num].choices[i]+"</label><br>")
		}
		$(".answers").change(function(e){			
			answerChoice = questions[questionNum].choices[e.target.value];			
		});		
	}

	$("#submit-answer").click(function(event){
		//console.log(event.preventDefault());
		console.log("answerChoice in submit " + answerChoice);
		if (answerChoice === questions[questionNum].correctAnswer) {
			console.log("correcto");
			goodAnswers++;
			
		}
		else {
			badAnswers++;
			//tallyResults.push("<p>Wrong Answer to the Question: " +questions[questionNum].questions+" </p><p>was</p><h4>" +answerChoice+ "/h4>");
		}
		questionNum++;

		//console.log("tallyResults " + tallyResults);
		//console.log("length of questions " + questions.length);
		if (questionNum < questions.length) {
			newQuestion(questionNum);			
		}
		else {			
			clearQuestionsDisplayScore();			
		}
	});

	
	function clearQuestionsDisplayScore() {
		tallyResults.push("<h3>Correct Answers: "+goodAnswers+"</h3>");
		tallyResults.push("<h3>Wrong Answers: "+badAnswers+"</h3>");
		$("#question-area").html("");
		$("#choicesArea").html(tallyResults);
		$("#imageArea").html("");
		$(".pageImage").attr("src", "images/genekelly.png");
		$("#messageArea").html("<h4>Game Over!</h4>");
		$("#displayTime").remove();
		$("#timeLeft").remove();
		$("#submit-answer").remove();
		$(".button-mysubmit").remove();

	}
		
	// 	//determine their "score" and display the congratulations text
	// 	//offer to start again
	
});
