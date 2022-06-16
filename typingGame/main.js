const $ = tag => document.querySelector(tag)
const $$ = tag => document.querySelectorAll(tag)

const wordInput = $('#word-input')
const current = $('#current-word')
const scoreDisplay = $('#score')
const timeDisplay = $('#time')
const message = $('#message')

const GAME_TIME = 5

let words = ['banana', 'key', 'car', 'javascript', 'cat']
let score = 0
let time = 0
let timeInterval
let isPlaying = false

wordInput.addEventListener('input', e => {
  const typedText = e.target.value
  const currentText = current.innerText

  if (typedText.toUpperCase() === currentText.toUpperCase()) {
    console.log('같습니다')
    addScore()
    setNewWord()
  }
})

// 게임종료
function gameover() {
  console.log('game over')
  isPlaying = false
  clearInterval(timeInterval)
  timeInterval = null
  message.innerText = 'GAME OVER!'
  score = 0
}

// 시간 카운트다운
function countDown() {
  console.log(time)
  time = time - 1
  timeDisplay.innerText = time
  if (time === 0) {
    gameover()
  }
}

function setNewWord() {
  time = GAME_TIME
  wordInput.value = ''
  message.innerText = 'Now Playing!'
  const randomIndex = Math.floor(Math.random() * words.length)
  current.innerText = words[randomIndex]
  wordInput.focus()

  if (!isPlaying) {
    timeInterval = setInterval(countDown, 1000)
    isPlaying = true
  }
}

function addScore() {
  score = score + 1
  scoreDisplay.innerText = score
}
