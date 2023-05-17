let output = document.getElementById("output");

function insertValue(value) {
  output.value += value;
}

function clearOutput() {
  output.value = "";
}

function backspace() {
  output.value = output.value.slice
}