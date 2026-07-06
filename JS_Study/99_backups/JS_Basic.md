# JavaScript

## 01. JavaScript 기초

### ※ JS의 필요성

- 브라우저 화면을 동적으로 표현하기 위함
- **★☆브라우저를 조작할 수 있는 유일한 언어☆★**

※ 브라우저(browser) : url로 웹을 탐색하며 서버와 통신하고, HTML 문서나 파일을 출력하는 GUI 기반 소프트웨어, 웹 브라우저라고도 함

<br>

---

### DOM, BOM, ECMA Script

<br>

#### DOM(Document Object Model)

- HTML, XML과 같은 문서를 다루기 위한 프로그래밍 인터페이스
- 문서를 구조화하고, 구조화된 구성 요소를 하나의 객체로 접근하여 다루는 논리적 트리 모델
- 문서가 객체(object)로 구조화되어 있어 key로 접근 가능
- 파싱(parsing)
  - 구문 분석, 해석
  - 브라우저가 문자열을 해석하여 DOM tree로 만드는 과정

<br>

#### BOM(Browser Object Model)

- 자바스크립트가 브라우저와 소통하기 위한 모델
- 브라우저의 창이나 프레임을 추상화해서 프로그래밍적으로 제어할 수 있도록 제공하는 수단

<br>

#### ECMA Script

- ECMA에서 규격에 따라 정의한 언어 => 브라우저(DOM & BOM)을 조작하기 위한 언어
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
- 대소문자를 구분하며, 클래스명 외에는 모두 소문자로 시작(권장)

<br>

##### 카멜 케이스(camelCase)

- 변수, 객체, 함수에 사용

##### 파스칼 케이스(PascalCase)

- 클래스, 생성자에 사용

##### 대문자 스네이크 케이스(SNAKE_CASE)

- 상수(constant)에 사용 => ex) API_KEY = 'abced123fe....'
  - 상수: 개발자의 의도와 상관없이 변경될 가능성이 없는 값을 의미함


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

![image](https://user-images.githubusercontent.com/93081720/166104052-312e31db-bbac-435f-8bfa-5a59f5eadf20.png)

<br>

#### const

- **재할당 불가능**
  - const 배열의 요소 삭제 등 요소의 값을 바꾸는 것은 가능하지만 `=`을 사용하여 재할당하는 것은 불가능함
- **변수 재선언 불가능**
- 블록 스코프

![image](https://user-images.githubusercontent.com/93081720/166104089-4a2d4145-ab9c-404a-a9f8-5f5a72396f18.png)

<br>

※ 블록 스코프

- if, for, 함수 등의 중괄호 내부
- 블록 스코프를 가지는 변수는 블록 바깥에서 접근 불가능

<br>

#### var 

- var로 선언한 변수는 재선언 및 재할당 모두 가능
- ES6 이전에 변수를 선언할 때 사용되던 키워드
- **호이스팅(hoisting)** 되는 특성으로 인해 예기치 못한 문제 발생
  - 따라서 ES6부터는 var 대신 let과 const를 쓰는 것을 권장
  - 호이스팅 : 감아올리다 => "**호출과 선언이 뒤바뀌어도 상관 없다**"
    - **변수를 선언하기 이전에 참조할 수 있는 현상**
    - **변수 선언 이전의 위치에서 접근 시 undefined를 반환**함

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

![image](https://user-images.githubusercontent.com/93081720/165277053-a0b74f25-b511-4a12-a226-5bae003384f5.png)

<br>

**원시 타입(Primitive Type)**과 **참조 타입(Reference Type)**으로 나뉨

- 원시 타입 : Number, String, Boolean, undefined, null, Symbol 
  - 변수에 해당 타입의 값이 담김
  - 다른 변수에 복사할 때 실제 값이 복사됨
- 참조 타입 : Objects, Array, Function 등
  - 변수에 해당 타입의 참조 값(참조하고 있는 주소)이 담김
  - 다른 변수에 복사할 때 참조 값이 복사됨

<br>

#### 1. 숫자(Number)

**정수형, 실수형 구분없는** 하나의 숫자 타입으로 부동 소수점 형식을 따른다

- NaN (Not a Number)

  - 계산 불가능한 값 => 'siwon' / 100 = NaN

- 무한대(Infinity, -Infinity)

  - 1/0 => Infinity

  - -1/0 => -Infinity

- Number 타입은 0, -0, NaN을 제외한 모든 경우에 true로 형변환이 된다.

<br>

#### 2. 문자열(String)

16비트 유니코드 문자의 집합으로 작은 따옴표 또는 큰 따옴표로 표현함

- 템플릿 리터럴
  - 파이썬의 f 스트링과 비슷
  - 따옴표 대신 `(backtick)을 사용, ${expression} 형태로 표현함

```javascript
const a = 'HELLO'
console.log(`${a} world`) // "HELLO world"
```

<br>

#### 3. undefined

- 변수의 값이 없음을 나타내는 데이터 타입(**개발자의 의도 X**)
- 변수 선언 이후 값을 할당하지 않으면 **자동으로** undefined가 할당됨

```javascript
typeof(undefined) // 'undefined'
```

<br>

#### 4. null

- 변수의 값이 없음을 **의도적으로** 표현할 때 사용하는 데이터 타입
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
- **파이썬에서 빈 리스트는 false이지만, JS에서는 true임** => Object 타입이 항상 참이므로 ture

```javascript
console.log(Boolean([])) // true
```

![image](https://user-images.githubusercontent.com/93081720/165070960-84e5f91c-407e-46ae-8ca6-6c1fd33bd600.png)

<br>

----

### 연산자

- 일치 비교 연산자(`===`)
  - JS에서 일치 비교 연산자는 ===이다. 자동 형변환이 일어나지 않는 엄격한 비교를 한다(타입과 값 모두 같은지 비교)
  - 일치하지 않음을 나타낼 때는 `!==`을 사용한다

※ 동등 비교 연산자(==)는 의도한 대로 결과를 반환하지 않을 수 있으니 유의하고, 특별한 경우를 제외하곤 사용하지 않는다(암묵적 형변환을 통해 타입을 일치 시킨 후 비교를 진행하기 때문)

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

분기가 많을 경우 if문 보다 가독성이 좋음

![image](https://user-images.githubusercontent.com/93081720/166104564-08efa087-54f3-4f54-9490-42f65f59c72c.png)

<br>

### 반복문

#### 1. for ... in

객체(object)의 속성(key)들을 순회할 때 사용함

반복가능한 객체(ex. 배열)의 순회도 가능하지만 인덱스 순으로 순회한다는 보장이 없음

![image](https://user-images.githubusercontent.com/93081720/166104691-85b61476-b10e-463d-9ef4-f12daf950f7d.png)

<br>

#### 2. for ... of

반복 가능한 객체의 순회에 사용하는 것이 적절하며, 객체(object)의 속성 값 순회에 사용할 수 없음

![image](https://user-images.githubusercontent.com/93081720/166104989-6414ff9b-351b-4934-a0ee-e0c8605829c6.png)

<br>

#### 정리

![image](https://user-images.githubusercontent.com/93081720/165073709-f9894894-5405-4ac0-b2ad-e03b2b307dd2.png)

<br>

----

### 함수

#### JS 함수의 특징

- 매개 변수와 인자의 개수가 불일치 하더라도 이를 허용한다

  - 매개 변수보다 인자가 많을 경우 => 함수에 정의된 매개 변수의 수까지 데이터 인식
  - 매개 변수보다 인자가 적을 경우 => 받은 인자를 전부 다 인식하고 나머지는 undefined로 인식

![image](https://user-images.githubusercontent.com/93081720/166105683-e2deece0-21cd-4ce2-b7ad-9ac5e100674e.png)

- rest parameter(`...`), spread parameter(`...`)

  - `...restArgs`와 같이 입력받는 인자의 수가 정해지지 않은 것을 매개 변수로 전달가능함
  - `...spread`와 같이 배열 인자를 전개하여 전달 가능함

![image](https://user-images.githubusercontent.com/93081720/166105881-b8783e9e-2d3a-4df1-a7c2-3428302e1a3e.png)

- 함수의 typeof 결과는 function임
- JS에 함수는 일급 객체(First Class Citizen)임
  - 일급 객체 : 변수에 할당 가능함, 함수의 매개 변수로 전달 가능함, 함수의 반환값으로 사용 가능함


<br>

#### 함수 선언식(functional declaration)

함수의 이름과 함께 함수를 정의하는 방식(일반적으로 알려진 방식) => 이름과 함께 정의하므로 **익명 함수 불가능**

**함수 선언식으로 선언한 함수는 `var`로 정의한 변수처럼 인식되어 hoisting이 가능함**

![image](https://user-images.githubusercontent.com/93081720/165279001-9b7706b1-e53b-45ce-ab04-69dbb3268dbb.png)

<br>

#### 함수 표현식(functional expression)

함수를 표현식 내에서 정의하는 방식으로, 함수를 변수 선언과 같은 방식으로 정의하는 것이라고 보면 됨

함수의 이름을 생략하고 **익명함수로 정의 가능**(익명 함수는 함수 표현식에서만 가능하다)

함수 표현식으로 정의된 함수는 `let`과 `const`로 정의된 변수처럼 **hoisting이 불가능**하며, 변수 scope규칙을 따름

![image](https://user-images.githubusercontent.com/93081720/165279111-21468f2b-65f7-4c05-84bf-521383c5e63e.png)

<br>

※ 함수를 함수 표현식으로 var키워드를 통해 정의한 경우, 변수가 선언 전에 undefined로 초기화되기 때문에 함수 호출 시 Uncaught TypeError가 발생한다.(hoisting이 불가능할 경우엔 원래 ReferenceError가 발생함) 

![image](https://user-images.githubusercontent.com/93081720/166106012-1645838d-d9a1-4fa4-b770-9b16b61854ab.png)

<br>

#### 정리

![image](https://user-images.githubusercontent.com/93081720/165280322-0fb4aaf1-043c-4dd6-929d-aff81ab26b2d.png)

<br>

#### 화살표 함수(arrow function) `=>`

함수를 비교적 간결하게 정의할 수 있는 문법

- function 키워드 생략 가능

- 매개 변수가 단 하나 뿐이라면 , ()도 생략 가능

- 함수 몸통이 표현식 하나라면 블럭{}과 return도 생략 가능

![image](https://user-images.githubusercontent.com/93081720/165281776-f46a4f43-0d47-44d0-8fa6-a255e8147215.png)

![image](https://user-images.githubusercontent.com/93081720/166106221-bc79a2d4-7e49-49c2-a3c8-79d06966c7e2.png)

<br>

----

### 문자열(String)

#### 핵심 기본 메서드

![image](https://user-images.githubusercontent.com/93081720/165281957-79c9df2c-9194-4c0d-bcf1-5e0a923628ee.png)<br>

- `.includes(value)` : 문자열에 value가 존재하는지 판별하여 참/거짓 반환
- `.split(value)` : value를 기준으로 문자열을 쪼갬
  - value가 없을 경우, 기존 문자열 전체를 배열에 담아서 반환
  - value가 빈 문자열일 경우 문자열을 하나 하나 쪼개어 배열로 반환
- `.replace(from, to)` : from에 존재하는 값 1개를 to로 변경하여 반환
- `.replaceAll(from, to)` : from에 존재하는 값을 모두 to로 변경하여 반환
- `.trim()` : 문자열의 시작과 끝에 존재하는 모든 공백 문자(스페이스, 개행, 탭 등)를 제거한 문자열 반환
  - `.trimStart()` : lstrip()
  - `.trimEnd()` : rstrip()

<br>

----

### 배열(Array)

요소를 담고 있는 참조 타입의 객체로 순서를 보장한다는 특징을 가지고 있음

#### 배열 기본 메서드

![image](https://user-images.githubusercontent.com/93081720/165324940-b6179b94-12e2-4e09-b468-b997d4305234.png)

<br>

배열의 덧셈(리스트 + 리스트 붙이기)

- arr1.push(...arr2) => arr2를 spread operator(...)로 풀은 뒤에 push함

#### Array Helper Method

![image](https://user-images.githubusercontent.com/93081720/165325243-bc918d95-e254-4554-a7a8-13fbd45572ca.png)

<br>

- ##### forEach

![image](https://user-images.githubusercontent.com/93081720/165325886-655367dc-ba5f-450b-9d0d-22c694c49e41.png)

<br>

- ##### map

![image](https://user-images.githubusercontent.com/93081720/165326149-1d28b220-6e82-4bde-935e-2349dff4afca.png)

<br>

- ##### filter

![image](https://user-images.githubusercontent.com/93081720/165326364-1c34c297-fd51-44c0-8098-d01bec316533.png)

<br>

- ##### reduce

![image](https://user-images.githubusercontent.com/93081720/165326508-3640920c-8da8-48e8-8bf9-9da2505b5759.png)

예) reduce 예시

![image](https://user-images.githubusercontent.com/93081720/165326668-9a047a35-5ba5-4460-911b-5267d1a0b6c1.png)

<br>

- ##### find

![image](https://user-images.githubusercontent.com/93081720/165326861-8207b5af-e3cc-496b-a844-118dba85e33f.png)

<br>

- ##### some

![image](https://user-images.githubusercontent.com/93081720/165327016-8a78dbd0-7159-408e-b21d-3203fb0c8a60.png)

<br>

- ##### every

![image](https://user-images.githubusercontent.com/93081720/165327198-846c86f5-18a7-4ae8-b23b-710d1c79d07e.png)

<br>

※ 배열 순회 방법 비교

![image](https://user-images.githubusercontent.com/93081720/165327440-079e545a-92c9-462c-9bbb-a6a74dd42fb6.png)

<br>

---

### 객체(Object)

#### 정의 및 특징

객체는 속성(propery)의 집합이며, 중괄호 내부에 key와 value 쌍으로 표현됨

key는 문자열 타입만 가능하며, 그냥 변수처럼 사용할 수 있으나 key이름 안에 띄어쓰기 등 구분자가 있는 경우 따옴표를 사용함

value는 함수를 포함한 모든 타입이 가능함

객체의 요소 접근은 점(.) 또는 대괄호[]로 가능함(단, key이름에 띄워쓰기가 있는 경우 대괄호로만 접근 가능)

<br>

#### ES6관련 문법

- **속성명 축약**
  - 객체를 정의할 때 key와 할당하는 변수의 이름이 같으면 축약이 가능함

![image](https://user-images.githubusercontent.com/93081720/165329659-d95c7a3b-5093-4df6-9b9e-72c1c295e476.png)

<br>

- **메서드명 축약**
  - 메서드 선언 시 function 키워드 생략 가능

![image](https://user-images.githubusercontent.com/93081720/165329861-f0ade4f4-6690-40b3-9a9f-91494aaf9324.png)

<br>

- **계산된 속성**
  - 객체를 정의할 때 key의 이름을 표현식을 이용하여 동적으로 생성 가능

- **구조 분해 할당(destructing)**
  - 배열 또는 객체를 분해하여 속성을 변수에 쉽게 할당할 수 있음 => 중복의 제거가 핵심


![image](https://user-images.githubusercontent.com/93081720/166106613-a3da8246-10ad-4d19-8800-b9ab562e23d0.png)

- spread operator(...)
  - `...Object`를 사용하여 객체 내부에서 객체를 전개 가능함
  - 얕은 복사에 활용 가능

---

### JSON(JavaScript Object Notation)

key-value쌍의 형태로 데이터를 표기하는 언어 독립적 표준 포맷

JS의 객체와 유사하게 생겼으나 실제로는 문자열임 => 따라서 JS의 객체로서 조작하기 위해서는 parsing이 필수

#### JSON.parse()

- JSON을 JS 객체로 변환시킴

#### JSON.stringify()

- JS 객체를 JSON으로 변환시킴

<br>

---

### this(자기자신 참조 변수)

![image](https://user-images.githubusercontent.com/93081720/165331798-d70b2f68-9421-4f3f-899c-2d12c9e7bf41.png)

- 함수 내부에 this 키워드가 존재할 경우
  - 화살표 함수와 function 키워드로 선언한 함수에서 지칭하는 this가 다를 수 있음
- 함수 내부에 this 키워드가 존재하지 않을 겨우
  - 완전히 동일하게 동작함

<br>

---

### lodash

모듈, 성능 및 추가 기능을 제공하는 JS 유틸리티 라이브러리

array, object 등 자료구조를 다룰 때 사용하는 유용하고 간편한 유틸리티 함수들을 제공함

- 함수 예시) `_.reverse()`, `_.sortBy()`, `_.range()`, `_.random`, `_.cloneDeep()`, `_.sample()` 등

CDN을 body태그에 복사하여 적용 가능함

