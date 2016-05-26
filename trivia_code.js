////homework-five, trivia game
////trivia_code.js
////see trivia_questions.js for question lists, arrays, etc.


var flagCorrectAnswer;
var aChoice;
var answerValArry;
var answerVal;
var radioVal;
var tmpErOoo;	
var theCurrentQuestion;
var theCurrentQuestionPosition;
console.log("tell me the choices " + choices);
//remember players[player1].healthPnts

$(document).ready(function(){
	$('.btn-start').on('click', function() {
		location.href = "./game.html";
	});

		
	//this is a big for loop that sets up the questions and answers
	for (var i=0;i<questions.length; i++){
		theCurrentQuestionPosition = i;

		//el stucko help!
		//theCurrentQuestion = choices[theCurrentQuestionPosition];
		//how do I get the name of the array value?

		theCurrentQuestion = choiceEiffel; //temporary until above gets figured out

		console.log("current question position is " + theCurrentQuestionPosition);
		console.log("and current question is " + theCurrentQuestion);

		
		//setting the image and other "stuff" by using the array value and matching them up
		theCurrentImage = imageForQuestions[theCurrentQuestionPosition];
		theCurrentColor = colorForBackground[theCurrentQuestionPosition];
		theCurrentAnswer = answers[theCurrentQuestionPosition];		

		

		console.log("current answer is " + theCurrentAnswer);

		//// this is the question being asked, gets reset once question/choice is submitted
		message = questions[theCurrentQuestionPosition];
		console.log("current question position is again " + theCurrentQuestionPosition);	
		$('.question-message').text(message);	

		//console.log("some print outs " + choiceFrenchRev.answerZero[0] + "  " + choiceFrenchRev.answerZero[1]);

		////this sets up the choices for the question
		////tells us which of the four possibles is true
		function setAnswersWithQuestion( whichQuestion) {
			for (var i=0; i<Object.keys(whichQuestion).length; i++) {
			   aChoice = Object.keys(whichQuestion)[i];		 
			   answerValArry = whichQuestion[aChoice];
			   answerVal = answerValArry[0];
				//console.log(" answerVal is " + answerVal);
				if (answerValArry[1] === true) {
					flagCorrectAnswer = aChoice;
					//console.log(flagCorrectAnswer);
				}
			   document.getElementById(aChoice).innerHTML = answerVal;		   	
			   //hoo boy this doesn't work
			   //console.log("answerValArry " + answerValArry[1]);
			   //document.getElementById(trueOrFalse).innerHTML = answerValArry[1];	   
			}
		}//function setAnswersWithQuestion


		////plug in whichever question got pulled up near the top
		//setAnswersWithQuestion(theCurrentQuestionPosition);
		setAnswersWithQuestion(choiceEiffel);
		console.log("which answer is correct? " + flagCorrectAnswer);



		(function() {
			var form, options, other, otherText, hide;
			form = document.getElementById('choicesForm');
			options = form.elements.anAnswer;
			console.log("options is " + options);
			for (var i = [0]; i < options.length; i++) {
				//addEvent(options[i], 'click', radioChanged);
				console.log("i is " + i);
			}
			function radioChanged() {
				console.log(elements);			
			}
			/*addEvent(form, 'submit', function(e) {
				e.preventDefault();
				var elements = this.elements;
				console.log(elements);

			})*/
		}());//function

		// send in the correct answer from flagCorrectAnswer
		// send in the choice the player made
		// send in the question number
		// set things up for the next question
		function checkAnswerNextStage (correctAnswer, userResponse, questionNum){
			if( correctAnswer === userResponse){
				//guessed correctly

			}
			else {

			}


		}//function checkAnswerNextStage


		//determine if their choice is true or false
		//then store their response and store the correct answer
		//go to next page - work on overwriting whole page or parts of page and change the question and picture
		//keep going to next page until all questions are answered
		//when all questions are answered display the results
		//and determine their "score" and display the congratulations text
		//offer to start again
		}//giant for loop	
});
