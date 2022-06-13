// OOP란? (Object Oriented Programming)
// JS는 멀티패러다임 (함수형, 객체지향형 둘 다 가능)

function Song(singer, title, release) {
  //프로퍼티
  this.singer = singer
  this.title = title
  this.release = new Date(release)
  //메서드
  this.getReleaseDay = function () {
    return this.release.getDay()
  }
  this.getInfo = function () {
    return `이 노래는 ${this.singer}의 노래이고 제목은 ${this.title} 입니다.`
  }
  console.log(this)
}

const song1 = Song() // Window
// 인스턴스 화 (틀만 만들고 값을 넣어 사용하겠다는 뜻)
const song2 = new Song() // Song {singer: undefined, title: undefined, release: undefined}
const song3 = new Song('BTS', 'DNA', '2017-01-01') // Song {singer: 'BTS', title: 'DNA', release: Sun Jan 01 2017 09:00:00 GMT+0900 (한국 표준시)}
const song4 = new Song('BLACKPINK', 'GOOD', '2022-06-13') // Song {singer: 'BLACKPINK', title: 'GOOD', release: Sat Jan 01 2022 09:00:00 GMT+0900 (한국 표준시)}

//프로퍼티 값 확인하기
console.log(song4.release.getDate()) // 13

//메서드 사용하기
console.log(song4.getReleaseDay()) // 1 (월요일)
console.log(song3.getInfo()) // 이 노래는 BTS의 노래이고 제목은 DNA 입니다.

console.log(song3)
// Song {singer: 'BTS', title: 'DNA', release: Sun Jan 01 2017 09:00:00 GMT+0900 (한국 표준시), getReleaseDay: ƒ, getInfo: ƒ}
// getInfo: ƒ ()
// getReleaseDay: ƒ ()
// release: Sun Jan 01 2017 09:00:00 GMT+0900 (한국 표준시) {}
// singer: "BTS"
// title: "DNA"
// [[Prototype]]: Object
//     constructor: ƒ Song(singer, title, release)
//     [[Prototype]]: Object

// ES5 이전
//song3에 넘겨준 constructor에 prototype으로 메서드 추가하기
Song.prototype.getInfo2 = function () {
  return `노래: ${this.singer}, 제목: ${this.title}`
}

console.log(song3)
// Song {singer: 'BTS', title: 'DNA', release: Sun Jan 01 2017 09:00:00 GMT+0900 (한국 표준시), getReleaseDay: ƒ, getInfo: ƒ}
// getInfo: ƒ ()
// getReleaseDay: ƒ ()
// release: Sun Jan 01 2017 09:00:00 GMT+0900 (한국 표준시) {}
// singer: "BTS"
// title: "DNA"
// [[Prototype]]: Object
//     getInfo2: ƒ ()          <<= 여기에 메서드가 추가됨.
//     constructor: ƒ Song(singer, title, release)
//         arguments: null
//         caller: null
//         length: 3
//         name: "Song"
//         prototype: {getInfo2: ƒ, constructor: ƒ}
//         [[FunctionLocation]]: main.js:4
//         [[Prototype]]: ƒ ()
//         [[Scopes]]: Scopes[2]
//     [[Prototype]]: Object

console.log(song3.getInfo2()) // 노래: BTS, 제목: DNA

// ES6 이후 - class 문법 생김 (기능은 같은데 모양만 달라졌다고 해서 syntatic sugar라고 함)
class Song2 {
  constructor(singer, title, release) {
    this.singer = singer
    this.title = title
    this.release = new Date(release)
  }
  getReleaseDay() {
    return this.release.getDay()
  }
  getInfo() {
    return `노래: ${this.singer}, 제목: ${this.title}`
  }
}

const song10 = new Song('LISA', 'BOY', '2022-01-01')
const song20 = new Song('ELLA', 'GIRL', '2023-01-01')

console.log(song10) // Song {singer: 'LISA', title: 'BOY', release: Sat Jan 01 2022 09:00:00 GMT+0900 (한국 표준시), getReleaseDay: ƒ, getInfo: ƒ}
console.log(song20) // Song {singer: 'ELLA', title: 'GIRL', release: Sun Jan 01 2023 09:00:00 GMT+0900 (한국 표준시), getReleaseDay: ƒ, getInfo: ƒ}
