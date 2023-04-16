const refs = {
    btnCloseModal: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    galary: document.querySelector('.film__gallery')
}


refs.btnCloseModal.addEventListener("click", holderCloseModal);
refs.modal.addEventListener("click", holderCloseByPressBackdrop);
refs.galary.addEventListener('click', holderOpenModal)

function holderOpenModal(event) {
    if (event.target.nodeName === 'IMG' || event.target.nodeName === 'H2' || event.target.nodeName === 'P') {
        refs.modal.classList.remove("visually-hidden");
    }
}

function holderCloseModal(event) {
    refs.modal.classList.add("visually-hidden")
}

function holderCloseByPressBackdrop(event) {
    if (event.target === refs.modal) {
        refs.modal.classList.add("visually-hidden")
    }
}

    window.addEventListener("keydown", handlerEscPrecc);

function handlerEscPrecc(event) {
    if (event.key === "Escape") {
        refs.modal.classList.add("visually-hidden")
    }
    window.removeEventListener("keydown", handlerEscPrecc);
}
