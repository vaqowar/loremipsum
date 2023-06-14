window.addEventListener('DOMContentLoaded', function() {

  var headerInner = document.querySelector('.header__inner');

  document.onscroll = function() {
    var getDocHeight = (window.pageYOffset || document.documentElement.scrollTop);

    if (getDocHeight > headerInner.clientHeight * 2) {
      headerInner.classList.add('header__inner_scroll')
    } else { headerInner.classList.remove('header__inner_scroll') }
  }

  document.querySelectorAll('.header__link').forEach(function (e) {
    e.addEventListener("click", function () {
      document.querySelector('.header__toggle').checked = false;
      document.querySelector('.header__menu').classList.remove('header__menu_active'); 
    })
  })

  document.getElementById('order').onclick = function (e) {
    e.preventDefault();

    this.classList.add('header__link_selected');
    document.querySelector('.order').scrollIntoView({ block: 'start', behavior: 'smooth'});
  }

  function selectOnBlur (e) {
    e.classList.remove('select_active');
    e.querySelector('.input').readOnly = false;

    e.querySelector('.select__arrow').classList.remove('select__arrow_rotate');
    e.querySelector('.select__list').style.maxHeight = '0px';
  }

  function selectOnFocus (e) {
    if (e.classList.contains('select_active')) {
      selectOnBlur(e);
    } else {
      e.classList.add('select_active');
      e.querySelector('.input').readOnly = true;
  
      e.querySelector('.select__arrow').classList.add('select__arrow_rotate');
      e.querySelector('.select__list').style.maxHeight = '200px';
    }
  }

  document.querySelectorAll('.select > .input').forEach(function(e) {
    e.addEventListener('click', function () { selectOnFocus(e.parentElement) })
    e.addEventListener('blur', function () { selectOnBlur(e.parentElement) })
  });

  var selectListItem = document.querySelectorAll('.select__list-item');

  selectListItem.forEach(function (e) {
    e.addEventListener('click', function () {
      selectListItem.forEach(function (otherE) { otherE.classList.remove('select__list-item_selected'); })

      this.classList.add('select__list-item_selected');
      this.parentElement.parentElement.querySelector('.input').value = this.innerHTML; 
    })
  })

  var orderRange = document.querySelector('.form__range');
  var orderRangeValue = document.querySelector('.form__range-percent-value');

  orderRange.oninput = function () { orderRangeValue.innerHTML = this.value; }

});