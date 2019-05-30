var api_key = 'TtEgkQPN6mRRNi6zKm155Jkmc950XLU8';
var content = $('#content');


$('#submit').on('click', function(e) {
    e.preventDefault();
    var input = $('#input').val();

    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&lang=en&limit=8&q=${input}&rating=g`,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data)
            content.empty();

            $('#image').css("display", "none")
            content.append('<img id="loading" src="/assets/images/loading.gif" alt="gif from Giphy"/>')

            for(var i = 0; i < data.data.length; i++) {
                var gifUrl = data.data[i].images.fixed_height.url;
                content.append('<img class="hideElement contentGifs" src="' + gifUrl + '" alt="gif from Giphy"/>' )
            }

            setTimeout(function() {
                var contentGifs = $('.contentGifs');
                $("#loading").hide();
                contentGifs.css("display", "inline-block");
            }, 3000)
        },
        error: function(err) {
            console.log(err);
        }
    })
});

