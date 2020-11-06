var currentTab = 0; 
var currentIndex = 0; 
var activitiesReported = [];
activitiesReported[currentIndex] = {}
showTab(currentTab); // Show the first tab of the form

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }  
  if (n == 7) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}

function nextPrev(n) {
 
  var x = document.getElementsByClassName("tab");
  
  if (n == 1){
	   if (!validateForm()) {
		   return false;
	   } else {
		   saveResults(currentTab); 
	   }
	}
		  x[currentTab].style.display = "none";
		  currentTab = currentTab + n;	 
	if (currentTab > 6){
	displayUserInput();
	return false;
	}
	showTab(currentTab);
}

function displayUserInput(){
	var target = document.getElementById("reportingResults");
	var keys = Object.keys(activitiesReported[currentIndex]);
	document.getElementById("reportingForm").style.display = "none";
	target.innerHTML += ("<dl>");
	for (key of keys){
		target.innerHTML += ("<dt>" + key + "</dt><dd>" + activitiesReported[currentIndex][key] + "</dd>");
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
	var currentTabObj = document.getElementsByClassName("tab")[currentTab];
	var inputs = currentTabObj.getElementsByTagName("input");
	for (x of inputs){
		x.value = activitiesReported[currentIndex][x.name];
		}
	}

function saveResults(n){
	var currentTabObj = document.getElementsByClassName("tab")[n];
	var inputs = currentTabObj.getElementsByTagName("input"); 
	var userInput = {};
	var index = 0;
	for (x of inputs){
		if (x.type == "radio"){
			if (x.checked){
				userInput[x.name] = {};
				userInput[x.name] = x.value;
				if (x.id == "otherType"){
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
		activitiesReported[currentIndex][key] = userInput[key];
	};
}

function validateForm(){
	var current = document.getElementsByClassName("tab")[currentTab];
	var valid = false;
	var inputs = current.getElementsByTagName("input");
	if (currentTab < 3){
			for (x of inputs) {
				if (x.checked) {
					valid = true;
				}
			}
	} else if (currentTab == 3 || currentTab == 4){
		for (x of inputs){
			if (x.value != ""){
				valid = true;
			} else {
				valid = false;
				break;
			}
		}
	} else if (currentTab == 5){
		for (x of inputs){
			if (x.id == "other"){
				if ((x.checked)){
					if (inputs[inputs.length - 1].value != ""){
						valid = true;
					} else valid = false;
				}
			} else if (x.checked){
				valid = true;
			}
		}
	} else if (currentTab == 6){
		for (x of inputs){
			if (x.value != ""){
				valid = true;
			} else {
				valid = false;
				break;
			}
		}
	}
	return valid; 
}