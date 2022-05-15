# Vue.js

### 프론트엔드 프레임워크

프론트엔드 개발의 핵심

html, css, js를 통해서 UI를 보여주는 것

![image](https://user-images.githubusercontent.com/93081720/166920426-8670a2db-00c9-49bf-b57e-08d89e098053.png)

대표적인 프론트엔드 프레임 워크

- Vue.js, React, Angular



### 정의

사용자 인터페이스를 만들기 위한 진보적인 JS 프레임워크

SPA(single page Application)를 완벽하게 지원



### SPA(Single Page Application)

단일 페이지 어플리케이션

현재 페이지를 동적으로 렌더링함으로써 사용자와 소통하는 웹 어플리케이션 => 1개의 웹페이지에서 여러 동작이 이루어지며 모바일 앱과 비슷한 형태의 UX를 제공함

- 단일 페이지로 구성되며 서버로부터 최초에만 페이지를 다운로드하고 이후에는 동적으로 DOM을 구성
  - 처음 페이지를 받은 이후부터는 필요한 부분만 동적으로 다시 작성함

- 연속된 페이지 간의 사용자 경험을 향상
  - 특히, 모바일 사용량이 증가하고 있는 현재, 트래픽 감소와 속도, 사용성, 반응성의 향상은 매우 중요

- 동작 원리 일부가 CSR(Client Side Rendering)의 구조를 따름



#### 등장 배경

과거 웹 사이트들은 MPA(Multi Page Application)방식으로 요청에 따라 매번 새로운 페이지를 응답하는 방식이었음

스마트폰의 등장으로 모바일 최적화의 필요성이 대두 => 이러한 문제를 해결하기 위해 프론트엔드 프레임워크 등장 (CSR, SPA)



### CSR(Client Side Rendering)

**클라이언트에서 화면을 구성**, SPA가 사용하는 렌더링 방식 => 브라우저에 렌더링될 HTML을 클라이언트가 구성하는 방식

**최초 요청 시, html, css, js 등 데이터를 제외한 각종 자원(리소스)를 응답받고 이후 클라이언트에서는 필요한 데이터만 요청해 JS로 DOM을 렌더링 하는 방식** => 처음에는 뼈대만 만들고 나중에 브라우저에서 DOM을 그림

- 장점
  - 서버와 클라이언트 간 트래픽 감소 => 웹 App에 필요한 모든 정적 리소스를 최초 한 번 다운로드한 뒤 필요 데이터만 갱신함
  - 사용자 경험 향상 => 전체 페이지를 다시 렌더링하지 않고 필요한 부분만 렌더링하기 때문에 빠름

- 단점
  - SSR에 비해 전체 페이지 최종 렌더링 시점이 느림 => 모든 리소스를 다 다운받고 나서 그림을 그리므로

![image](https://user-images.githubusercontent.com/93081720/166680256-929139ed-e435-4ae4-9fbb-cde880dfeb5e.png)

<br>

### SSR(Server Side Rendering)

서버에서 클라이언트에게 보여줄 페이지를 모두 구성하여 전달하는 방식

브라우저에 렌더링될 HTML을 서버에서 구성해주는 방식

![image](https://user-images.githubusercontent.com/93081720/166680329-5b5d7056-5f37-419e-96a5-c57c99e8f839.png)

- 장점
  - 초기 구동 속도가 빠름 => 서버에서 전부 구성한 뒤에 한번에 렌더링하므로 클라이언트가 빠르게 컨텐츠를 볼 수 있음
  - SEO(검색 엔진 최적화)에 적합 => 이미 DOM에 모든 데이터가 작성되어 있기 때문
    - Search Engine Optimization: 웹 페이지 검색 엔진이 자료를 수집하고 순위를 매기는 방식에 맞게 웹 페이지를 구성해서 검색 결과의 상위에 노출될 수 있도록 하는 작업
- 단점
  - 모든 요청마다 새로운 페이지를 구성해서 전달해야함
    - 반복되는 새로 고침으로 UX가 떨어짐
    - 상대적으로 서버 트래픽이 많아져서 서버에 부담



=> 둘 중 어떤 것이 더 좋다고 말할 순 없으며 상황에 따라 보다 적절한 것을 선택

<br>

### 왜 Vue를 쓰는가?

- 기존 Vanilla JS로 작업할 경우
  - 한 유저가 작성한 글이 100개 이상일 경우 DOM상의 100개의 작성자 이름이 모두 수정되어야 하는데 이에 따른 모든 요소를 선택하고 이벤트 등 값 변경이 매우 번거롭고 작업량이 많음(단순 querySelectorAll로 해결할 문제 X)
- Vue.js로 작업할 경우
  - DOM과 Data가 연결되어 있어 Data만 변경하면 연결된 DOM이 알아서 변경됨 => 데이터에 대한 부분만 신경쓰면 되므로 DX; Developer Exp 향상



### MVVM Pattern(MVVM Design Pattern)

#### Model

**JS Object => {key: value} => 데이터(data)**

Vue Instance 내부에서 data라는 이름으로 존재

data가 바뀌면 View(DOM)이 반응(변화)



#### View

**DOM(HTML)**

데이터의 변화에 따라 바뀌는 대상



#### ViewModel

**Vue Instance**

View와 Model 사이에서 데이터(data)와 DOM에 관련된 모든 일을 처리

ViewModel을 활용해서 data를 얼마만큼 잘 처리해서 (DOM에) 보여줄 것인지가 핵심 로직

![image](https://user-images.githubusercontent.com/93081720/166672956-16e6ad1b-4fb7-4ab4-aa98-53c5087144d4.png)

<br>

### 코드 작성 순서

기본적으로 1. Data 로직 작성 -> 2. DOM 작성으로 이루어짐



## Vue CDN 기본 문법

### Vue Instance

모든 Vue 앱은 Vue 함수로 인스턴스를 만드는 것에서 시작 

- `new Vue({obj})` => Vue 인스턴스 생성
  - 옵션으로 객체(object)를 전달해야함

![image](https://user-images.githubusercontent.com/93081720/166924639-d349352d-7377-49a1-bf44-1e4c5f96d34d.png)

<br>

- `el`
  - Vue 인스턴스와 연결할 기존 DOM 요소를 적음
    - CSS 선택자 문자열, HTML Element로 작성함
    - new를 이용한 인스턴스 생성 때만 사용
    - 위의 예시에서는 id 속성값에 app인 DOM과 연결

<br>

- `data`
  - Vue 인스턴스의 데이터 객체
  - Vue 인스턴스의 상태 데이터를 정의하는 곳이며, Vue template에서 Interpolation(보간법)으로 접근 가능
  - v-bind, v-on과 같은 directive에서도 사용 가능
  - Vue 객체 내 다른 함수(메서드)에서 this키워드를 통해 접근 가능 => 예) this.imgSrc
- `methods`
  - Vue 인스턴스에 추가할 메서드들에 대한 객체
  - Vue template에서 Interpolation(보간법)으로 접근 가능
  - v-bind, v-on과 같은 directive에서도 사용 가능
  - Vue 객체 내 다른 함수(메서드)에서 this키워드를 통해 데이터 등에 접근 가능
  - 화살표 함수를 메서드 정의하는데 사용하면 안 됨 => 화살표 함수가 부모(window) context를 바인딩하기 때문에 이 때 this는 Vue 인스턴스가 아님



**※ this에 대해서 주의할 점**

this는 기본적으로 Vue 함수 객체 내에서 Vue 인스턴스를 가리킴

그러나, 화살표 함수로 정의된 함수에서 this를 호출하면 부모인 window를 가리키는 것이므로 유의할 것 

따라서 data, methods를 정의할 때 화살표 함수를 사용하지 않도록 하자

![image](https://user-images.githubusercontent.com/93081720/166927118-f9572918-6d71-4236-9cad-2f10015b6455.png)

<br>

### Interpolation(보간법)

![image](https://user-images.githubusercontent.com/93081720/166927798-c7b65bae-ab27-4f8d-979b-f748dbe79f0c.png)

- 직접 Text로 `{{ data }}` 입력
- `v-directive="data"` 형태로 입력
- JS 표현식 등

<br>

### Directive(디렉티브)

`v-접두사` 형태의 특수 속성

속성 값은 단일 JS표현식이 됨(v-for 예외)

표현식의 값(data)이 변경될 때 반응적으로 DOM에 적용하는 역할을 함

![image](https://user-images.githubusercontent.com/93081720/166928582-8b1b0c9d-4331-42f5-a5e8-8fcdf0be51b4.png)

<br>

### v-text

Element의 텍스트 컨텐츠를 지정한 data로 업데이트함

![image](https://user-images.githubusercontent.com/93081720/167286471-7bec0bc8-f3b6-4d9e-b369-2e0b70f1d22f.png)

<br>

### v-html

Element의 innerHTML을 지정한 data로 업데이트함 => 단, XSS공격에 취약하므로 사용하지 않는 것을 권장

![image](https://user-images.githubusercontent.com/93081720/167286557-a39ccbba-29f1-4a2b-a8ab-286553ee8c83.png)

<br>

### v-show

값에 따른 조건부 렌더링을 할 수 있게 해줌

단, 요소는 항상 렌더링되어 DOM에 남아있음 => 조건에 따라 출력이 토글링 되는 것임

![image](https://user-images.githubusercontent.com/93081720/167286695-3c50cda8-b913-4257-8b61-cf802bc567da.png)

<br>

DOM에 렌더링은 되었지만, display속성이 none으로 부여되어 페이지에 출력되지는 않음

![image](https://user-images.githubusercontent.com/93081720/167286838-6ced74ee-54c0-4fd9-bb8e-3647e99e3500.png)

<br>

### v-if, v-else-if, v-else

v-show와 마찬가지로 조건부 렌더링 중 하나이지만, 조건에 따라 요소를 렌더링함 => 표현식이 참일 경우에만 DOM에 Element가 렌더링됨(Element 및 포함된 directive표현은 토글하는 동안 삭제 및 다시 작성됨)

![image](https://user-images.githubusercontent.com/93081720/167286919-0a6dd66d-8a0f-46df-aadf-803dbaf933d8.png)

<br>

![image](https://user-images.githubusercontent.com/93081720/167287009-7341639a-eebd-459a-b873-cc86bfa91cd1.png)

<br>

![image](https://user-images.githubusercontent.com/93081720/167287077-ece747ee-5830-4551-9652-c8f02e5c240d.png)

<br>

### v-for

`item in items`구문을 사용하며, item의 위치 변수를 각 요소에 사용 가능함(객체는 key)

v-if와 함께 사용하는 경우 v-for가 우선순위가 더 높음 => 동시에 사용하는 것을 지양할 것!

![image](https://user-images.githubusercontent.com/93081720/167287371-ee7d3568-4abc-4dc4-9b9e-4703aec0f674.png)

<br>

### v-on

Element에 이벤트리스너를 연결함

- Shorthand `@`
  - 예시) `v-on:click` => `@click`

![image](https://user-images.githubusercontent.com/93081720/167287683-526176ea-8b33-4b9c-95c5-e52fdff5a24a.png)

<br>

### v-bind

HTML 태그의 속성에 Vue의 상태 데이터를 값으로 할당 가능

object형태로 사용하면 value가 참(true)인 key가 class 바인딩 값으로 할당됨 => 예)`{ active: isRed }`  

![image](https://user-images.githubusercontent.com/93081720/167287879-ce6bfc58-53dd-4f42-b1d7-210712179974.png)

- Shorthand `:`
  - 예시) `v-bind:href` => `:href`

<br>

### v-model

- HTML form 요소의 값과 data를 **양방향 바인딩**
  - v-on일 경우에는 단방향 바인딩임


![image](https://user-images.githubusercontent.com/93081720/167288144-547d98ab-c8a2-417a-91ea-94b78c9dbf92.png)

<br>

### methods & computed & watch

- #### methods

  - methods는 ()로 메서드 호출을  통해서 값을 계산함 => 데이터를 바꾸는 로직
    - 메서드는 호출하면 렌더링 시 값을 매번 계산함

- #### computed

  - 함수의 형태로 정의하지만 함수가 아닌 함수의 반환값이 바인딩됨
  - data에 의존하는 계산된 속성 => **종속된 데이터가 변경될 때만 함수를 실행함**
    - 어떤 데이터도 의존하지 않는다면 computed의 속성은 절대 불변함
  - computed는 이미 계산되어 저장(캐싱)된 값을 반환 => 데이터를 얻는 로직
    - 여러 번 호출해도 계산을 다시 하지 않고 이미 계산된 값을 반환하는 것임
  - 따라서 computed로 선언한 메서드는 반드시 return값이 있어야 함
  - 선언형 프로그래밍 방식
  - "특정 값이 변경되었을 경우, 변경된 값을 다시 계산하여 저장하고 보여준다"

- #### watch

  - data를 감시하는 함수 => data에 변화가 일어났을 때만 실행되는 함수를 말함
  - 명령형 프로그래밍 방식
  - "특정 값이 변경되었으면 어떤 다른 작업을 시행한다" => 종속된 특정 대상이 변경되었을 때, 콜백 함수를 실행하기 위한 트리거

![image](https://user-images.githubusercontent.com/93081720/167288241-254e8c6b-28d6-477b-81a1-4a5341e4996e.png)

<br>

### View LifeCycle Hooks

![image](https://user-images.githubusercontent.com/93081720/166928878-4d7f12e5-a65a-42ad-9ff4-36fdc734402f.png)

<br>

#### created

- Vue Instance가 생성되는 시점



#### mounted

- Vue Instance와 DOM이 연결되는 시점



#### updated

- data의 변화 이후 DOM이 변경되는 시점에 발생