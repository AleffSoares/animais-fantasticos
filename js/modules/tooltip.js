
export default class Tooltip {
      constructor(tooltips) {
         this.tooltips = document.querySelectorAll(tooltips);

         // Bind do objeto da classe aos callbakcs
         this.onMouseLeave = this.onMouseLeave.bind(this);
         this.onMouseMove = this.onMouseMove.bind(this);
         this.onMouseOver = this.onMouseOver.bind(this);
      }

      // Cria a tooltip e adiciona os eventos de mousemove e mouveleave
      // ao target
      onMouseOver(event) {
        this.createTooltipBox(event.currentTarget);
        
        event.currentTarget.addEventListener('mousemove', this.onMouseMove);
      
        event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
        
      }
      

      createTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        this.tooltipBox = tooltipBox;
      
      }
      
      // Remove tooltip e os eventos de mousemove e mouseleave
      onMouseLeave(event) {
        this.tooltipBox.remove();
        event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
        event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
      }
    
      // Move a tooltip com base em seus estilos de acordo com a posição do mouse
      onMouseMove(event) {
          this.tooltipBox.style.top = `${event.pageY + 20}px`;
          if(event.pageX + 240> window.innerWidth) {
            this.tooltipBox.style.left = `${event.pageX - 190}px`;
          } else {
            this.tooltipBox.style.left = `${event.pageX + 20}px`;
          }
          
      }

      // Adiciona os eventos de mouseover em cada tooltip
      addToolTipsEvent() {
        this.tooltips.forEach((item) => {
          item.addEventListener('mouseover', this.onMouseOver);
        });
      }

      init() {
        if(this.tooltips.length){
          this.addToolTipsEvent();
        }
        return this;
      }
      
}










