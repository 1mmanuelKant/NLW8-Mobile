window.addEventListener('scroll', onScroll)

function onScroll() {
  showBackToTopBtnOnScroll()
  showNavOnScroll()
}

function showBackToTopBtnOnScroll(){
  if (scrollY > 400) {
    backToTopBtn.classList.add('show')
  } else {
    backToTopBtn.classList.remove('show')
  }
}

function showNavOnScroll(){
  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  } else {
    navigation.classList.add('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
#home img, 
#home .stats,
#services header,
#services card,
#about,
#about header,
#about .content`)
