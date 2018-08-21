
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
sentences = ['cat foo', 'dog foods', 'fish foods']
sentencesL = sentences[i].length
let nextLetter = sentences[j][l]
let feedbackLetter = sentences[m][n]
$('#sentence').text(sentences[0])
$('#target-letter').text(sentences[j][l])

newArray = [] //contains the keys that were pressed
newArrayL = newArray.length

feedbackArray = [] // number of errors keyed


currentSentenceL = sentences[i].length



function addKeys() { //adds each key pressed to newArray
    let charNum = event.which
    let char = String.fromCharCode(charNum)
    console.log(newArrayL)
    if (newArrayL + 1 <= sentencesL) {
        newArray.push(char)
    }
}

function moveAlong() { // advance the next sentence when typist has finished current sentence
    if (newArrayL + 1 == sentencesL) {
        newArray = []  // resets the length of newArray ===> empties the keys pressed
        j += 1
        $('#sentence').text(sentences[j]) // advanced to the next sentence ===> advances index of array

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
    console.log(nextLetter) //the next letter to be pressed
    if (sentencesL - 1 == l) { // advances j on last letter of active sent. ==> 1st letter new sent.
        j +=1
    } if (sentencesL == l) {
        l = 0
    }
    
};

function feedback() { // returns x or check for correct/incorrect keystroke
    n += 1
    let charNum = event.which
    let feedbackLetter = sentences[m][n]
    let codeFeedbackLetter = feedbackLetter.charCodeAt()
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





    console.log(feedbackArray) // number of errors keyed prior to current press
    console.log(feedbackArrayL) 
    console.log(j, l) //position of the current letter
    console.log(m, n) //position of the prior letter
    console.log(i) //sentence that is beeing evaluated
    console.log(j) //sentence that is being displayed
    console.log(sentencesL) //length of sentence displayed
    console.log(currentSentenceL) //length of sentence being evaluated
    console.log(newArray)
    console.log(newArrayL) //contains the keys that were pressed
    console.log(feedbackLetter) //letter that was just pressed
    console.log(codeFeedbackLetter) //code of letter that should have been hit
    console.log(charNum) //code of letter that was pressed
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








