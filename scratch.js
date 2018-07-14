


$('#keyboard-upper-container').css('visibility', 'hidden') 


$(document).ready(function () {

    $(document).ready(function () {
        
        $(document).keydown(function (e) {
            if (e.keyCode == 16) {
                $('#keyboard-upper-container').css('visibility', 'visible');
                $('#keyboard-lower-container').css('visibility', 'hidden');
                $('#keyboard-upper-container').prependTo('#keyboard-lower-container')
                $('#space').appendTo('#keyboard-upper-container').css('visibility', 'visible')
                
                
            }
        });
        $(document).keyup(function (e) {
            if (e.keyCode == 16) {
                $('#keyboard-upper-container').css('visibility', 'hidden');
                $('#keyboard-lower-container').css('visibility', 'visible');
                $('#keyboard-upper-container').appendTo('#keyboard-lower-container');
                
                
            }









        })
    })
})
