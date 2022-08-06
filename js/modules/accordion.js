export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const ativoClasse = 'ativo';
  if(accordionList.length) {
    accordionList[0].classList.add(ativoClasse);
    accordionList[0].nextElementSibling.classList.add(ativoClasse);
    function activeAccordion() {
      this.classList.toggle(ativoClasse);
      this.nextElementSibling.classList.toggle(ativoClasse);
    }

    accordionList.forEach((item) =>{
        item.addEventListener('click', activeAccordion);
    })
  }
  
}