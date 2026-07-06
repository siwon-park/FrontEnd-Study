// 콜백함수

// 함수 표현식(함수를 정의하면서 변수로 저장함)
const myFunc = function () {
  console.log('myFunc() =>', this) //여기서 this는 window를 가르킴
}

const obj = {
  objFunc: myFunc
}

obj.objFunc() // this는 obj를 가르킴

const newFunc = myFunc.bind(obj)