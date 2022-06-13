// HTTP 통신 ?
// Google Search : "covid19api"
// Documentation on Postman Click!
// API 자료 접근 가능하다.

// 데이터 처리 방식 (GET / POST / PATCH / DELETE ...)

// HTTP 요청하기
const url =
  'https://api.covid19api.com/country/south-korea/status/confirmed?from=2022-06-01T00:00:00Z&to=2022-06-13T00:00:00Z'
const corona = fetch(url)

console.log(corona) // Promise {<pending>}

// json() : 응답(response stream)을 받아 읽고, json 데이터를 파싱(parsing)하여 자바스크립트 Object를 만들어 주는 메서드
corona.then(res => res.json()).then(data => console.log(data)) // (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
