
// advances the yellow block 1 letter for every keypress
i = 17.365
$(document).keypress(function () {
    let move = (i += 17.365)
    $('#yellow-block').css('left', move)
});


/// ---------->>>>>>>>>>>>>

// checks to see if the enter key has been pressed

$(document).keypress(function(event){
	
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		alert('You pressed an "enter" key in somewhere');	
	}
	
});


// returns string index and the ascii code for each letter in a string
i = -1
$(document).keypress(function () {
    let index = (i += 1);
    let a = $('#div2').text()
    console.log(a)
    console.log(a.charCodeAt(index))
    let characters = a.charCodeAt(index)
    console.log(characters)
});



// cycles through the sentences in the array,
//advances yellow-block, doesn't restart w/ new sentence
// tracks index, doesn't restart w/ new sentence

$('#div1').css('left', '5.em')


i = -1

j = -1
c = 0
array = ['cat food', 'dog food', 'fish food']
$('#div2').text(array[0])


$(document).keypress(function () {

    let index = (j += 1)
    arrayItem = $('#div2').text()
    let characters = arrayItem.length
    if (characters == (index + 1)) {
        array.splice(0, 1);
       
        
        console.log($('#div2').text())
        $('#div2').text(array[0])
        console.log(array)
        console.log($('#div2').text())
    }
    i = 0

    $(document).keypress(function () {
        let move = (i += 17.365)
        $('#div1').css('left', move)
    
    });


    console.log($('#div2').text())

    console.log(index)



})


console.log($('#div2').text())



newArrItem = (c + 1)










///////
a = 0
i = 0
j = 1


sentences = ['cat food', 'dog food', 'fish food']
totalLength = sentences[0] + sentences[1] + sentences[2]
$('#sentence').text(sentences[a])

$(document).keypress(function () {

    $(document).ready(function () {
        let index = i++
        let preMove = j++
        let move = (preMove * 17.365)


        sentenceItem = $('#sentence').text()
        let characters = sentenceItem.length // count the length of the sentence

        console.log(preMove)
        console.log(index)
        console.log(characters)
        console.log(move)
        console.log(sentenceItem)
        console.log(sentences[a])


        if (characters == (index + 1)) {
            j = 1; //resets index to 0 
            a = 1;
            i = 0

        }

        $('#yellow-block').css('left', move)

        if (characters == (index + 1)) {
            $('#yellow-block').css('left', 0) //repositions yellow box
            $('#prompt-container').text(sentences[a])
            console.log(sentences[a])

        }

        















        let str = sentences[a]
        let n = str.charAt(index)
        console.log(n)
        let textValue = str.charCodeAt(index)


    })

})
    ;




$(document).keypress(function () {




});


// advances the yellow block 1 letter for every keypress & logs the charCode


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


    $(document).ready(function () {






    })





})


