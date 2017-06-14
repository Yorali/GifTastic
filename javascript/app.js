// Public beta-key: dc6zaTOxFJmzC



//https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC   

$(document).ready(function() {

$("#guitar-button").on("click", function() {


	var apiKey = 'dc6zaTOxFJmzC'
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=guitar&api_key=dc6zaTOxFJmzC";



	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		var imageUrl = response.data[1].url;
		console.log(imageUrl);
	});

});

});

