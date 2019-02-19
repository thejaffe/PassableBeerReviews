const pageWidth = () => document.body.scrollWidth;

const setPourHeight = () => {
  const pageHeight = -(document.body.scrollHeight) + 100 + "px";
  document.documentElement.style.setProperty(`--pour-height`, pageHeight);
};

if (pageWidth() >= 960) {
  setPourHeight();
}
