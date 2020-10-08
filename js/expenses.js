var currentTab = 0; 
var currentSubTab = 0; 
var expensesReported = {}; // Object to hold user input
var currentIndex = 0; 
showTab(currentTab); // Show the first tab of the form


function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  
  if (n == 2){
	if ((currentIndex >= 0) && (currentIndex < expensesReported.expense_type.length)){
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
	var expenseType = expensesReported.expense_type[n];
	document.getElementById("expenseType").innerHTML = expenseType;
	
}

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
  }
  if (currentTab == 2){
	  var maxIndex = expensesReported.expense_type.length;
	  if (currentIndex < maxIndex){
		  currentIndex += n;
		  if ((currentIndex < 0) || (currentIndex >= maxIndex)){
			  // reset currentIndex
			  currentIndex = 0;
			  // Hide the current tab:
			  x[currentTab].style.display = "none";
			  // Increase or decrease the current tab by 1:
			  currentTab = currentTab + n;
			  if (currentIndex < 0){
				  curentIndex = 0;
				  currentTab += n;
			  }
		  }  
	  }
  }else{
		  // Hide the current tab:
		  x[currentTab].style.display = "none";
		  // Increase or decrease the current tab by 1:
		  currentTab = currentTab + n;
		  if ((currentTab == 2) && (n == -1)) currentIndex = maxIndex-1;
		  // if you have reached the end of the form... :
	  }
  if (currentTab >= x.length) {
    //...the form gets submitted:
    displayUserInput();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function toggleOtherInput(){
	var otherInputBox = document.getElementById("otherType");
	if (otherInputBox.style.visibility == "visible"){
		otherInputBox.style.visibility = "hidden";
	} else otherInputBox.style.visibility = "visible";
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
				}
			}
		}
	}
	var keys = Object.keys(userInput);
	for (key of keys){
		if (currentIndex == 0){
			expensesReported[key] = userInput[key];
		} else{
			expensesReported[key][currentIndex] = userInput[key];
		}
		// window.alert(expensesReported[key]);
	};
}

function validateForm(){
 /*  // This function deals with validation of the form fields
  var x, y, i;
  var valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
   
  return valid; // return the valid status
  */
  return true;
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
		
}