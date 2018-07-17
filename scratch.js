
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















