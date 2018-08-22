$(document).keyup(lowerCase()) //toggle upper/lowercase keyboards
function upperCase() {
    $('#keyboard-upper-container').slideDown(1);
    $('#keyboard-lower-container').css('visibility', 'hidden')
}
function lowerCase() {
    $('#keyboard-upper-container').slideUp(1);
    $('#keyboard-lower-container').css('visibility', 'visible')
}

i = 0 /////
j = 0
k = 0
l = 1
m = 0
n = 0

kpCount = 0
sentences = ['cat fool', 'dog cup', 'fish foodx']
sentencesL = sentences[j].length
sentencesL2 = sentences[m].length
let nextLetter = sentences[m][n]
let feedbackLetter = sentences[j][k]
$('#sentence').text(sentences[0])
$('#target-letter').text(sentences[j][k])

function textFeedback() {
    sentencesL = sentences[j].length
    let charNum = event.which
    let feedbackLetter = sentences[j][k]
    let codeFeedbackLetter = feedbackLetter.charCodeAt()
    console.log(j, k, 'j, k typeText')
    k++
    if (sentencesL == k) {
        k = 0
        console.log('&')
        $('#sentence').text(sentences[++j])

    }
      if (charNum == codeFeedbackLetter) {
        $('#feedback').append('<span class="glyphicon glyphicon-ok">')
        console.log('---ok')
    } if (charNum !== codeFeedbackLetter) {
        $('#feedback').append('<span class="glyphicon glyphicon-remove">');
        console.log('---remove')
    }
}

function targetHighlight() {
    nextLetter = sentences[m][++n]
    sentencesL2 = sentences[m].length
    let moveCount = ++l
    let move = (moveCount * 17.365)
   
    console.log(m, n, nextLetter, 'm, n tLetter')
    if (sentencesL2 == n + 1) {
        m++
        n = -1
        l = 0
        console.log(m, n, 'm, n')
        console.log(l, 'l')
        console.log(moveCount, 'moveCount')
        console.log('!')
    }
    $('#target-letter').text(nextLetter)
    $('#yellow-block').css('left', move)
}

function feedback() {
    let charNum = event.which
    let feedbackLetter = sentences[m][n]
    let codeFeedbackLetter = feedbackLetter.charCodeAt()


    if (charNum == codeFeedbackLetter) {
        $('#feedback').append('<span class="glyphicon glyphicon-ok">')
        console.log('---ok')
    } if (charNum !== codeFeedbackLetter) {
        $('#feedback').append('<span class="glyphicon glyphicon-remove">');
        console.log('---remove')
    }
    
}


$(document).ready(function () {


    $(document).keypress(function (event) {
        textFeedback()
        
        targetHighlight()
        


        console.log(j, k, 'j, k')
        console.log(m, n, 'm, n')
        console.log(sentencesL, 'sentenceL')
        console.log(sentencesL2, 'sentenceL2')
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


