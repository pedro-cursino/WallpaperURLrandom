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

  setTimeout(showTime, 10);
}

showTime();