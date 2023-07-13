(function () {
  document.querySelector('.header__hamburger').addEventListener('click', function (e) {
    document.querySelector('.header__hamburger').classList.toggle('open');
    document.querySelector('.nav').classList.toggle('nav--active');

    // 開啟遮罩
    document.body.classList.toggle('scroll-fixed');

    if (document.querySelector('.nav--active')) {
      var links = document.querySelectorAll('.nav__link');
      Array.prototype.forEach.call(links, function (link) {
        link.addEventListener('click', function (e) {
          document.querySelector('.nav').classList.remove('nav--active');
          document.body.classList.remove('scroll-fixed');
          document.querySelector('.header__hamburger').classList.remove('open');
        })
      })
    }
  });
})();

