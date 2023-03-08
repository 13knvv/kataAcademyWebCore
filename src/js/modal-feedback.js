import { modalBackground } from './modal-background'

export function modalFeedback() {
  const modal = document.querySelector('.modal--type--feedback')
  const btnsOpen = document.querySelectorAll('.button--type--feedback')
  const btnClose = document.querySelector('.modal__close')

  for (let i = 0; i < btnsOpen.length; i++) {
    btnsOpen[i].addEventListener('click', modalToggle)
  }

  btnClose.addEventListener('click', modalToggle)

  function modalToggle() {
    modal.classList.toggle('modal--open')
    modalBackground()
  }
}
