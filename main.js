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

var clientWidth = window.width;

var isOpen = false;


const openBarButton = document.getElementById("barButton");

function openButton()
{
	openBarButton.style.display = "block";
}

function closeButton()
{
	openBarButton.style.display = "none";
}

function openNavOnSmallScreen()
{
	document.getElementById("navbar").style.width = "50%";
}
function openNav()
{
  document.getElementById("navbar").style.width = "15%";
}

function closeNav()
{
  document.getElementById("navbar").style.width = "0";
}

if( window.innerWidth < 780 )
{
	isOpen = false;
	openButton();
}
function stickyScroll()
{
	if (window.scrollY >= 15 )
	{
		console.log( window.innerWidth );
		if( window.innerWidth > 780 && !isOpen )
		{
			//for this point, we need to setting up
			//the sidebar nav.  In other way, we have
			//to use a button in order to display or not
			//display the navbar.
			closeButton();
			openNav();
			isOpen = true;
		}
		else if( window.innerWidth < 779 && isOpen )
		{
			console.log(" smarphone screen ");
			closeNav();
			openButton();
			isOpen = false;
		}
		else
		{
			//live your life.
		}
	}
	else if ( window.scrollTop + window.height == document.height )
	{
		  console.log('you are on bottom of page ');
	}
	else
	{
		closeNav();
		isOpen = false;
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

