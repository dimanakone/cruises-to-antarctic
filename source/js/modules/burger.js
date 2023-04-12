import '../utils/focus-lock.js';

export const toggleMobileMenu = () => {
  const headerElement = document.querySelector('[data-header]');
  const navigationElement = document.querySelector('[data-navigation]');
  const togglerElement = document.querySelector('[data-toggler]');
  const logoElement = document.querySelector('[data-navigation-logo]');
  const elements = [headerElement, navigationElement, togglerElement, logoElement];

  const openMenu = () => {
    document.documentElement.classList.add('scroll-lock');
    elements.forEach((element) => element.classList.add('is-active'));
  };

  const closeMenu = () => {
    document.documentElement.classList.remove('scroll-lock');
    elements.forEach((element) => element.classList.remove('is-active'));
  };

  document.addEventListener('click', (evt) => {
    const isTogglerTarget = evt.target === togglerElement;
    const isLinkTarget = evt.target.nodeName === 'A';

    if (!isTogglerTarget && !isLinkTarget && evt.target.closest('[data-navigation]')) {
      return;
    }

    if (navigationElement.classList.contains('is-active')) {
      closeMenu();
      return;
    }

    if (isTogglerTarget) {
      openMenu();
    }
  });

  // navigationElement.classList.remove('no-js');
};
