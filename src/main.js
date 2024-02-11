'use strict';

const burger = document.querySelector('[data-burger]');
const burgerLink = document.querySelectorAll('[data-burger-link]');
const burgerNavLink = document.querySelectorAll('.header-burger-link');
const burgerSocial = document.querySelectorAll('[data-social-link]');
const burgerOpen = document.querySelector('[data-burger-open]');
const burgerClose = document.querySelector('[data-burger-close]');

burgerOpen.addEventListener('click', () => {
  burgerOpen.classList.add('btn-hidden');
  burgerClose.classList.remove('btn-hidden');
  burger.classList.add('header-burger-active');
  setTimeout(() => {
    burgerLink.forEach((e, index) => {
      setTimeout(() => {
        e.classList.add('header-burger-item-active');
      }, index * 200);
    });
  }, 300);
  setTimeout(() => {
    burgerSocial.forEach((e, index) => {
      setTimeout(() => {
        e.classList.add('header-burger-social-active');
      }, index * 200);
    });
  }, 1000);
});

burgerClose.addEventListener('click', () => {
  burgerClose.classList.add('btn-hidden');
  burgerOpen.classList.remove('btn-hidden');
  burger.classList.remove('header-burger-active');
  burgerLink.forEach(e => {
    e.classList.remove('header-burger-item-active');
  });
  burgerSocial.forEach(e => {
    e.classList.remove('header-burger-social-active');
  });
});

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

burgerNavLink.forEach(link => {
  link.addEventListener('click', () => {
    // Додаємо клас "btn-hidden" для кнопки відкриття меню
    burgerOpen.classList.remove('btn-hidden');
    // Видаляємо клас "btn-hidden" для кнопки закриття меню
    burgerClose.classList.add('btn-hidden');
    // Видаляємо клас "header-burger-active" для меню бургера
    burger.classList.remove('header-burger-active');
    // Затримка видалення класів для елементів меню бургера
    burgerLink.forEach((e, index) => {
      setTimeout(() => {
        e.classList.remove('header-burger-item-active');
      }, index * 200);
    });
    // Затримка видалення класів для елементів соціальних мереж
    burgerSocial.forEach((e, index) => {
      setTimeout(() => {
        e.classList.remove('header-burger-social-active');
      }, index * 200);
    });
  });
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Показати або приховати кнопку прокрутки до верху сторінки при прокрутці
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Обробник події для кліку на кнопку прокрутки до верху сторінки
scrollToTopBtn.addEventListener('click', () => {
  // Прокручуємо сторінку до верху з плавною анімацією
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const rentModal = document.querySelector('.rent-backdrop'),
  rentModalClose = document.querySelector('.rent-modal-btn'),
  rentModalOpen = document.querySelector('.rent-btn');

rentModalOpen.addEventListener('click', () => {
  rentModal.classList.add('rent-is-active');
});

rentModalClose.addEventListener('click', () => {
  rentModal.classList.remove('rent-is-active');
});

const swiper = new Swiper('.swiper', {
  // Опціональні параметри
  direction: 'horizontal',
  loop: true,

  // Параметри пагінації
  pagination: {
    el: '.swiper-pagination',
  },

  // Навігаційні кнопки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // І, якщо потрібно, скролбар
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  spaceBetween: 20,

  // Параметри кількості слайдів на екрані для різних розмірів екрану
  breakpoints: {
    // Коли розмір екрану менше або дорівнює 768px, показується 1 елемент
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    // Коли розмір екрану більше 768px, але менше або дорівнює 1280px, показується 2 елементи
    1280: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    // Коли розмір екрану більше 1280px, показується 3 елементи
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
