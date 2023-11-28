export default class DropdownMenu {
  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.outside = 'data-outside';
    this.html = document.documentElement;

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleOutsideClick() {
    this.element.removeAttribute(this.outside);
    ['touchstart', 'click'].forEach((userEvent) => {
      this.html.removeEventListener(userEvent, this.handleOutsideClick);
    });
  }

  outsideClick(element, events, callback) {
    if (!element.hasAttribute(this.outside)) {
      events.forEach((userEvent) => {
        this.html.addEventListener(userEvent, (e) => {
          if (!this.element.contains(e.target)) {
            this.handleOutsideClick();
            callback();
          }
        });
      });
      element.setAttribute(this.outside, '');
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.element.classList.add('active');
    this.outsideClick(this.element, ['touchstart', 'click'], () => {
      this.element.classList.remove('active');
    });
  }

  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((dropdownMenu) => {
      this.element = dropdownMenu;

      dropdownMenu.addEventListener('click', this.handleClick);
      dropdownMenu.addEventListener('touchstart', this.handleClick);
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
