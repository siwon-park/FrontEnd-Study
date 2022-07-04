# 04_Reat State

### 이벤트 리스닝 및 등록

![image](https://user-images.githubusercontent.com/93081720/177050148-b655ec15-56bd-4dd0-a882-3c271577bce1.png)

- 메서드를 선언하고 clickHandler() 형태로 호출하지 않는 이유
  - 왜냐하면 우리가 현재 하고자 하는 의도는 클릭을 했을 때, 어떤 이벤트가 발생하는 것임
  - 그러나, clickHandler()와 같이 쓴다면, JSX가 변환 과정을 거칠 때, clickHandler 함수의 실행 결과를 평가함 => 즉, 실행의 결과에 따른 값으로써 평가하여 렌더링함

<br>

###  useState

![image](https://user-images.githubusercontent.com/93081720/177089848-7582370d-0709-43f7-81b2-1c8d931b571e.png)

- 중괄호를 사용하여 import 하는 것을 named import라고 한다
- `useState()`는 반드시 리액트 컴포넌트 바로 아래 레벨에서 선언해줘야한다

<br>

### 여러 state 가지기 vs 하나의 state 가지기

state를 가지는 방법에는 여러 state를 가지는 방법과 하나의 state를 가지고 상태를 관리하는 방법이 존재함

#### 여러 state를 관리

useState를 여러번 호출하여 각 관리할 데이터별로 관리함

![image](https://user-images.githubusercontent.com/93081720/177095598-62380bdb-9bfa-45ea-8f11-a991db99b428.png)

<br>

#### 하나의 state로 관리

useState를 한 번만 호출하되, 매개변수의 값으로 객체를 넘겨줌

단, 값을 갱신할 때 모든 값을 갱신해줘야함 merge의 개념이 아니라, replace의 개념이기 때문

그래서 값을 우선 전부 복사한뒤에 변경할 값만 오버라이딩하는 형태로 사용함

![image](https://user-images.githubusercontent.com/93081720/177096139-79db3f34-f802-4979-a989-4a3f919e345d.png)

<br>

단, 바로 위의 예시는 별로 추천하는 방법이 아님. 왜냐하면 카운터의 경우처럼 값을 하나만 증가시켜야 한다면, 그 변경하려는 값과 이전의 값이 100% 순수한 변경 직전의 데이터 값이라는 것을 보장해줘야하는데, 단순한 spread operator로는 이를 보장받지 못함. 그래서 prevState라고 호출하여 보장된 직전 상태의 값에 오버라이딩 하는 것이 더 안전함

![image](https://user-images.githubusercontent.com/93081720/177097372-4e1a1693-831b-46d4-b01a-37d5ebaeb14c.png)

