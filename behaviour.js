
function say(text) {
    $(".bubble p").html(text);
    $(".bubble").show();


    var speak=function(count) {
        if (count>0) {
        $("#lips").toggleClass("open");
        setTimeout(function() {speak(count-1)},200);
    }
    else {
        $("#lips").removeClass("open");
       // setTimeout(function(){$(".bubble").hide();},2000);
            }
    };

    speak(text.split(" ").length*2);
    window.location.href="#"+encodeURI(text);
};

$("form").on("submit",function(){
    say($("#text").val() || "Say What?");
    return false;
});


$(document).ready(function() {
    if (window.location.hash) {
        say(decodeURI(window.location.hash.substring(1)));
    }
});
