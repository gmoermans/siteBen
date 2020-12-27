//Create modal object from html to script
var modal = document.getElementById('myModal');

//Create a list with all images of class " my image ", all added images must be from this class
var images = document.getElementsByClassName('myImages');

//the image for the modal ( on clicked )
var modalImg = document.getElementById("img01");

//caption into the model on click ( inivisible by default )
var captionText = document.getElementById("caption");

window.onscroll = function() {stickyScroll()};

var navbar = document.getElementById("navbar");

const secondBar = document.createElement('div');
secondBar.innerHTML = '<button class="openbtn" onclick="openNav()">☰ Open Sidebar</button>  ';

var sideBarBool = true;

function openNav() {
	
  document.getElementById("navbar").style.width = "15%";

}

function closeNav() {
	
  document.getElementById("navbar").style.width = "0";
  
}

function stickyScroll()
{
	if (window.scrollY >= 15 )
	{
		openNav();
	}
	else if ( window.scrollTop + window.height == document.height )
	{
		  console.log('you are on bottom of page ');
	}
	else
	{
		closeNav();
	}		
}
// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
	console.log( this.src );
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

