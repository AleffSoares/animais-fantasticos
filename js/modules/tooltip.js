
export default function initTooltip() {
      const tooltips = document.querySelectorAll('[data-tooltip]');

      tooltips.forEach((tooltip) => {
        tooltip.addEventListener('mouseover', onMouseOver);
      })
      

      function onMouseOver(event) {
        const tooltipBox = createTooltipBox(this);
        
        onMouseMove.tooltipBox  = tooltipBox;
        onMouseMove.element  = this;
        this.addEventListener('mousemove', onMouseMove);
      
      
        onMouseLeave.tooltipBox  = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
        
      }
      
      function createTooltipBox(element) {
        const tooltip = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltip.classList.add('tooltip');
        tooltip.innerText = text;
        document.body.appendChild(tooltip);
        return tooltip;
      
      }
      
      const onMouseLeave = {
        /* É necessário ter o método handleEvent */
        handleEvent() {
          this.tooltipBox.remove();
          this.element.removeEventListener('mouseleave', onMouseLeave);
          this.element.removeEventListener('mousemove', onMouseMove);
        }
      }
      
      const onMouseMove = {
        handleEvent(event) {
          this.tooltipBox.style.top = event.pageY + 20 +'px';
          this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
      }
}










