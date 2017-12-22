const EDAMAM_SEARCH_URL = "https://api.edamam.com/search";

function getDataFromApi(searchTerm, callback) {
	const query = {
		q : searchTerm
	}
	$.getJSON(EDAMAM_SEARCH_URL, query, callback)
}

function renderResult(result) {
	return `<div>
	<a class="url" href="${result.url}">${result.label}</a> <img src="${result.image}">
	</div>`
}

function displaySearchData(data) {
	const results = data.hits.map( item => renderResult(item.recipe));
	$('.js-search-results').html( results.join("") );
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
