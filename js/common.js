$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});

	//якоря

	$(".nav").on("click","a", function (event) {
		event.preventDefault();
		$("li").removeClass("active");
		$(this).closest("li").addClass("active")
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$(".top-link").on("click", function (event) {
		event.preventDefault();
		$('body,html').animate({scrollTop:0},800);
	});

	//скролл
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
 			$('.top-link').fadeIn();			 
			} else {			 
				$('.top-link').fadeOut();			 
			}
		$(".animated").each(function() {
			var imagePos = $(this).offset().top;
				topOfWindow = $(window).scrollTop();
			if(imagePos < topOfWindow+400) {
				$(this).addClass("rubberBand").css("opacity", "1");
			}
		})
	});

// // to top
// 	var scroll_timer;
// 	var displayed = false;
// 	var $message = $('.top-link');
// 	var $window = $(window);
// 	var top = $(document.body).children(0).position().top;

// 	$window.scroll(function () {
// 		window.clearTimeout(scroll_timer);
// 		scroll_timer = window.setTimeout(function () { 
// 		if($window.scrollTop() <= top) 
// 	{
// 		displayed = false;
// 		$message.fadeOut(500);
// 	}
// 	else if(displayed == false) 
// 	{
// 		displayed = true;
// 		$message.stop(true, true).fadeIn(500).click(function () { $message.fadeOut(500); });
// 	}
// 	}, 100);
// 	});
// 		$('.top-link').on("click", function(e) {
// 		e.preventDefault();
// 		$(window).scrollTo(0, 200);
// 	});


}); //document.ready

