export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
     this.botaoAbrir = document.querySelector(botaoAbrir);
     this.botaoFechar = document.querySelector(botaoFechar);
     this.containerModal = document.querySelector(containerModal);

     // bind this ao callback para fazer referencia ao objeto da classe

     this.eventToogleModal = this.eventToogleModal.bind(this);
     this.clickOutside = this.clickOutside.bind(this);
  }

  // Anre ou fecha o modal
  toggleModal() {
    
    this.containerModal.classList.toggle('ativo');
  }

  eventToogleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Fecha o modal ao clicar do lado de fora
  clickOutside(event) {
    event.preventDefault();
    if(event.target === this.containerModal) {
      this.toggleModal();
    }    
  }

  // Adiciona os eventos aos elementos do modal
  addModalEvents() {
   this.botaoAbrir.addEventListener('click', this.eventToogleModal);
   this.botaoFechar.addEventListener('click', this.eventToogleModal);
   this.containerModal.addEventListener('click', this.clickOutside);
  }

  init() {
    if(this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }

  
  


}


