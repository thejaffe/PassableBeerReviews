  // Add home-circle class to beerLinks on homepage

  (function() {
    var elements = document.getElementsByClassName('beer-circle');
    [...elements].forEach(element => element.classList.add('home-circle'));
  })();
