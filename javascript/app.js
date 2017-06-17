// Public beta-key: dc6zaTOxFJmzC



//https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC   

$(document).ready(function() {

	var music = $('#sin');
	sin.play();

	var topics = ['Guitar','Drums','Piano','Crow','Wilt','Distortion','Vortex','Uncertain','Bgirl','Bboy','Pain', 'Physics', 'Mathematics', 'Distress', 'The Gazette'];
	
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
		var choice = $(this).text().toLowerCase();
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + choice + "&rating=g&api_key=" + apiKey;



		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			// create img tag in #gifsbox
			// Prepend 

			$('#gifsbox').empty();
			populate();

			function populate() {
				for (var i = 0; i < 10; i++) {
					var goxx = $('#gifsbox');
					var materials = response.data[i].images.fixed_height.url;
					var stillMaterials = response.data[i].images.fixed_height_still.url;
					goxx.prepend($("<img class='gifs' src=" + stillMaterials + " data-still=" + stillMaterials + " data-animate=" + materials + " data-state='still'>" + "</img></br>"))
				}
			};

			var imageUrl = response.data[1].url;
			console.log(imageUrl);

			$(".gifs").on('click', function() {
				var state = $(this).attr('data-state');
				if (state === 'still') {
					$(this).attr('src', $(this).attr('data-animate'));
					$(this).attr('data-state', 'animate');
				}
				else {
					$(this).attr('src', $(this).attr('data-still'));
					$(this).attr('data-state', 'still');
				}
			});


		});

			
	});


});

