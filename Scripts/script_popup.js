document.getElementById('openPopupBtn').addEventListener('click', function () {
  document.getElementById('popup').classList.add('show');
});

function closePopup() {
  document.getElementById('popup').classList.remove('show');
}