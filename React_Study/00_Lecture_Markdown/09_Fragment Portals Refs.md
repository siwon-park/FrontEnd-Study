# 09_Fragment, Portals, Refs

리액트 앱을 만드는데 도움을 주는 리액트 툴 박스

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

더 깨끗한 DOM을 만드는데 도움

<br>

### Refs



<br>

