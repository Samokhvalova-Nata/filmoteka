import Swiper from 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper/swiper-bundle.min.js';
const onOpenFooterText = document.querySelector('[data-modal-students-open]');
const onCloseModalBTN = document.querySelector('[data-members-modal-close-btn]');
const backdroplRef = document.querySelector('.members__backdrop')
const modalRef = document.querySelector('.members__modal')


onOpenFooterText.addEventListener('click', openModal)
onCloseModalBTN.addEventListener('click', closeModal)
modalRef.addEventListener("click", (e)=> e.stopPropagation())

function openModal(e) {
    e.preventDefault()
    backdroplRef.classList.remove('is-hidden-members');
    window.addEventListener('keydown', escClose)
    backdroplRef.addEventListener('click', closeModal)
}
  
function closeModal(e) {
    e.preventDefault()
    backdroplRef.classList.add('is-hidden-members');
    window.removeEventListener('keydown', escClose)
    backdroplRef.removeEventListener('click', closeModal)
  }

function escClose(e) {
    if (e.key === 'Escape') {
        backdroplRef.classList.add('is-hidden-members');
    }
}


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 2500,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
