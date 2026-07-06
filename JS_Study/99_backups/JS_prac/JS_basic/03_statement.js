// 조건문

// switch 구문 형태
// switch (expression) {
//   case value: {
//     console.log(value)
//     break // break가 없을 경우 계속해서 다음 조건을 실행해나감(fall-through)
//   }
//   case value2: {
//     console.log(value2)
//     break
//   }
//   default: {
//     console.log('Do something!')
//   }
// }

// 반복문

// for ... in
const me = {
  name: 'SIWON',
  age: 30,
  home: 'DAEJEON'
}

for (const info in me) {
  console.log(info, me[info])
}

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  num += 1 // Uncaught TypeError: Assignment to constant variable
  console.log(num)
}

for (let num of arr) {
  num += 1
  console.log(num) // 1 2 3 4 5 6
}