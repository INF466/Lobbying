var currentTab = 0; 
var currentIndex = 0; 
var activitiesReported = {};
showTab(currentTab); // Show the first tab of the form

function showTab(n) {
  var x = document.getElementsByClassName("act");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }  
  if (n == 5) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}

function showLoopedExpenses(n){
	var expenseType = expensesReported.expenseType[n];
	document.getElementById("expenseType").innerHTML = expenseType;
	
}

function nextPrev(n) {
 
  var x = document.getElementsByClassName("act");
  
  if (n == 1){
	   if (!validateForm()) {
		   return false;
	   } else {
		   saveResults(currentTab); 
	   }
	}
		  x[currentTab].style.display = "none";
		  currentTab = currentTab + n;	 
  if (currentTab >= 6){
    displayUserInput();
    return false;
  }
	if ((currentTab == 6)){
		recallResults();
	}
	showTab(currentTab);
	}

function displayUserInput(){
	var target = document.getElementById("reportingactResults");
	var keys = Object.keys(activitiesReported);
	document.getElementById("formact").style.display = "none";
	target.innerHTML += ("<dl>");
	for (key of keys){
		target.innerHTML += ("<dt>" + key + "</dt><dd>" + activitiesReported[key] + "</dd>");
	}
	target.innerHTML += ("</dl>");
	
	target.style.display = "block";
		
}

function toggleOtherInput(){
	var otherInputBox = document.getElementById("otherType");
	if (otherInputBox.style.visibility == "visible"){
		otherInputBox.style.visibility = "hidden";
	} else otherInputBox.style.visibility = "visible";
}

function recallResults(){
	var currentTabObj = document.getElementsByClassName("act")[currentTab];
	var inputs = currentTabObj.getElementsByTagName("input");
	for (x of inputs){
		x.value = activitiesReported[x.name];
		}
	}

function saveResults(n){
	var currentTabObj = document.getElementsByClassName("act")[n];
	var inputs = currentTabObj.getElementsByTagName("input"); 
	var userInput = {};
	var index = 0;
	for (x of inputs){
		if (x.type == "radio"){
			if (x.checked){
				userInput[x.name] = {};
				userInput[x.name] = x.value;
				if (x.id == "other"){
					var otherText = document.getElementById("otherType").value;
					if (otherText != "") userInput[x.name] += (" (" + otherText + ")");
				}
			} 
		} else {
			if ( x.value != ""){
				if (x.name != "otherType"){
					userInput[x.name] = {};
					userInput[x.name] = x.value;
					x.value = "";
				}
			}
		}
	}
	var keys = Object.keys(userInput);
	for (key of keys){
		activitiesReported[key] = userInput[key];
	};
}

function validateForm(){
	var current = document.getElementsByClassName("act")[currentTab];
	var valid = false;
	var inputs = current.getElementsByTagName("input");
	if (currentTab < 3){
			for (x of inputs) {
				if (x.checked) {
					valid = true;
				}
			}
			if (!valid) displayModal("<p>Please select an option.</p>");
	} else if (currentTab == 3 || currentTab == 4){
		for (x of inputs){
			if (x.value != ""){
				valid = true;
			} else {
				valid = false;
			}
			if (!valid) displayModal("<p>Please fill out the details related to the lobby.</p>");
		}
	} else if (currentTab == 5){
		for (x of inputs){
			if (x.id == "other"){
				if ((x.checked)){
					var otherSelected = true;
					if (inputs[inputs.length - 1].value != ""){
						valid = true;
					} else valid = false;
				}
			} else if (x.checked){
				valid = true;
			}
		}
		if (!valid){
			if (otherSelected){
				displayModal("<p>Please fill out the details related to the lobby.</p>");
			} else{
				displayModal("<p>Please select an option.</p>");
			}
		}
	}
	return valid; 
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


function displayCompensation(){
	var updateTab = document.getElementById("compTab");
	if (updateTab.style.visibility == "visible"){
		updateTab.style.visibility = "hidden";
	} else updateTab.style.visibility = "visible";
		
}

