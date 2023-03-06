export function aside() {
  const modalBackground = document.querySelector('.modal-background')
  const aside = document.querySelector('.aside')
  const burger = document.querySelector('.button--type--burger')
  const close = document.querySelector('.aside__close')

  burger.addEventListener('click', asideOpen)
  close.addEventListener('click', asideClose)

  function asideOpen() {
    aside.classList.add('page-wrapp__aside--open')
    modalBackground.classList.add('modal-background--open')
  }

  function asideClose() {
    aside.classList.remove('page-wrapp__aside--open')
    modalBackground.classList.remove('modal-background--open')
  }
}
