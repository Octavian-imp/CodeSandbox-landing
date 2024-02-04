const tabsContainers = document.querySelectorAll('.nav-tabs .nav-item')
const placeholder = document.querySelector('span.active-placeholder')

function movePlaceholder(e) {
  placeholder.style.width = e.target.offsetWidth + 'px'
  placeholder.style.left = e.target.offsetLeft + 'px'
  e.target.classList.add('active')
}

function activeItem() {
  tabsContainers.forEach(item => {
    item.classList.remove('active')
    this.classList.add('active')
    document.querySelectorAll('.tabs-container > .tab-item').forEach(item => {
      item.classList.remove('active')
    })
    document.querySelector(`[data-id="${this.id}"]`).classList.add('active')
  })
}


tabsContainers.forEach(item => {
  item.addEventListener('click', movePlaceholder)
  item.addEventListener('click', activeItem)
})

