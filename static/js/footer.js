var isLightModeEnabled = JSON.parse(localStorage.getItem('isLightModeEnabled'));
var footer = document.querySelector('.main-footer');

if (isLightModeEnabled && footer) {
  footer.classList.add('light-footer');
  toggleButton.innerHTML = '🌑';
}

var toggleButton = document.getElementById('toggle');
        if (isLightModeEnabled && footer) {
          toggleButton.innerHTML = '🌑';
        }