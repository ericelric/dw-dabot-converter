function checkEmpty() {
	var input = document.getElementById("inputTxt").value;
	if (input =="") {
		document.getElementById("output").innerHTML = "Please paste a link!";	
		var element = document.getElementById("robot");
		element.classList.add("bounce");
	}
	else {
		translateURL();
	}
}

function translateURL() {
	var input = document.getElementById("inputTxt").value;	
	var place = "\\";
	var replace = "/";
	var seed = "DIY";
	var prefix = "/Volumes/webdav.hidrive.strato.com/public/";
	
	var	position = input.indexOf(place, 0);
	while (position >= 0) {
		input = input.substring(0, position) + replace + input.substring(position + place.length);
		position = input.indexOf(place, position + replace.length);
	}
	
	var n = input.indexOf(seed, 0);
	if (n > 0) {
		input = input.slice(n);
	}
	
    document.getElementById("output").innerHTML = prefix + input;
    selectText('output');
}

function selectText(element) {
    var doc = document;
    var text = doc.getElementById(element);    

    if (doc.body.createTextRange) { // ms
        var range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { // moz, opera, webkit
        var selection = window.getSelection();            
        var range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

var enter = document.getElementById("inputTxt");
enter.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  
        checkEmpty();
    }
});