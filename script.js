$('#keyboard-upper-container').css('visibility', 'hidden') 

$(document).ready(function (){

    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            $('#keyboard-upper-container').css('visibility', 'visible') ;
        } 
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 16) {
            $('#keyboard-upper-container').css('visibility', 'hidden') ;
        } 
    });














})
