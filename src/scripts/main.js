class SidebarNav {
  constructor() {

    this.bodyEl = document.querySelector('body')

    this.addEvents(
      document.querySelectorAll('[data-control="toggle-sidebar"]'),
      'sidebar-active'
    )
  }

  addEvents(toggle, className) {
    for(let i = 0; i< toggle.length; i++) {
      toggle[i].addEventListener('click', () => {
        this.bodyEl.classList.toggle(className)
      })
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if(document.querySelector('[data-component="sidebar"]')) {
    new SidebarNav()
  }
}, false)
