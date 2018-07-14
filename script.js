$(document).keyup(lowerCase())
function upperCase() {
    $('#keyboard-upper-container').slideDown(1);
    $('#keyboard-lower-container').css('visibility', 'hidden')
    
}

function lowerCase() {
    $('#keyboard-upper-container').slideUp(1);
    $('#keyboard-lower-container').css('visibility', 'visible')
}




   
    $(document).ready(function () {

      


        $(document).keydown(function (e) {
            if (e.keyCode == 16) {
                upperCase()
            }
        });
        $(document).keyup(function (e) {
            if (e.keyCode == 16) {
               lowerCase()
                
                
            }









        })
    })

