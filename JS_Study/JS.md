# 자바스크립트

## ch01

### 01. JavaScript(자바스크립트, JS)란?

**사용자와 동적으로 상호작용** 하기 위한 웹 페이지에 대한 욕구로서 JS의 탄생을 불러옴

'HTML을 제어하는 언어'



### 02. `<script>`태그

스크립트 태그는 태그 안에 오는 내용이 JS라는 것을 명시해주는 태그임

![image](https://user-images.githubusercontent.com/93081720/159271203-4645dcbe-5ede-4dec-8259-886b02cfb851.png)



### 03. 이벤트(Event)

어떤 사건이 발생했을 때, 웹 브라우저에서 JS가 실행되는 일을 **이벤트(Event)**라고 한다.

이벤트의 종류에는 `onclick`, `onchange`, `keydown` 등 여러 이벤트가 존재한다(자세한 것은 공식문서 참조)

![image](https://user-images.githubusercontent.com/93081720/159271695-e2fc4f03-27c6-4e53-8f7e-1fa09a7bc7ed.png)



### 04. 콘솔(console)

웹 페이지에서 검사(f12키) 기능을 통해 검사 창에서 콘솔(console)을 실행할 수 있는데, 여기서 JS에 대한 구문을 실행 가능하다(마치 일반 프로그래밍 언어에서 터미널을 사용하는 것과 비슷함)

※ 한번 실행했던 코드는 윗 방향키(↑)를 누르면 다시 쉽게 호출이 가능하다.

- 콘솔차에서 문자열의 길이를 alert을 통해 호출한 예시

![](https://user-images.githubusercontent.com/93081720/159267564-69bfc3af-16f5-4754-9c39-cdc5698f8ae8.png)



### 05. 데이터 타입(Data Type)

JS의 데이터 타입에는 6가지 기본형(Primitive Type)과 객체(Object)가 있다.

- 6가지 기본형: Boolean, Null, Undefined, Number, String, Symbol



### 06. 변수(Variable)

변수는 왜 쓰는가? => 가장 핵심은 재사용성 및 생산성의 향상

※ 변수를 쓸 때는 앞에 키워드로 `var`을 쓰는 것을 '권장'한다.

※ shift+enter키 : 코드 실행 유보



### 07. querySelector()

제어할 태그를 선택하여 동적으로 CSS를 적용 가능함

![image](https://user-images.githubusercontent.com/93081720/159381871-321366e3-8638-4a42-8fd5-3bf7e0403f14.png)



## ch02

### 1. 프로그램, 프로그래밍, 프로그래머

- 프로그램 = 순서
- 프로그래밍 = 순서를 만드는 행위
- 프로그래머 = 순서를 만드는 행위를 하는 사람

HTML은 프로그래밍 언어라고 할 수 없다 => 왜냐하면 '표현'에 그 핵심과 목적이 있기 때문에 순서나 실행이 존재하지 않는다.

반면에 JS는 프로그래밍 언어이다. => 왜냐하면 조건 및 행동에 따른 실행, 순서를 달리할 수 있기 때문이다.



### 2. 조건문

※ 토글(Toggle) : 하나의 설정, 장치 또는 버튼이지만, 조건에 따라서 그 기능을 달리 할 수 있는 것. 가장 대표적인예는 On/Off 버튼

- 비교 연산자 `===`
  - JS에서 비교 연산자는 일반적인 프로그래밍 언어와 달리  `===`이다

![image](https://user-images.githubusercontent.com/93081720/159491384-01f61ec7-9b63-4d88-b421-2d62125a7a73.png)

※ html에서 `<`나 `>`를 쓰면 태그를 나타내는 기호와 중복되어 혼동할 수도 있기 때문에 `&lt;`와 `&gt;`로 쓴다.

![image](https://user-images.githubusercontent.com/93081720/159491491-1616a82c-7948-4745-9a8c-d343e123c036.png)

※ JS에서 document.write()안에 쓰는 문자열에도 html태그를 쓴다면 동일한 기능을 적용 가능함 

![image](https://user-images.githubusercontent.com/93081720/159491251-3f860383-a7f7-4455-bcbe-113ab4c3695d.png)
