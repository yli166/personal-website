$(function(){
	$('.image').mouseenter(function(){
		var imgObj = $(this).find('img');
		imgObj.stop().css({width:'80%',height:'80%',position:'absolute',left:'10%',right:'10%',filter: 'brightness(70%)'});
		var wValue = 1.25 * imgObj.width();
		var hValue = 1.25 * imgObj.height();
		imgObj.animate({
			width: wValue,
			height: hValue,
			// left:('0%'),
			// right = ('0%')
			left:("-"+(0.5 * imgObj.width())/2),
			top:("-"+(0.5 * imgObj.height())/2)
			},1000);
		}).mouseleave(function() {
			$(this).find('img').stop().animate({width:'80%',height:'80%',position:'absolute',left:'10%',right:'10%',filter: 'brightness(70%)'});
		});
});