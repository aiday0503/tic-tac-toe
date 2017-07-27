$(document).ready(function() {

	// to switch players.
	let player1 = true;

	$('.box').on('click', function() {
		// if box is not clicked yet
		if (!$(this).hasClass('clicked')) {
			// add extra class and switch player.
			$(this).addClass('box clicked');
			player1 = !player1;
		}
	});

});