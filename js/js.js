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
    document.getElementById("formexp").classList.add("hide");
    document.getElementById("formact").classList.remove("hide");
}
var expensesbut = document.getElementById("expensebut");
expensesbut.onclick = function () {
    document.getElementById("formact").classList.add("hide");
    document.getElementById("formexp").classList.remove("hide");
}

//END script for the reporting page============================//
>>>>>>> 275df1aa7412ab9b30d0f7f6b50476fbcb8c90e3
