
// 함수 선언식
function add(n1, n2) {
  return n1 + n2
}

console.log(add(1, 2))

// 함수 표현식
const add2 = function (n1, n2) {
  return n1 + n2
}

console.log(add2(1, 2))

const test_func = function (param1, param2) {
  return [param1, param2]
}

test_func(1, 2) // [1, 2]

// 함수 매개변수보다 인자가 많을 경우
test_func(1, 2, 3) // [1, 2]

// 함수 매개변수보다 인자가 적을 경우
test_func() // [undefined, undefined]
test_func(1) // [1, undefined]


// Rest Parmeter(...)
const RP_test = function (arg1, arg2, ...restArgs) {
  return [arg1, arg2, restArgs]
}
RP_test(1, 2, 3, 4, 5) // [1, 2, [3, 4, 5]]
RP_test(1, 2) // [1, 2, []] // restArgs가 없어서 넘어오지 않으면 빈 배열로 처리

// Spread Operator(...)
const SO_test = function (arg1, arg2, arg3) {
  return arg1 + arg2 + arg3
}

const nums = [1, 2, 3]
SO_test(...nums) // 6

console.log(sub) // undefined (sub가 undefined로 초기화됨)
sub(2, 1) // Uncaught TypeError: sub is not a function

var sub = function (num1, num2) {
  return num1 - num2
}

// 화살표 함수(arrow function)
const normal_func = function (name) { return `Hello ${name}` }

// 1. function 키워드 삭제
const arrow_func1 = (name) => { return `Hello ${name}` }
arrow_func1("SIWON") // 'Hello SIWON'

// 2. 매개변수가 1개일 경우 선언부의 () 생략 가능
const arrow_func2 = name => { return `Hello ${name}` }
arrow_func2("SIWON") // 'Hello SIWON'

// 3. 함수 몸통이 return을 포함한 표현식 1개일 경우 {}과 return 삭제 가능
const arrow_func3 = name => `Hello ${name}`
arrow_func3("SIWON") // 'Hello SIWON'