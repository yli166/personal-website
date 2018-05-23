function openNav() {
    document.getElementById("mySidenav").style.width = "420px";
    // document.getElementById("main").style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";	
    // document.getElementById("main").style.marginRight = "0";
}

$(function(){
	$('.image').mouseenter(function(){
		var imgObj = $(this).find('img');
		var imgtitle = $(this).find('div.img-title');
		var subtext = $(this).find('p');
		imgObj.stop().css({width:'80%',height:'80%',position:'absolute',left:'10%',top:'10%'});
		imgtitle.stop().css({top:'50%'});

		var wValue = 1.25 * imgObj.width();
		var hValue = 1.25 * imgObj.height();
		// imgObj.addClass('img-filter');
		// brightness fading

		subtext.fadeIn(400);
		$({brightness:0.7}).animate({brightness:1},{
			speed : 300,
			step:function(){
				imgObj.css('filter',"brightness("+this.brightness+")");
			}
		});
		// imgtitle setting
		
		imgtitle.animate({
			top:'40%',
		},300);
		
		// 
		// blur effect
		// $({blur:4}).animate({blur:0.2},{
		// 	speed : 300,
		// 	step:function(){
		// 		imgObj.css('-webkit-filter',"blur("+this.brightness+")");
		// 	}
		// });
		imgObj.animate({
			width: wValue,
			height: hValue,	
			left:('0px'),
			top:('0px'),
			// left:('-' + (0.5 * imgObj.width())/2),
			// top:('-' + (0.5 * imgObj.height())/2)
			},400);
		}).mouseleave(function() {
			var imgObj = $(this).find('img');
			var imgtitle = $(this).find('div.img-title');
			var subtext = $(this).find('p');
			$(this).find('img').stop().animate({width:'80%',height:'80%',position:'absolute',left:'10%',top:'10%'});
			imgtitle.stop().animate({top:'50%'});
			// $(this).find('img').removeClass('img-filter');
			subtext.fadeOut(300);
			$({brightness:1}).animate({brightness:0.7},{
				speed : 300,
				step:function(){
					imgObj.css('filter',"brightness("+this.brightness+")");
				}
			});

			imgtitle.animate({
				top:'50%',
			},200);
		});
});