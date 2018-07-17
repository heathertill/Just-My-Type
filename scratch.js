
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




