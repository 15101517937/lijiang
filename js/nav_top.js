$(function() {
	//	arrow
	$('.nav .arrow ').css('left', $('.nav_title').offset().left + 47.5 + 'px')
	$('.nav_title>li ').each(function(index, ele) {
		$(this).mouseover(function() {
			$('.nav .arrow ').stop().animate({
				left: $('.nav_title').offset().left + (index * 13) + ((2 * index + 1) * 47.5) + 'px'
			}, 100)
		})
	});
	//	nav 
	$('.nav .sec_menu ').each(function(index, ele) {
		$(this).mouseenter(function() {
			$('.title_hover').eq(index).stop().slideDown(200)
		})
		$(this).mouseleave(function() {
			$('.title_hover').stop().slideUp(200)
		})
	});
	$('.nav .about_brand a').each(function(index, ele) {
		$(this).mouseover(function() {
			$('.about_brand a').eq(index).addClass('show')
		})
		$(this).mouseout(function() {
			$('.about_brand a').eq(index).removeClass('show')
		})
	});
	
})