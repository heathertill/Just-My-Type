$(document).ready(function () {
    newGame()

    $(document).keyup(lowerCase())              //toggle upper/lowercase keyboards
    function upperCase() {
        $('#keyboard-upper-container').slideDown(1);
        $('#keyboard-lower-container').css('visibility', 'hidden')
    }
    function lowerCase() {
        $('#keyboard-upper-container').slideUp(1);
        $('#keyboard-lower-container').css('visibility', 'visible')
    }
    $(document).keydown(function (e) {          // appearance of keyboard
        if (e.keyCode == 16) {
            upperCase()
        }
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 16) {
            lowerCase()
        }
    })

    function newGame() {
        i = 0 // resets sentenceL
        j = 0
        k = 0
        l = 1 // moves yellow-block
        m = 0
        n = 1
        time1 = 0
        time2 = 0
        kpCount = 0
        totalCharacters = 0
        start = 0
        finish = 0
        numberOfMistakes = 0
    }

    function endGame() {
        alert('Thank you for playing!!!')

    }

    let sentence = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentences = ['cat foil', 'dog gup', 'fish foodx']
    let sentencesL = sentences[j].length
    let sentencesL2 = sentences[m].length
    let sentencesCount = sentences.length
    let nextLetter = sentences[m][n]
    let feedbackLetter = sentences[j][k]


    for (let h = 0; h < sentencesCount; h++) {
        let characters = sentences[h].length
        totalCharacters += characters
        console.log(totalCharacters)
    }

    $('#sentence').text(sentences[0])
    $('#target-letter').text(sentences[j][k])

    function textFeedback() {
        sentencesL = sentences[j].length
        let charNum = event.which
        let feedbackLetter = sentences[j][k]
        let codeFeedbackLetter = feedbackLetter.charCodeAt()
        ++k
        ++i
        if (sentencesL == k) {
            k = 0
            console.log('&')
            $('#sentence').text(sentences[++j])
        } if (charNum == codeFeedbackLetter) {
            $('#feedback').append('<span class="glyphicon glyphicon-ok">')
        } if (charNum !== codeFeedbackLetter) {
            $('#feedback').append('<span class="glyphicon glyphicon-remove">')
            numberOfMistakes++
        } if (sentencesL == i) {
            i = 0
            $('#feedback').empty()
        }
    }

    function targetHighlight() {
        nextLetter = sentences[m][n++]
        let moveCount = ++l
        let move = (moveCount * 17.365)
        kpCount++
        console.log(kpCount, 'kpCount')
        if (totalCharacters > kpCount) {
            $('#target-letter').text(nextLetter)
        } if (totalCharacters == kpCount) {
            $('#target-letter').empty()
        }

        $('#yellow-block').css('left', move)
        console.log(totalCharacters, 'totalCharacters')

        if (totalCharacters > kpCount + 1) {
            if (sentencesL2 == n) {
                ++m
                n = 0
                l = 0
                console.log(m, n, 'm, n')
            }
        }
        console.log(m, n, 'm, n')
        sentencesL2 = sentences[m].length
    }

    function timer() {
        let d = new Date();
        console.log(sentencesL, 'sentenceL')
        console.log(j, k, 'j, k')
        if (j == 0 && k == 0) {
            time1 = d.getTime();
        } if (sentencesCount == j + 1 && sentencesL == k + 1) {
            time2 = d.getTime();
        }
    }

    function speed() {
        let numberOfWords = 6
        let seconds = 1000;
        let minutes = seconds * 60
        if (totalCharacters == kpCount) {
            time = time2 - time1
            totalTime = time / minutes
            wpm = (numberOfWords / totalTime) - (2 * numberOfMistakes)
            console.log(numberOfMistakes * 2, 'number of mistakes * 2')
            console.log(numberOfWords / totalTime, '#words / totalTime')
            $('#target-letter').text('You typed an average of ' + wpm.toFixed() + ' words per minute.')
            $('#target-letter').fadeOut(6000, function () {
                $('#target-letter').empty()
                $('#feedback').append('Would you like to play again?');
            })
            $('#target-letter').fadeIn(1500, function () {
                $('#target-letter').append('<input class=button type=button value=yes>')
                $('#target-letter').append('<input class=button type=button value=no>')
            })
            if (2 * numberOfMistakes >= numberOfWords / totalTime) {
                $('#target-letter').text('Too many errors!!!')
                console.log('try again')
            }
        }
    }

    function replay() {

        

    }



    $(document).keypress(function (event) {
        timer()
        textFeedback()
        targetHighlight()
        speed()

        console.log(m, n, 'm, n')

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



