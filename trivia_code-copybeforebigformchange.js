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
	var radioVal;
	var tmpErOoo;

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
				//console.log(flagCorrectAnswer);
			}
		   document.getElementById(aChoice).innerHTML = answerVal;		   
		}
	}	
	setAnswers(choiceJeSuisCharlie);
	console.log("which answer is correct? " + flagCorrectAnswer);

	////this is the part that listens for the radio button answer
	function getRadioVal(form, name) {		
		// get list of radio buttons with specified name    
		var radios = form.elements[name];
		// loop through list of radio buttons
			for (var i=0, len=radios.length; i<len; i++) {
				if ( radios[i].checked ) { // radio checked?
					var val = radios[i].value; // if so, hold its value in val
					//console.log("radios " + radios);
					//console.log(i);
					//console.log(val);
					
					console.log(val);
					return(val);
					break; // and break out of for loop
				}				
			}			
	}//getRadioVal
	// radioVal = getRadioVal(demoForm, 'anAnswer');
	// console.log(radioVal);

	function atLeastOneRadio() {
   	return ($('input[type=radio]:checked').size() > 0);
	}
	tmpErOoo = atLeastOneRadio();
	console.log("tmpErOoo is " + tmpErOoo);
	//if(document.getElementById('radioButton').checked) {
		  
		document.getElementById("submitButton").onclick = function() { 	      
	      //var val = getRadioVal(demoForm, 'anAnswer');
	      radioVal = getRadioVal(demoForm, 'anAnswer');
			console.log(radioVal);	      
	   }
	//}
	//else {
	//	alert("S'il vous plaît cliquer sur un bouton - Please click a button");
	//}

	



});