(function () {

  var accordionToggleBtns = document.querySelectorAll('.accordionList__toggle');

  if (accordionToggleBtns) {
    $('.accordionList__toggle').click(function () {
      
      $(this).toggleClass('is-Open');
      $(this).parent().next('.accordionList__contents').toggleClass('accordionList--active');
    })
  }

})();


