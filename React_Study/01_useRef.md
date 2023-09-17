# 00_useRef

## useRef()은 언제 사용하는가?

### 배운 것

#### 강의에서 배운 것

- state 대신 값을 조작하는데 사용(but 읽기 전용을 권장)
- 특정 DOM을 선택 가능



#### 공식 문서에서 제시하는 Ref의 바람직한 적용 사례

- 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때
- 애니메이션을 직접적으로 실행시킬 때
- 서드 파티 DOM 라이브러리를 React와 같이 사용할 때



#### 벨로퍼트에서 제시한 적용 사례

- `setTimeout`, `setInterval` 을 통해서 만들어진 `id`
- 외부 라이브러리를 사용하여 생성된 인스턴스
- scroll 위치



### 정리

#### 특정 컴포넌트 안에서 변수(값)을 수정/조작하는데 사용

- useState로 상태값을 관리하면 상태값이 바뀔 때마다 컴포넌트가 재랜더링되는 반면, useRef로 관리하는 변수는 상태값이 바뀐다해도 컴포넌트가 재랜더링되지 않는다 
  - => 언마운트되기 전까지는 재랜더링되더라도 동일한 값을 가져오거나 사용 가능
- 변수의 상태값을 사용하면서 재랜더링이 필요없을 때, 재랜더링을 방지하면서 값을 사용 가능함
  - => OOOref.current.value로 사용해서 값을 읽고, 수정할 수 있으며, 수정되더라도 재랜더링이 발생하지 않음



#### 특정 DOM을 선택

- 특정 DOM에 ref 속성값으로 useRef를 통해 관리하는 변수를 지정해주면 해당 DOM에 접근하여 특정 행동을 할 수 있음

```javascript
const nameInputRef = useRef();

// current를 focus함(current가 특정 DOM을 가르키고 있으므로 focus 이펙트가 발생함)
nameInputRef.current.focus();

// input 태그의 ref 속성에 nameInputRef을 등록해줌으로써 current에 해당 DOM을 가르키게되고 그 때, focus 효과가 발생됨
<input
  name="name"
  placeholder="이름"
  onChange={onChange}
  value={name}
  ref={nameInputRef}
/>
```

