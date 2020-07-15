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

function searchFromGiphy(query) {
    $.ajax({
        url: GiphyApi + GiphyApikey + '&q=' + query,
        contentType: "application/json",
        dataType: 'json'
        success: function (result) {
            showResult(result)
        }
    })
}

function showResult(result) {
    console.log(result)
    let data = result.data;

    let result_html = "";

    data.forEach(gif => {
        let div =
        <div class="custom-grid">
        <img src="${gif.images.downsized.url}">
        </div>
    ;
        result_html =result_html + div 

    })
    $('#gif-count').val(data.length)
    $('.search-contents').html('')
    $('.search-contents').append(result_html)

}