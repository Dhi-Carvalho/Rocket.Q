export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')

  function open() {
    modalWrapper.classList.add('active')
  }

  const cancelButton = document.querySelector('.button.cancel')

  function close() {
    modalWrapper.classList.remove('active')
  }

  cancelButton.addEventListener('click', close)

  return {
    open,
    close
  }
}
