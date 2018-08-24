$(document).keyup(lowerCase()) //toggle upper/lowercase keyboards
function upperCase() {
    $('#keyboard-upper-container').slideDown(1);
    $('#keyboard-lower-container').css('visibility', 'hidden')
}
function lowerCase() {
    $('#keyboard-upper-container').slideUp(1);
    $('#keyboard-lower-container').css('visibility', 'visible')
}

time1 = 0
time2 = 0
i = 0
j = 0
k = 0
l = 1
m = 0
n = 0
kpCount = 0
let sentence = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentences = ['cat fool', 'dog gup', 'fish foodx']
let sentencesL = sentences[j].length
let sentencesL2 = sentences[m].length
let sentencesCount = sentences.length
let nextLetter = sentences[m][n]
let feedbackLetter = sentences[j][k]
start = 0
finish = 0
ok = []
remove = []
numberOfMistakes = remove.length
response = []

$('#sentence').text(sentences[0])
$('#target-letter').text(sentences[j][k])

function textFeedback() {
    console.log(j, k, 'j, k')
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
    console.log(sentencesCount, 'sentencesCount')
    console.log(sentencesL, 'sentenceL')
    console.log(j, k, 'j, k')
}


function targetHighlight() {
    console.log(j, k, 'j, k')
    console.log(m, n, 'm, n')
    let sentencesCount = sentences.length
    nextLetter = sentences[m][++n]
    sentencesL2 = sentences[m].length
    let moveCount = l++
    let move = (moveCount * 17.365)
    if (sentencesL2 == n + 1) {
        m++
        n = -1
        l = 1
        console.log('!')
    } 
    $('#target-letter').text(nextLetter)
    $('#yellow-block').css('left', move)
    console.log(j, k, 'j, k')
    console.log(m, n, 'm, n')
}

function timer1() {
let numberOfWords = 6
    let d = new Date();
    let seconds = 1000;
    let minutes = seconds * 60
    if (j == 0) {
        if (k == 0) {
            time1 = d.getTime();
            console.log(time1)
        }
    } if (sentencesCount == j + 1) {
        if (sentencesL == k + 2 ) {
            time2 = d.getTime();
            console.log(time2)

        }
    }
    time = time2 - time1
    totalTime = time/minutes
    wpm = [(numberOfWords / totalTime) - (2 * numberOfMistakes)]
    console.log(totalTime)
    console.log(wpm)
}

function timer() {
    checkTimer = sentences[j][k]
    console.log(checkTimer, 'checkTimer')
    console.log(j, k, 'j, k')
    if (sentences[0][0] === checkTimer) {
        
        let minutes = seconds * 60
        let d = new Date();
        let time1 = d.getTime();
        start = Math.round(time1 / seconds);
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
    }
}

function reset() {
    if (sentencesCount == j) {
        
    } 
}

$(document).ready(function () {


    $(document).keypress(function (event) {
        timer1()

        textFeedback()
        targetHighlight()

        console.log(time1)
        console.log(time2)
        console.log(time1 - time2)
        console.log(j, k, 'j, k')
        console.log(m, n, 'm, n')
        console.log(wpm)
        console.log('*******************')
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


