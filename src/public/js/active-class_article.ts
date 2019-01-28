// Add active class to links on article pages

((global) => {

  const elements: HTMLCollection =
              document.getElementsByTagName("nav")[0].getElementsByTagName("a");
  const listLength: number = elements.length - 1;
  const current: string = global.location.pathname.split("/")[1];

  for (let i = 0; i < listLength; i++) {
    if (elements[i].toString().split("/")[3] === current) {
      elements[i].classList.add("active");
      break;
    }
  }

})(window);
