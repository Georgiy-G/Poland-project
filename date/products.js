$(function() {
	var filter = $(".filter_block");
		button = $(".products__button a");

	filter.first().addClass("filter--show");
	button.first().addClass("active--button");
	
	button.click(function(e) {
		e.preventDefault();

		if (!($(this).hasClass("active--button"))) {
			var i = button.index($(this));

			filter.removeClass("filter--show");
			button.removeClass("active--button");

			filter.eq(i).addClass("filter--show");
			button.eq(i).addClass("active--button");
		}
	})

	var productsContainer = $(".products--container");
		productsAllContainer = $(".first-filter .products_blocks");

		$(".side-block-1").click(function() {
			$('.product--block').css("display", "none");
			$('.product--pop').css("display", "block");
			$('.show-1').css("display", "block");

			if ($(".shadow").hasClass("active-shadow") != true) {
				$(".shadow").addClass("active-shadow");
			}
		});

		$(".side-block-2").click(function() {
			$('.product--pop').css("display", "block");
			$('.show-2').css("display", "block");
			$('.product--block').css("display", "none");

			if ($(".shadow").hasClass("active-shadow") != true) {
				$(".shadow").addClass("active-shadow");
			}
		});

	getFirst();

	function getFirst() {

		$.getJSON("date/first-category.json", function(date){

			var products = date;
			    i = 0;

			while (i < products.length) {

				var productBlockMain = '<div class="products__block ' + products[i].filter + '">';

				productBlockMain += '<img src="' + products[i].image + '" alt="" width="250" height="250">';
				productBlockMain += '<h2>' + products[i].main_name + '</h2>';
				productBlockMain += '<p class="block__text">' + products[i].type + '</p>';

				while (((i+1) != products.length) && (products[i].filter === products[i+1].filter)) {
					productBlockMain += '<p class="block__text">' + products[i+1].type + '</p>';
					i = i + 1;
				}
				
				productBlockMain += '</div>';
				productsAllContainer.prepend(productBlockMain);
				i++;

			}

			$(".first-filter .products__block").click(function() {
				console.log($(".first-filter .products__block"));
				$(".product--block").html("");

				var filterName = $(this).attr("class");
				    filterNewName = filterName.split(" ");

				if (!($(this).hasClass("active"))) {
					for (var i = 0; i < products.length; i++) {
						if (filterNewName[1] === products[i].filter) {
							$(this).addClass("active");
							showProducts(products, i);
						} 
					}
				} 

				$('.product--pop').css("display", "block");

				if ($(".shadow").hasClass("active-shadow") != true) {
					$(".shadow").addClass("active-shadow");
				}

			});

		});

	}

	function showProducts(products, i) {

		var productBlock ='<div class="product--block">';
			productBlock +='<div class="column--img"><img src="' + products[i].image + '" alt="" width="350"></div>';
			productBlock += '<div class="column--description"><h2>' + products[i].popup_name + '</h2>';
			productBlock += '<p><b>Symbol:</b> ' + products[i].symbol+ '</p>';
			productBlock += '<p><b>Średnica:</b> ' + products[i].diameter + '</p>';
			productBlock += '<p><b>Grubość ścianki:</b> ' + products[i].wall + '</p>';
			productBlock += '<p><b>Ilośc w opakowaniu:</b> ' + products[i].amount + '</p>';
			productBlock += '<p><b>Kolor:</b> ' + products[i].color + '</p>';
			productBlock += '<p><b>Norma:</b> ' + products[i].standart + '</p>';
			productBlock += '</div></div>';

		productsContainer.append(productBlock);
		
	}
	//second filter render
	var productsSecondContainer = $(".second-filter .products_blocks");
	getSecond();

	function getSecond() {

		$.getJSON("date/second-category.json", function(date){

			var products = date;
			    i = products.length - 1;
			    k = 0;

			while (i > -1) {

				var productBlockMain = '<div class="products__block">';
					productBlockMain += '<img src="' + products[i].image + '" alt="" width="250" height="250">';
					productBlockMain += '<p class="block__text"><b>Код:</b> ' + products[i].code + '</p>';
					productBlockMain += '<p class="block__text"><b>Размер:</b> ' + products[i].size + '</p>';
					productBlockMain += '<p class="block__text"><b>Колличество:</b> ' + products[i].count + '</p>';
					productBlockMain += '</div>';

				productsSecondContainer.prepend(productBlockMain);
				i--;
			}

		});
	}

});