const choices = ['paper', 'rock', 'scissors']

const buttons = document.querySelectorAll('.pick')
const scoreEl = document.getElementById('score')
const main = document.getElementById('main')
const selection = document.getElementById('selection')
const reset = document.getElementById('reset')
const user_select = document.getElementById('user_select')
const computer_select = document.getElementById('computer_select')
const winner = document.getElementById('win')

// modal buttons
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close')
const openBtn = document.getElementById('open')

let score = 0
let userChoice = undefined

buttons.forEach(button => {
  button.addEventListener('click', () => {
    userChoice = button.getAttribute('data-choice')

    checkWinner()
  })
})

reset.addEventListener('click', () => {
  // hide the selection and show the main
  main.style.display = 'flex'
  selection.style.display = 'none'
})

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

const checkWinner = () => {
  const computerChoice = pickRandomChoice()

  // update the view
  updateSelection(user_select, userChoice)
  updateSelection(computer_select, computerChoice)

  if (userChoice === computerChoice) {
    // draw
    winner.innerText = 'DRAW'
  } else if (
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    // user wins

    updateScore(1)
    winner.innerText = 'WIN'
  } else {
    // user lose
    updateScore(-1)
    winner.innerText = 'LOST'
  }

  // show the selection | hide the mmain
  main.style.display = 'none'
  selection.style.display = 'flex'
}

const updateScore = value => {
  score += value
  scoreEl.innerText = score
}

const pickRandomChoice = () =>
  choices[Math.floor(Math.random() * choices.length)]

const updateSelection = (selectionEl, choice) => {
  //  class reset
  selectionEl.classList.remove('btn-paper')
  selectionEl.classList.remove('btn-scissors')
  selectionEl.classList.remove('btn-rock')

  //  update view
  const img = document.querySelector('img')
  selectionEl.classList.add(`btn-${choice}`)
  img.src = `./images/icon-${choice}.svg`
  img.alt = choice
}
