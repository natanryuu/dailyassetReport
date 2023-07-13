(function () {



  const lv2 = document.querySelectorAll('.navbar__item-lv2');
  lv2.forEach((item) => {
    item.addEventListener('click', e => {
      document.querySelectorAll('.navbar__item-lv2--active').forEach((act) => {
        act.classList.remove('navbar__item-lv2--active');
      })

      e.target.parentNode.classList.add('navbar__item-lv2--active');
    })
  });


  function CloseDrawer(link) {

    if ($(link).not('.navbar__drop').parents().find('.mobile-drawer--active')) {
      var drawerOpen = $('.mobile-drawer').filter('.mobile-drawer--active').attr('id');
      var drawerId = '#' + drawerOpen;
      $(drawerId).removeClass('mobile-drawer--active');
      $('body').removeClass('scroll-fixed');
      return false;
    }
  }
  // 第1層
  $('.navbar__link').not('.navbar__drop').click(function (e) {
    var opt = $(this).text();
    $('[data-navbarVal]').text(opt);

    CloseDrawer($(this))
  })

  // 第二層
  $('.navbar__item-lv2').click(function (e) {
    var opt = $(this).closest('.navbar__item--active').find('.navbar__drop').text();
    $('[data-navbarVal]').text(opt);

    CloseDrawer($(this))
  })



  var controls = document.querySelectorAll('.navbar__menu--links .navbar__item');
  // you can use forEach here too
  [].forEach.call(controls, el => {
    el.addEventListener('click', btnClick, false)
  })

  function btnClick() {
    // use Array function for lexical this
    [].forEach.call(controls, el => {
      // except for the element clicked, remove active class
      if (el !== this) el.classList.remove('navbar__item--active');
      // navbar__menu-lv2 
    });
    // toggle active on the clicked button
    this.classList.add('navbar__item--active');
  }

})();
