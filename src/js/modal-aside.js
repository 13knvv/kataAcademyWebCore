import { modalBackground } from './modal-background'

export function modalAside() {
  const modal = document.querySelector('.aside')
  const btnOpen = document.querySelector('.button--type--burger')
  const btnClose = document.querySelector('.aside__close')

  btnOpen.addEventListener('click', asideToggle)
  btnClose.addEventListener('click', asideToggle)

  function asideToggle() {
    modal.classList.toggle('modal--open')
    modalBackground()
  }
}
