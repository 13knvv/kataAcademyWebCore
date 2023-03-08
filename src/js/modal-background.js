export function modalBackground() {
  const modalBackground = document.querySelector('.modal-background')
  const modals = document.querySelectorAll('.modal')
  const aside = document.querySelector('.aside')
  let isOpen = false

  if (aside.classList.contains('aside--positioned--open')) {
    isOpen = true
  }

  for (let i = 0; i < modals.length; i++) {
    const modal = modals[i]

    if (modal.classList.contains('modal--open')) {
      isOpen = true
    }
  }

  if (isOpen) {
    modalBackground.classList.add('modal-background--open')
  } else {
    modalBackground.classList.remove('modal-background--open')
  }
}
