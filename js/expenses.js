<<<<<<< HEAD
var currentTab = 0; 
var currentSubTab = 0; 
var expensesReported = {}; // Object to hold user input
var currentIndex = 0; 
showTab(currentTab); // Show the first tab of the form
=======
var currentTab = 0;
var currentSubTab = 0;
var expensesReported = {};
var currentIndex = 0;
showTab(currentTab);
>>>>>>> d437f50b87572b7b03520d62dd8f9022c970e361


function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
<<<<<<< HEAD
=======
  // showSubtab(currentSubTab);
>>>>>>> d437f50b87572b7b03520d62dd8f9022c970e361
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  
  if (n == 2){
<<<<<<< HEAD
	if ((currentIndex >= 0) && (currentIndex < expensesReported.expenseType.length)){
=======
	if ((currentIndex >= 0) && (currentIndex < expensesReported.expense_type.length)){
>>>>>>> d437f50b87572b7b03520d62dd8f9022c970e361
		showLoopedExpenses(currentIndex);
	}
  }
  
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}

function showLoopedExpenses(n){
<<<<<<< HEAD
	var expenseType = expensesReported.expenseType[n];
	document.getElementById("expenseType").innerHTML = expenseType;
	
}
=======
	var expenseType = expensesReported.expense_type[n];
	var expense = expenseType.replace("_", " ");
	document.getElementById("expenseType").innerHTML = expense;
	
}
  /* Function to check whether active tab contains subtabs; if so, should change 
     next/previous buttons to switch between tabs
	 
	 Method needs work, which is why it's commented out
  */

/* function showSubtab(n) {
  var x = document.getElementsByClassName("tab");
  if (x[currentTab].classList.contains("looped")
  {
	  var subtabs = x[currentTab].getElementsByClassName("subtab");
	  subtabs[n].style.display = "block";
	  
	  if (n == 0) {
		document.getElementById("prevBtn").style.display = "none";
	  } else {
		document.getElementById("prevBtn").style.display = "inline";
	  }
	  if (n == (x.length - 1)) {
		document.getElementById("nextBtn").innerHTML = "Submit";
	  } else {
		document.getElementById("nextBtn").innerHTML = "Next";
	  }
  }
} */
>>>>>>> d437f50b87572b7b03520d62dd8f9022c970e361

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1){
	   if (!validateForm()) {
		   return false;
	   } else {
		   saveResults(currentTab);
	   }
<<<<<<< HEAD
  }else{
		if ((currentTab + n) == 2){
			var maxIndex = (expensesReported.expenseType.length - 1);
			currentIndex = maxIndex;
			
			window.alert(currentIndex + ", " + maxIndex);
		}
	}
  if (currentTab == 2){
	  var maxIndex = expensesReported.expenseType.length;
	  if (currentIndex < maxIndex){
		  currentIndex += n;
			
			// window.alert(currentIndex + ", " + maxIndex)
		  if ((currentIndex < 0) || (currentIndex >= maxIndex)){
				// window.alert(currentIndex + ", " + maxIndex)
			  // reset currentIndex
			  currentIndex = 0;
			  // Hide the current tab:
			  x[currentTab].style.display = "none";
			  // Increase or decrease the current tab by 1:
			  currentTab += n;
			  if (currentIndex < 0){
				  currentIndex = 0;
				  currentTab += n;
			  }
		  }  
	  }
  }else{
		  // Hide the current tab:
		  x[currentTab].style.display = "none";
		  // Increase or decrease the current tab by 1:
		  currentTab = currentTab + n;
		  /* if ((currentTab == 2) && (n == -1)) currentIndex = maxIndex-1; */
		  // if you have reached the end of the form... :
	  }
  if (currentTab >= x.length){
    //...the form input is processed:
    displayUserInput();
=======
  }
  if ((currentTab == 2) && (currentIndex < expensesReported.expense_type.length)){
  } else{
	  // Hide the current tab:
	  x[currentTab].style.display = "none";
	  // Increase or decrease the current tab by 1:
	  currentTab = currentTab + n;
	  // if you have reached the end of the form... :
  }
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
>>>>>>> d437f50b87572b7b03520d62dd8f9022c970e361
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
<<<<<<< HEAD
	if (/* (n == -1) && */ (currentTab == 2)){
		recallResults();
	}
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
		if (expensesReported[x.name] != undefined) if (expensesReported[x.name][currentIndex] != undefined){
				x.value = expensesReported[x.name][currentIndex];
			}
	}
=======
>>>>>>> d437f50b87572b7b03520d62dd8f9022c970e361
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
			}
		} else if (x.type == "checkbox"){
			if (x.checked){
				if (index == 0) userInput[x.name] = [];
				userInput[x.name][index] = x.value;
<<<<<<< HEAD
				if (x.id == "type19"){
					var otherText = document.getElementById("otherType").value;
					if (otherText != "") userInput[x.name][index] += (" (" + otherText + ")");
				}
				index++;
			}
		} else {
			if ( x.value != ""){
				if (x.name != "otherType"){
					userInput[x.name] = {};
					// window.alert(currentIndex);
					// window.alert(x.name);
					userInput[x.name] = x.value;
					// window.alert(userInput[x.name]);
					x.value = "";
				}
			}
=======
				index++;
			}
		} else {
			userInput[x.name] = x.value;
>>>>>>> d437f50b87572b7b03520d62dd8f9022c970e361
		}
	}
	var keys = Object.keys(userInput);
	for (key of keys){
<<<<<<< HEAD
		if (currentTab != 2){
			expensesReported[key] = userInput[key];
		} else{
			if (expensesReported[key] == undefined){
				expensesReported[key] = [];
			}
			expensesReported[key][currentIndex] = userInput[key];
		}
		// window.alert(expensesReported[key]);
=======
		expensesReported[key] = userInput[key];
>>>>>>> d437f50b87572b7b03520d62dd8f9022c970e361
	};
}

function validateForm(){
  // This function deals with validation of the form fields
<<<<<<< HEAD
	var current = document.getElementsByClassName("tab")[currentTab];
	var valid = false;
	var inputs = current.getElementsByTagName("input");
	if (currentTab < 2){
		if (currentTab == 0){
			for (x of inputs) {
				if (x.checked) {
					valid = true;
				}
				window.alert(valid);
			}
		} else{
			for (x of inputs){
				if (x.type =="checkbox"){
					if (x.id == "type19"){
						if ((x.checked)){
							if (inputs[inputs.length - 1].value != ""){
								valid = true;
							} else valid = false;
						}
					} else if (x.checked){
					valid = true;
					}
				}
			}
		}
	} else if (currentTab == 2){
		for (x of inputs){
			if (x.value != ""){
				valid = true;
			} else valid = false;
		}
	} else{
		var compReceived = false;
		for (x of inputs){
			if (x.type == "radio"){
				if ((x.checked) && (x.value == "false")){
					valid = true;
				} else compReceived = true
			}
		}
	}
	return valid; // return the valid status
}

function displayCompensation(){
	var updateTab = document.getElementById("compTab");
	if (updateTab.style.visibility == "visible"){
		updateTab.style.visibility = "hidden";
	} else updateTab.style.visibility = "visible";
		
}

function displayUserInput(){
	var target = document.getElementById("reportingResults");
	var keys = Object.keys(expensesReported);
	document.getElementById("expenseReporting").style.display = "none";
	target.innerHTML += ("<dl>");
	for (key of keys){
		target.innerHTML += ("<dt>" + key + "</dt><dd>" + expensesReported[key] + "</dd>");
	}
	target.innerHTML += ("</dl>");
	
	target.style.display = "block";
		
=======
  var x, y, i;
  var valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  
  return valid; // return the valid status
>>>>>>> d437f50b87572b7b03520d62dd8f9022c970e361
}