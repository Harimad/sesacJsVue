const $ = tag => document.querySelector(tag)
const $$ = tag => document.querySelectorAll(tag)

// Input Text와 Button Click 관련
const inputText = $('.input-text')
const addButton = $('.add-button')
const list = $('.list')

function addItem() {
  // 인풋 텅비면 종료
  if (!inputText.value.trim()) return

  // like
  const like = document.createElement('span')
  const likeIcon = document.createElement('i')
  like.classList.add('like')
  likeIcon.classList.add('material-icons')
  likeIcon.classList.add('favorite')
  likeIcon.innerText = 'favorite_border'
  like.appendChild(likeIcon)

  // item
  const item = document.createElement('span')
  item.classList.add('item')
  item.innerText = inputText.value

  // check & clear
  const manage = document.createElement('span')
  const checkIcon = document.createElement('i')
  const clearIcon = document.createElement('i')
  manage.classList.add('manage')
  checkIcon.classList.add('material-icons', 'check')
  checkIcon.innerText = 'done'
  clearIcon.classList.add('material-icons', 'clear')
  clearIcon.innerText = 'clear'
  manage.appendChild(checkIcon)
  manage.appendChild(clearIcon)

  // like + item + check & clear
  const li = document.createElement('li')
  li.appendChild(like)
  li.appendChild(item)
  li.appendChild(manage)
  list.appendChild(li)
  inputText.value = ''
  inputText.focus()

  // 편한 방법
  // const li = `<li>
  //   <span class="like">
  //     <i class="material-icons favorite">favorite_border</i>
  //   </span>
  //   <span class="item">${inputText.value}</span>
  //   <span class="manage">
  //     <i class="material-icons check">done</i>
  //     <i class="material-icons clear">clear</i>
  //   </span>
  //   </li>`
  // list.innerHTML += li
}
// Event - input
addButton.addEventListener('click', e => {
  addItem()
})

inputText.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    addItem()
  }
})

// Event
list.addEventListener('click', e => {
  console.log(e)
  console.log(e.target)
  // Like Btn toggle
  if (
    e.target.className === 'material-icons favorite' &&
    e.target.innerText === 'favorite'
  ) {
    e.target.innerText = 'favorite_border'
  } else if (
    e.target.className === 'material-icons favorite' &&
    e.target.innerText === 'favorite_border'
  ) {
    e.target.innerText = 'favorite'
  }
  // Check Btn
  if (e.target.classList.contains('check')) {
    console.log(true)
    e.target.parentNode.parentNode.classList.add('done')
  }
  // Delete Btn
  if (e.target.classList.contains('clear')) {
    // 방법 1
    e.target.parentNode.parentNode.remove()
    // 방법 2
    // list.removeChild(e.target.parentNode.parentNode)
  }
})
