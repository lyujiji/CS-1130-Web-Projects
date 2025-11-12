function cTof() {
  var a = parseFloat(document.getElementById("n1").value);
  if (isNaN(a)) {
    alert("Please enter a number first!");
    return;
  }
  var converted = (a * 9 / 5) + 32;
  document.getElementById("result").value = converted.toFixed(2) + " °F";
  document.getElementById("result").classList.add("active");
}

function fToc() {
  var a = parseFloat(document.getElementById("n1").value);
  if (isNaN(a)) {
    alert("Please enter a number first!");
    return;
  }
  var converted = (a - 32) * 5 / 9;
  document.getElementById("result").value = converted.toFixed(2) + " °C";
  document.getElementById("result").classList.add("active");
}

function mTof() {
  var a = parseFloat(document.getElementById("n1").value);
  if (isNaN(a)) {
    alert("Please enter a number first!");
    return;
  }
  var converted = a * 3.28084; 
  document.getElementById("result").value = converted.toFixed(2) + " ft";
  document.getElementById("result").classList.add("active");
}

function fTom() {
  var a = parseFloat(document.getElementById("n1").value);
  if (isNaN(a)) {
    alert("Please enter a number first!");
    return;
  }
  var converted = a / 3.28084;
  document.getElementById("result").value = converted.toFixed(2) + " m";
  document.getElementById("result").classList.add("active");
}

function clearvalues() {
  document.getElementById("n1").value = '';
  document.getElementById("result").value = '';
  document.getElementById("result").classList.remove("active");
}