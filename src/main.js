'use strict';

const burger = document.querySelector('[data-burger]');
const burgerLink = document.querySelectorAll('[data-burger-link]');
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
