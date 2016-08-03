$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$("#write-us").submit(function() {
	    $.ajax({
	      type: "POST",
	      url: "mail.php",
	      data: $(this).serialize()
	    }).done(function() {
	      $(this).find("input").val("");
	      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
	      $("#write-us").trigger("reset");
	    });
	    return false;
	  });

	
	//Продукты, открытие попапов
	$("first-filter .products__block").click(function() {
		$('.product--pop').toggle();
		if ($(".shadow").hasClass("active-shadow") != true) {
			$(".shadow").addClass("active-shadow");
		}
	});

	$(".product--pop__close").click(function() {
		$('.product--pop').toggle();
		$(".shadow").removeClass("active-shadow");
		$('.show-1').css("display", "none");
		$('.show-2').css("display", "none");
		$(".products__block").removeClass("active");



	})
	//main slider
	$('.slider-wrap').slick({
	 	speed: 800,
		dots: true,
		arrows: false,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 15000
	});

});


