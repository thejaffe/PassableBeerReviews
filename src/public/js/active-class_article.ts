// Add active class to links on article pages

((global) => {

  const elements: HTMLCollection =
              document.getElementsByTagName("nav")[0].getElementsByTagName("a");
  const listLength: number = elements.length - 1;
  const current: string = global.location.pathname.split("/")[1];

  let i: number = 0;
  while (elements[i].toString().split("/")[3] !== current && i < listLength) {
    i++;
  }

  elements[i].classList.add("active");

})(window);
