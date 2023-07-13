(function () {
    var toggleBtns = document.querySelectorAll('.toggle__trigger');


    if (toggleBtns) {
      toggleBtns.forEach(function (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
          toggleBtn.closest('.toggle').classList.toggle('toggle--active');
        });
      })
    }


  })();


