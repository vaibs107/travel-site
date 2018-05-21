import $ from 'jquery';

class Modal {
	constructor() {
		this.modalOpenButton = $(".open-modal");
		this.modal = $(".modal");
		this.modalCloseButton = $(".modal__close");
		this.events();
	}

	events() {
		//click open modal button
		this.modalOpenButton.click(this.openModal.bind(this));

		//click close modal button
		this.modalCloseButton.click(this.closeModal.bind(this));

		//pushes any key
		$(document).keyup(this.keyHandler.bind(this));
	}

	keyHandler(e) {
		if(e.keyCode == 27) { //keyCode for ESC key
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;