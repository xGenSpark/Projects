/* global $ */

function move () {
	
}

/*
$().on('click', function() {
	
});
// Show thumbnails within the table.
function showImage(cell) {
	var img = cell.getElementsByTagName("img")[0];
	img.style.visibility = "visible";
}

function removeImage(cell) {
	var img = cell.getElementsByTagName("img")[0];
	img.style.visibility = "hidden";
}

var slideshowCounter = 0;
var slideshowPictures = ["http://campusmaps.umn.edu/sites/campusmaps.umn.edu/files/styles/building_photos/public/akerman_150817_8599.jpg?itok=L9cER5AS",
"http://campusmaps.umn.edu/sites/campusmaps.umn.edu/files/styles/building_photos/public/amundson_150626_4265.jpg?itok=LUix4YKx",
"http://campusmaps.umn.edu/sites/campusmaps.umn.edu/files/styles/building_photos/public/kellerhall_150626_4282.jpg?itok=qcveFOWw"];
var player;

// Show a slideshow when the appropriate button is clicked.
function slideshow() {
	var view = document.getElementById("view");
	view.setAttribute("src", slideshowPictures[slideshowCounter++]);
	
	if (slideshowCounter >= slideshowPictures.length) {
		slideshowCounter = 0;
	}
}

function startSlideshow() {
	player = setInterval(function() {slideshow()}, 1000);
}

function stopSlideshow() {
	player = clearInterval(player);
}
*/

$(function() {
	$('#about').on('click', function() {
		$('#instructions-description').slideUp();
		$('#about-description').slideToggle();
	});
	
	$('#instructions').on('click', function() {
		$('#about-description').slideUp();
		$('#instructions-description').slideToggle();
	});
	
	
	
	
	/*$('.button').on('click', function(event) {
		$(event.currentTarget).addClass('activeButton');
    $(event.currentTarget).siblings().removeClass('activeButton');
	});*/
	
	/*
	DATE METHODS
	(When a Date object is created, a number of methods make it possible to
		perform
	    operations on it.)
	(https://api.sololearn.com/DownloadFile?id=2772)
	--------------------
	var d = new Date();
	var hours = d.getHours();
	//hours is equal to the current hour
	--------------------
	--------------------
	(Let's create a program that prints the current time to the browser once every
	    second.)
	
	function printTime() {
	  var d = new Date();
	  var hours = d.getHours();
	  var mins = d.getMinutes();
	  var secs = d.getSeconds();
	  document.body.innerHTML = hours+':'+mins+':'+secs;
	}
	setInterval(printTime, 1000);
	
	(We declared a function printTime(), which gets the current time from the date
	    object, and prints it to the screen. We then called the function once every
	    second, using the setInterval method.)
	--------------------
	(The innerHTML property sets or returns the HTML content of an element. In our
	    case, we are changing the HTML content of our document's body. This
	    overwrites the content every second, instead of printing it repeatedly to
    	the screen.)
  	*/
});