const EDAMAM_SEARCH_URL = "https://api.edamam.com/search";

function getDataFromApi(searchTerm, callback) {
	const query = {
		q : searchTerm
	}

	$.getJSON(EDAMAM_SEARCH_URL, query, callback)
}

function displaySearchData(data) {
	// const results = data.hits[0].recipe.image;
	// console.log(data.hits[0].recipe.image);
	// console.log(`<img src="${data.hits[0].recipe.image}">`);
	// debugger;
	$(".js-search-results").html(`<a class="url" href= "${data.hits[0].recipe.url}">Chocolate</a> <img src= "${data.hits[0].recipe.image}">`); 
}

function watchSubmit() {
	$(".js-search-form").submit(function(event) {
		event.preventDefault();
		const query = $(".js-query-title").val();
		$(".js-query-title").val("");
		// debugger;
	getDataFromApi(query, displaySearchData);

	})
}

$(watchSubmit);
