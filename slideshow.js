var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// function menuSelection() {
//   var x = document.getElementsByClassName("active");
//   var hom = document.getElementById('home');
//   var cin = document.getElementById('cin');
//   var films = document.getElementById('films');
//   var ger = document.getElementById('ger');
//   var cad = document.getElementById('cad');
//   var login = document.getElementById('login');

//   if (document.title ==='Nilo Cinemas'){
//   // { x.className === "topnav") {
//     hom.className += " active";
//   } else if(document.title ==='Cinemas') {
//     hom.className = '';
//     cin.className = "active";
//   }
// }
// function selCin(){
//   var hom = document.getElementById("home");
//   var cin = document.getElementById("cin");

//   hom.className = '';
//   cin.className = 'active';
// }
function setActive() {
  linkObj = document.getElementById('mytopnav').getElementsByTagName('a');
  for(i=0;i<linkObj.length;i++) { 
    if(document.location.href.indexOf(linkObj[i].href)>=0) {
      linkObj[i].classList.add("active");
    }
  }
}
window.onload = setActive;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}