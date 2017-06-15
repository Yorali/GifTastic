// Public beta-key: dc6zaTOxFJmzC



//https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC   

$(document).ready(function() {

	var topics = ['Guitar','Drums','Piano','Crow','Wilting','Distortion','Vortex','Uncertain'];

	fillButtonBox();

	function fillButtonBox() {
		// Fills buttonsbox with buttons classed 'ボタン'
		var boxx = $('#buttonsbox');
		for (var i = 0; i < topics.length; i++) {
			boxx.append($("<button class='botan'>" + topics[i] + "</h1>"))
		}
	};

	$("div button").on("click", function() {


		var apiKey = 'dc6zaTOxFJmzC';
		// Selects text of button chosen
		var choice = $(this).text();
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + choice + "&api_key=" + apiKey;



		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			// create img tag in #gifsbox
			// Prepend 
			populate();

			function populate() {
				for (var i = 0; i < 10; i++) {
					var materials = response.data[i].images.fixed_height_small.url;
					console.log(materials);
				}
			}

			var imageUrl = response.data[1].url;
			console.log(imageUrl);
		});

	});

});

