export function aside() {
  const modalBackground = document.querySelector('.modal-background')
  const aside = document.querySelector('.aside')
  const burger = document.querySelector('.button--type--burger')
  const close = document.querySelector('.aside__close')

  burger.addEventListener('click', asideChangePosition)
  close.addEventListener('click', asideChangePosition)

  function asideChangePosition() {
    aside.classList.toggle('page-wrapp__aside--open')
    modalBackground.classList.toggle('modal-background--open')
  }
}
