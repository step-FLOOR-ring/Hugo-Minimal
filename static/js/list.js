var isLightModeEnabled = JSON.parse(localStorage.getItem('isLightModeEnabled'));
    var headerLink = document.querySelector('h3 a');

    if (isLightModeEnabled) {
      headerLink.classList.add('light-mode');
    }