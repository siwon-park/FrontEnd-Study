# 02_Vue_CLI & Vue_Router



## 01. SFC(Single File Compenent)

### 1. Component(컴포넌트)

재사용 가능한 소프트웨어의 구성 요소로, 기능 단위별로 파일을 나눠서 개발함

=> 개발 준비 단계에서 시간 소요는 증가하지만 관리가 용이하여 유지 보수의 용이성 향상, 코드 재사용성 향상 등의 이점

- 단일 파일 개발은 쉽게 개발이 가능하지만 향후 관리 및 유지보수가 점차 어려워짐



### 2. SFC(Single File Component)

Vue의 컴포넌트 기반 개발의 핵심 특징 => 하나의 컴포넌트는 `.vue`파일에서 작성되는 코드

화면의 특정 영역(컴포넌트)에 대한 HTML, CSS, JS 코드를 하나의 파일에 관리하며 개발

`Vue 컴포넌트 ==  Vue 인스턴스`



#### Vue 컴포넌트 트리 구조

한 화면 안에서도 기능별로 다양한 컴포넌트 존재

- 하나의 컴포넌트는 여러 개의 하위 컴포넌트를 가질 수 있음 => 트리 구조와 요소
- 컴포넌트 기반의 개발이 **반드시 파일 단위로 구분되어야 하는 것은 아님**을 유의
  - 하나의 파일 안에서도 여러 개의 컴포넌트를 만들어 개발 가능

![image](https://user-images.githubusercontent.com/93081720/167391414-657279b6-93f1-4f07-83bc-e9bf4343d380.png)

<br>

## 02. Vue CLI

### 1. Node.js

브라우저가 아닌 환경에서도 JS를 구동할 수 있도록 해주는 JS런타임 환경 => 새로운 언어가 아님!!

#### ※ NPM(Node Package Manage)

JS를 위한 패키지 관리자 => 다양한 의존성 패키지를 관리

- Python에 pip가 있다면 Node.js에는 npm이 있음
- Node.js의 기본 패키지 관리자로 Node.js 설치 시 기본적으로 설치됨



### 2. Quick Start - CLI

- 설치
  - `npm install -g @vue/cli`
    - -g는 글로벌 옵션(단, g를 사용해야하는 경우와 그렇지 않은 경우가 있으니 유의)

- 버전확인

  - `vue --version`

- 프로젝트 생성

  - `vue create 앱-이름`
    - 앱이름은 'my-first-app'과 같이 케밥 케이스로 작성
  - vue 버전 선택은 Vue2로 한다(현재 기준 최신은 3이나 2가 더 유용함)

- 서버 실행

  - 프로젝트 디렉토리로 이동

  - `npm run serve`



### 3. Vue 프로젝트 구조

#### Vue 컴포넌트 구조

템플릿(HTML), 스크립트(JavaScript), 스타일(CSS)

![image](https://user-images.githubusercontent.com/93081720/167431615-a8c93c12-9817-4f6a-9671-ce96116fcb48.png)

<br>

#### Babel

JS의 ECMAScript 2015+ 코드를 이전 버전으로 변환해 주는 도구(Compiler)

=> 최신 버전의 코드(원시 코드)를 구버전의 코드(목적 코드)로 옮기는 번역기 역할을 하며, Babel의 등장으로 더 이상 작성된 코드가 특정 브라우저에서 동작하지 않는 상황에 대해 고민을 줄일 수 있게 됨

<br>

#### Webpack

모듈 간의 의존성 문제를 해결하기 위한 도구(Module Bundler)

프로젝트에 필요한 모든 모듈을 맵핑하고 내부적으로 종속성 그래프를 빌드함

<br>

#### node_modules

node.js 환경의 여러 의존성 모듈이 모여 있는 곳 => venv와 유사함

<br>

#### index.html

Vue 앱의 뼈대가 되는 파일, 실제 제공되는 단일 html 파일

<br>

#### App.vue

최상위 컴포넌트

<br>

#### main.js

실제 단일 파일에서 DOM과 data를 연결했던 것과 동일한 작업이 이루어지는 곳

Vue 전역에서 활용할 모듈을 등록할 수 있는 파일

<br>

#### pakage_lock.json, package.json

프로젝트의 종속성 목록, 설치된 모듈과 지원되는 브라우저에 대한 구성 옵션이 적혀있는 파일

 => requirements.txt파일과 유사하며, 자동으로 업데이트되기 때문에 별도로 freeze가 필요 없다.

<br>

### 3. Props & $Emit event

부모(Parent)는 자식(Child)에게 데이터를 전달(pass props)하며, 자식은 자신에게 일어난 일을 부모에게 알림(emit event)

![image](https://user-images.githubusercontent.com/93081720/167428654-b91f93b3-c69b-475e-9862-633d8904f19f.png)

<br>

#### 1. Props

"Pass Props"

- 부모(상위) 컴포넌트의 정보를 자식(하위) 컴포넌트로 전달하기 위한 사용자 지정 특성

- 하위 컴포넌트의 템플릿에서 상위 데이터를 직접 참조할 수 없으며, props옵션을 사용하여 수신하는 props를 명시적으로 선언해야함 => 상위 데이터는 props옵션을 통해서 자식으로 전달된다.

- 부모에서 데이터가 업데이트 될 때마다 자식 데이터로도 전달된다.
- 모든 props는 상위 속성과 하위 속성 사이의 **단반향** 바인딩을 형성함
  - 부모의 속성이 변경되면 자식 속성에게 전달되지만, 반대는 안 됨
  - 이유? **자식 요소가 의도치 않게 부모 요소의 상태를 변경하여 앱의 데이터 흐름을 임의로 이해하기 어렵게 만드는 일을 방지하기 위함**

#### 1. 불러오기(import/from) → 2. 등록하기 → 3. 보여주기

![image](https://user-images.githubusercontent.com/93081720/167433106-1d6c0323-bf5e-4e3f-ab53-dc7ace47029c.png)

- ##### 1. 불러오기(import)
  
  - 하위 컴포넌트를 import해옴

![image](https://user-images.githubusercontent.com/93081720/167434099-946b0e6c-e4aa-42b0-aa0c-ff0af64a78ba.png)

- ##### 2. 등록하기(register)
  
  - 하위 컴포넌트를 등록함

![image](https://user-images.githubusercontent.com/93081720/167434302-37417639-f53c-4847-bb73-7086e0d28913.png)

- ##### 3. 보여주기(print)
  
  - 템플릿에 보여줌

★☆ 템플릿에 값을 전달하고자 할 때는 반드시 `v-bind`나 `:`을 사용해야한다. 

![image](https://user-images.githubusercontent.com/93081720/167434608-4b62ad2c-91d6-47ef-bb1f-a0b48fa26c33.png)

※ Props 이름 명명법

- 선언 시: 카멜 케이스(camelCase)
- 템플릿에서: 케밥 케이스(kebab-case)



★☆ **컴포넌트의 data는 반드시 함수여야함** ☆★

기본적으로 각 인스턴스는 모두 같은 data 객체를 공유하므로, 새로운 data 객체를 반환해야함

![image](https://user-images.githubusercontent.com/93081720/167435548-c27b421c-93d2-473b-9866-97b843ff8bf6.png)

<br>

자식 컴포넌트에서 props데이터를 받음

- '데이터 변수명: 자료형'으로 받아옴

![image](https://user-images.githubusercontent.com/93081720/167433675-d9c16ea6-3aa2-4c77-843c-e6a8f6f6738c.png)



#### 2. Emit

"Listening to Child Components Events"

- `$emit(eventName)`
  - 현재 인스턴스에서 이벤트를 트리거함
  - 추가 인자는 리스너의 콜백함수로 전달
- **부모 컴포넌트는 자식 컴포넌트가 사용되는 템플릿에서 v-on을 사용하여 자식 컴포넌트가 보낸 이벤트를 청취**할 수 있음



예시)

input태그에 텍스트를 입력한 뒤에 enter를 누르면 지정된 메서드인 childInputEnter가 트리거됨

childInputEnter는 '발생되는-event-이름'을 발생시키고, childInputData를 보냄(현재 childInputData는 v-model에 의해 양방향 바인딩이 되어있고, 입력된 텍스트로 데이터 값이 변경되어 있는 상황임)

<br>

![image](https://user-images.githubusercontent.com/93081720/167441695-894cb4c3-3f71-41a5-9a76-db5ba6df15fb.png)

<br>

![image](https://user-images.githubusercontent.com/93081720/167441504-21968e84-b1fe-4fae-8313-9f9cf79606c6.png)

★☆ **event명 네이밍 컨벤션** ☆★

컴포넌트 및 props와 달리, 이벤트는 자동 대소문자 변환을 제공하지 않음

그런데 DOM 템플릿의 v-on의 이벤트 리스너는 항상 자동으로 소문자 변환되기 때문에 만약에 v-on:myEvent라는 이름로 넘겨줬다면 자동으로 v-on:myevent로 변환됨 => event가 작동하지 않음!!

따라서 이러한 이유로 이벤트 이름에는 항상 kebab-case를 사용하는 것을 권장 

<br>

부모는 v-on(@)으로 자식이 kebab-case로 보낸 이벤트명과 데이터를 받아서 표현함

parentGetChange라는 함수를 통해서 데이터를 받아옴

여기서 inputData는 자식이 넘긴 데이터인데 변수명을 아무거나 지정해준 것임

![image](https://user-images.githubusercontent.com/93081720/167443631-48c98e3a-e2f2-4ec5-b630-efcc671734dc.png)

<br>

![image](https://user-images.githubusercontent.com/93081720/167443886-60f6ab01-b383-43f4-bf2a-ad8bbf538e2a.png)

<br>

### 정리

#### props

- 상위 컴포넌트에서 props를 pass
  - pass할 data를 함수의 return 형태로 선언함
  - v-bind를 통해 pass함
- 자식 컴포넌트에서는 props객체를 선언하고, 해당 데이터 변수명과 형태를 받음



#### emit

- 하위 컴포넌트에서 부모 컴포넌트로 이벤트를 보냄
  - v-on을 통해 발생한 이벤트에 메서드를 지정함
  - 메서드를 선언하여 전달할 함수명과 데이터를 emit함
- 부모 컴포넌트의 템플릿에서 자식 컴포넌트가 사용되는 곳에서 v-on을 통해 자식이 전달한 함수명을 v-on으로 받음



## 2. Vue Router

라우트(route)에 컴포넌트를 맵핑한 후, 어떤 주소에서 렌더링할 지 알려줌

SPA 상에서 라우팅을 쉽게 개발할 수 있는 기능을 제공함

※ router: 위치에 대한 최적의 경로를 지정하며, 이 경로를 따라 데이터를 다음 장치로 전향시키는 장치



### Vue Router

vue router로 인해 App.vue의 코드가 변경되었으며, router폴더에 index.js가 생기고, views 디렉토리가 새로 생기게 됨

#### App.vue

최상위 컴포넌트



#### index.js

라우팅에 관련된 정보 및 설정이 작성되는 곳



#### 1. `<router-link>`

사용자 네비게이션을 가능케하는 컴포넌트

목포 경로(url)를 'to' 속성에 지정해준다.

HTML5 히스토리 모드에서 router-link는 클릭 이벤트를 차단하여 브라우저가 페이지를 다시 로드하지 않도록 함 => a 태그지만 기본 GET요청을 보내는 이벤트를 제거한 형태로 구성됨

#### ※ Histroy Mode(히스토리 모드)

브라우저의 히스토리는 남기지만 실제 페이지는 이동하지 않는 기능을 지원

=> 페이지를 다시 로드하지 않고 URL을 탐색 가능

=> SPA의 단점 중 하나인 "URL이 변경되지 않는다"를 해결

<br>

#### 2. `<router-view>`

주어진 라우터에 대해 일치하는 컴포넌트를 렌더링하는 컴포넌트

실제 컴포넌트가 DOM에 부착되어 보이는 자리를 의미함 => router-link를 클릭하면 해당 경로와 연결되어 있는 index.js에 정의한 컴포넌트가 위치한 곳으로 이동

<br>

#### 3. `this.$router.push`

`<router-link to="...">`방식이 a태그를 만드는 '선언적 방식'이라면, `$router.push(...)`방식은 '프로그래밍 방식'임 => 두 방식의 기능적인 부분은 차이가 없음

<br>

#### 4. Dynamic Route Matching

동적 인자 전달 => `:` 사용

주어진 '패턴'을 가진 라우트를 동일한 컴포넌트에 맵핑해야하는 경우 사용

- 예) 각기 다른 userId값을 url에 맵핑해야할 경우 사용(django의 urls.py의 path함수에 url을 지정할 때 `<int: article_pk>`와 같이 쓰는 것과 유사)

![image](https://user-images.githubusercontent.com/93081720/168484561-506c4005-f651-4882-8d78-c1be94e60772.png)

<br>

#### views/

router(index.js)에 맵핑되는 컴포넌트를 모아두는 폴더

<br>

#### components/

router에 맵핑된 컴포넌트 내부에 작성하는 컴포넌트를 모아두는 폴더

<br>

### 1. Quick Start - Router

#### 1. 프로젝트 생성 및 이동

`vue create kebab-case-app-name`

`cd kebab-case-app-name`

#### 2. Vue Router Plugin 설치

`vue add router`

※ 기존 프로젝트를 진행하는 도중에 플러그인을 설치하면 App.vue에 써있던 내용을 다 덮어쓰므로, 아예 프로젝트 시작 시 설치하거나, 백업 후 설치를 권장

#### 3. commit/history 모드 여부 확인

모두 yes

<br>

### Vue Router가 필요한 이유

Vue.js에서 라우팅을 편리하게 할 수 있는 Tool을 제공해주는 라이브러리

- SPA 등장 이전
  - 서버에서 모든 라우팅을 통제하며, 요청 경로에 맞는 HTML을 제공하였음
  - SSR(Server Side Rendering) => 라우팅에 대한 결정권을 서버가 가짐
- SPA(Single Page Application) 등장 이후
  - 서버는 index.html 하나만 제공하며, 이후 모든 처리는 HTML위에서 JS코드를 활용
  - 요청에 대한 처리를 더 이상 서버에서 하지 않음(할 필요가 없어짐)
  - CSR(Client Side Rendering) => 클라이언트는 더 이상 서버로 요청을 보내지 않고, 응답받은 HTML 문서 안에서 주소가 변경되면 특정 주소에 맞는 컴포넌트를 렌더링함. 라우팅에 대한 결정권을 클라이언트에서 가짐