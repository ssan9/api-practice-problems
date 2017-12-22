const EDAMAM_SEARCH_URL = "https://api.edamam.com/search";

function getDataFromApi(searchTerm, callback) {
	const query = {
		q : searchTerm
	}

	$.getJSON(EDAMAM_SEARCH_URL, query, callback)
}

function renderResult(result) {
	console.log(result.label);
	return 
	`<div>
	<a class="url" href="{result.recipe.url}">${result.label}</a> <img src="${result.image}">
	</div>`
}

function displaySearchData(data) {
	// const results = data.hits[0].recipe.image;
	// console.log(data.hits[0].recipe.image);
	// console.log(`<img src="${data.hits[0].recipe.image}">`);
	
			// console.log(data.hits);
		// debugger;		


	const results = data.hits.map((item, index) => 
		renderResult(item));
	console.log(item.label);
	// debugger;
	 	/*console.log(index);
		console.log(data.hits); 
	debugger;*/
	
	$('.js-search-results').html(results); 


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
