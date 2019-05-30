var api_key = 'TtEgkQPN6mRRNi6zKm155Jkmc950XLU8';
var content = $('#content');


$('#submit').on('click', function() {
    var input = $('#input').val();

    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&lang=en&limit=16&q=${input}`,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data)
            content.empty();

            $('#image').css("display", "none")

            for(var i = 0; i < data.data.length; i++) {
                var gifUrl = data.data[i].images.fixed_height.url;
                content.append('<img src="' + gifUrl + '" alt="gif from Giphy"/>' )
            }


            // $('#image')[0].src = `${gifFromResponse}`
        },
        error: function(err) {
            console.log(err);
        }
    })
});

