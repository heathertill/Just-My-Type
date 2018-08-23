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
l = 1
m = 0
n = 0



kpCount = 0
let sentence = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let sentences = ['cat fool', 'dog cup', 'fish foodx']
let sentencesL = sentences[j].length
let sentencesL2 = sentences[m].length
let nextLetter = sentences[m][n]
let feedbackLetter = sentences[j][k]
let checkTimer = sentences[0][0]
s = 0
ok = []
remove = []
response = []

$('#sentence').text(sentences[0])
$('#target-letter').text(sentences[j][k])



function textFeedback() {
    sentencesL = sentences[j].length
    let charNum = event.which
    let feedbackLetter = sentences[j][k]
    let codeFeedbackLetter = feedbackLetter.charCodeAt()
    responseL = response.length


    ++k
    ++i
    if (sentencesL == k) {
        k = 0
        console.log('&')
        $('#sentence').text(sentences[++j])
    }
    if (charNum == codeFeedbackLetter) {
        $('#feedback').append('<span class="glyphicon glyphicon-ok">')
        ok.push('+')
        response.push('+')
        console.log('---ok')
    } if (charNum !== codeFeedbackLetter) {
        $('#feedback').append('<span class="glyphicon glyphicon-remove">')
        remove.push('x')
        response.push('x')
        console.log('---remove')
    } if (sentencesL == i) {
        i = 0
        $('#feedback').empty()
        console.log('+')
    } if (feedbackLetter === sentences[2][9]) {


        alert('done')
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
        console.log(sentencesL2, 'sentenceL2')
        console.log('!')
    }
    $('#target-letter').text(nextLetter)
    $('#yellow-block').css('left', move)
}
function timer() {
    checkTimer = sentences[j][k]
    console.log(checkTimer, 'checkTimer')
    console.log(j, k, 'j, k')
    if (sentences[0][0] === checkTimer) {
        let seconds = 1000;
        let minutes = seconds * 60
        let d = new Date();
        let time1 = d.getTime();
        s = Math.round(time1 / seconds);

        console.log(s)
        console.log(j, k)
        console.log('BOOM!!!!')
    } if (sentences[2][9] == checkTimer) {
        let seconds = 1000;
        let minutes = seconds * 60
        let d = new Date();
        let time2 = d.getTime();
        let finish = Math.round(time2 / seconds);
        console.log(finish)
        console.log(s)
        console.log(finish - s)
        console.log(j, k)
    }
}




$(document).ready(function () {


    $(document).keypress(function (event) {
        timer()

        textFeedback()
        targetHighlight()
        console.log(l)
        console.log(s)
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


