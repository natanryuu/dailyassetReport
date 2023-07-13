(function () {
  // 銀行資產_銀行{資產}總額
  $('.hideInfo-trigger').on('click', function() {
    var $children = $(this).children();

    if ($children.hasClass('icon-Basic_eye-open')) {
      $children.removeClass('icon-Basic_eye-open');
      $children.addClass('icon-Basic_eye-close');
      $('.l-container__body .amount__price, .l-container__body .amount__hide-info').toggle();
    } else {
      $children.addClass('icon-Basic_eye-open');
      $children.removeClass('icon-Basic_eye-close');
      $('.l-container__body .amount__price, .l-container__body .amount__hide-info').toggle();
    }
  });

  // 銀行資產_銀行{資產}總額

  $('.hideInfo-trigger-1').on('click', function() {
    var $children = $(this).children();

    if ($children.hasClass('icon-Basic_eye-open')) {
      $children.removeClass('icon-Basic_eye-open');
      $children.addClass('icon-Basic_eye-close');
      $('.l-container__body .amount__price-1, .l-container__body .amount__hide-info-1').toggle();
    } else {
      $children.addClass('icon-Basic_eye-open');
      $children.removeClass('icon-Basic_eye-close');
      $('.l-container__body .amount__price-1, .l-container__body .amount__hide-info-1').toggle();
    }
  });

    // 銀行資產_銀行{負債}總額

  $('.hideInfo-trigger-2').on('click', function() {
    var $children = $(this).children();

    if ($children.hasClass('icon-Basic_eye-open')) {
      $children.removeClass('icon-Basic_eye-open');
      $children.addClass('icon-Basic_eye-close');
      $('.l-container__body .amount__price-2, .l-container__body .amount__hide-info-2').toggle();
    } else {
      $children.addClass('icon-Basic_eye-open');
      $children.removeClass('icon-Basic_eye-close');
      $('.l-container__body .amount__price-2, .l-container__body .amount__hide-info-2').toggle();
    }
  });

    // 總資產報告 tooltips
    $(".tooltip-trigger").on("click", function(e) {
      $(".tooltip__content").toggleClass("show");
    });

    $(document).on("click", function(e) {
      var $clicked = $(e.target);
      if (
        !$clicked.is(".tooltip-trigger") &&
        $(".tooltip-trigger").has(e.target).length === 0
      ) {
        $(".tooltip__content").removeClass("show");
      }
    });

    //申請銀證整合資產報告_terms
    let termsBox = $('.terms__content');

    termsBox.on('scroll', function() {
      if (termsBox.scrollTop() + termsBox.innerHeight() >= termsBox[0].scrollHeight) {
        // console.log("down");
        $('.btn-agree').removeAttr('disabled');
        $('.terms__scrolldown').hide();
      } else {
        $('.btn-agree').prop('disabled', true);
        $('.terms__scrolldown').show();
      }
    });

    $('.terms__scrolldown').on("click", function() {
      $('.terms__content').animate({scrollTop: $('.terms__content')[0].scrollHeight }, 'slow');
      return false;
    });

    
  //- 清除 input
  $('.form__cancel').click(function () {
    $('[data-input-keyword]').val('');
  });
  //- focus 顯示取消按鈕
  $('[data-input-keyword]').focus(function () {
    $('.form__cancel').addClass('show')
  });
  //- blur 消失取消按鈕
  $('[data-input-keyword]').blur(function () {
    $('.form__cancel').removeClass('show')
  });
  //- 新增tags
  $('.form__search').click(function () {
    if ($('[data-input-keyword]').val() !== '') {
      let SearchVal = $('[data-input-keyword]').val();
      let tagsVal = "<a class='tags__item' href='#'>" + SearchVal + "</a>";
      $('.tags--selected').append(tagsVal);
    }
  })
  //- .tags
  $('.tags--selected .tags__item').click(function (e) {
    e.preventDefault();
    $(this).remove()
  })
  //- 清除全部.tags
  $('.btn--clear').click(function (e) {
    e.preventDefault();
    $('.tags--selected .tags__item').remove()
    $(this).remove()
  })

  //- 選項全選
  $('.form__choose input').change(function () {
    let InputName = $(this).attr('name');
    if ($(this).hasClass('form__choose--any') && $('.form__choose--any').prop('checked')) {
      $("input[name='" + InputName + "']").not(this).each(function () {
        $(this).prop('checked', false);
      })
    } else {
      $("#" + InputName + "-pick0").prop('checked', false);
    }
  })

  //排序TABLE icon變換
  $('.sortable').click(function (e) {
    var $sorthead = $(this);

    if ($sorthead.hasClass('asc')) {
      $sorthead.removeClass('asc').addClass('desc');
    } else {
      if ($sorthead.hasClass('desc')) {
        $sorthead.removeClass('desc').addClass('asc');
      } else {
        $('.sortable').removeClass('desc asc');
        $sorthead.addClass('asc');
      }
    }
  });

  //- table 橫向移動
  const scrolltable = document.querySelectorAll('.scrolltable__inner');
  scrolltable.forEach(function (item, i) {
    item.addEventListener("wheel", function (e) {
      e.preventDefault();
      item.scrollLeft += e.deltaY;
    })
  });


  // alert Msg
  let alertTimeout;

  function alertMsgShow(text) {
    const alert_msg = document.querySelector(".alert");
    const alert_text = document.querySelector(".alert__text");

    // 如果有 alertTimeout 暫停，避免重複點擊
    if (alertTimeout) {
      clearTimeout(alertTimeout);
    }

    // 顯示 alert
    alert_text.innerText = "";
    alert_msg.classList.add("alert--active");
    alert_text.innerText = text;

    // 設定定時器，一秒鐘後隱藏 alert
    alertTimeout = setTimeout(function () {
      alert_msg.classList.remove("alert--active");
      alertTimeout = null; // 重置 alertTimeout
    }, 1000);
  }

})();