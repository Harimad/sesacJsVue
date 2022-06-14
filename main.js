const $ = tag => document.querySelector(tag)
const $$ = tag => document.querySelectorAll(tag)

// Input Text와 Button Click 관련
const inputText = $('.input-text')
const addButton = $('.add-button')
const list = $('.list')

addButton.addEventListener('click', e => {
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
})

// Like 버튼 Click 관련

// 이러면 기존 2개의 li 태그에만 이벤트 리스너가 걸림.
// 추가되는 li 태그에는 이벤트가 걸리지 않는 문제가 발생.
// const likeButtons = $$('.like')
// likeButtons.forEach(like => {
//   like.addEventListener('click', () => {
//     console.log('clicked')
//   })
// })

// Like 버튼 Toggle
list.addEventListener('click', e => {
  if (e.target.innerText === 'favorite_border') {
    e.target.innerText = 'favorite'
  } else e.target.innerText = 'favorite_border'
})
