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