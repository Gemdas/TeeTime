// functionality for the front-end goes here
// ajax requests go here


 // when the user selects the form in the teesheet, a module should pop up
 // the module will have buttons 1-4 to select how may players they will have in the group
 // selecting submit will send an $.post to the database storing the teetime
$(document).ready(function(){
	// display the information from reservations
	$.get('/reservations', function(booked){
		booked.forEach(function(instance) {
			if(instance.weekday != $('#day').data('day')){
				return;
			}
			$('.' + instance.teeTime + '.player1').text(instance.firstPlayerName);
			$('.' + instance.teeTime + '.player2').text(instance.secondPlayerName);
			$('.' + instance.teeTime + '.player3').text(instance.thirdPlayerName);
			$('.' + instance.teeTime + '.player4').text(instance.fourthPlayerName);
		})
	})


	$('#form').hide();

	$('.submit').click(function(){
		// $('#form').show();
		$('#form').dialog({
			
			height: 'auto',
			width: 'auto',
			modal: true
			
		});

	});
});

$('#players').click(function (){
	// need a get from the reservations table
    // if occupied, how many players are there
    // if 4 players, can't sign up there
    // else put request to add new names to reservations

})

// Possible loop with handlebars function, TBD
// Handlebars.registerHelpter('teetimes', function(n, block){
// 	var openTime = '';
// 	for (var i = 0; i < n; i++) {
// 		openTime += block.fn(i);
// 	}
// 	return openTime;
// });

