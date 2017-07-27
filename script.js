$(document).ready(function() {

	// to switch players.
	let player1 = true;

	$('.box').on('click', function() {
		// if box is not clicked yet
		if (!$(this).hasClass('clicked')) {
			// add extra class and switch player.
			const className = player1 ? 'box clicked x' : 'box clicked o';
			$(this).addClass(className);
			player1 = !player1;
		}
	});

});