// Add active class to links on review pages

((global) => {

  const elements: HTMLCollection = document.getElementsByClassName("beer-circle");
  const listLength: number = elements.length - 1;
  const current: string = global.location.pathname.split("/")[2];

  let i: number = 0;
  while (elements[i].toString().split("/")[4] !== current && i < listLength) {
    i++;
  }

  elements[i].classList.add("active");

})(window);
