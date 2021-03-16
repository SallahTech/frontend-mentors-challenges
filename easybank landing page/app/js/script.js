const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')

btnHamburger.addEventListener('click', () => {
  console.log('hamburger')
  if (header.classList.contains('open')) {
    body.classList.remove('no-scroll')
    header.classList.remove('open')
    fadeElems.forEach((elem) => {
      elem.classList.remove('fade-in')
      elem.classList.add('fade-out')
    })
  } else {
    body.classList.add('no-scroll')
    header.classList.add('open')
    fadeElems.forEach((elem) => {
      elem.classList.remove('fade-out')
      elem.classList.add('fade-in')
    })
  }
})
