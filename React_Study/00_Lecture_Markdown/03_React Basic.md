# 03_React Basic and Component

### What is React

리액트는 사용자 인터페이스를 구축하는 자바 스크립트 라이브러리

리액트를 사용하지 않아도 웹 사이트를 구축할 수 있지만, 리액트를 사용하면 좀 더 쉽고 강력한 웹 사이트를 구축할 수 있음

<br>

### Component

모든 유저 인터페이스는 컴포넌트로 구성됨

#### 재사용성

컴포넌트는 재사용이 가능하여 코드의 반복을 피할 수 있음

#### 분리 가능성

너무 많은 코드를 한 곳에 모아둘 필요 없이, 모듈화와 같이 컴포넌트, 코드를 분리하여 보관 가능

<br>

### React Code

리액트 코드는 자바 스크립트 코드임

그러나 .js파일의 코드를 살펴보면 일반적인 자바 스크립트 파일에 쓸 수 없는 코드들이 있는데 이를 가능하게 해주는 것이 npm임 => js파일이 실행되면서 코드가 변환되어 DOM으로 html에 올라가는 구조

#### index.js

가장 처음으로 실행되는 js 파일

react-dom이라는 라이브러리에서 ReactDOM이라는 객체를 import하여

<br>

#### index.html

싱글 페이지 어플리케이션(SPA)의 핵심, 유일한 html => 모든 작업물의 결과가 이 html에 렌더링됨

![image](https://user-images.githubusercontent.com/93081720/176606726-10c7047f-430f-4fbb-89d8-2c45e7004681.png)

id="root"로 태그된 div태그 안에 모든 컨텐츠가 표현됨

<br>

### JSX

자바 스크립트 안에 있는 html 코드를 JSX라고 한다 => Java Script XML

자바 스크립트, 브라우저에 이러한 코드가 허용되지 않음에도 실행되어 렌더링 되는 이유는 모든 것이 표현되기 전에 변환과정을 거치기 때문

JSX는 HTML이 아니다. JS코드 중 하나이며, 따라서 HTML 문법 규칙을 그대로 적용할 수는 없다.

예) class=""으로 쓸 수 없고, className=""으로 사용한다

![image](https://user-images.githubusercontent.com/93081720/176645254-eb29ae91-64c8-43b1-9181-06644101f505.png)

<br>

#### 명령형 방식의 코딩

매번 번거롭게 일일히 다 지정해줘야하고 코드의 가독성 및 재사용성이 떨어질 수 밖에 없음

![image](https://user-images.githubusercontent.com/93081720/176647726-055cce3d-9003-469f-92b4-ad4f0766fd14.png)

<br>

#### 선언형 방식의 코딩

최종적으로 렌더링되는 상태에 대해서만 정의하고 재사용성이 높고 간결함

![image](https://user-images.githubusercontent.com/93081720/176647779-51ad17ec-cc4c-415b-ac5a-e4ebeafc4a37.png)

<br>

사용자 정의 컴포넌트는 반드시 첫문자를 대문자로 쓴다

#### 루트 엘리멘트

JSX에서 Vue에서와 마찬가지로 하나의 루트 엘리멘트를 갖는다

#### 왜 하나의 루트 엘리멘트가 필요한가?

예전에는 React를 import하여 React.creatElement로 코드를 짰음

![image](https://user-images.githubusercontent.com/93081720/176991691-3c2b2a05-bfa4-401c-b578-accfa0a3647b.png)

위 예시에서 보면 div태그 하나를 return하며, 그 안에는 2개의 React 객체가 담겨있음

여기서 만약 하나의 루트 엘리멘트가 아니라면? 어떻게 될까?

![image](https://user-images.githubusercontent.com/93081720/176991777-006796ad-7330-4930-8b48-930a2e7805cb.png)

하나의 루트 엘리멘트가 필요한 이유는 위 그림이 보여주는 것과 같다. 어떤 함수의 결과로 서로 다른 2개의 요소를 동시에 return 받을 수 있는가? 어느 한 시점에 함수의 결과로 2개 이상의 리턴 값을 반환 받는 것은 불가능하다(파이썬에서 return a, b와 같이 반환받을수 있지만, 엄연히 말해 튜플로 한 개의 리턴값을 받는 것이다)

<br>

#### JSX에서의 표현

중괄호를 사용해서 변수 바인딩을 하여 렌더링이 가능함

단, 저장된 값일 경우 해당 변수명을 바로 사용가능하지만, 데이터 객체일 경우 변환이 필요함

![image](https://user-images.githubusercontent.com/93081720/176933021-b027d853-db5f-4d16-a385-410c740bbdbc.png)

<br>

### 컴포넌트

함수형 컴포넌트는 화살표 함수로도 표현 가능함

표현하는 방식만 다를 뿐 성능, 기능상 차이는 없음

![image](https://user-images.githubusercontent.com/93081720/176992570-214aefa0-f0d3-4c4d-b988-b69014a60ec9.png)

![image](https://user-images.githubusercontent.com/93081720/176992593-b6986ab5-9a35-48bf-9e61-9072940d219c.png)

<br>