const fontSrc = font => {
  return `url("${(window.modulesAssetPath && window.modulesAssetPath('@apex-elements/fonts')) || ''}/fonts/${font}")`;
};

const styleText = document.createTextNode(`
@font-face {
  font-family: "TT Squares Condensed";
  font-weight: regular;
  src: ${fontSrc('TTSquaresCondensedRegular.otf')};
}
@font-face {
  font-family: "TT Squares Condensed";
  font-weight: bold;
  src: ${fontSrc('TTSquaresCondensedBold.otf')};
}
@font-face {
  font-family: "TT Lakes Condensed";
  font-weight: regular;
  src: ${fontSrc('TTLakesCondensedRegular.otf')};
}`);

const fontStyleElement = document.createElement('style');
fontStyleElement.appendChild(styleText);
document.head.appendChild(fontStyleElement);
