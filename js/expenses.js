var currentTab = 0;
var currentSubTab = 0;
showTab(currentTab);


function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // showSubtab(currentSubTab);
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

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm(){
  // This function deals with validation of the form fields
  var x, y, i;
  var valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  
  return valid; // return the valid status
}