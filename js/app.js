$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});
	$(".ryu").mouseleave(function() {
		$(".ryu-still").show();
		$(".ryu-ready").hide();
	});
	$(".ryu").mousedown(function() {
		playHadouken();
		$(".ryu-throwing").show();
		$(".ryu-ready").hide();
		$(".hadouken").finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
	});
	$(".ryu").mouseup(function() {
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});

	$( "body" ).keydown(function(e) {
		var code = e.keyCode || e.which;
 		if(code == 88) {
			$(".ryu-ready").hide();
			$(".ryu-still").hide();
			$(".ryu-throwing").hide();
	  		$(".ryu-cool").show();
  		}
	});

	$( "body" ).keyup(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
  		$(".ryu-cool").hide();
	});

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}