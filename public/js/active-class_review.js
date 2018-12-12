(function() {
  let elements = document.getElementsByClassName('beer-circle'),
      current = window.location.pathname.split('/')[1];

  [...elements].forEach(element => {
    if(element.pathname.split('/')[1] == current) {
      element.classList.add('active');
    };
  });
})();
