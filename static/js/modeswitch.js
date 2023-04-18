function modeSwitch() {
    var element = document.body;
    element.classList.toggle("light-mode");
  
    var x = document.getElementById("toggle");
    if (x) {
      if (x.innerHTML === "🌕") {
        x.innerHTML = "🌑";
      } else {
        x.innerHTML = "🌕";
      }
    }
  
    var footer = document.querySelector('.main-footer');
    if (footer) {
      footer.classList.toggle('light-footer');
      if (element.classList.contains("light-mode")) {
        footer.classList.add("light-footer");
      } else {
        footer.classList.remove("light-footer");
      }
    }
  
    var footerLinks = document.querySelectorAll('.main-footer a');
    if (footerLinks.length > 0) {
      footerLinks.forEach(link => link.classList.toggle('light-footer'));
    }
  
    if (element.classList.contains("light-mode")) {
      footerLinks.forEach(link => link.classList.add("light-footer"));
    } else {
      footerLinks.forEach(link => link.classList.remove("light-footer"));
    }
    
  
    var navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks.length > 0) {
      navLinks.forEach(link => link.classList.toggle('light-mode'));
    }
  
    var headerLink = document.querySelector('h3 a');
    if (headerLink) {
      headerLink.classList.toggle('light-mode');
    }
  
    // Store user preference in local storage
    var isLightModeEnabled = element.classList.contains('light-mode');
    localStorage.setItem('isLightModeEnabled', JSON.stringify(isLightModeEnabled));
  }
  
  // Retrieve user preference from local storage and set initial state of page
  var isLightModeEnabled = JSON.parse(localStorage.getItem('isLightModeEnabled'));
  if (isLightModeEnabled) {
    modeSwitch();
  }