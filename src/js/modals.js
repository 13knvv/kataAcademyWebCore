export function modals() {
  /// all btns open
  const btnOpenAside = document.querySelector('.button--type--burger')
  const btnsOpenFeedback = document.querySelectorAll('.button--type--feedback')
  /// all btns close
  const btnsClose = document.querySelectorAll('.modal__close')
  /// all modals
  const aside = document.querySelector('.modal--type--aside')
  const feedback = document.querySelector('.modal--type--feedback')
  const allModals = document.getElementsByClassName('modal')
  // background
  const modalBackground = document.querySelector('.modal-background')

  /// add handlers ///
  btnOpenAside.addEventListener('click', openAside)

  for (let i = 0; i < btnsOpenFeedback.length; i++) {
    btnsOpenFeedback[i].addEventListener('click', openFeedback)
  }

  for (let i = 0; i < btnsClose.length; i++) {
    btnsClose[i].addEventListener('click', closeModal)
  }

  modalBackground.addEventListener('click', onClickBackground)

  /// functions ///
  function openAside() {
    closeAllModals()
    openBackground()
    aside.classList.add('modal--open')
  }

  function openFeedback() {
    closeAllModals()
    openBackground()
    feedback.classList.add('modal--open')
  }

  function closeModal(e) {
    closeBackground()
    e.target.closest('.modal').classList.remove('modal--open')
  }

  function closeAllModals() {
    for (let i = 0; i < allModals.length; i++) {
      if (allModals[i].classList.contains('modal--open')) {
        allModals[i].classList.remove('modal--open')
      }
    }
  }

  function onClickBackground() {
    closeBackground()
    closeAllModals()
  }

  function openBackground() {
    modalBackground.classList.add('modal-background--open')
  }

  function closeBackground() {
    modalBackground.classList.remove('modal-background--open')
  }
}
