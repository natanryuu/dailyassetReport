// @prepros-prepend polyfill.js
// @prepros-prepend ../js/mobile-drawer.js
// @prepros-prepend ../js/lightbox.js
// @prepros-prepend ../js/tab.js
// @prepros-prepend ../js/noticeToggle.js
// @prepros-prepend ../js/dropdown.js
// @prepros-prepend ../js/accordion.js
// @prepros-prepend ../js/scrollAnim.js
// @prepros-prepend ../js/page.js

var rwdBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1160,
  xxl: 1400
};



(function () {

  // copyright console
  if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
    var a = ["\n\n %c Developed by Bank SinoPac. -> https://bank.sinopac.com/ \n\n", "background: #254a91; padding:5px 0;color: #ffffff;"];
    console.log.apply(console, a)
  } else {
    console.log("Developed by Bank SinoPac. -> https://bank.sinopac.com/");
  }

})();