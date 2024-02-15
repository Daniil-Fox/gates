const faqItems = document.querySelectorAll('.faq__item')
if(faqItems && faqItems.length > 0){
  faqItems.forEach(el => {
    const btn = el.querySelector('.faq__header')

    btn.addEventListener('click', e => {
      const content = el.querySelector('.faq__content')
      const isActive = el.classList.toggle('active')

      content.style.maxHeight = isActive ? content.scrollHeight + 'px' : null
    })
  })
}
