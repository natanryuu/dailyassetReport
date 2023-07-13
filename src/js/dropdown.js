(function () {

  // 關閉所有的下拉選單
  function closeAllDropdowns() {
    const allToggles = document.querySelectorAll('.o-select__toggle');
    allToggles.forEach((toggle) => {
      toggle.classList.remove('o-select__toggle--active');
      toggle.nextElementSibling.classList.remove('o-select--active');
    });
  }

  // 開關選單
  function toggleDropdown(event) {
    event.preventDefault();
    const toggle = event.currentTarget;
    const isOpen = toggle.classList.contains('o-select__toggle--active');

    // 關閉所有下拉選單
    closeAllDropdowns();

    // 如果目前點擊的下拉選單已經是開啟狀態，就不再執行開啟動作
    if (isOpen) {
      return;
    }

    // 開啟點擊的下拉選單
    toggle.classList.add('o-select__toggle--active');
    toggle.nextElementSibling.classList.add('o-select--active');

    // 動態定位
    positionDropdown(toggle.nextElementSibling);
  }

  // 動態定位
  function positionDropdown(menu) {
    if (!menu.classList.contains('o-select--active')) {
      return;
    }

    const toggle = menu.previousElementSibling;
    const toggleRect = toggle.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const spaceBelowToggle = windowHeight - toggleRect.bottom;
    const spaceAboveToggle = toggleRect.top;

    const menuHeight = menuRect.height;
    const isMenuAboveToggle = spaceAboveToggle > spaceBelowToggle && menuHeight < spaceAboveToggle;

    const spaceThreshold = menuHeight * 0.5;

    if (isMenuAboveToggle) {
      const spaceAboveThreshold = spaceAboveToggle - spaceThreshold;
      if (spaceAboveThreshold < 0) {
        menu.style.top = `${toggleRect.height}px`;
        if (spaceAboveThreshold < -40) {
          menu.classList.toggle('o-select__menu--reverse');
        }
      } else {
        menu.style.top = `-${menuHeight}px`;
      }
    } else {
      const spaceBelowThreshold = spaceBelowToggle - spaceThreshold;
      if (spaceBelowThreshold < 0) {
        menu.style.top = `-${menuHeight}px`;
        if (spaceBelowThreshold < -40) {
          menu.classList.toggle('o-select__menu--reverse');
        }
      } else {
        menu.style.top = `${toggleRect.height}px`;
      }
    }
  }

  // 監聽所有下拉選單的點擊事件
  const allToggles = document.querySelectorAll('.o-select__toggle');
  allToggles.forEach((toggle) => {
    toggle.addEventListener('click', toggleDropdown);
  });

  // 監聽 document 的點擊事件，當點擊非下拉選單區域時，關閉所有下拉選單
  window.addEventListener('click', function (e) {
    const target = e.target;
    if (!target.closest('.form__group')) {
      closeAllDropdowns();
    }
  });


  // 監聽 window 的 resize 和 scroll 事件
  window.addEventListener('resize', () => {
    const activeMenu = document.querySelector('.o-select--active');
    if (activeMenu) {
      positionDropdown(activeMenu);
    }
  });

  window.addEventListener('scroll', () => {
    const activeMenu = document.querySelector('.o-select--active');
    if (activeMenu) {
      positionDropdown(activeMenu);
    }
  });

  // 將值塞進input
  const options = document.querySelectorAll('.o-select__input');
  options.forEach((option) => {
    option.addEventListener('click', (event) => {
      // 取得選項的值
      const value = event.target.value;
      // 將選項的值設定為 input 的值
      const selectMenu = option.closest('.o-select__menu');
      const formSelect = selectMenu.previousElementSibling.children[0];
      formSelect.value = value;
      closeAllDropdowns();
    });
  });


  // // 選中將值塞進input
  // const optionsInput = document.querySelectorAll('.o-select__input');
  // const changeShowVal = function (option) {
  //   option.addEventListener('change', function () {
  //     console.log("change")
  //     const selectMenu = option.closest('.o-select__menu');
  //     const formSelect = selectMenu.previousElementSibling.children[0];
  //     if (option.checked) {
  //       formSelect.value = option.value;
  //       formSelect.innerHTML = option.value;
  //       formSelect.classList.add('selected');
  //       option.classList.add('selected');
  //     }
  //     closeAllDropdowns();
  //   });
  // };
  // optionsInput.forEach(changeShowVal);

  // // close the dropdown on mouse out from the dropdown list
  // document.querySelectorAll('.o-select').forEach(function (dropDownList) {
  //   // close the dropdown after user leave the list
  //   dropDownList.onmouseleave = closeAllDropdowns;
  // });


  //分頁 Mobile change
  $(':radio[name="paginationPick"]').change(function () {
    var opt = $(this).filter(':checked').val();
    $('[data-value]').val(opt)

    if ($(this).parents().find('.mobile-drawer--active')) {
      var drawerOpen = $('.mobile-drawer').filter('.mobile-drawer--active').attr('id');
      var drawerId = '#' + drawerOpen;
      $(drawerId).removeClass('mobile-drawer--active');
      $('body').removeClass('scroll-fixed');
      return false;
    }
  })

  //dropdown Mobile change
  $('[data-select-action]').change(function () {
    var opt = $(this).filter(':checked').val();
    var optionVal = $(this).parents().find('.mobile-drawer--active').prev().children().find('[data-select-value]')
    $(optionVal).val(opt);
    if ($(this).closest('.mobile-drawer--active').find('.mobile-drawer--active')) {
      var drawerOpen = $(this).closest('.mobile-drawer--active').filter('.mobile-drawer--active').attr('id');
      var drawerId = '#' + drawerOpen;
      $(drawerId).removeClass('mobile-drawer--active');
      $('body').removeClass('scroll-fixed');
      return false;
    }
  })

})();