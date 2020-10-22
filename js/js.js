//START script for the module hamburger============================//
function openNav() {
  document.getElementById("sideNavMoble").style.width = "250px";
  document.getElementById("sideNavMoble").style.display = "block";
  document.getElementById("hamburger").style.marginLeft = "250px";
  document.getElementById("hamburger").style.display = "none";
}

function closeNav() {
  document.getElementById("sideNavMoble").style.width = "0";
  document.getElementById("hamburger").style.marginLeft= "0";
  document.getElementById("hamburger").style.display= "block";
}
//END script for the module hamburger============================//
//START script for the module slider============================//
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("moduleSlide");
  var dots = document.getElementsByClassName("dot");
  var asideSquares = document.getElementsByClassName("asideActive");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dotActive", "");
  }
  for (i = 0; i < asideSquares.length; i++) {
      asideSquares[i].className = asideSquares[i].className.replace(" asideActive2", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " dotActive";
  asideSquares[slideIndex-1].className += " asideActive2";
}
//END script for the module slider============================//

//START script for the reporting page=========================//

var activitiesbut = document.getElementById("activitybut");
activitiesbut.onclick = function () {
    document.getElementById("formact").classList.add("hide");
    document.getElementById("formact").classList.remove("hide");
}

var modal = document.getElementById("modalreport");

var btn = document.getElementById("modalbtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal3 = document.getElementById("modalcontact");

var btn3 = document.getElementById("contactbtn");

var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function() {
 modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


var modal2 = document.getElementById("modalreport2");

var btn2 = document.getElementById("modalbtn2");

var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
 modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

//var expensesbut = document.getElementById("expensebut");
//expensesbut.onclick = function () {
//    document.getElementById("formact").classList.add("hide");
//    document.getElementById("formexp").classList.remove("hide");
//}


//END script for the reporting page============================//
//START script for accessibility===============================//
function click() {

}


//disclaimer popup

function disclaimer() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

//END script for accessibility=================================//
