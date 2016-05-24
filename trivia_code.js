
$(document).ready(function(){
	$('.btn-start').on('click', function() {
		location.href = "./game.html";
	});

	message = questions[0];	
	$('.question-message').text(message);

	var checkBoxes = document.getElementsByName("theQuestion");
	function setAnswer(event){
		document.body.style.background = event.target.value;
	};
	for ( var i =0; i < checkBoxes.length; i++) {
		checkBoxes[i].addEventListener("change", setAnswer(), false);
		console.log(i);
	};
	
	
