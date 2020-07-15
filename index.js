const GiphyApi = 'http://api.giphy.com/v1/gifs/search?apiKey=';
const GiphyApikey = '';

$(document).keyup(function (event) {
    if ($("#gif-search").is(":focus")&& event.key == "Enter") {
        //Do work
        console.log('do work')
        let squery = $('#gif-search').val()
        console.log(squery)
        searchFromGiphy(squery)
    }
});

