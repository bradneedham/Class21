$(function() {

	// jQuery Goes here!
$('.js-menu').on('click touchstart', function(){

	console.log('menu open')
	// $('.mainNav').fadeIn()
	$('.mainNav').fadeIn().addClass('showNav');
})


});