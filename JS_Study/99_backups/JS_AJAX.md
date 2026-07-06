# JS_AJAX

## 01. AJAX

### 정의

**A**sychronous **J**avascript **A**nd **X**ml => 비동기식 JS와 XML

모든 웹의 핵심

페이지 새로 고침 없이 물 흐르듯이 서버에 데이터를 요청하고 데이터를 받아서 작업가능하게 해줌(비동기성)

AJAX는 기술이 아니라, 기존의 여러 기술을 사용하는 새로운 접근법



### 특징

- XML보다 JSON이 좋은 이유?
  - 같은 데이터를 표현하는데 필요한 자원(예- 바이트)이 적어서 효율적임

- 페이지 전체를 새로고침 하지 않고서도 수행되는 비동기성
  - 서버의 응답에 따라 전체 페이지가 아닌 일부분만을 업데이트 할 수 있음
- 주요 특징
  - 페이지 새로 고침 없이 서버에 데이터 요청하고 데이터를 받아 작업을 수행 가능
    - 예) 지도, 검색 추천어 등

- 서버와 통신하기 위해 XMLHttpRequest 객체를 활용
  - JSON, XML, HTML, 일반 텍스트 형식 등 다양한 포맷을 주고 받을 수 있다.



### XMLHttpRequest(XHR) 객체

서버와 상호작용하기 위해 사용되며 전체 페이지의 새로 고침없이 데이터를 받아올 수 있음

AJAX프로그래밍에 주로 사용

이름과 달리 XML뿐만 아니라 다른 데이터 형태에도 사용 가능

`new XMLHttpRequest()`

<br>

---

## 02. 동기 vs. 비동기



### 동기식(Synchronous)

순차적, 직렬적 Task 수행

요청을 보낸 후 응답을 받아야만 다음 동작이 이루어짐(blocking)

![image](https://user-images.githubusercontent.com/93081720/166220679-8ee109d2-0dc3-4605-976a-6969ed88027b.png)

<br>

### 비동기식(Asynchronous)

병렬적 Task 수행

요청을 보낸 후 응답을 기다리지 않고 다음 동작이 이루어짐(non-blocking)

![image](https://user-images.githubusercontent.com/93081720/166220739-3d8c3283-70a5-48a8-a4a5-28fb65bd4dc7.png)

- 예시)

  - 우체통에 편지를 넣음(Request)
  - 답장이 오면(Response)
  - 우체국 집배원이 알려줌(Web API)

  => 나는 우체통에 편지만 넣고 다른 일을 하러갈 수 있음(다른 일을 하러가면 됨)

<br>



### 왜 비동기를 사용하는 이유?

- #### 사용자 경험(UX)

  - 매우 큰 데이터를 동반한 앱이 있다고 가정했을 때, 동기식 코드라면 데이터를 모두 불러온 다음 앱이 실행되므로 데이터를 모두 가져올 때까지는 앱이 멈춘 것처럼 보임
  - 그러나 비동기 코드라면 데이터를 요청하고 응답 받는 동안, 앱 실행을 합께 진행함
  - 데이터를 불러오는 동안 지속적으로 응답하는 화면을 보여줌으로써 더욱 쾌적한 사용자 경험을 제공 가능
  - 때문에 많은 웹 API 기능은 현재 비동기 코드를 사용하여 실행됨

- #### 협업

  - 다른 누군가와 함께 일하기 때문. 즉, 서로 하는 일과 처리 시간이 다르기 때문에 비동기로 일을 처리하는 것임
  - 내가 만약 혼자 일한다면 그냥 나의 스케줄링에 맞춰서 일을 처리하면 되지만, 협업을 한다면 나 혼자만의 스케줄링으로 일 처리를 하면 안 됨 


<br>

- #### Blocking vs. Non-Blocking

Python의 코드는 blocking함 => 윗줄의 코드가 완료될 때까지 아래있는 코드를 실행하지 않음

![image](https://user-images.githubusercontent.com/93081720/166221615-6cb95a10-7a5d-4750-8ace-a85edadfec80.png)

<br>

JS는 기본적으로는 blocking하나, non-blocking코드도 존재함 => 현재 코드에 대한 작업이 마무리 되지 않았지만, 다음 코드를 실행 가능

![image](https://user-images.githubusercontent.com/93081720/166221784-750c7438-5087-4b4f-ac3f-f12ffca9d3c6.png)

<br>

### JS는 싱글 스레드(Single Thread)

단일 스레드에서만 작업을 수행 => 이벤트를 처리하는 Call Stack이 하나인 언어

- 즉시 처리하지 못하는 이벤트들을 **다른 곳(Web API)**으로 보내서 처리하도록 하고,

- 처리된 이벤트들은 처리된 순서대로 **대기실(Task Queue)**에 줄을 세워 둔 뒤
- Call Stack이 비어있으면 **담당자(Event Loop)**가 대기 줄에서 FIFO로 이벤트를 Call Stack으로 보냄

<br>

#### Call Stack

요청이 들어올 때마다 해당 요청을 순차적으로 처리하는 Stack(LIFO) 형의 자료 구조

JS 엔진 영역

<br>

#### Web API

브라우저 영역에서 제공하는 API

setTimeout(), DOM events 그리고 AJAX로 데이터를 가져오는 시간이 소요되는 일들(언제 응답이 올지 모르는 일들)을 비동기형태로 처리

<br>

#### Task Queue

Web API를 통해 비동기 처리된 callback함수가 대기하는 Queue(FIFO)형태의 자료 구조 

main thread가 끝난 후 실행되어 후속 JS코드가 차단되는 것을 방지함

Call Stack이 비어있어야 task queue에 있는 task가 빠져나갈 수 있음

JS 엔진 영역

<br>

#### Event loop

Call Stack이 비어있는지 확인해주는 역할

비어있을 경우 Task Queue에 실행 대기 중인 callback함수가 있는지 확인하여 Call Stack으로 push함

<br>

비동기 처리의 핵심은 콜백임

Web API로 들어오는 순서는 중요하지 않고, 어떤 이벤트가 먼저 처리되느냐가 중요

![image](https://user-images.githubusercontent.com/93081720/166222715-f186f79a-16ae-4014-8806-517891f8b6bb.png)

(javascript event loop visualizer)



#### ※ zero delay

아래 예시에서 0ms의 delay를 줬지만, 'Hi' -> 'siwon' -> 'bye' 순으로 실행되지 않음

왜냐하면 delay는 JS가 요청을 처리하는데 필요한 최소 시간이지 작업 처리를 하는데 보장된 시간이 아니기 때문 그래서 'Hi'가 먼저 콜 스택에 올라가서 처리된 후, setTimeout이 콜 스택에 올라가지만 웹 API를 거쳐 Task 큐에 갔다가 다시 콜 스택에 올라오고 그전에 'bye'가 처리되기 때문에 순서가 이렇게 된 것이다.

![image](https://user-images.githubusercontent.com/93081720/166226798-a17e244c-71e8-459d-a2de-2a96d38dc7e3.png)

<br>

## 03. 순차적인 비동기 처리

Web API로 들어오는 순서는 중요하지 않고, 어떤 이벤트가 먼저 처리되느냐가 중요함(비동기 처리 간 실행 순서 불명확) => 비동기로 하는 일이지만 때로는 실행 순서가 필요한 경우가 있음

- 방법 1) Async callbacks
- 방법 2) promise

### 일급 객체(First Class Object)

#### 정의

다른 객체들에 적용할 수 있는 연산을 모두 지원하는 객체(함수)

#### 일급 객체의 조건

- 인자로 넘길 수 있어야함
- 함수의 반환 값으로 사용할 수 있어야 함
- 변수에 할당할 수 있어야 함



### Callback 함수

다른 함수에 인자로 전달된 함수

동기식, 비동기식 모두 사용됨

- 그러나 비동기 작업이 완료된 후 코드 실행을 계속하는 데에 주로 사용됨

비동기 작업이 완료된 후 코드 실행을 계속하는 데 사용되는 경우를 비동기 콜백(asynchronous callback)이라고 함

#### 콜백함수를 쓰는 이유?

- 콜백함수는 명시적인 호출이 아닌 특정 루틴 혹은 event(action)에 의해 호출되는 함수
- 비동기 로직을 수행할 때 callback함수는 필수임
  - 명시적인 호출이 아니라 다른 함수의 매개변수로 전달하여 해당 함수 내에서 특정 시점에 호출됨



### Async Callbacks

- 백그라운드에서 코드 실행을 시작할 함수를 호출할 때 인자로 지정된 함수

- 백그라운드 코드 실행이 끝나면 callback함수를 호출하여 작업이 완료되었음을 알리거나, 다음 작업을 실행하게 할 수 있음
  - 예) addEventListener의 두 번째 매개변수로 전달되는 함수

- callback함수를 다른 함수의 인자로 전달할 때, 함수의 참조를 인자로 전달할 뿐, 즉시 실행되지는 않고 함수의 몸통에서 callback됨 => 정의된 함수는 때가되면 callback함수를 실행함

#### callback hell

- 순차적인 연쇄 비동기 작업을 처리하기 위해 callback함수를 계속 호출하는 패턴이 방법되면 코드의 가독성이 매우 떨어지고 디버깅이 어려워짐 => 이러한 것을 callback hell이라 한다.
- 해결방법
  - 코드의 깊이를 얕게 유지
  - 모듈화
  - 모단 단일 오류 처리
  - Promise 콜백 방식 사용



### Promise callback

비동기 작업의 최종 완료(성공) 또는 실패를 나타내는 객체

동작 구문이 try-except구문과 유사함

- #### `.then(callback)`- 성공(이행)에 대한 약속

  - 이전 작업(promise)이 성공했을 때, 수행할 작업을 나타내는 callback함수
  - 각 callback함수는 이전 작업의 성공 결과를 인자로 전달 받음
    - 따라서 성공했을 때의 코드를 callback 함수 안에 작성함

- #### `.catch(callback)` - 실패(거절)에 대한 약속

  - .then이 하나라도 실패하면 catch구문 발동
    - 이전 작업의 실패로 인해 생성된 error객체는 catch 블록 안에서 사용 가능

- 각각의 .then()과 .catch()는 모두 (서로 다른) promise를 반환하므로 chaining하여 연쇄적인 작업 수행 가능(순차적 비동기 작업 가능) => 반환값이 반드시 있어야 함 => 다음 연쇄작업의 인자이기 때문

- 코드가 피라미드 형태가 아니라 블럭형식처럼 쌓여서 callback hell보다 가독성이 훨씬 좋아짐

- 엄격한 순서로 호출됨을 보장함

- #### `.finally(callback)`

  - 결과와 상관없이 최종적으로 무조건 지정된 callback함수가 실행됨
  - 어떠한 인자도 전달받지 않음
    - 최종적으로 실행되는 구문이기에 그전 promise가 성공이었는지 실패였는지 알 수 없기 때문
  - 무조건 실행되어야 하는 절에서 사용

## Axios

Promise based HTTP client for the browser and Node.js

브라우저를 위한 promise 기반의 클라이언트

CDN 사용하여 보다 편리한 AJAX 요청을 처리 가능하도록 도와줌

![image](https://user-images.githubusercontent.com/93081720/166232566-0d058329-d18f-4c8d-9a4f-de63e0bc4468.png)



## async & await

비동기 코드를 작성하는 새로운 방법으로 ES8에서 등장

기존 promise 시스템 위에 구축된 Syntactic sugar

async & await => 함수로 묶는 작업



