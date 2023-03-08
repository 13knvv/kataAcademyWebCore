import { modalBackground } from './modal-background'

export function modal() {
  const btnsFeedback = document.querySelectorAll('.button--type--feedback')
  const feedback = document.querySelector('.modal--type--feedback')
  const close = document.querySelector('.modal__close')

  for (let i = 0; i < btnsFeedback.length; i++) {
    btnsFeedback[i].addEventListener('click', modalOpen)
  }

  close.addEventListener('click', modalClose)

  function modalOpen() {
    feedback.classList.toggle('modal--open')
    modalBackground()
  }

  function modalClose() {
    feedback.classList.remove('modal--open')
    modalBackground()
  }
}
