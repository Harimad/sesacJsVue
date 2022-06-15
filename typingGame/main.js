const $ = tag => document.querySelector(tag)
const $$ = tag => document.querySelectorAll(tag)

const wordInput = $('#word-input')
const current = $('#current-word')
const scoreDisplay = $('#score')
const timeDisplay = $('#time')
const message = $('#message')

let words = ['banana', 'key', 'car', 'javascript', 'cat']
let score = 0

wordInput.addEventListener('input', e => {
  const typedText = e.target.value
  const currentText = current.innerText

  if (typedText.toUpperCase() === currentText.toUpperCase()) {
    console.log('같습니다')
    addScore()
    setNewWord()
  }
})
function setNewWord() {
  wordInput.value = ''
  message.innerText = 'Now Playing!'
  const randomIndex = Math.floor(Math.random() * words.length)
  current.innerText = words[randomIndex]
  wordInput.focus()
}

function addScore() {
  score = score + 1
  scoreDisplay.innerText = score
}
