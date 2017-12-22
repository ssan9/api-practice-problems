/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . Also make any necessary adjustments to make this app accessible. */

function getDataFromApi(artist, title, callback) {
  // const query = {
  //   artist: '${artist}',
  //   title:'${title}'
  // }
  $.getJSON(`https://api.lyrics.ovh/v1/${artist}/${title}`, callback);
}



function displaySearchData(data) {
  const results = data.lyrics;
   console.log(data);
   $(".js-search-results").html(results);

}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let queryArtistInput = $(event.currentTarget).find('.js-query-artist');
    let queryTitleInput = $(event.currentTarget).find('.js-query-title');
    let queryArtist = queryArtistInput.val()
    let queryTitle = queryTitleInput.val();
  console.log(queryArtist);

    // clear out the input
    queryArtistInput.val("");
    queryTitleInput.val("");
        getDataFromApi(queryArtist, queryTitle, displaySearchData);

  });
}

$(watchSubmit);

