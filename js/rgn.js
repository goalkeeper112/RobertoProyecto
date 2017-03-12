$(document).ready(function(){
	$(".menu a").smoothscrolling();

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$(".scrollup").fadeIn();
		}else{
			$(".scrollup").fadeOut();
		}
	})

	$("#iconProduct1").on('mouseover', function(){
		$(this).addClass("animated");
		$(this).addClass("bounce");
	})

	$("#iconProduct1").on('mouseout', function(){
		$(this).removeClass("animated");
		$(this).removeClass("bounce");
	})

	$("#iconProduct2").on('mouseover', function(){
		$(this).addClass("animated");
		$(this).addClass("bounce");
	})

	$("#iconProduct2").on('mouseout', function(){
		$(this).removeClass("animated");
		$(this).removeClass("bounce");
	})

	$("#iconProduct3").on('mouseover', function(){
		$(this).addClass("animated");
		$(this).addClass("bounce");
	})

	$("#iconProduct3").on('mouseout', function(){
		$(this).removeClass("animated");
		$(this).removeClass("bounce");
	})

	
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
});