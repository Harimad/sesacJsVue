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
let isReady = false

const API_URL = `https://random-word-api.herokuapp.com/word?number=10`

init()
// ↑ ↑
// Promise를 이용한 비동기 API 요청
function init() {
  const res = fetch(API_URL)
  console.log(res) // Promise {<pending>}  [[Prototype]]: Promise  [[PromiseResult]]: Response

  res
    .then(res => {
      console.log(res) // Response {type: 'cors', url: 'https://random-word-api.herokuapp.com/word?number=20', redirected: false, status: 200, ok: true, …}
      // console.log(res.json()) // Promise {<pending>}  [[Prototype]]: Promise  [[PromiseResult]]: Array(10)
      return res.json()
    })
    .then(data => {
      console.log(data) // 최종 넘겨받은 데이터임. // (10) ['latests', 'impeccant', 'trombones', 'expletive', 'carillonned', 'mussel', 'huckaback', 'catting', 'chaffer', 'attunement']
      words = data.filter(item => item.length < 10)
    })
  isReady = true // 단어가 다 받아지면 flag를 바꿔준다.

  // 위의 fetch 부분을 줄인 형태
  // const res2 = fetch(API_URL)
  // .then(res => res.json())
  // .then(data => (words = data.filter(item => item.length < 10)))
}

// initWithAsync()
// ↑ ↑ ↑ ↑
// Async를 이용한 비동기 API 요청  // async function (비동기 함수) : callback과 promise의 단점을 보완하기 위해 추가됨
async function initWithAsync() {
  const res = await fetch(API_URL) // await을 붙이면 fetch가 다 완료된 다음에 다음 코드가 실행된다!
  const data = await res.json() // console.log(data) // 동일한 데이터 10개가 들어간다.
  words = data.filter(item => item.length < 10)
}

wordInput.addEventListener('input', e => {
  const typedText = e.target.value
  const currentText = current.innerText

  if (typedText.toUpperCase() === currentText.toUpperCase() && isReady) {
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
