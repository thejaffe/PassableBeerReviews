// Add active class to links on article pages
(function (global) {
    var elements = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
    var listLength = elements.length;
    var current = global.location.pathname.split("/")[1];
    var i = 0;
    while (elements[i].toString().split("/")[3] !== current && i < listLength) {
        i++;
    }
    elements[i].classList.add("active");
})(window);
