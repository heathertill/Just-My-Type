$(document).keyup(lowerCase())
function upperCase() {
    $('#keyboard-upper-container').slideDown(1);
    $('#keyboard-lower-container').css('visibility', 'hidden')
}
function lowerCase() {
    $('#keyboard-upper-container').slideUp(1);
    $('#keyboard-lower-container').css('visibility', 'visible')
}

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
$('#sentence').append(sentences.toString())

// advances the yellow block 1 letter for every keypress & logs the charCode
i = 17.365
j = -1
$(document).keypress(function () {
    let move = (i += 17.365)
    $('#yellow-block').css('left', move)
    let index = (j += 1);
    console.log(index)
    let a = sentences[0]
    console.log(a)
    console.log(a.charCodeAt(index))


});




$(document).keypress(function () {
  
   
   
    
});









// appearance of keyboard
$(document).keydown(function (e) {
    if (e.keyCode == 16) {
        upperCase()
    }
});
$(document).keyup(function (e) {
    if (e.keyCode == 16) {
        lowerCase()
    }


    $(document).ready(function () {






    })





})


