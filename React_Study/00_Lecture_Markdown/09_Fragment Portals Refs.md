# 09_Fragment, Portals, Refs

리액트 앱을 만드는데 도움을 주는 리액트 툴 박스

#### 왜 쓰는가?

코드를 더 직관적이고 간결하게 만들 수 있음

<br>

### Fragment

JSX의 제한 사항을 해결

#### JSX의 한계

루트는 반드시 한개여야 함 => 값을 저장하려면 반드시 1개의 JSX요소여야함

##### 해결방법 1) - 하나의 Html 태그로 래핑(wrapping)함

<br>

##### 해결방법 2) - 네이티브 JS 배열을 사용

- JSX 중괄호를 삭제하고, 배열형태로 묶어서 콤마로 요소를 구분함
  - 단, 역시 키를 바인딩 해줘야만 에러가 발생하지 않음

![image](https://user-images.githubusercontent.com/93081720/178021375-8d782079-7785-4c2e-8f95-8e0dadd2a470.png)

<br>

#### `<div>`Soup

```html
<div>
    <div>
        <div>
            ....
        </div>
    </div>
</div>
```

div 태그가 너무 많이 중첩된 구조가 발생될 수도 있음

너무 많은 HTML 태그는 렌더링을 하는데 시간을 소비하게 만드므로 우리의 앱을 느리게 만들 수 있음

<br>

#### 해결방법

- Wrapper.js 프래그먼트를 만듦

![image](https://user-images.githubusercontent.com/93081720/178022832-b4b2aebf-5c4e-420c-9846-f3a048d796b3.png)

- div태그로 감싼 곳을 Wrapper컴포넌트로 변경
  - 이것이 가능한 이유는 Wrapper가 1개의 요소(props.children)을 반환하기 때문
  - Wrapper 컴포넌트가 실제 DOM에 렌더링되는 것은 아무것도 없음
  - 그런데 브라우저에서 확인하면 div 태그가 생기는 것을 확인할 수 있는데, 이는 Wrapper컴포넌트를 호출한 컴포넌트의 부모 컴포넌트의 div태그임

> AddUser.js

![image](https://user-images.githubusercontent.com/93081720/178022951-e16c1a4d-ec31-4baf-be48-211319a52240.png)

> App.js

![image](https://user-images.githubusercontent.com/93081720/178023873-203c41f9-e1e2-49b8-9a26-3f12575b43ba.png)

<br>

![image](https://user-images.githubusercontent.com/93081720/178024032-cd4cd4a0-8d26-4caf-8f43-22674a27bfe1.png)

<br>

### React Built-in Wrapper Fragment

위에 나온 Wrapper는 우리가 만든 커스텀 Wrapper Fragment이지만, React에서 기본적으로 제공하는 Wrapper Fragment가 존재함

- `<React.Fragment> </React.Fragment>` : 항상 작동함

![image](https://user-images.githubusercontent.com/93081720/178025064-210973fa-5cff-4021-ae85-699f93deaf34.png)

- `<> </>` : 프로젝트 설정에 따라 작동할 수도 안 할 수도 있음 

![image](https://user-images.githubusercontent.com/93081720/178024975-5fd8503b-f8b7-4cf2-b47c-a499bec64af7.png)

- `<Fragment> </Fragment>` : {Fragment}로 named import를 해야 사용가능

![image](https://user-images.githubusercontent.com/93081720/178025125-0b6690e3-df25-4fcf-9604-3b875ef099af.png)

<br>

### Portals

컴포넌트가 DOM에 렌더링되는 장소를 옮길 수 있게 해주는 도구

#### 왜 필요할까?

모달을 예를 들면, 모달은 사실 창을 새로 띄우는 개념이 아니고, 오버레이 화면으로서 특정 버튼을 클릭했을 때, 팝업창이 나오는 것처럼 보이게끔 하는 화면이다. 따라서 모든 것 위에 있는 개념이다

그런데 만약에,우리가 App을 구성하면서 모달 컴포넌트가 다른 모든 것 위에 있지 않고 안에 있다면, 뭐 작동이야 잘 될 수도 있겠지만 오류가 발생할 수도 있다. 따라서 모달 컴포넌트의 위치를 옮겨줘야한다.

![image](https://user-images.githubusercontent.com/93081720/178089753-cc0b4c9d-d2a8-4359-b3dc-57921a258aea.png)

<br>

리액트 포탈의 개념을 적용하면 위의 그림에서 아래 그림과 같이 DOM 렌더링 위치를 변경시켜줄 수 있다.

![image](https://user-images.githubusercontent.com/93081720/178089766-69c46286-acb8-4c98-8be8-3d3447045ce6.png)

<br>



- index.html에 컴포넌트가 옮겨갈 위치를 만들어준다.

![image](https://user-images.githubusercontent.com/93081720/178090286-dd8ef692-91e0-4ab8-a0f9-e5020a1fa2a3.png)

<br>

![image](https://user-images.githubusercontent.com/93081720/178090459-d57e93dd-5423-4cdb-8dba-14c10938e28a.png)

- 기존 ErrorModal에 있는 두 개의 요소를 분리해준다.

![image](https://user-images.githubusercontent.com/93081720/178090815-7379f156-28e8-4609-8cfe-ae8d776a9ada.png)

- ReactDom.createPortal(`<JSX태그>`, 옮겨갈 위치) 형태로 작성한다

![image](https://user-images.githubusercontent.com/93081720/178090884-bd397c2b-0a62-4de3-a321-72028894e769.png)

- 실제 DOM에 렌더링 된 것을 보면 컴포넌트가 우리가 지정했던 위치로 이동했음을 알 수 있다.

![image](https://user-images.githubusercontent.com/93081720/178090773-d275967b-6036-45ef-aa20-edd47360fe77.png)

<br>

### Refs

참조하다(reference)

기본 기능: 다른 DOM 요소에 접근해서 일 할 수 있게 해줌

state 대신 값을 조작하는데 사용 가능(엄밀히 말해서 읽는 용도로만 사용하는 것이 좋음)

![image](https://user-images.githubusercontent.com/93081720/178091570-aad11dc6-737e-4fbc-89f3-4734e44883fe.png)

![image](https://user-images.githubusercontent.com/93081720/178091583-dc4579f5-8903-45c3-81c3-dabd44f09b98.png)

- ref는 항상 객체이며 current라는 속성항목을 가진다. 따라서 ref.current.value로 값을 읽어올 수 있다

![image](https://user-images.githubusercontent.com/93081720/178091605-35a313cd-e517-48e6-afb2-8e51e2d4c81f.png)

![image](https://user-images.githubusercontent.com/93081720/178091532-f9e8ec9f-c011-4bcb-ba62-c95d2a7e39e7.png)

<br>

![image](https://user-images.githubusercontent.com/93081720/178091639-dc664ed9-b54c-4545-bed3-2d6084fa1591.png)

- ref를 통해서 값을 조작하는 것은 권장하는 방법은 아니다

<br>

### 제어된 컴포넌트와 제어되지 않은 컴포넌트

- input태그가 state를 통해서 데이터를 관리한다 => 제어된 컴포넌트
  - state를 사용한다면 실제 데이터가 입력됐을 때 해당 값이 state로 저장되고 그 값을 input태그에 전달하므로, input태그는 제어된 컴포넌트이다

- input태그가 ref를 통해서 데이터를 관리한다 => 제어되지 않은 컴포넌트
  - 리액트의 기능을 사용하는 것일뿐, 실제 입력/전달되는 데이터는 input태그 고유의 속성을 통해서 관리됨
