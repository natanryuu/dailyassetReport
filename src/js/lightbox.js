(function () {
  var lTrigger = document.querySelectorAll('.l-open');
  // Array.prototype.forEach.call(lTrigger, function (item) {
  //   item.onclick = function(e) {
  //     var target = this.getAttribute("href");
  //     LightBoxTargetShow(target);
  //     e.preventDefault();
  //   };
  // });

  document.addEventListener('click', function (e) {

    if (e.target.closest('.l-open')) {
      var target = e.target.closest('.l-open').getAttribute("href");
      LightBoxTargetShow(target);
      e.preventDefault();
    }
  });

  // LightBox 顯示 //
  function LightBoxTargetShow(target) {
    var lightbox = document.querySelector(target);
    // 開啟遮罩
    document.body.classList.add('scroll-fixed');

    // 關閉 Lightbox
    var close_lightbox = function (e) {
      lightbox.classList.remove('lightbox--active');
      document.body.classList.remove('scroll-fixed');
      return false;
    }

    var lClose = document.querySelectorAll('.lightbox__btn-close, .lightbox__close');
    Array.prototype.forEach.call(lClose, function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        close_lightbox();
        return false;
      })
    })

    // 一次只開一個 Lightbox 其他都關掉
    document.querySelectorAll('.lightbox').forEach(function (ele) {
      ele.classList.remove('lightbox--active');
    })

    // 開啟 Lightbox
    lightbox.classList.add('lightbox--active');
    return false;
  }

  // 開啟 notice-banner後3.5秒關閉
  // document.addEventListener('DOMContentLoaded', function () {
  //   var noticeBanner = document.querySelector('.lightbox__notice-banner');

  //   if (noticeBanner) {
  //   noticeBanner.addEventListener('click', function () {
  //     noticeBanner.style.display = 'none';
  //     });

  //     noticeBanner.style.display = 'block';

  //     setTimeout(function () {
  //       noticeBanner.style.display = 'none';
  //     }, 3500);
  //   }
  // });

})();