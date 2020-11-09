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