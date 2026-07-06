# Useful_Functions

JS 유용한 함수, 사용 정리

## 1. 숫자 자리수 콤마 표현하기

기본적으로 콤마(,)가 찍힌 숫자는 숫자가 아니므로 숫자 데이터를 문자열로 치환하여 콤마를 붙여주는 방법으로 구현해야한다

### 1. 정규식 이용

```javascript
const number = 123456789;
const comma_number = number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
```



### 2. toLocaleString함수

toLocaleString() 함수를 사용하여 간단하게 천 단위마다 콤마를 추가 가능

```javascript
const number = 123456789;
const comman_number = number.toLocaleString('ko-KR');
```

<br>

## 2. setTimeOut(), setInterval()

### 1. setTimeOut()

어떤 코드를 바로 실행하지 않고 **일정 시간 기다린 후** 실행해야 하는 경우에 사용함

```javascript
setTimeout(() => {실행할 함수1, 실행할 함수2, ...}, 시간)
```

```javascript
setTimeout(() => console.log("2초 후에 실행됨"), 2000);
```

<br>

### 2. setInterval()

웹페이지의 특정 부분을 **주기적**으로 업데이트해줘야 하거나, 어떤 API로 부터 변경된 데이터를 **주기적**으로 받아와야 하는 경우에 사용함

```javascript
setInterval(() => {주기적으로 실행할 함수1, 주기적으로 실행할 함수2, ...}, 시간)
```

```javascript
setInterval(() => console.log(new Date()), 2000);
```

<br>

### 3. clearTimeoout(), clearInterval()

`setTimeout()` 함수와 `setInterval()` 함수를 사용한 후에는 반드시 `clearTimeout()` 함수와 `clearInterval()` 함수를 사용해서 타이머를 청소해주는 습관을 들이는 것을 권장함. 특히, SPA(Single Page Application)을 개발할 때는 이 부분이 메모리 누수(memory leak)로 이어질 수 있기 때문

<br>

