# 06_hidden_css

> hidden, display:none, visibility: hidden

세 가지 css 속성 모두 "숨긴다"는 목적은 같지만 동작과 의미가 조금씩 다르다.

- 비교표

|                | hidden | display: none | visibility: hidden |
| :------------: | :----: | :-----------: | :----------------: |
|  화면에 보임   |   X    |       X       |         X          |
|   공간 차지    |   X    |       X       |         O          |
|   DOM에 존재   |   O    |       O       |         O          |
| JS로 접근 가능 |   O    |       O       |         O          |

<br>

## 1. 핵심 차이

### 1) hidden

```html
<input hidden/>
```

HTML 속성 중 하나로 HTML 레벨에서 "이 요소는 현재 관련 없음"을 의미하는 시맨틱(semantic) 속성.

브라우저가 내부적으로 display: none을 적용.

CSS보다 우선순위가 낮아서, CSS로 display: block을 주면 hidden이 무시된다.

<br>

### 2) display: none

```html
<div style="display: none;">
</div>
```

요소를 레이아웃에서 완전히 제거하는 CSS.

레이아웃에서 완전히 제거했기 때문에 공간도 사라진다. (개발자 도구를 눌러서 확인했을 때 공간을 차지하지 않는다.)

JS 토글링, 특정 이벤트를 통해 HTML 요소를 제거하고자 할 때 가장 많이 쓰이는 방식이다.

<br>

### 3) visibility: hidden

요소를 투명하게 만들지만, 공간은 그대로 유지하는 CSS.

특정 요소를 숨겼을 때, 레이아웃이 밀리면 안 되는 경우에 사용한다. (개발자 도구를 눌러서 확인했을 때 공간을 차지하는 것을 볼 수 있다.)

