function loadDoc() {
  window.location.href = './retroExp.html'
}
function loadDoc1() {
  window.location.href = './retroTuto.html'
}

function loadDoc3() {
  window.location.href = './retroCompe.html'
}

function loadText() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.responseText)
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "datos.txt");
    xhttp.send();
}
