export function modal() {
  const modalBackground = document.querySelector('.modal-background')
  const btnsFeedback = document.querySelectorAll('.button--type--feedback')
  const feedback = document.querySelector('.modal--type--feedback')
  const close = document.querySelector('.modal__close')

  for (let i = 0; i < btnsFeedback.length; i++) {
    btnsFeedback[i].addEventListener('click', modalOpen)
  }

  close.addEventListener('click', modalClose)

  function modalOpen() {
    feedback.classList.add('modal--open')
    modalBackground.classList.add('modal-background--open')
  }

  function modalClose() {
    feedback.classList.remove('modal--open')
    modalBackground.classList.remove('modal-background--open')
  }
}
