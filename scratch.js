if (sentencesCount == j + 1 && sentencesL == k + 1) {
    time2 = d.getTime();
    if (2 * numberOfMistakes >= numberOfWords / totalTime) {
        $('#feedback').text('Please try again!!!')
        console.log('try again')
    }
}

if (2 * numberOfMistakes >= numberOfWords / totalTime) {
    $('#feedback').text('Please try again!!!')
}


console.log(time1, 'time1')
console.log(time2, 'time2')
console.log(numberOfMistakes, 'number of mistakes')
console.log(time, 'time')
console.log(time2 - time1, 'time2-time1')
console.log(wpm)


function replay() {
       
    $('#target-letter').remove()
    $('#target-letter').append('<button class=button btn-primary value=yes>')
    $('#target-letter').append('<button class=button btn-primary value=no>')
    $('#target-letter').show()
    console.log('wow')

}
$('#feedback').append('Would you like to play again?')
$('#target-letter').append('<input class=button type=button value=yes>')
$('#target-letter').append('<input class=button type=button value=no>')

