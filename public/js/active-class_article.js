// Add active class to links on article pages

(function() {

  let elements = document.querySelectorAll('nav a');
      current  = window.location.pathname.split('/')[1];

  [...elements].forEach(element => {
    if(element.pathname.split('/')[1] == current) {
      element.classList.add('active');
    }
  });
})();
