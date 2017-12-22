const PET_FINDER_SEARCH_URL = "http://api.petfinder.com";

function getDataFromApi(searchTerm, callback) {
	const query = {
		animal : searchTerm,
		key: '9ee8023b89e279e27258f82d9454f60a'
	}

	$.getJSON(`${PET_FINDER_SEARCH_URL}/breed.list?format=json`, query, callback)
}

function displaySearchData(data) {
	// const results = data.hits[0].recipe.image;
	// console.log(data.hits[0].recipe.image);
	// console.log(`<img src="${data.hits[0].recipe.image}">`);
	// debugger;
	console.log(data.petfinder.header);
		console.log(data.petfinder.breeds);

	debugger;
	// $(".js-search-results").html(data.petfinder.breed); 
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
