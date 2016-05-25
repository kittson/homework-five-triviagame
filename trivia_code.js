//homework-five, trivia game
//trivia_code.js
// see trivia_questions.js for question lists

$(document).ready(function(){
	$('.btn-start').on('click', function() {
		location.href = "./game.html";
	});
	var flagCorrectAnswer;
	var aChoice;
	var answerValArry;
	var answerVal;

	//// this is the question being asked
	message = questions[1];	
	$('.question-message').text(message);	

	//console.log("some print outs " + choiceFrenchRev.answerZero[0] + "  " + choiceFrenchRev.answerZero[1]);

	////this sets up the choices for the question
	function setAnswers( whichQuestion) {
		//var aChoice;
		//var answerVal;
		for (var i=0; i<Object.keys(whichQuestion).length; i++) {
		   aChoice = Object.keys(whichQuestion)[i];		 
		   answerValArry = whichQuestion[aChoice];
		   answerVal = answerValArry[0];
			//console.log(" answerVal is " + answerVal);
			if (answerValArry[1] === true) {
				flagCorrectAnswer = aChoice;
				console.log(flagCorrectAnswer);
			};
		   document.getElementById(aChoice).innerHTML = answerVal;		   
		};
	};
	
	setAnswers(choiceJeSuisCharlie);
	console.log(flagCorrectAnswer);


	var radVal;
	////this is the part that listens for the radio button answer
	function getRadioVal(form, name) {		
		// get list of radio buttons with specified name    
		var radios = form.elements[name];
		// loop through list of radio buttons
			for (var i=0, len=radios.length; i<len; i++) {
				if ( radios[i].checked ) { // radio checked?
					var val = radios[i].value; // if so, hold its value in val
					console.log("radios " + radios);
					console.log(i);
					console.log(val);
					break; // and break out of for loop
					//console.log(val);
					//return(val);
				}				
			}			
	}//getRadioVal

	document.getElementById('demoForm').addEventListener("click", function(){
	//document.getElementById('submitButton').addEventListener("click", function(){
		// this (keyword) refers to form to which onsubmit attached
		// 'anAnswer' is name of radio button group
		var val = getRadioVal(this, 'anAnswer');
		// display value obtained
		console.log("the this " + this);
		console.log(val);
		alert(val);
	});


});