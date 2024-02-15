const dropdownBtn = document.querySelector('.header-bottom__btn')
const dropdown = document.querySelector('.dropdown')
dropdown.addEventListener('click', e => {
  e.stopPropagation()
})
dropdownBtn.addEventListener('click', e => {
  e.preventDefault()
  e.stopPropagation()
  const isActive = dropdown.classList.toggle('active')

  if(isActive){
    dropdown.style.maxHeight = dropdown.scrollHeight + 'px'
    setTimeout(() => {
      dropdown.style.maxHeight = 'unset'
    }, 300)
  } else {
      dropdown.style.maxHeight = '600px'
      setTimeout(() => {
        dropdown.style.maxHeight = null
      }, 50)
  }
})


const dropdownMini = document.querySelectorAll('[data-drop-mini]')

dropdownMini.forEach(el => {
  const dataCont = el.dataset.dropMini
  el.addEventListener('click', e => {
    const content = document.querySelector(`[data-drop-content="${dataCont}"]`)
    const isActive = el.classList.toggle('active')
    content.style.maxHeight = isActive ? content.scrollHeight + 'px' : null

  })
})
