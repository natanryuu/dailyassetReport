(function () {
  // tab
  var tabTriggers = document.querySelectorAll('.tab__item');
  var tabContents = document.querySelectorAll('.tab__content');
  var tabBars = document.querySelector('.tab__bar');

  if (tabTriggers) {
    tabTriggers.forEach(function (t) {
      var tabTrigger = t;
      tabTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        var tabID = this.getAttribute("href");

        tabContents.forEach(function (e) {
          e.classList.remove('tab__content--active');
        })

        tabTriggers.forEach(function (e) {
          e.classList.remove('tab__item--active');
        })

        this.classList.add('tab__item--active');
        document.querySelector(tabID).classList.add('tab__content--active');
      });
    })
  }
  // 總資產報告 tab & content
  var repoTriggers = document.querySelectorAll('.report__item');
  var repoContents = document.querySelectorAll('.report__content');

  if (repoTriggers) {
    repoTriggers.forEach(function (t) {
      var repoTrigger = t;
      repoTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        var repoID = this.getAttribute("href");
        var repoContent = document.querySelector(repoID);

        repoContents.forEach(function (e) {
          if (e.classList.contains('report__content--active') && e !== repoContent) {
            e.classList.remove('report__content--active');
          }
        });

        repoTriggers.forEach(function (e) {
          e.classList.remove('report__item--active');
        });

        if (repoContent.classList.contains('report__content--active')) {
          repoContent.classList.remove('report__content--active');
        } else {
          this.classList.add('report__item--active');
          repoContent.classList.add('report__content--active');
        }
      });
    });
  }

  const tabsList = document.querySelector(".scrollable-box");

  const rightArrow = document.querySelector(".scrollable-tabs-container .tab__arrows--next i");
  const leftArrow = document.querySelector(".scrollable-tabs-container .tab__arrows--prev i");;
  const rightArrowContainer = document.querySelector(".scrollable-tabs-container .tab__arrows--next");
  const leftArrowContainer = document.querySelector(".scrollable-tabs-container .tab__arrows--prev ");


  const manageIcons = () => {
    if (tabsList.scrollLeft >= 20) {
      leftArrowContainer.classList.add("active");
    } else {
      leftArrowContainer.classList.remove("active");
    }

    let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
    if (tabsList.scrollLeft >= maxScrollValue) {
      rightArrowContainer.classList.remove("active");
    } else {
      rightArrowContainer.classList.add("active");
    }
  };
  if (tabsList) {
    rightArrow.addEventListener("click", () => {
      tabsList.scrollLeft += 200;
      manageIcons();
    });

    leftArrow.addEventListener("click", () => {
      tabsList.scrollLeft -= 200;
      manageIcons();
    });

    tabsList.addEventListener("scroll", manageIcons);

    let dragging = false;
    const drag = (e) => {
      if (!dragging) return;
      tabsList.classList.add("dragging");
      tabsList.scrollLeft -= e.movementX;
    };

    tabsList.addEventListener("mousedown", () => {
      dragging = true;
    });

    tabsList.addEventListener("mousemove", drag);

    document.addEventListener("mouseup", () => {
      dragging = false;
      tabsList.classList.remove("dragging");
    });

    window.onload = function () {

      (window.innerWidth < 362) ? rightArrowContainer.classList.add('active') : rightArrowContainer.classList.remove('active')
      // (tabsList.scrollWidth > tabsList.clientWidth || tabsList.scrollWidth >= window.innerWidth) ? rightArrowContainer.classList.add('active') : rightArrowContainer.classList.remove('active')
    }
    window.onresize = function () {
      if  (window.innerWidth < 362) {
      // if (tabsList.scrollWidth > tabsList.clientWidth || tabsList.scrollWidth >= window.innerWidth) {
        rightArrowContainer.classList.add('active');
      } else {
        rightArrowContainer.classList.remove('active');
      }
      if (tabsList.scrollWidth >= window.innerWidth) {
        leftArrowContainer.classList.remove('active');
      } else {
        leftArrowContainer.classList.add('active');
      }

      let scrollLeftValue = tabsList.scrollLeft;
      if (scrollLeftValue > 0) {
        leftArrowContainer.classList.add('active');
      } else {
        leftArrowContainer.classList.remove('active');
      }
    }
  }
})();
