// Add active class to links on review pages

((global) => {

  const elements: HTMLCollection = document.getElementsByClassName("beer-circle");
  const listLength: number = elements.length - 1;
  const current: string = global.location.pathname.split("/")[2];

  for (let i = 0; i < listLength; i++) {
    if (elements[i].toString().split("/")[4] === current) {
      elements[i].classList.add("active");
      break;
    }
  }

})(window);
