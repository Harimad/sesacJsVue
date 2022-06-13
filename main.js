const obj = {
  name: 'test',
  test1: function () {
    console.log(this)
  },
  test2: () => {
    console.log(this)
  },
}

obj.test1() // {name: 'test', test1: ƒ, test2: ƒ}
obj.test2() // Window

const a = obj.test1
const b = obj.test2

a() // Window
b() // Window

//일반함수는 어떻게 호출하느냐에 따라 가리키는 객체가 달라짐.
//화살표 함수는 어떻게 호출하든 고정된 스코프를 가지고있음. (렉시컬 스코프)
//일반함수를 써서 가리키는 객체가 달라져서 오는 혼동을 막기위해 화살표 함수를 쓰기도 함
