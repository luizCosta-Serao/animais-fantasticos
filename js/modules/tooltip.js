export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  // cria a tooltip
  onMouseOver() {
    document.body.appendChild(this.tooltipBox);
  }

  // remove a tooltip
  onMouseLeave() {
    this.tooltipBox.remove();
  }

  // move a tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(e) {
    this.tooltipBox.style.top = `${(e.pageY + 15)}px`;
    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${(e.pageX - 170)}px`;
    } else {
      this.tooltipBox.style.left = `${(e.pageX + 15)}px`;
    }
  }

  // adiciona os eventos de mouse ao tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((tooltip) => {
      // cria o tooltipBox
      const tooltipBox = document.createElement('div');
      tooltipBox.classList.add('tooltip');
      const textTooltip = tooltip.getAttribute('aria-label');
      tooltipBox.innerText = textTooltip;
      this.tooltipBox = tooltipBox;

      tooltip.addEventListener('mouseover', this.onMouseOver);
      tooltip.addEventListener('mouseleave', this.onMouseLeave);
      tooltip.addEventListener('mousemove', this.onMouseMove);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
