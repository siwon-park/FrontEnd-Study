# Vuex

## 1. Vuex

### Vuex

vue **상태 관리** 패턴(state management pattern) + 라이브러리

상태를 전역 저장소로 관리할 수 있도록 지원하는 라이브러리

- 상태가 예측 가능한 방식으로만 변경될 수 있도록 보장하는 규칙을 설정
- 어플리케이션의 모든 컴포넌트에 대한 **중앙 집중식 저장소** 역할



※ state

- data이면서, 어플리케이션의 핵심이 되는 요소
- 중앙에서 관리하는 모든 상태 정보



### 상태 관리 패턴(Vuex Management Pattern)

컴포넌트의 공유된 상태를 추출하고 이를 전역에서 관리하도록 하는 것

컴포넌트는 커다란 view가 되며, 모든 컴포넌트는 트리에 상관없이 상태(state)에 접근하거나 동작을 트리거할 수 있음

=> 상태 관리 및 특정 규칙 적용을 통해 코드의 구조와 유지 관리 기능 향상 가능



- 중앙 저장소(store)에 state를 모아놓고 관리
- 규모가 큰, 컴포넌트 간 중첩 및 관계가 복잡한 프로젝트에서 매우 효율적
  - 동일한 state를 공유하는 다른 컴포넌트들 동기화
  - 각 컴포넌트는 중앙 집중 저장소의 state만 신경쓰면 됨



![image](https://user-images.githubusercontent.com/93081720/167895656-3a56beea-9c88-41c1-90a2-53ce6f8b922e.png)

<br>

#### 기존의 pass props & emit event

- 각 컴포넌트는 독립적으로 데이터를 관리함

- 데이터는 단방향으로 흐르며 부모에서 자식으로만 전달 가능하고, 자식에서 부모에게 전달하려면 이벤트를 트리거해서 전달해야함
  - 장점: 데이터 흐름을 직관적으로 파악 가능(몇 단계만 거치거나 바로 위-아래 컴포넌트만 확인하면 되니까 훨씬 직관적일 수도 있음)
  - 단점1 : 컴포넌트 간 중첩이 깊어지는 경우, 동위 관계 컴포넌트에게 데이터 전달이 어려워지고 전달 구조가 매우 복잡해짐 => 관리가 어려워짐
  - 단점2: 상태의 전달을 상 -> 하의 방향으로만 가능

- 부모 자식 간의 컴포넌트 관계가 복잡하지 않은 경우에는 문제가 없음
- 기존의 props & emit 구조에서의 state, view, action
  - state: 앱을 작동하는 data
  - view: state의 선언적 맵핑
  - action: view에서 사용자 입력에 대해 반응적으로 state를 바꾸는 방법(methods)

![image](https://user-images.githubusercontent.com/93081720/168056989-e85736ed-1b43-460e-b5c9-facd305c6a44.png)

<br>

## 2. Vuex Core Concept

### Vuex 핵심 흐름

![image](https://user-images.githubusercontent.com/93081720/168054409-754f6b11-5c71-4c46-b8b7-794902b54701.png)

<br>

### 1. State(상태, 데이터)

"중앙에서 관리하는 모든 상태 정보(data)"

- Vuex는 Single State Tree를 사용함 => 단일 객체가 모든 어플리케이션 상태를 포함하는 원본 소스 역할을 함(각 어플리케이션마다 하나의 유일한 저장소를 갖는다는 의미)
- state가 변화하면 해당 state를 공유하는 여러 컴포넌트의 DOM은 자동 렌더링됨



### 2. Mutations(변이)

"state를 변경하는 유일한 방법"

- mutations의 핸들러 함수(handler)는 반드시 동기적(Synchronous)이어야 한다
  - 이유? 비동기적 로직(콜백 함수)은 실제 호출되는 시기를 알 수 있는 방법(추적할 수 있는 방법)이 없기 때문에 state가 변화하는 시점이 생각했던 것과 달라질 수 있음
  - 따라서 axios와 같은 비동기 로직은 actions에서 처리한다
- 핸들러 함수의 이름은 대문자 스네이크 케이스(상수)로 작성하는 것을 권장
  - mutations와 actions를 구분하기 위함임(디버깅 등에 활용)

- 핸들러 함수의 첫번째 인자로 항상 `state`를 받는다
- Actions의 함수에서 `commit()` 메서드에 의해 호출됨



### 3. Actions(행동)

"state를 변경하는 행동을 제외한 모든 행동에 관한 것"

- 원칙적으로 state를 변경할 수 없는 것은 아니지만 직접 변경하지 않음
  - state는 오직 mutations를 통해서만 조작 => 명확한 역할 분담을 통해 state를 올바르게 관리하기 위함
- mutations와 달리 비동기(Asychronous) 작업이 포함될 수 있음
  - Backend API와의 통신, Data Fetching 작업 등
- 핸들러 함수의 첫번째 인자로 항상 `context`를 받는다
  - context => 만능 도구(store/index.js 파일 내의 모든 요소의 속성, 메서드 접근 가능)
  - `context.state`, `context.getters` 등과 같이 state, getters에도 접근 가능
- 각 컴포넌트에서 `dispatch()` 메서드를 통해 호출됨



### 4. Getters

"state를 변경하지 않고 활용하여 계산을 수행함" => computed와 유사

- computed를 사용하는 것처럼 getters는 저장소의 상태(state)를 기준으로 계산함
  - state 종속성에 따라 저장, 캐시(cached)되며, 종속성이 변경된 경우에만 다시 계산됨
- getters자체가 state를 변경하지 않음



### Vuex Core Concept 요약

![image](https://user-images.githubusercontent.com/93081720/167834134-9340b080-7009-45b5-aa86-8b2e972c6049.png)

<br>

### 5. Component Binding Helper

종류

- mapState

- mapGetters
- mapActions
- mapMutations



※ mapActions 컴포넌트 바인드를 사용할 경우, template에서 그전에 dispatch를 통해 함수명과 인자를 넘겨준게 있다면, 인자를 집어넣어서 호출해줘야함

예) `@click="updateTodos(todo)"`



## 3. Vuex Quick Start

#### 1. Create project

`$ vue create 프로젝트-명`

`$ cd 프로젝트-명`



#### 2. Add vuex plugin

`$ vue add vuex`



### ※ Local Storage

#### vuex-persistedstate

vuex state를 자동으로 브라우저의 Local Storage에 저장해주는 라이브러리 중 하나

페이지가 새로고침 되어도 vuex state를 유지시킴

- 설치: `npm install vuex-persistedstate`
- 사용

![image](https://user-images.githubusercontent.com/93081720/168064476-d5f71397-f3e8-452a-9ffb-207b6a73c565.png)



※ 로그아웃 기능에서 로그아웃 시 localStorage에서 vuex정보를 삭제시켜주는 것이 좋음

![image](https://user-images.githubusercontent.com/93081720/170069407-a3368558-8a65-44dd-88a8-c34c73388287.png)
