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
]; // questions


$(document).ready(function(){
	$('.btn-start').on('click', function() {
		location.href = "./game.html";
	});
	var questionNum = 0;
	var answerChoice;

	console.log("length of questions " + questions.length);
	newQuestion(questionNum);

	function newQuestion(num){
		
		$("#choicesArea").html("");
		$("#imageArea").html("");
		$("#question-area").html("<p>"+questions[num].questions+"</p>");
		$(".pageImage").attr("src", questions[num].imageForQuestions);
		console.log("questions num " + questions[num].imageForQuestions);
		for(var i =0; i < questions[num].choices.length; i++){
			$("#choicesArea").append("<input value="+i+" name='choices' class='answers' type='radio'><label>"+ questions[num].choices[i]+"</label><br>")
		}
		$(".answers").change(function(e){
			console.log("am i running?")
			answerChoice = questions[questionNum].choices[e.target.value];
			console.log("answerChoice" + answerChoice);
			// if(answerChoice === questions[questionNum].correctAnswer){
			// 	console.log("correct!");
			// } else {
			// 	console.log("wrong...");
			// }
		});
		
	}

	$("#submit-answer").click(function(event){

		//console.log(event.preventDefault());
		console.log("answerChoice in submit " + answerChoice);
		questionNum++;
		newQuestion(questionNum)

	});
		
	// 	//determine if their choice is true or false
	// 	//then store their response and store the correct answer
	// 	//go to next page - work on overwriting whole page or parts of page and change the question and picture
	// 	//keep going to next page until all questions are answered
	// 	//when all questions are answered display the results
	// 	//and determine their "score" and display the congratulations text
	// 	//offer to start again
	// 	}//giant for loop	
});
