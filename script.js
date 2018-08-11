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
m = 0
n = -1
sentences = ['cat food', 'dog foods', 'fish foods']
sentencesL = sentences[i].length
let nextLetter = sentences[j][l]
let feedbackLetter = sentences[m][n]
$('#sentence').text(sentences[0])
$('#target-letter').text(sentences[j][l])

newArray = [] //contains the keys that were pressed
newArrayL = newArray.length

feedbackArray = []


currentSentenceL = sentences[i].length



function addKeys() {
    let charNum = event.which
    let char = String.fromCharCode(charNum)
    if (newArrayL + 1 <= sentencesL) {
        newArray.push(char)
    }
}

function moveAlong() { // advance the next sentence when typist has finished current sentence
    if (newArrayL + 1 == sentencesL) {
        newArray = []  // resets the length of newArray ===> empties the keys pressed

        advSentence = j + 1  // advanced to the next sentence ===> advances index of array
        j += 1
        $('#sentence').text(sentences[j])

        let index = i + 1
        let words = sentences[index]
        sentencesL = words.length  //sets array.length of the next sentence
    }
}

function moveHighlight() { // advances the highlight as you type
    let moveCount = k++
    let move = (moveCount * 17.365)
    if (moveCount == sentencesL) {
        k = 1
    }
    $('#yellow-block').css('left', move) //moves the yellowbox on keypress
}

function expectedKey() { // displays the next letter to be pressed
    l += 1
    let nextLetter = sentences[j][l]
    $('#target-letter').text(nextLetter)

    if (sentencesL - 1 == l) { // advances j on last letter of active sent. ==> 1st letter new sent.
        up = j
        up += 1
    } if (sentencesL == l) {
        l = 0
    }
};

function feedback() {
    n += 1
    let charNum = event.which
    let feedbackLetter = sentences[m][n]
    let codeFeedbackLetter = feedbackLetter.charCodeAt(0)
    feedbackArrayL = feedbackArray.length
    if (sentencesL - 1 == n) { // advances j on last letter of active sent. ==> 1st letter new sent.
        upFeed = m
        upFeed += 1
    } if (sentencesL == n) {
        l = 0
    } if (charNum == codeFeedbackLetter) {
        $('#feedback').append('<span class="glyphicon glyphicon-ok">')
    } if (charNum !== codeFeedbackLetter) {
        $('#feedback').append('<span class="glyphicon glyphicon-remove">');
        feedbackArray.push('x')
    }

    if (n == currentSentenceL - 1) {
        $('#feedback').empty()
    }





    console.log(feedbackArray)
    console.log(feedbackArrayL)
    console.log(m, n)
    console.log(i)
    console.log(j)
    console.log(sentencesL)
    console.log(currentSentenceL)
    console.log(newArrayL)
    console.log(feedbackLetter)
    console.log(codeFeedbackLetter)
    console.log(charNum)
    console.log('...')
}



$(document).ready(function () {


    $(document).keypress(function (event) {
        expectedKey()
        addKeys()
        moveAlong()
        moveHighlight()


        let charNum = event.which // the code for the key pressed
        let char = String.fromCharCode(charNum)
        $('#div3').text(char)

        newArrayL = newArray.length






    })
    $(document).keypress(function (event) {
        feedback()
        console.log(feedbackArray)
        console.log(feedbackArrayL)
    })

    // highlights the key that has pressed in the browser
    $(document).keypress(function (e) {
        $("#" + e.which + "").css('background-color', 'blue')

    })
    $(document).keyup(function (e) {
        $(".key").css('background-color', '')
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


