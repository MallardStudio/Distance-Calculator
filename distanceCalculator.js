var calculate = function() {
  var inputAX = document.getElementById("inputAX").value;
  var inputAY = document.getElementById("inputAY").value;
  var inputBX = document.getElementById("inputBX").value;
  var inputBY = document.getElementById("inputBY").value;
  var solution = document.getElementById("solution");
  if (inputAX.length != 0 && inputAY.length != 0 && inputBX.length != 0 && inputBY.length != 0) {
  var answer = (Math.sqrt(((inputAX - inputBX) * (inputAX - inputBX)) + ((inputAY - inputBY) * (inputAY - inputBY)))).toFixed(2);
  solution.innerHTML = "distance between A and B is " + answer;
  }
}
