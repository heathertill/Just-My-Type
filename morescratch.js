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
k = 0
l = 2
m = 0
n = 0

kpCount = 0
sentences = ['cat fool', 'dog cup', 'fish foodx']
sentencesL = sentences[j].length
let nextLetter = sentences[j][k]
let feedbackLetter = sentences[j][k]
$('#sentence').text(sentences[0])
$('#target-letter').text(sentences[j][k])



function feedback() { // returns x or check for correct/incorrect keystroke
    let charNum = event.which
    let feedbackLetter = sentences[j][k]
    let codeFeedbackLetter = feedbackLetter.charCodeAt()
    console.log(m, n, 'm, n feedback')
    console.log(j, k, 'j, k feedback')
    if (charNum == codeFeedbackLetter) {
        $('#feedback').append('<span class="glyphicon glyphicon-ok">')
        console.log('---ok')
    } if (charNum !== codeFeedbackLetter) {
        $('#feedback').append('<span class="glyphicon glyphicon-remove">');
        console.log('---remove')
    }
    k += 1 // advances to the next letter
}


function targetLetter() { // displays the target letter
    console.log(m, n, 'm, n target')
    console.log(j, k, 'j, k target')
    sentencesL = sentences[j].length
    let nextLetter = sentences[j][k]

    nextLetter = sentences[j][k]
    $('#target-letter').text(nextLetter)
    console.log(sentencesL, 'sentenceL')
    console.log(nextLetter)
    if (sentencesL == k) { // advances j on last letter of active sent. ==> 1st letter new sent.
        j += 1
        k = 0
        let advLetter = sentences[j][k]
        $('#target-letter').text(advLetter)
        console.log('---targetLetter')
        console.log(sentencesL, 'sentenceL')
        console.log(m, n, 'm, n in oldSent')
        console.log(j, k, 'j, k in oldSent')
        console.log(advLetter)
    }
};

function moveHighlight() { // advances the highlight as you type
    sentencesL = sentences[j].length
    let moveCount = l++
    let move = (moveCount * 17.365)
    console.log(m, n, 'm, n moveHigh')
    console.log(j, k, 'j, kmoveHigh')
    if (moveCount == sentencesL) {
        l = 1 //resets the highlight to the beginning of the next sentence
        console.log('---moveHighlight')
        console.log(m, n, 'm, n in moveHigh')
        console.log(j, k, 'j, k in moveHigh')
    }
    $('#yellow-block').css('left', move) //moves the yellowbox on keypress
}

function oldSentence() {
    sentencesL = sentences[j].length
    console.log(m, n, 'm, n oldSent')
    console.log(j, k, 'j, k oldSent')
    if (sentencesL == k) { // advances j on last letter of active sent. ==> 1st letter new sent.
        j += 1
        k = 0
        console.log('---targetLetter    $$$')
        console.log(m, n, 'm, n in oldSent')
        console.log(j, k, 'j, k in oldSent')
    }
    if (kpCount == sentencesL - 1) { //resets kpCount
        kpCount = -1
        console.log(m, n, 'm, n in oldSent')
        console.log(j, k, 'j, k in oldSent')
        console.log('---reset kpCount    ###')
    }
    kpCount++ //counts # of keypress
}

function newSentence() {
    n += 1
    sentencesL = sentences[j].length
    console.log(m, n, 'm, n newSent')
    console.log(j, k, 'j, k newSent')
    if (n == sentencesL) {
        m++
        n = 0
        $('#sentence').text(sentences[j])
        console.log(m, n, 'm, n in newSent')
        console.log(j, k, 'j, k in newSent')
        console.log('---newSentence   ***')
    }
}


$(document).ready(function () {


    $(document).keypress(function (event) {

        newSentence()
        oldSentence()
        feedback()
        targetLetter()
        moveHighlight()

        console.log(m, n, 'm, n')
        console.log(j, k, 'j, k')
        console.log('***')



    })

    $(document).keypress(function (event) {



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


