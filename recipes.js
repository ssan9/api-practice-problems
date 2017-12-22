const EDAMAM_SEARCH_URL = "https://api.edamam.com/search";

function getDataFromApi(searchTerm, callback) {
	const query = {
		q : searchTerm
	}
	$.getJSON(EDAMAM_SEARCH_URL, query, callback)
}

function displaySearchData(data) {
	console.log(data)
	var results = data.hits.map(function(recipeObject){
		return `<a class="url" href= "${recipeObject.recipe.url}">
		<h1>${recipeObject.recipe.label}</h1>
		<img src= "${recipeObject.recipe.image}">
		</a>`
	})
	$(".js-search-results").html( results.join("") );
}

function watchSubmit() {
	$(".js-search-form").submit(function(event) {
		event.preventDefault();
		const query = $(".js-query-title").val();
		$(".js-query-title").val("");
		getDataFromApi(query, displaySearchData);
	})
}

$(watchSubmit);
