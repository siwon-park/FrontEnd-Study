# 00_React TIL

밸로퍼트 리엑트 강의자료를 따라하면서 새롭게 배운 내용을 정리함

### 00_Props

props를 props라는 변수명으로 전달하는 것이 아니라 아래와 같이 객체 구조분해 할당하여 특정 변수명으로도 전달 가능함

![image](https://user-images.githubusercontent.com/93081720/179383614-080f83be-486a-4d0a-baa7-2b139a7ea8a9.png)

<br>

### 01_defaultProps

컴포넌트명.defaultProps로 props기본값을 설정할 수 있음

![image](https://user-images.githubusercontent.com/93081720/179383665-f1f39bd6-3069-4fc6-86d1-397843aff59d.png)

<br>

### 02_useRef

- useRef를 사용해서 특정 DOM을 선택할 수 있음

![image](https://user-images.githubusercontent.com/93081720/179383699-86fdda84-3745-4a2c-9168-b631390b0a45.png)

![image](https://user-images.githubusercontent.com/93081720/179383706-6edebe58-7d82-4912-a15d-7e645cf56b29.png)

![image](https://user-images.githubusercontent.com/93081720/179383717-b36d047d-dda7-4574-ae8d-7bb4130b4af2.png)

<br>

- 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리할 수 있음
  - `setTimeout`, `setInterval` 을 통해서 만들어진 `id`
  - 외부 라이브러리를 사용하여 생성된 인스턴스
  - scroll 위치

<br>

### 03_여러 개의 state 관리하기

하나의 useState를 통해서 여러 개의 state를 관리할 수 있음

![image](https://user-images.githubusercontent.com/93081720/179383774-46d2cc88-398b-440e-8687-9d66a596316a.png)

<br>

### 04_배열에 항목 추가하기

#### 방법1) 스프레이드 오퍼레이터 사용

![image](https://user-images.githubusercontent.com/93081720/179383981-7f38c036-bb72-4d53-98eb-f63ea263870e.png)

#### 방법2) concat 함수 사용

![image](https://user-images.githubusercontent.com/93081720/179384026-71477b59-27dc-42fa-8960-9a48de489c14.png)

<br>

### 05_배열 반복에서 key가 중요한 이유?

만약 키가 없다면 ["a", "b", "c", "d"]라는 배열에서 "b"와 "c" 사이에 "z"를 삽입한다고 할 때 기존의 "c"가 "z"로 바뀌고, "d"가 "c"로 바뀌고 최종적으로 "d"가 마지막에 삽입되는 형태로 진행됨

실질적으로 삽입이라는 작업 하나만 수행하면 될 것을 여러 번의 다른 작업을 불필요하게 반복하므로 비효율적임

반면에 키가 있다면, 해당 키를 활용해 기존값은 그대로 두면서 원하는 곳에 바로 삽입 또는 삭제할 수 있음

<br>

### 06_함수의 동작

![image](https://user-images.githubusercontent.com/93081720/179384209-c2deddef-9c18-40bf-a6b5-3fd8f27518ef.png)

`onClick={somefunction()}`과 같이 사용하면 React가 DOM을 렌더링하면서 해당 함수를 바로 실행해버림. 따라서 `onClick={somefunction}`과 같이 함수를 어떤 동작에 대한 변수로써 넘겨줘서 우리가 원하는 대로 클릭했을 시 동작하게 함

그럼 함수에 매개변수를 넘겨줘야 할 때는 어떻게 하는가? => arrow function을 사용해서 이를 해결한다.(콜백 함수 사용)

![image](https://user-images.githubusercontent.com/93081720/179384194-3d50f538-83d4-4818-809a-aa779542c4bd.png)

<br>

### 07_useEffect

useEffect의 디펜던시(deps)에 빈 배열을 넣으면 처음 실행될 때 한 번만 실행됨

디펜던시에 상태나 값을 넣으면 컴포넌트가 처음 마운트 될 때에도 호출이 되고, 지정한 값이 바뀔 때에도 호출 됨. 그리고 언마운트시에도 호출이되고, 값이 바뀌기 직전에도 호출

1. 화면이 처음 떴을 때 실행(`mount`)
   - deps에 [] 빈배열을 넣을 때
   - Life cycle 중 `componentDidmount`처럼 실행
2. 화면이 사라질 때 실행(`unmount`, clean up함수)
   - Life cycle 중 `componentWillUnmount`처럼 실행
3. deps에 넣은 파라미터값이 업데이트 됬을 때 실행
   - Life cycle 중 `componentDidUpdate`처럼 실행

<br>

### 08_useMemo

vue의 computed와 동일한 기능을 하는듯? => 특정 결과값을 재사용할 때 사용

Memo는 memoization의 줄임말

- useMemo를 사용하지 않을 경우 => countActiveUsers가 active한 다른 user를 카운팅하는 데에만 호출되지 않고, App.js의 state가 바뀌는 모든 행동에 대해서 호출됨 => 비효율적
  - 그 이유는 App의 State가 변경됐으니 App Component가 다시 렌더링되면서 countActiveUsers가 실행되어 호출되기 때문임
  - 예) 마우스 클릭하여 active된 유저만 카운트하고 싶지만, input이나 다른 행동에 대해서도 호출됨(input의 행동이 App.js의 state를 바꾸는 행위를 동반했다면)

![image](https://user-images.githubusercontent.com/93081720/179385044-b591209e-4c64-4e67-8cbf-544a11d35bb0.png)

=> useMemo를 사용하여 users의 값이 변경되었을 때만, countActiveUsers를 호출하게 할 수 있음

<br>

### 09_useCallback

useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용함

우리가 App.js나 다른 .js에서 선언한 커스텀 함수들은 해당 컴포넌트가 재렌더링될 때마다 새로 만들어짐

함수 선언을 새로 한다고 해서 자원에 많은 부하가 발생하지는 않지만, 최적화 관점에서 한 번 만든 함수를 필요할 때만 새로 만들고 재사용하는 것이 중요함

- useCallback 사용 전

![image](https://user-images.githubusercontent.com/93081720/179387018-6b15e264-b3ee-497c-a728-750508895d13.png)

<br>

- useCallback 사용 후

![image](https://user-images.githubusercontent.com/93081720/179387152-07ebcbdb-bbc6-4b4d-a4a0-6928d7fb5d54.png)

※ 단, 기존 함수 안에 상태나 props를 사용하고 있었다면, useCallback의 deps 배열 안에 추가해줘야함 => 왜냐하면 해당 값을 참조할 때, 항상 최신의 값을 참조하기 위함임

<br>

### 10_React.memo

컴포넌트의 props가 바뀌지 않았다면, 재렌더링을 방지하여 컴포넌트의 렌더링 성능 최적화를 해줄 수 있는 함수 => 컴포넌트에서 재렌더링이 필요한 상황에서만 렌더링을 하도록 설정 가능하게 해줌

Wrapper 컴포넌트처럼 감싸주기만 하면 됨

![image](https://user-images.githubusercontent.com/93081720/179387355-32815f17-9b2f-471e-8938-81bc38c30240.png)

이제, useCallback 함수에서  deps에 사용했던 props 중 해당 컴포넌트에서 사용하고 있는 props를 빼도 됨

- 예) users에 대한 props를 받는 컴포넌트에 React.memo를 적용했다면, useCallback 함수의 deps배열 안에 users가 있다면, 이를 빼줘야함 => 그렇지 않을 경우, 컴포넌트에서 users가 업데이트 되면 uesrs를 deps로 갖고 있는 useCallback을 적용한 함수도 재렌더링하면서 업데이트가 되므로 최적화 관점에서 이를 막는 것임 

![image](https://user-images.githubusercontent.com/93081720/179387784-f730bfb0-3c9e-41e4-90e5-f7a2abf588f6.png)