export function btnShowMore() {
  const btnMore = document.querySelectorAll('.btn-more')

  for (let i = 0; i < btnMore.length; i++) {
    btnMore[i].addEventListener('click', () => onClickBtnMore(btnMore[i]))
  }

  function onClickBtnMore(btn) {
    const content = btn.previousElementSibling
    const contentHeight = content.style.maxHeight
    const contentFullHeight = content.scrollHeight + 'px'
    const smallHeight = content.dataset.smallHeight

    if (contentHeight !== contentFullHeight) {
      btn.previousElementSibling.style.maxHeight = contentFullHeight
      btn.textContent = 'Скрыть'
      btn.classList.add('btn-more--showed')
    } else {
      btn.previousElementSibling.style.maxHeight = smallHeight
      btn.textContent = 'Показать все'
      btn.classList.remove('btn-more--showed')
    }
  }
}