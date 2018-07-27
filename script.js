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

function newLength() { //sets array.length of the next sentence
    if (newArrayL + 1 == sentencesL) {
        let index = i + 1
        let words = sentences[index]
        sentencesL = words.length
        console.log(sentencesL)
        console.log(index)
        console.log('still kicking')
    }};

function newSentence() { // advanced to the next sentence ===> advances index of array
    if (newArrayL + 1 == sentencesL) {
        advSentence = j + 1
        j += 1
        $('#sentence').text(sentences[j])
        console.log(sentences[j])
        console.log('watch it')
    }};

console.log()

function advArray() {

    if (newArrayL + 1 == sentencesL) {

        newArray = []  // resets the length of newArray ===> empties the keys pressed
        console.log(newArray.length)
        console.log('fired')
    }
}

$(document).ready(function () {

    $(document).keypress(function (event) {


        addKeys()
        advArray()
        newSentence()
        newLength()

        let charNum = event.which
        let char = String.fromCharCode(charNum)
        $('#div3').text(char)



        newArrayL = newArray.length

        console.log(newArray)
        console.log(sentencesL)
        console.log(newArrayL)
        console.log(j)


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


