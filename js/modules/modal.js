export default class Modal {
  constructor(abrir, fechar, container) {
    this.botaoAbrir = document.querySelector(abrir);
    this.botaoFechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(container);

    // bind this ao callback para fazer referência ao objeto da classe
    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre o modal
  abrirModal(e) {
    e.preventDefault();
    this.containerModal.classList.add('ativo');
  }

  // fecha o modal
  fecharModal(e) {
    e.preventDefault();
    this.containerModal.classList.remove('ativo');
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(e) {
    if (e.target === this.containerModal) {
      this.fecharModal(e);
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.abrirModal);
    this.botaoFechar.addEventListener('click', this.fecharModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
