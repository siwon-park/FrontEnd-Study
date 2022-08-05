# Useful_Functions

JS 유용한 함수, 사용 정리

## 숫자 자리수 콤마 표현하기

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

