

// When any button, .class or #id is clicked, run another function.
$(document).ready(function() {
// When any element is double-clicked, then do the next step.
	$('button').dblclick(function() { //This is an event listener!
		// Find element, then slide-toggle it.
		$('h3').slideToggle();
	});
});


// When any button, .class or #id is clicked, run another function.
$(document).ready(function() {
// When any element is clicked, then do the next step.
	$('button').click(function() { //This is an event listener!
		// Find element, then animate.
		$('h2').animate({
			fontSize: "100px",
			height: "200px",
			letterSpacing: "+=10px" //last one does not need a comma (,).
		});
	});
});



// When any button, .class or #id is clicked, run another function.
$(document).ready(function() {
// When any element is clicked, then do the next step.
	$('button').click(function() { //This is an event listener!
		// Find element, then append it - add to the end/last item.
		$('#list').append('<li>five</li>');
	});
});

// When any button, .class or #id is clicked, run another function.
$(document).ready(function() {
// When any element is clicked, then do the next step.
	$('button').click(function() { //This is an event listener!
		// Find element, then toggleClass it.
		$('#list').toggleClass('red');
	});
});


