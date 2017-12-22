/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi and displaySearchData functions. When you're done, this app should allow a user to search for a specific dog breed, and display a random image of that dog breed. You should make requests to this API: https://dog.ceo/dog-api/ . Also make any necessary adjustments to make this app accessible. */

const api_url="https://dog.ceo/api";
function getDataFromApi(searchTerm, callback) {
  
  $.getJSON(`${api_url}/breed/${searchTerm}/images/random`, callback);
}

function displaySearchData(data) {
  console.log(data);
  // debugger; when you write debugger and run; in the network you'll see it will break on debugger line. Hover over data over there, you'll see data is an object and under message key is image's url value. Therefore, we should set data.message over here. Also if we open api url and click on the json of /api/breed/{breed name}/images, there under message is the image url.
  // const results = data.random;
  // $(".js-search-results").html(data.status);
  $(".js-search-results").html(`<img src="${data.message}" height="50" width="50">`);
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let queryTarget = $(event.currentTarget).find('.js-query');
    let query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    //debugger; this is another breakpoint. To go to the first one press debugger's play on top of the screen. Or if we want to inspect the value of query here, we can hover over query and check what's it returning. It should return the breed name you passed in the input field on the right hand side.
    getDataFromApi(query, displaySearchData);
  });
}

$(watchSubmit);