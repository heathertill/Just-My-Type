$(document).keyup(lowerCase()) //toggle upper/lowercase keyboards
function upperCase() {
    $('#keyboard-upper-container').slideDown(1);
    $('#keyboard-lower-container').css('visibility', 'hidden')
}
function lowerCase() {
    $('#keyboard-upper-container').slideUp(1);
    $('#keyboard-lower-container').css('visibility', 'visible')
}
$('#prompt-container').css('padding', '0')


a = 0
i = 0
j = 1


sentences = ['cat food', 'dog food', 'fish food']
totalLength = sentences[0] + sentences[1] + sentences[2]
$('#sentence').text(sentences[a])

$(document).keypress(function () {

    $(document).ready(function () {
        let index = i++
        let preMove = j++
        let move = (preMove * 17.365)


        sentenceItem = $('#sentence').text()

        let characters = sentenceItem.length // count the length of the sentence

        console.log(preMove)
        console.log(index)
        console.log(characters)
        console.log(move)
        console.log(sentenceItem)
        console.log(sentences[a])


        if (characters == (index + 1)) {
            j = 1; //resets index to 0 
            i = 0

        }

        $('#yellow-block').css('left', move)

        if (characters == (index + 1)) {
            $('#yellow-block').css('left', 0) //repositions yellow box
            a = 1
           

            $('#sentence').text(sentences[a])
            console.log($('#sentence').text())
            console.log(a)
        }

















        let str = sentences[a]
        let n = str.charAt(index)
        console.log(n)
        let textValue = str.charCodeAt(index)


    })

})
    ;




$(document).keypress(function () {




});


// advances the yellow block 1 letter for every keypress & logs the charCode






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

})


