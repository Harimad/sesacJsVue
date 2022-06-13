const $ = tag => document.querySelector(tag)
const $$ = tag => document.querySelectorAll(tag)

// 태그 하나 선택하기
const title = $('#title')
console.log(title) // <p id="title">JS</p>

console.log({ title })
// {title: p#title}
//     title: p#title   <<- DOM 의 속성이 나온다.
//     [[Prototype]]: Object

// 태그 css 변경하기
title.style.color = 'blue'
console.log({ title }) // title 객체안에 이와같이 나온다. => outerHTML: "<p id=\"title\" style=\"color: blue;\">JS</p>"

// 태그 여러개 선택하기
const items = $$('.item')
console.log(items) // NodeList(4) [li.item, li.item, li.item, li.item]

// 태그 지우기
const list = $('.list')

list.firstElementChild.remove()
list.lastElementChild.innerHTML = '<a>마지막 자식요소에 추가</a>'

// 이벤트 핸들링
const btn = $('#btn')

// 모든 이벤트리스너 객체는 인자로 이벤트가 들어감
btn.addEventListener('click', e => console.log(e))

//클릭 후
//event 객체 출력

//PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
//     isTrusted: true
//     altKey: false
//     altitudeAngle: 1.5707963267948966
//     azimuthAngle: 0
//     bubbles: true
//     button: 0
//     buttons: 0
//     cancelBubble: false
//     cancelable: true
//     clientX: 62
//     clientY: 67
//     composed: true
//     ctrlKey: false
//     currentTarget: null
//     defaultPrevented: false
//     detail: 1
//     eventPhase: 0
//     fromElement: null
//     height: 1
//     isPrimary: false
//     layerX: 62
//     layerY: 67
//     metaKey: false
//     movementX: 0
//     movementY: 0
//     offsetX: 53
//     offsetY: 10
//     pageX: 62
//     pageY: 67
//     path: (5) [button#btn, body, html, document, Window]
//     pointerId: 1
//     pointerType: "mouse"
//     pressure: 0
//     relatedTarget: null
//     returnValue: true
//     screenX: 69
//     screenY: 154
//     shiftKey: false
//     sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
//     srcElement: button#btn
//     tangentialPressure: 0
//     target: button#btn								<== 여기가 많이 쓰임
//     tiltX: 0
//     tiltY: 0
//     timeStamp: 1410.2000002861023
//     toElement: null
//     twist: 0
//     type: "click"
//     view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//     which: 1
//     width: 1
//     x: 62
//     y: 67
//     [[Prototype]]: PointerEvent
