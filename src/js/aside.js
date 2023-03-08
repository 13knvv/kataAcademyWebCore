import { modalBackground } from './modal-background'

export function aside() {
  const aside = document.querySelector('.aside')
  const burger = document.querySelector('.button--type--burger')
  const close = document.querySelector('.aside__close')

  burger.addEventListener('click', asideOpen)
  close.addEventListener('click', asideClose)

  function asideOpen() {
    aside.classList.add('aside--positioned--open')
    modalBackground()
  }

  function asideClose() {
    aside.classList.remove('aside--positioned--open')
    modalBackground()
  }
}
