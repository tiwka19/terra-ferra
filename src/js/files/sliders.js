import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

import '../../scss/base/swiper.scss';
// import '../../scss/libs/swiper.scss';
import 'swiper/css';

function initSliders() {
  if (document.querySelector('.brand-swiper')) {
    const swiper = new Swiper('.brand-swiper', {
      modules: [Navigation, Autoplay],
      slidesPerView: 'auto',
      observer: true,
      centeredSlides: true,
      Autoplay: {
        delay: 1000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          centeredSlides: false,
          loop: true,
        },
        768: {
          slidesPerView: 'auto',
          initialSlide: 1,
        },
      },
    });
    swiper.update();
  }

  if (document.querySelector('.team__slider')) {
    new Swiper('.team__slider', {
      modules: [Navigation, Autoplay],
      slidesPerView: 4,
      spaceBetween: 30,
      Autoplay: {
        delay: 1000,
      },
      navigation: {
        nextEl: '.team__button-next',
        prevEl: '.team__button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },

        1200: {
          slidesPerView: 4,
        },
      },
    });
  }

  if (document.querySelector('.advantages__content')) {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      allowTouchMove: false,
    });
    // Получаем ссылку на чекбокс
    const slideCheckbox = document.getElementById('slideCheckbox');

    // Добавляем обработчик события изменения состояния чекбокса
    slideCheckbox.addEventListener('change', () => {
      // Если чекбокс активен, переключаемся на второй слайд
      if (slideCheckbox.checked) {
        swiper.slideTo(1);
      } else {
        // Если чекбокс неактивен, переключаемся на первый слайд
        swiper.slideTo(0);
      }
    });
  }
}

window.addEventListener('load', function (e) {
  initSliders();
});
