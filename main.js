console.log("main called ");
// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");




/*Test for scroll*/
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// when you scroll the div
$(".list").scroll(function(e) {
    var $list = $(this);

    // apply logic only to visible elements
    $list.find("div")
        .filter(function(i, d) {
            return isScrolledIntoView(d);
        })
        .each(function() {
            var eTop = $(this).offset().top;
            var center = $list.height() / 2;

            // if the element is in the center it is 100%
            // otherwise it will fade
            var dif = center - eTop;
            if (dif < 0) dif *= -1;

            var pc = 1 - (dif / center);

            // set the opacity for the elements
            $(this).css("opacity", pc);
        });
});
// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}