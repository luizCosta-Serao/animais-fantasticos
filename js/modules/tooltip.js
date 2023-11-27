export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  tooltips.forEach((tooltip) => {
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    const textTooltip = tooltip.getAttribute('aria-label');
    tooltipBox.innerText = textTooltip;

    function onMouseOver() {
      document.body.appendChild(tooltipBox);
    }

    function onMouseLeave() {
      tooltipBox.remove();
    }

    function onMouseMove(e) {
      tooltipBox.style.top = `${(e.pageY + 15)}px`;
      tooltipBox.style.left = `${(e.pageX + 15)}px`;
    }

    tooltip.addEventListener('mouseover', onMouseOver);
    tooltip.addEventListener('mouseleave', onMouseLeave);
    tooltip.addEventListener('mousemove', onMouseMove);
  });
}
