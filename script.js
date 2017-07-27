$(document).ready(function() {

	// to switch players.
	let player1 = true;

	const b1 = $('#square1');
	const b2 = $('#square2');
	const b3 = $('#square3');
	const b4 = $('#square4');
	const b5 = $('#square5');
	const b6 = $('#square6');
	const b7 = $('#square7');
	const b8 = $('#square8');
	const b9 = $('#square9');

	// winning rule...
	const rule = [[b1,b2,b3], [b1,b4,b7], [b1,b5,b9], [b2,b5,b8], [b3,b5,b7], [b3,b6,b9], [b4,b5,b6], [b7,b8,b9]];

	$('.box').on('click', function() {
		// if box is not clicked yet
		if (!$(this).hasClass('clicked')) {
			// add extra class and switch player.
			const className = player1 ? 'box clicked x' : 'box clicked o';
			$(this).addClass(className);
			player1 = !player1;
			const winner = ifWon();
			if (winner) {
				// wait repaint element
				setTimeout(function(){
					alert(winner + ' won the game')
				},100)

			}
		}
	});

	function ifWon(){
		// check all possibilities.
		for (var i=0; i<rule.length; i++){
			const whoWon = checkResult(rule[i][0], rule[i][1], rule[i][2]);
			if (whoWon) {
				return whoWon;
			}
		}

	}

	function checkResult(node1,node2,node3){
		// check if 3 given node has same classes
		if ($(node1).hasClass('clicked') && node1[0].classList.value === node2[0].classList.value && node1[0].classList.value === node3[0].classList.value){
			return node1[0].classList[2]
		}
	}

});