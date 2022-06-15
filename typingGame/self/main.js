const $ = tag => document.querySelector(tag)
const $$ = tag => document.querySelectorAll(tag)
const $show = $('.show')
const $inputText = $('.inputText')
const $state = $('.state')
const $timeLeft = $('.timeLeft span')
const $score = $('.score span')

// Random Word Generator
let words = [
  'chandelier',
  'promote',
  'intenders',
  'microfarad',
  'transcendency',
  'fluctuations',
  'molters',
  'pyrogenic',
  'coronograph',
]

let time = 10
let score = 0
let word
// 단어 생성
const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}
word = getRandomWord()
$show.textContent = word

//비동기 시간
$timeLeft.innerText = time
let timer, intervalTimer
let runTimer = () => {
  clearTimeout(timer)
  clearInterval(intervalTimer)
  time = 10
  $timeLeft.innerText = time

  intervalTimer = setInterval(() => {
    time--
    $timeLeft.innerText = time
  }, 1000)
  timer = window.setTimeout(() => {
    $state.innerText = 'GAME OVER'
    clearInterval(intervalTimer)
    return
  }, 10010)
}

//GAME START
$state.addEventListener('click', e => {
  console.log(e)
  if (e.target.outerText === 'Ready') {
    e.target.innerText = 'START!'
    runTimer()

    //입력
    $score.innerText = score
    $inputText.addEventListener('change', e => {
      if (score === 10) {
        alert('WIN')
        return
      }
      if ($inputText.value === word) {
        score++
        $score.innerText = score
        word = getRandomWord()
        $show.textContent = word
        // 타이머 다시 작동
        runTimer()
      }
      $inputText.value = ''
      $inputText.focus()
    })
  } else if (e.target.outerText === 'GAME OVER') {
    e.target.innerText = 'Ready'
  } else {
    return
  }
})
