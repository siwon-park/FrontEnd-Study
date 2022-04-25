# JavaScript

## 01. JavaScript 기초

### ※ JS의 필요성

- 브라우저 화면을 동적으로 표현하기 위함
- **★☆브라우저를 조작할 수 있는 유일한 언어☆★**

<br>

---

### DOM, BOM, ECMA Script

<br>

#### DOM

- HTML, XML과 같은 문서를 다루기 위한 프로그래밍 인터페이스
- 문서를 구조화하고, 구조화된 구성 요소를 하나의 객체로 접근하여
- 파싱(parsing)
  - 구문 분석, 해석
  - 브라우저가 문자열을 해석하여 DOM tree로 만드는 과정

<br>

#### BOM

- 자바스크립트가 브라우저와 소통하기 위한 모델

<br>

#### ECMA Script

- ECMA에서 규격에 따라 정의한 언어
  - 현재는 ECMAScript6

- ECMAScript == JavaScript

<br>

----

### 세미콜론(;)

- JS에서는 세미콜론을 **선택적으로 사용 가능**

<br>

---

### 변수와 식별자

#### 1. 식별자(identifier)의 정의와 특징

- 변수를 구분할 수 있는 변수명

- 반드시 문자, 달러($), 언더바(_)로 시작
- 예약어 사용 불가능(for, if, function 등)

<br>

#### 카멜 케이스(camelCase)

- 변수, 객체, 함수에 사용

#### 파스칼 케이스(PascalCase)

- 클래스, 생성자에 사용

#### 대문자 스네이크 케이스(SNAKE_CASE)

- 상수(constant)에 사용 => ex) API_KEY = ???

<br>

#### 2. 변수선언 키워드

- 사용 이유? 변수로 쓰겠다고 선언하기 위해 키워드를 붙여 명확하게 함

![image](https://user-images.githubusercontent.com/93081720/165068068-5a3905a6-9c89-414c-8976-a9389c8d835d.png)

<br>

#### let

- **재할당 예정인 변수 선언 시 사용**
  - 선언만 할 수도 있고, 선언과 할당을 동시에 할 수도 있음
  - 할당 → `=`을 통해 변수를 할당 가능하다는 의미
- **변수 재선언 불가능(이전에 let으로 선언했던 동일한 변수명으로 변수 선언 불가)**
  - 스코프가 달라지면 가능함
- 블록 스코프

<br>

#### const

- 재할당 불가능
  - const 배열의 요소 삭제 등 값을 바꾸는 것은 가능하지만 `=`을 사용하여 재할당하는 것은 불가능함
- 변수 재선언 불가능
- 블록 스코프

<br>

※ 블록 스코프

- if, for, 함수 등의 중괄호 내부
- 블록 스코프를 가지는 변수는 블록 바깥에서 접근 불가능

<br>

#### var 

- var로 선언한 변수는 재선언 및 재할당 모두 가능
- ES6 이전에 변수를 선언할 때 사용되던 키워드
- 호이스팅(hoisting) 되는 특성으로 인해 예기치 못한 문제 발생
  - 따라서 ES6부터는 var 대신 let과 const를 쓰는 것을 권장
  - 호이스팅 : 감아올리다
    - 변수를 선언하기 이전에 참조할 수 있는 현상
    - 변수 선언 이전의 위치에서 접근 시 undefined를 반환함

```javascript
console.log(name) // 에러가 아닌 'undefined' 반환
var name = '시원'
```

- 함수 스코프 => 함수 밖에서 접근 불가능

```javascript
function foo() {
    var x = 3
    console.log(x) // 3
}
console.log(x) // 에러 발생(Reference Error)
```

<br>

```javascript
if (true) {
    var a = 1
    let b = 2
    const c = 3
}
// a에만 접근할 수 있음. 왜냐하면 a는 var로 선언하였기 때문에 함수 스코프여서 접근 가능
// b와 c는 블록 스코프이기 때문에 접근 불가
```

<br>

![image](https://user-images.githubusercontent.com/93081720/165069633-f8f125ec-4f43-4ebb-bbca-8b63a34ccbb6.png)

<br>

---

### 데이터 타입

**원시 타입(Primitive Type)**과 **참조 타입(Reference Type)**으로 나뉨

- 원시 타입 : Number, String, Boolean, undefined, null, Symbol 
  - 변수에 해당 타입의 값이 담김
  - 다른 변수에 복사할 때 실제 값이 복사됨
- 참조 타입 : Objects, Array, Function 등
  - 변수에 해당 타입의 참조 값(참조하고 있는 주소)이 담김
  - 다른 변수에 복사할 때 참조 값이 복사됨

<br>

#### 1. 숫자(Number)

**정수, 실수 구분없는** 하나의 숫자 타입으로 부동 소수점 형식을 따른다

- NaN (Not a Number)

  - 계산 불가능한 값 => 'siwon' / 100 = NaN

- 무한대(Infinity, -Infinity)

  - 1/0 => Infinity

  - -1/0 => -Infinity

- Number 타입은 0, -0, NaN을 제외한 모든 경우에 true로 형변환이 된다.

<br>

#### 2. 문자열(String)

- 템플릿 리터럴
  - 파이썬의 f 스트링과 비슷
  - 따옴표 대신 `(backtick)을 사용, ${expression} 형태로 표현함

```javascript
const a = 'HELLO'
console.log(`${a} world`) // "HELLO world"
```

<br>

#### 3. undefined

- 변수의 값이 없음을 나타내는 데이터 타입(개발자의 의도 X)
- 변수 선언 이후 값을 할당하지 않으면 자동으로 undefined가 할당됨

```javascript
typeof(undefined) // 'undefined'
```

<br>

#### 4. null

- 변수의 값이 없음을 의도적으로 표현할 때 사용하는 데이터 타입
- 내가 null이라고 해줘야 null임(없는 것을 없다고 말하는 것이 null)
- null의 타입은 원시 타입에 속하지만, typeof에 의한 결과는 객체(object)임

```javascript
typeof(null) // 'object'
```

<br>

#### 5. Boolean

- 논리적 참 또는 거짓을 나타내는 타입
- true 또는 false로 표현
- 조건문 또는 반복문에서 boolean이 아닌 데이터 타입은 자동 형변환 규칙에 의해 true 또는 false로 변환됨
- 파이썬에서 빈 리스트는 false이지만, JS에서는 True임

```javascript
console.log(Boolean([])) // true
```

![image](https://user-images.githubusercontent.com/93081720/165070960-84e5f91c-407e-46ae-8ca6-6c1fd33bd600.png)

<br>

----

### 연산자

- 일치 비교 연산자(`===`)
  - JS에서 일치 비교 연산자는 ===이다. 자동 형변환이 일어나지 않는 엄격한 비교를 한다

※ ==는 의도한 대로 결과를 반환하지 않을 수 있으니 유의하고, 특별한 경우를 제외하곤 사용하지 않는다

```javascript
0 == "0" => true
0 == [] => true
"0" == [] => false
```

<br>

- 삼항 연산자(Ternary Operator)

  - 조건식이 참이면 콜론(:) 앞의 값을, 거짓이면 콜론 뒤의 값을 반환함

  - 평가를 하여 값을 반환하므로 변수에 할당 가능

```javascript
console.log(true ? 1 : 2) // 1
```

<br>

- 논리 연산자(`&&`, `||`)
  - JS의 논리 연산자도 단축 평가를 지원한다.

```javascript
true && false => false
1 && 0 => 0
1 && 2 && 3 && 4 => 4
'' && true => ''

true || false => true
false || true => true
4 || 7 => 4
'' || 5 => ''
```

<br>

----

### 조건문

#### switch / case 구문

switch 구문의 결과값을 이용한 조건문으로 해당 결과값과 case구문의 값을 비교하여 구문을 실행함

break 및 default문을 사용 가능하나, break문이 없는 경우 break문을 만나거나 default문을 실행할 때까지 계속해서 다음 조건문을 실행해나감

<br>

### 반복문

#### 1. for ... in

객체(object)의 속성(key)들을 순회할 때 사용함

반복가능한 객체(ex. 배열)의 순회도 가능하지만 인덱스 순으로 순회한다는 보장이 없음

<br>

#### 2. for ... of

반복 가능한 객체의 순회에 사용하는 것이 적절하며, 객체(object)의 속성 값 순회에 사용할 수 없음

![image](https://user-images.githubusercontent.com/93081720/165073709-f9894894-5405-4ac0-b2ad-e03b2b307dd2.png)



