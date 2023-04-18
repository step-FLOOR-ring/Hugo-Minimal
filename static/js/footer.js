var isLightModeEnabled = JSON.parse(localStorage.getItem('isLightModeEnabled'));
var footer = document.querySelector('.main-footer');
var toggleButton = document.getElementById('toggle');

if (isLightModeEnabled && footer) {
  footer.classList.add('light-footer');
  toggleButton.innerHTML = '🌑';
}
