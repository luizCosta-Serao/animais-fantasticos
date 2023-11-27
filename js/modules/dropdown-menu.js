export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach((dropdownMenu) => {
    function outsideClick(element, events, callback) {
      const html = document.documentElement;
      const outside = 'data-outside';

      function handleOutsideClick(e) {
        if (!element.contains(e.target)) {
          element.removeAttribute(outside);
          events.forEach((userEvent) => {
            html.removeEventListener(userEvent, handleOutsideClick);
          });
          callback();
        }
      }

      if (!element.hasAttribute(outside)) {
        events.forEach((userEvent) => {
          html.addEventListener(userEvent, handleOutsideClick);
        });
        element.setAttribute(outside, '');
      }
    }

    function handleClick(e) {
      e.preventDefault();
      this.classList.add('active');
      outsideClick(this, ['touchstart', 'click'], () => {
        this.classList.remove('active');
      });
    }

    dropdownMenu.addEventListener('click', handleClick);
    dropdownMenu.addEventListener('touchstart', handleClick);
  });
}
