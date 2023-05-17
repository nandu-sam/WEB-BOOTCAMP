//IMPLEMENTING jQUERY CODE 


/*$("button").click(function () {
    $("h1").css("color", "purple");
});*/

//keypress event
/*$(document).keypress(function (event) {
    $("h1").text(event.key);
});*/

//Mouse over event

$("h1").on("mouseover", function () {
    $("h1").css("color", "green");
});
//Adding and removing in jQuery
$("h1").before("<button>New</button>");

//after and prepend and append