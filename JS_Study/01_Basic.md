# 01_Basic

> JavaScript의 기초



## 1. JS의 필요성

- 브라우저를 동적으로 표현하기 위해 사용
- ★☆브라우저를 조작할 수 있는 유일한 언어☆★

<br>

## 2. DOM, BOM, ECMA Script

### 1) DOM

> Document Object Model

- HTML, XML과 같은 문서를 다루기 위한 프로그래밍 인터페이스
- 문서를 구조화하고 구조화된 구성 요소를 하나의 객체로 접근하여 다루는 논리적인 트리 형태의 모델
- 문서가 객체(Object)로 구조화 되어 있어 키(key)로 접근 가능

#### (1) 파싱(Parsing)

- 구문 분석, 해석
- 브라우저가 문자열을 해석하여 DOM Tree로 만드는 과정을 파싱이라고 함

<br>

### 2) ECMA Script

- ECMA에서 규격에 따라 정의한 언어
- 브라우저, DOM을 조작하기 위한 언어
- 현재 버전은 ECMA Script 6이며, 간단하게 ES6이라고 표현함
- ECMA Script == JavaScript

<br>

## 3. 기본 문법

### 1) 변수 선언

#### (1) var

- var 키워드로 선언한 변수는 재선언, 재할당 모두 가능
- ES6 이전에 변수를 선언할 때 사용하는 키워드
- 호이스팅(hoisting) 현상 발생으로 인한 사이드 이펙트 존재
- 함수 스코프(function scope) 내에서 참조 가능

##### ★ 호이스팅(hoisting)

- 감아올리다 => "선언과 호출이 뒤바뀌어도 상관 없다"
- 변수를 선언하기 이전에 참조할 수 있는 현상
- 변수 선언 이전의 위치에서 참조를 하게 될 경우 에러를 반환하지 않고 undefined를 반환하며 그대로 진행 가능

```javascript
console.log(name); // 에러가 아닌 'undefined' 반환
var name = '시원';
```

#### (2) let과 const

- let
  - 변수의 개념. 재할당 가능
  - 동일한 이름의 변수명으로 재선언 불가능
    - let이라는 키워드로 동일 변수명을 사용하여 선언하는 행위는 최초 선언 시에만 가능함
  - 블록 스코프(block scope)
- const
  - 상수의 개념. 재할당 불가능
  - 동일한 이름의 변수명으로 재선언 불가능
    - const라는 키워드로 동일 변수명을 사용하여 선언하는 행위는 최초 선언 시에만 가능함
  - 블록 스코프(block scope)

<br>

### 2) 스코프

#### (1) 함수 스코프(function scope)

함수 블록 내에서는 어디에서든 참조가 가능하지만, 함수 밖에서는 참조가 불가능함

```javascript
function foo() {
    var x = 3;
    if (true) {
        var y = 5;
    }
    console.log(x); // 3
    console.log(y); // 5 -> y는 조건문 블록에 선언되었지만 같은 함수 스코프 내에 있어서 참조 가능
}
console.log(x); // 에러 발생(Reference Error) -> 함수 스코프 밖이기 때문에 참조 불가
```



#### (2) 블록 스코프(block scope)

조건문과 같은 블록 내에서만 참조가 가능함

```javascript
function foo2() {
    let a = 2;
    if (true) {
        const b = 4;
    	console.log(b); // 4
    }
    console.log(a); // 2 -> 같은 블록 내이기 때문에 참조 가능
    console.log(b); // 에러 발생 -> b는 if 문 블록 내에서만 참조 가능하기 때문
}
```

