
$(document).ready(function(){
	$('.btn-start').on('click', function() {
		location.href = "./game.html";
	});

	message = questions[0];	

	$('.question-message').text(message);

	var checkBoxes = document.getElementsByName("theQuestion");

	function setAnswer(event) {
		document.body.style.background = event.target.value;
	};
	function getRadioVal(form, name) {
		var val;
		// get list of radio buttons with specified name    
		var radios = form.elements[name];

		// loop through list of radio buttons
			for (var i=0, len=radios.length; i<len; i++) {
				if ( radios[i].checked ) { // radio checked?
					val = radios[i].value; // if so, hold its value in val
					break; // and break out of for loop
				}				
			}
		return val; // return value of checked radio or undefined if none checked
		}//getRadioVal
	document.getElementById('demoForm').addEventListener("click", function(){
		// this (keyword) refers to form to which onsubmit attached
		// 'theQuestion' is name of radio button group
		var val = getRadioVal(this, 'anAnswer');
		// display value obtained
		console.log("the this " + this);
		console.log(val);
		alert(val);
	});

/*	for ( var i =0; i < checkBoxes.length; i++) {
		//checkBoxes[i].addEventListener("click", setAnswer()
		
		checkBoxes[i].addEventListener("click", function() {
			console.log(i);
		});
	}	*/
});