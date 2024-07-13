document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0-23
  var m = date.getMinutes(); // 0-59
  var s = date.getSeconds(); // 0-59
  var ms = Math.floor(date.getMilliseconds() / 100); // 0-9


  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  ms = ms < 10 ? "0" + ms : ms;

  var time = h + ":" + m + ":" + s + " ";
  document.getElementById("Relogio").innerText = time;
  document.getElementById("Relogio").textContent = time;

  document.getElementById("Milissegundos").textContent = ms;

  var MeuRelogio = document.getElementById('Relogio');

  if (h >= 8 && h < 15) {
    MeuRelogio.style.color = "#719a84";
    Milissegundos.style.color = "#719a84";
  } else if (h >= 16 && h < 18) {
    MeuRelogio.style.color = "#452a29";
    Milissegundos.style.color = "#452a29";
  } else if (h >= 4 && h < 7) {
    MeuRelogio.style.color = "#0d2b5a";
    Milissegundos.style.color = "#0d2b5a";
  } else {
    MeuRelogio.style.color = "#020923";
    Milissegundos.style.color = "#020923";
  }

  setTimeout(showTime, 10);
}

showTime();

document.addEventListener("DOMContentLoaded", function () {
  var hora = new Date().getHours();
  var body = document.querySelector("body");

  if (hora >= 8 && hora < 15) {
    body.classList.add("manha");
  } else if (hora >= 16 && hora < 18) {
    body.classList.add("tarde");
  } else if (hora >= 4 && hora < 7) {
    body.classList.add("madrugada");
  } else {
    body.classList.add("noite");
  }
});