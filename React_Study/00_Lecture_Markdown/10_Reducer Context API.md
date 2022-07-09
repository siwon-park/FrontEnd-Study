# 10_Effects, Reducer, Context API

### Effect(Side Effect)

리액트의 메인 기능 외의 모든것?

- 리액트의 주 기능
  - UI를 렌더링하는 것과 입력에 반응하는 것
    - JSX구문을 평가하여 렌더링
    - props와 state관리
- side effect
  - 브라우저의 storage에 데이터를 저장하는 것
  - 백엔드 서버에 http request를 보내는 것

![image](https://user-images.githubusercontent.com/93081720/178097786-98d00a4c-3073-4cb0-ad57-f71cfe6f7ec6.png)

<br>

#### 언제 쓰는가?

![image](https://user-images.githubusercontent.com/93081720/178098991-55804854-a8b3-4493-9902-ae14affcfa2e.png)

- 위와 같은 예시에서 무한 루프가 발생함
  - localStorage에서 로그인 상태인지 확인 → 1인지 확인함 → state를 변경하는 함수를 호출  →   state가 변경되었음을 확인(false → true)  → 화면 재렌더링  →  localStorage에서 로그인 상태인지 확인 → 1인지 확인함 → state를 변경하는 함수를 호출(true → true) → 무한 루프

<br>

![image](https://user-images.githubusercontent.com/93081720/178099100-b7fa0350-1bae-4d78-80b5-b70811aef651.png)

![image](https://user-images.githubusercontent.com/93081720/178100282-dfebbd47-07a1-4189-a4b5-f2e373f6a701.png)

- 다음과 같이 useEffect를 사용하여 종속성이 변경되었을 경우에만 실행되도록 변경한다.
  - 이 경우, 종속성이 없으니 (새로고침이나 재로드 시) 단 한번만 실행된다.

<br>

### useEffect

왜 쓰는가? effect(side effect)를 관리하기 위함

- 키 입력에 대한 응답으로 해당 폼의 유효성을 확인/업데이트 하는 것도 사이드 이펙트
- 어떤 액션에 대한 응답으로 실행되는 액션이 있다면 그것 또한 사이드 이펙트
- state를 업데이트 하는 것도 사이드 이펙트일 수도 있음

#### 종속성 추가

어떤 것들을 종속성 배열에 추가하는 가? effect 함수에서 사용하는 모든 "것들"을 추가 => 구성 요소(또는 일부 상위 구성 요소)가 다시 렌더링 되어 이러한 "것들"이 변경될 수 있는 경우

- 상태 업데이트 기능(set함수)은 추가할 필요가 없음
- 내장 API나 내장 함수는 추가할 필요가 없음
- 외부에서 선언되거나 정의된 함수 및 변수는 추가할 필요 없음
  - 단, props로 정의된 것은 종속성에 추가

<br>

#### 정리

- 마운트되었을 때 + state가 변경될 때마다 실행

![image](https://user-images.githubusercontent.com/93081720/178102432-512ed738-dd96-4784-859f-0d77b42c28d9.png)

<br>

- 처음 마운트 되었을 때만 실행

![image](https://user-images.githubusercontent.com/93081720/178102474-50d27c44-f4df-40c2-b152-823ff42a5b53.png)

<br>

- 컴포넌트가 재평가 될 때 + 종속성에 추가한 변수가 변화될 때 실행

![image](https://user-images.githubusercontent.com/93081720/178102507-2ce05144-10f2-48bc-bea5-dcbab9ce904d.png)

<br>

- 클린업 함수
  - effect함수가 호출되기 전에 실행됨

![image](https://user-images.githubusercontent.com/93081720/178102572-06fe4acb-3387-4455-adf9-975579a94a2d.png)

<br>

### Reducer

복잡한 state관리에 도움을 줌

일반적인 경우에는 useState를 사용하는 것이 좋지만, 때로는 useReducer를 사용해서 state를 관리하는 것이 좋을 때가 있음

![image](https://user-images.githubusercontent.com/93081720/178103246-e11c2e34-866a-493e-b30c-1516784fd1ff.png)

- email, password, form과 관련된 state이지만, 총 5개를 관리해야함

<br>

- setFormIsValid를 함수형으로 호출하고 싶지만 두 개의 서로 다른 state에 의존하고 있으므로, 최신상태의 스냅샷을 가지고 온다고 보장 못함

![image](https://user-images.githubusercontent.com/93081720/178103282-033b7748-2056-40ba-91e0-b71cffff2ae6.png)

<br>

- email validation도 마찬가지 EmailIsValid가 enteredEmail에 의존하고 있기 때문에 함수형으로 호출한다 해도 항상 최신상태의 스냅샷을 가져온다고 보장 못함

![image](https://user-images.githubusercontent.com/93081720/178103319-61cc8e5d-babf-46f1-8e48-c662f973beb1.png)

<br>

- reducer는 컴포넌트 밖에서 선언해준다. 현재 컴포넌트 내부에 존재하는 것들과 달리 독립적으로 존재하기 때문

![image](https://user-images.githubusercontent.com/93081720/178104697-0890006e-9e6e-484c-8c9a-d9013500b62b.png)

<br>

- 기존의 setEmailValidation으로 호출하던 것을 dispatchEmail로 호출함
  - dispatch함수에 들어가는 매개변수는 객체이며, 안에 설정하는 속성의 이름과 값은 개발자의 재량

![image](https://user-images.githubusercontent.com/93081720/178104773-eb61d121-4c57-4514-be45-55f8e96e8fe9.png)

![image](https://user-images.githubusercontent.com/93081720/178104865-02b33524-c09c-46da-9d98-d66e7b6924d1.png)

<br>

### useState() vs. useReducer()

일반적으로는 너무 많은 state를 관리해야해서 번거롭거나, 그로 인해서 버그나 의도치 않은 동작이 발생할 경우에 useState() 대신에 useReducer()를 사용한다

![image](https://user-images.githubusercontent.com/93081720/178106872-ec857c26-bdeb-44d0-8e6b-27a37cd5ae19.png)

#### useState()

- main state를 관리하는 툴
- 독립적이고 개별적인 state나 데이터를 관리하는데 적합함
- state가 간단하거나 업데이트가 잦지 않으면 보다 적합

#### useReducer()

- 좀 더 확실하게 state를 관리하고 싶을 때 사용 => 항상 최신 snapshot 보장 등
- state나 데이터 간 서로 연관된 것이 많을 때 적합
- 복잡한 state간 업데이트가 잦을 경우 적합

<br>

### Context API

![image](https://user-images.githubusercontent.com/93081720/178107249-ca6004e1-ee23-4d70-aa77-af3ee8fd631a.png)

#### context 폴더 추가

src 바로 아래 components와 같은 레벨로 context폴더를 만들고 해당 폴더 안에 케밥 케이스로 js 파일을 생성함

![image](https://user-images.githubusercontent.com/93081720/178108022-0c3af1a2-4cf5-4cf1-ae77-8a0d268e39f2.png)

<br>

![image](https://user-images.githubusercontent.com/93081720/178108079-ddf7f5c3-9657-426c-b078-74d9eb9ffe4f.png)

<br>

#### Provider 추가

![image](https://user-images.githubusercontent.com/93081720/178108162-11c81e64-3c23-4bda-ba9f-a675e9fae81e.png)

<br>

#### Consumer 추가

ctx는 context에 있는 객체를 의미함

![image](https://user-images.githubusercontent.com/93081720/178108187-e3797c83-4104-4c72-bc81-db17c85e5273.png)

<br>

### Context Hook 사용하기

위의 방법 대신 context hook을 사용하는 방법도 있음. 훨씬 간결함

![image](https://user-images.githubusercontent.com/93081720/178108339-51cae184-6571-4dca-a891-81dbfddd7742.png)

<br>

### Context의 한계

- state의 변경이 매우 잦은 경우 context로 관리하기에는 적합하지 않음(공식)
- props 체인을 없애기 위해서 사용할 수 있으나, 실질적으로 완전히 모든 props를 대체할 수 없음
  - props를 써야만하는 경우도 있기 때문

<br>

### Hook의 규칙

- 리액트 훅은 리액트 컴포넌트 함수 또는 커스텀 훅에서만 호출할 수 있다
- 리액트 훅은 리액트 컴포넌트 함수 또는 커스텀 훅의 최상위에서만 호출할 수 있다
  - 바로 밑 레벨에서만 호출 가능하고 2단계 아래에서는 호출 불가능
    - 중첩 함수에서 호출 불가능
    - block문에서 호출 불가능 => if 구문 등에서 호출 불가능
- useEffect훅; 항상 참조하는 모든 항목을 의존성으로 추가하는 것을 권장(특별한 이유가 없다면)

![image](https://user-images.githubusercontent.com/93081720/178111993-611b3e8d-38aa-4ae0-9c16-f5ca9ef546a9.png)

<br>

### Forward Refs

focusing이나 scrolling 같은 이벤트에 필요할 경우 사용하기도 함. 그러나 범용적인 UI 컴포넌트에 쓰는 것을 피하는 것이 좋음(일단, 잘 쓰이는 편이 아님)

![image](https://user-images.githubusercontent.com/93081720/178113706-7e3c78f4-fe76-4f64-9611-e2ed2d9ed544.png)

<br>

![image](https://user-images.githubusercontent.com/93081720/178113594-93eabdf8-ba79-4bc8-b9a5-d7b7cd921add.png)
