var publicationsIndex = 0;
showPublication();

function showPublication(n) {
var i;
var publications = document.getElementsByClassName("publication");
var dots = document.getElementsByClassName("dot");
 for (i = 0; i < publications.length; i++) {
   publications[i].style.display = "none";
 }
publicationsIndex++;
if (publicationsIndex > publications.length) { publicationsIndex = 1 }
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
publications[publicationsIndex - 1].style.display = "block";
dots[publicationsIndex - 1].className += " active";
setTimeout(showPublication, 5000); // Change image every 5 seconds
}