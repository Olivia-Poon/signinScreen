$('.signin').on('click', function(e){
	$('.modal').fadeIn();
});

$('.close').on('click', function(e){
	$('.modal').fadeOut();
});

$('.submit').on('click', function(e){
	$('input').addClass('error');
});

$('input').on('click', function(e){
	$(this).removeClass('error');
});

$('modal').on('click', function(e){
	$(this).remove
});
