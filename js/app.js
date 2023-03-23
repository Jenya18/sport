// burger
const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const burgerSpan = document.querySelectorAll('.burger span');
const nav = document.querySelector('.nav');
const navMask = document.querySelector('.nav__mask');

burger.addEventListener('click', function () {
    nav.classList.toggle('show');
    body.classList.toggle('noScroll');
    navMask.classList.toggle('show');
    for (let i = 0; i < burgerSpan.length; i++) {
        burgerSpan[i].classList.toggle('close');
    }
});

navMask.addEventListener('click', function () {
    nav.classList.toggle('show');
    body.classList.toggle('noScroll');
    for (let i = 0; i < burgerSpan.length; i++) {
        burgerSpan[i].classList.toggle('close');
    }
    navMask.classList.toggle('show');

});
// /burger


// active menu scroll

// /active menu scroll

// scroll fixed header
$(function() {
    let header = $('#header');
    let intro = $('#intro');
  // в этих переменных хранится высота и позиция скрола
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
  
    // следить за скролом. load чтобы при презагрузке шапка показалась и без скрола чтобы изменялся размер в зависимсти от устройства выходит onload onresize
    checkScroll(scrollPos, introH);
  
    $(window).on('scroll resize', function() {
  // вместо this = window
      scrollPos = $(this).scrollTop();
  
      let introH = intro.innerHeight();
  
      checkScroll(scrollPos, introH);
      // при скролле в консоле будет обновлятся число
      //  console.log(scrollPos);
    });
    function checkScroll(scrollPos, introH) {
      if(scrollPos > introH) {
        header.addClass('fixed');
      } else {
        header.removeClass('fixed');
      }
    }
    // console.log(introH);
    // console.log(scrollPos);
  
    // smooth scroll
    $("[data-scroll]").on('click', function(event) {
      event.preventDefault();
      
      $('.nav__link').removeClass('active');
      $('.nav__link').addClass('active');
      let elementID = $(this).data('scroll');
      let elementOffset = $(elementID).offset().top;
      console.log(elementOffset);
      $("html, body").animate({
        scrollTop: elementOffset - 100
      }, 1000);
    });
  
  });
// / scroll fixed header

// button up




	//show up-button

// button up



$('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0}, 800); // 800 - Скорость анимации
});

$(window).scroll(function() { // Отслеживаем начало прокрутки
    let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

    if(scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});

