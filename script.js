$(document).keyup(lowerCase()) //toggle upper/lowercase keyboards
function upperCase() {
    $('#keyboard-upper-container').slideDown(1);
    $('#keyboard-lower-container').css('visibility', 'hidden')
}
function lowerCase() {
    $('#keyboard-upper-container').slideUp(1);
    $('#keyboard-lower-container').css('visibility', 'visible')
}

i = 0
j = 0
k = 2
l = 0
sentences = ['cat food', 'dog foods', 'fish foods']
sentencesL = sentences[i].length
$('#sentence').text(sentences[0])

newArray = [] //contains the keys that were pressed
newArrayL = newArray.length

function addKeys() {
    let charNum = event.which
    let char = String.fromCharCode(charNum)
    if (newArrayL + 1 <= sentencesL) {
        newArray.push(char)
    }}

function moveAlong() {

    if (newArrayL + 1 == sentencesL) {
        newArray = []  // resets the length of newArray ===> empties the keys pressed

        advSentence = j + 1  // advanced to the next sentence ===> advances index of array
        j += 1
        $('#sentence').text(sentences[j])

        let index = i + 1
        let words = sentences[index]
        sentencesL = words.length  //sets array.length of the next sentence
    }}

    function moveHighlight() {
        let moveCount = k++
        let move = (moveCount * 17.365)
        if (moveCount == sentencesL) {
            k = 1
        }
        $('#yellow-block').css('left', move) //moves the yellowbox on keypress
    }

    function expectedKey() {
        l += 1
        let nextLetter = sentences[j][l]
        $('#div3').text(nextLetter)
    
        if (arrayL - 1 == l) { // advances j on last letter of active sent. ==> 1st letter new sent.
            up = j
            up += 1
        } if (arrayL == l) {
            l = 0
        } 
    };

$(document).ready(function () {

    $('#33').css('background', 'blue')

    $(document).keypress(function (event) {
        expectedKey()
        addKeys()
        moveAlong()
        moveHighlight()

        let charNum = event.which
        let char = String.fromCharCode(charNum)
        $('#div3').text(char)

        newArrayL = newArray.length

        


    })

})






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


