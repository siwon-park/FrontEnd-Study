// let name // let은 초깃값을 주지 않아도 됨(대신 name값은 undefined)

const numbers = [1, 2, 3, 4, 5]
let total = 0
for (const num of numbers) {
  total += num
}
console.log(total)