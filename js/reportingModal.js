function showModalInstructions(){
	var modal = document.getElementById("modalInstructions");
	modal.style.display = "block";
}

function hideModalInstructions(){
	var modal = document.getElementById("modalInstructions");
	modal.style.display = "none";
}

function displayModal(modalText){
	var modal = document.getElementById("modalPopUp");
	document.getElementById("modalText").innerHTML = modalText;
	modal.style.display = "block";
}

function hideModal(){
	var modal = document.getElementById("modalPopUp");
	modal.style.display = "none";
}

//js for contact & submit//

var modal = document.getElementById("contactModal");

var btn = document.getElementById("contactBtn");

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