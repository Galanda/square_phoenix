var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("sq-cu-tab");
  x[n].style.display = "block";
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
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("sq-cu-tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("sq-cu-tab");
  y = x[currentTab].getElementsByTagName("sq-cu-input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " sq-cu-invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("sq-cu-step")[currentTab].className += " sq-cu-finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("sq-cu-step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" sq-cu-active", "");
  }
  x[n].className += " sq-cu-active";
}
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("sq-cu-invalid");
    letter.classList.add("sq-cu-valid");
  } else {
    letter.classList.remove("sq-cu-valid");
    letter.classList.add("sq-cu-invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("sq-cu-invalid");
    capital.classList.add("sq-cu-valid");
  } else {
    capital.classList.remove("sq-cu-valid");
    capital.classList.add("sq-cu-invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("sq-cu-invalid");
    number.classList.add("sq-cu-valid");
  } else {
    number.classList.remove("sq-cu-valid");
    number.classList.add("sq-cu-invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("sq-cu-invalid");
    length.classList.add("sq-cu-valid");
  } else {
    length.classList.remove("sq-cu-valid");
    length.classList.add("sq-cu-invalid");
  }
}