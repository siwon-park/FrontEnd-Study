// let name // let은 초깃값을 주지 않아도 됨(대신 name값은 undefined)

const numbers = [1, 2, 3, 4, 5]
let total = 0
for (const num of numbers) {
  total += num
}
console.log(total)

let first_var // 변수 선언
first_var = 10 // 값 할당
let second_var = 11 // 선언과 동시에 할당

first_var = 20 // 재할당
// let first_var = 10 // 변수 재선언 불가능

const name = 'SIWON'
name = 'SIWONPARK' // 재할당 불가능
// const name = 'SIWONPARK' // 변수 재선언 불가능