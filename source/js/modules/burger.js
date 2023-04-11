import '../utils/focus-lock.js';

export const toggleNav = () => {
  const navigationElement = document.querySelector('[data-navigation]');
  const togglerElement = document.querySelector('[data-toggler]');
  const logoElement = document.querySelector('[data-navigation-logo]');

  const openNav = () => {
    document.documentElement.classList.add('scroll-lock');
    navigationElement.classList.add('is-active');
    togglerElement.classList.add('is-active');
    logoElement.classList.add('is-active');
  };

  const closeNav = () => {
    document.documentElement.classList.remove('scroll-lock');
    navigationElement.classList.remove('is-active');
    togglerElement.classList.remove('is-active');
    logoElement.classList.remove('is-active');
  };

  togglerElement.addEventListener('click', () => {
    if (navigationElement.classList.contains('is-active')) {
      closeNav();
      return;
    }
    openNav();
  });

  // navigationElement.classList.remove('no-js');
};
