// Add active class to links on review pages

((global) => {

  const elements: HTMLCollection = document.getElementsByClassName("beer-circle");
  const listLength: number = elements.length;
  const current: string = global.location.pathname.split("/")[1];

  let i: number = 0;
  while (elements[i].toString().split("/")[3] !== current && i < listLength) {
    i++;
  }

  elements[i].classList.add("active");

})(window);
