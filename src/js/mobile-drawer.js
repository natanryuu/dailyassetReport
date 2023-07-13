// mobile-drawer
(function () {

  function init() {
    var isWhole = $('.mobile-drawer--whole');
    if (isWhole) {
      $('.mobile-drawer--whole .mobile-drawer__body').on('scroll', onScroll);
    }
  }
  init();


  // 判斷是否滾動到底
  function onScroll() {
    var scrollTop = $('.mobile-drawer--whole .mobile-drawer__body').scrollTop();
    var bodyHeight = $('.mobile-drawer--whole .mobile-drawer__inner').innerHeight();
    var viewHeight = $('.mobile-drawer--whole .mobile-drawer__body').innerHeight();

    var scrollRatio = (scrollTop ) / (bodyHeight - (viewHeight + 97));
    // console.log(scrollRatio)
    if (scrollRatio >= 1) {
      $('.bottom-area-sticky').addClass('scrollToBottom');
    } else {
      $('.bottom-area-sticky').removeClass('scrollToBottom');
    }
  }

  function showLoading(switches) {
    var container = $('body');
    if (switches) {
      container.append("<div class='ajax-loading-svg'><span></span></div>");
      $('.ajax-loading-svg').height($(document).height());
    } else {
      $(".ajax-loading-svg").remove();
    }
  }
  
  $('#checkRequirment').click(function(e){
    e.preventDefault();
    showLoading(true);
    setTimeout(function() { // 開發時 setTimeout 要代換成 Ajax
      /**
      * 模擬使用 Ajax 的時間延遲 Loading 圖示
      * 並切換至下一步的畫面
      */
      showLoading(false);
      //do something here

    }, 1000); // 開發時 setTimeout 要代換成 Ajax
  });


  var drawerTrigger = document.querySelectorAll('.mobile-drawer-trigger ,.desktop-drawer-trigger');
  Array.prototype.forEach.call(drawerTrigger, function (item) {
    item.onclick = function (e) {
      e.preventDefault();
      var target = this.getAttribute("href");

      if (this.classList.contains('disabled')) {
        return false;
      } else {
        DrawerTargetShow(target);
      }
    };
  });

  function DrawerTargetShow(target) {
    // console.log(target);
    var drawer = document.querySelector(target);
    document.body.classList.add('scroll-fixed');

    var DrawerClose = function (e) {

      if (drawer.classList.contains("mobile-drawer") === true) {
        drawer.classList.remove('mobile-drawer--active');
      } else {
        drawer.classList.remove('desktop-drawer--active');
      }
      document.body.classList.remove('scroll-fixed');
      return false;
    }
    // drawer.querySelector('.mobile-drawer__btn-close').addEventListener('click', function(e){
    //   e.preventDefault();
    //   DrawerClose();
    //   return false;
    // })

    // 關閉
    drawer.onclick = function (e) {
      // alert(e.target.classList + ',' + (e.target.classList.contains("mobile-drawer") || e.target.classList.contains("mobile-drawer__btn-close") || e.target.classList.contains("mobile-drawer__close")));
      if (e.target.classList.contains("mobile-drawer") || e.target.classList.contains("mobile-drawer__btn-close") || e.target.classList.contains("mobile-drawer__close") || e.target.classList.contains("desktop-drawer") || e.target.classList.contains("desktop-drawer__btn-close") || e.target.classList.contains("desktop-drawer__close")) {
        // console.log(1);
        e.preventDefault();
        e.stopPropagation();
        DrawerClose();
        return false;
      }
    }


    // 開啟 drawer
    if (drawer.classList.contains("mobile-drawer") === true) {
      drawer.classList.add('mobile-drawer--active');
    } else {
      drawer.classList.add('desktop-drawer--active');
    }
    return false;

  }


})();