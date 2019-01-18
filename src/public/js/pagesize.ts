const pageWidth = () => document.body.scrollWidth;

const setPourHeight = () => {
  const pageHeight = -(document.body.scrollHeight) + 100 + "px";
  document.documentElement.style.setProperty(`--pourHeight`, pageHeight);
};

if (pageWidth() >= 960) {
  setPourHeight();
}
