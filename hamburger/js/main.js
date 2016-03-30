$(function() {

	// jQuery Goes here!
$('.js-menu').on('click touchstart', function(){

	console.log('menu open')
	// $('.mainNav').fadeIn()
	$('.mainNav').fadeIn().addClass('showNav');
})

$('.zoomMe').zoom(
{magnify: 5}

);

});

// pass object inside zoom with {} object is curly brackets

// square brackets for array