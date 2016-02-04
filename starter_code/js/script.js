// YOUR CODE GOES HERE
var clientID = "3565fe59fc166cb7f5a0ab9b7c982cc8";

$(document).ready(function() {
    $("#search-btn").click(function() {
        var userChoice = $("#search-query").val();
        searchFlickr(clientID, userChoice, 10, function(photos) {
            console.log(photos);
            $.each(photos.photo, function(index, value) {
                insertIntoPage(value);
            });
        });
    });

    $("#reset-btn").click(function() {
        $("#search-results").empty();
    });
});



function insertIntoPage(photosInfo) {
    console.log(photosInfo);
    var container = $('#search-results')
    var url_m = photosInfo.url_m;
    var listItem = $("<img src=" + url_m + "></img>");
    listItem.text(photosInfo.title);

    container.append(listItem);
}


///// DESIGN IT