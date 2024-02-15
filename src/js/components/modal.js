const modalForm = document.querySelector('[data-modal-form]')
const modalFormWindow = document.querySelector('[data-modal-form] .modal__window')
const modalFormClose = modalFormWindow.querySelector('.modal__close')

const modalBtns = document.querySelectorAll('[data-modal-btn]')

modalBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()

    modalForm.classList.add('active')
    document.body.style.overflow = 'hidden'
  })
})

modalForm.addEventListener('click', e => {
  e.stopPropagation()
  modalForm.classList.remove('active')
  document.body.style.overflow = null
})
modalFormClose.addEventListener('click', e => {
  e.stopPropagation()
  modalForm.classList.remove('active')
  document.body.style.overflow = null
})
modalFormWindow.addEventListener('click', e => {
  e.stopPropagation()
})
