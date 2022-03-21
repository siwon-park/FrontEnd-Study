# CSS(Cascading Style Sheets)

### 개념

HTML에 디자인을 입히는 태그가 본디 존재했으나, 해당 태그를 사용함으로써 웹 문서의 정보(의미)성이 떨어지며, 태그마다 디자인을 입혀야 하는 한계가 존재하였음. 이러한 한계를 극복하기 위해 나온 html과 '전혀 다른 언어'를 css라고 함. css의 등자으로 인해 웹 문서의 유지 보수 용이성, 가독성 향상 등의 효율성을 얻게되었음

HTML을 꾸며주기 위한, 스타일을 지정하기 위한 언어. 핵심은 '선택'하고 스타일을 지정한다는 개념임

HTML이 몸의 구조, 뼈대 역할이었다면, CSS는 옷, 신발 등과 같이 외적으로 꾸며주는 역할을 함

HTML과 완전히 독립된 언어이지만, HTML이 없으면 사실상 무용지물이나 마찬가지

※ cascading: 계단식, 단계별, 폭포와 같은 → 위에서 아래로 적용된다고 생각하면 됨

기본적으로 `선택자(selector) { 속성(property): 값(value) }`의 구성으로 이루어짐. 또한 속성과 값 전체를 `선언(delcaration)`이라고 하며, `{ }`괄호를 포함시켜 `선언부(declaration block)`라고 함

※ HTML에선 속성을 attribute라 하고, CSS에서는 property라고 함. 둘은 전혀 다른 요소임



### CSS 정의 방법

1.  인라인(inline)
   - HTML 태그 안에 직접 바로 쓰는 것
   - 코드의 재사용성이 현저히 떨어지고, 나중에 디버깅이 힘들어짐
   
2.  내부 참조
   - `<head>`영역에 `<style>`태그 안에 스타일 규칙을 모아둠
   - 많은 페이지가 있을 경우, 페이지마다의 규칙을 선언해야하는 단점 존재
   
3.  외부 참조
   - 외부 CSS파일을 링크로 불러와 사용
   
     - rel="stylesheet"라고 반드시 적어야함
   
     ```css
     <link rel="stylesheet" href="style.css">
     ```
   
   - 재사용성이 높아 가장 많이 씀
   
     - 페이지가 많더라도, 링크 태그 한 줄로 css파일을 불러와 스타일을 쉽게 적용가능
     - 관리가 쉬움 - 수정 시 css파일 수정을 하면됨, 용량이 작음



### CSS 선택자 정리

- 요소 선택자: HTML 태그를 직접 지정하여 스타일 적용
- 클래스 선택자: `마침표(.)+클래스 명` 형태로 해당 클래스가 적용된 항목에 스타일을 적용
- 아이디(id) 선택자: `#+아이디명`형태로 해당 클래스가 적용된 항목에 스타일을 적용. 일반적으로 하나의 문서에 1번만 사용함(여러 번 사용해도 동작하지만, 단일 id를 사용하는 것을 권장함)



### CSS 적용 우선순위

기본 개념: id > class > element(tag)

id 선택자가 1개라도 있으면 class선택자가 아무리 많이 있어도 id 선택자가 우선임

- 우선순위:

1. !important
2. 인라인(inline)
3. 아이디(id)
4. 클래스(class)
5. 속성
6. 의사 클래스(pseudo-class)
7. 요소(element)
8. 의사 요소(pseudo-element)



좀 더 구체적이고 디테일한 것이 우선순위가 높고, 만약 우선순위 점수가 같다면 마지막에 선언한 것이 우선한다.

직접 지정하는 경우(`>`) 우선순위가 높지만, 상속은 우선순위가 낮다.

또한 `class="blue green"`이나 `class="green blue"` 똑같다.

※ CSS specifishity 참조



### CSS 상속

css는 상속을 통해 부모 요소의 속성을 자식에게 상속할 수 있음. 그러나 일부는 상속 되지 않는 것도 존재

- **상속 되는 것**:
  - 예) Text 관련 요소 - font, color, text-align, opacity, visibility 등
- **상속 되지 않는 것**:
  - 예) Box model 관련 요소 - width, height, margin, paddling, border, box-sizing, display 등
  - 예) position 관련 요소 - top, right, left, bottom 등

```css
h1 { color: gray; }
<h1>Hello, <em>CSS</em></h1> # em태그 안 CSS는 gray를 상속받음

* { color: red; }
h1#page { color: gray; }
<h1 id="page">Hello, <em>CSS</em></h1> # em태그 안 CSS는 red임(상속된 속성은 구체성을 가지지 못하기 때문)
```



### CSS 크기 단위

- px(픽셀, 모니터 해상도 1화소)
  - 픽셀의 크기는 변하지 않기 때문에 고정적인 단위임
- %(퍼센트)
  - 백분율 단위로, 가변적인 레이아웃에서 자주 사용함
- em
  - 바로 위, 부모에 대한 상속 영향을 받음(부모의 크기 단위가 몇이냐가 중요)
  - 배수 단위로서, 요소에 지정된 사이즈에 상대적인 사이즈를 가짐 예) 1em, 2em
  - em을 자주 쓰면 코드가 난해해진다는 단점이 존재함
- rem
  - 바로 위, 부모에 대한 상속 영향을 받지 않음
  - 최상위 요소(html)의 사이즈(16px)를 기준으로 배수 단위를 가짐
  - 1rem = 16px
- viewport
  - 디바이스 상의 화면 기준



### CSS 결합자

- 자손 결합자
  - 선택자 하위의 모든 자식 요소에 대해 스타일 적용

```css
div span {
    color: royalblue;
}
```

- 자식 결합자
  - 선택자 바로 아래의 자식 요소에 대해서만 스타일 적용

```css
div > span {
    color: green;
}
```

- 일반 형제 결합자
  - 선택자의 형제 요소 중 뒤에 위치하는 선택자 요소를 모두 선택함

```css
/* p태그와 형제인 span태그 중 p태그 뒤에 나오는 모든 span태그에 스타일 적용*/
p ~ span {
    color: red;
}
```

- 인접 형제 결합자
  - 선택자의 형제 요소 중 바로 뒤에 나오는 선택자에 스타일 적용

```css
/* p태그와 형제인 span태그 중 p태그 바로 뒤에 span태그에만 스타일 적용*/
p + span {
    color: blue;
}
```

- 다중 태그 적용
  - 콤마(`,`)를 사용하여 다중 태그에 스타일을 적용 가능

```css
h1, a {
    color: red;
}
```



### CSS Box model

CSS의 모든 요소는 네모(박스 모델)이며, **좌측 상단에서 부터 위에서 아래로(block), 왼쪽에서 오른쪽으로 쌓인다(inline)**. 이를 `Normal Flow`라고 한다.

하나의 박스는 4가지 영역으로 구성됨

- margin: 테두리 바깥의 외부 여백
- border: 테두리
- paddling: 테두리 안쪽의 내부 여백
- content: 글이나 이미지, 실제 콘텐츠가 위치하는 공간



shorthand로 크기 단위 지정 시, 시계방향(상우하좌)로 값을 주되, 없는 방향의 값은 해당 방향의 대칭에 있는 값이라고 보면 됨.

```css
margin:[top][right][bottom][left]
```



※ 수평 중앙 정렬

```css
margin-left: auto;
margin-right: auto;
```



기본적으로 모든 요소의 box-sizing은 content-box임. 따라서 우리가 보통 말하는 또는 원하는 박스 사이즈를 만들고 싶으면 border영역까지의 크기를 포함해야함

- 기본적으로 default 값은 content-box이며, width를 통해 box-size결정 시 content-box임

	- `box-sizing: border-box;`



### CSS display

CSS의 display요소는 블록(block) 레벨 요소와 인라인(inline) 레벨 요소로 구분됨. 각 태그별로 default 값으로 block과 inline요소를 갖고 있고, 이는 단지 값일 뿐, `display:`를 통해 변경 가능함

- **블록 레벨 요소(block level element)**

  - 기본 너비는 가질 수 있는 너비의 100%, 부모 요소의 가로 영역에 맞게 꽉 채워져 표현
  - div, ul, ol, li, p, hr, form 등

- **인라인 레벨 요소(inline level element)**

  - 하나의 라인 안에서 자신의 내용만큼의 박스를 만드는 요소, 기본 너비는 content영역의 너비

  - span, a, img, input, label 등
  - 블록 레벨 요소의 자식으로 분류되기 때문에 자손으로 블록 레벨 요소를 가질 수 없음
    - 단, `<a>`태그는 인라인 레벨이지만 자손으로 블록 요소를 가질 수 있음



- `display: block`
  - 인라인 요소에 display: block을 지정함으로써 block으로써의 속성을 부여함
    - 줄 바꿈, 화면 전체 가로 폭, 블록 요소 안 인라인 요소 위치 가능 등
- `display: inline`
  - 블록 요소에 inline적 속성을 부여함
    - 줄 바꿈 발생 x, content영역만큼 가로 폭 차지, width/height/margin-top 등 지정 불가
    - 상하 여백은 line-height로 지정
- `display: grid`
  - grid 속성을 부여함. 화면을 격자형처럼 배치가 가능함
  - `grid-template-colums: 150px, 1fr`와 같이 구획에 대한 스타일이 있어야 적용 가능
    - 150px: 첫번째 요소에 150px을 줘라, 1fr: 두번째 요소 이후에는 1fr(화면차지 단위)


- `display: none`
  - 해당 요소를 화변에 표시하지 않고, 공간조차도 부여되지 않음

​			※ `visibility: hidden`은 해당 요소가 공간은 차지하나 화면에 표시되지 않음



### CSS position

- `static`: default
- `relative`: 상대 위치
  - 자기 자신의 본래 위치(static위치)를 기준으로 이동(Normal flow 유지)
  - 본래 위치의 레이아웃에서 공간은 차지하고 있는 상태
- `absolute`: 절대 위치
  - 가장 가까이 있는 부모/조상을 기준으로 이동, 없을 경우 body를 기준으로 함
  - 본래 위치에서 이동 후 레이아웃에서 공간을 차지하고 있지 않음(Normal flow에서 벗어남)
- `fixed`: 고정 위치
  - 본래 위치에서 이동 후 레이아웃에서 공간을 차지하고 있지 않음(Normal flow에서 벗어남)
  - 부모 요소와 관계 없이 viewport를 기준으로 이동함(스크롤 시에도 동일한 위치) 
- `sticky`: 고정 위치
  - Normal flow를 유지한 채 고정(공간 차지)
  - 부모 요소와 관계 없이 viewport를 기준으로 이동함(스크롤 시에도 동일한 위치) 




### CSS Layout

#### Float

한 요소(element)가 보통 흐름(normal flow)으로부터 빠져 텍스트 및 인라인(inline) 요소가 그 주위를 감싸는 자기 컨테이너의 좌우측을 따라 배치되어야 함을 지정.

예) 이미지의 오른쪽 및 아래에 글과 함께 배치 등

float는 레이아웃을 구성하기 위해 필수적으로 활용되었으며, 최근엔 flexbox, grid 등장과 함께 사용도가 낮아짐

- 속성
  - none: 기본값 / left: 요소를 왼쪽으로 띄움 / right: 요소를 오른쪽으로 띄움

##### clearing float

- float는 Normal flow에서 벗어나 있는데, 이후 요소에 대해서 float 속성이 적용되지 않도록 clearing이 필수적임
- `.클래스명::after`로 사용
- `::after`: 선택한 요소의 맨 마지막 자식으로 가상 요소를 하나 생성함

```css
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
```



#### Flexbox

행과 열 형태로 아이템들을 배치하는 1차원 레이아웃 모델

사용 이유? normal flow를 벗어나는 수단이 float과 position인데, 이 두 속성은 사용자 환경에 따라 많은 영향을 받을 수 있는데 flexbox는 자동적 조절을 해줌

##### 구성요소

- 축
  - 메인 축(main axis), 교차 축(cross axis)
  - 항상 메인축을 먼저 생각할 것 default는 → 방향, 교차축은 ↓방향
- 구성요소
  - Flex Container(부모 요소)
    - 부모 요소에 `display: flex;` 및 flex속성을 준다
    - flexbox레이아웃을 형성하는 가장 기본적인 모델
    - flex item들이 놓여 있는 영역
  - Flex item(자식 요소)
- flex-direction: 메인축을 설정
  - flex-direction: row(→);, row-reverse(←);
  - flex-direction: column(↓);, column-reverse(↑);
- flex-wrap: 아이템이 컨테이너를 벗어나는 경우 해당 영역 내에 배치되도록 설정함
  - wrap: 컨테이너를 벗어날 경우 남는 공간에 집어 넣음
  - nowrap: 배치 플로우를 유지하되 그림을 줄여서라도 컨테이너에 넣음
- flex-flow: flex-direction과 flex-wrap의 혼합(flex-direction의 속성을 먼저 쓰고, wrap 속성을 씀)
  - 예) flex-flow: column-reverse wrap-reverse;
- justify-content: 메인축을 기준으로 공간을 나눔 / align-content: 교차축을 기준으로 공간을 나눔
  - flex-start(default): 아이템들을 축 시작점
  - flex-end: 아이템들을 축 끝쪽으로
  - center: 아이템들을 축 중앙으로
  - space-between: 아이템 사이의 여백을 동일하게
  - space-around: 각 아이템 주변의 공간을 동일하게
  - space-evenly: 전체 영역에서 아이템 간 간격을 동일하게 분배
- align-item: 모든 아이템을 교차축 기준으로 정렬
  - stretch, flex-start, flex-end, center, baseline
- align-self: 개별 아이템을 교차축 기준으로 정렬
  - stretch, flex-start, flex-end, center, baseline

- flex-grow: 아이템에 남은 영역을 분배함. 숫자의 의미는 비율
- order: 배치 순서를 바꿈. default값은 0
- fixed-top/bottom
- sticky-top/bottom: 원래 자기 위치에서 생성되었다가 해당 위치에 fix됨(자기 자리를 차지함)



##### 반응형 웹(Responsive Web)

디스플레이의 크기가 변화했을 때 해당 웹 페이지의 각 요소들이 그에 맞춰 반응하여 동작하는 웹을 말함



##### 미디어쿼리(Mediaquery)

반응형 웹을 만들기 위한 방법 중 하나로 `@media(조건) {css 스타일 내용}`의 형식으로 쓴다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    @media(max-width: 800px){
        #grid {
            display: block;
        }
        ol {
            border-right: none;
        }
    }
</style>
```

위의 예시에서 미디어쿼리 내의 css 스타일은 화면 디스플레이 크기가 최대 800일 때까지만 적용된다.



-----

### Bootstrap

>  ※ Bootstrap의 경우 공식문서를 참고하는 것이 더 바람직하나, 기본적인 요소만 정리함

##### CDN(Content Delivery/Distribution Network):

컨텐츠(CSS, JS, image, text) 등을 효율적으로 전달하기 위해 여러 노드에 가진 네트워크에 데이터를 제공하는 시스템. 개별 end-user의 가까운 서버를 통해 빠르게 전달 가능한 지리적 이점이 있으며, 외부 서버를 활용함으로써 본인 서버의 부하가 적어진다는 장점이 있음

- 부트스트랩의 CSS 링크는 head부분에 쓴다.
- 부트스트랩의 JS링크는 body부분의 closing 바로 위에 쓴다.



##### bootstrap flexbox 적용

`class="d-flex"`와 같이 클래스 요소에 d-flex를 쓴다.



#### spacing

| 표기 | 의미     |
| ---- | -------- |
| m    | margin   |
| p    | paddling |

| 표기 | 의미                                                 |
| ---- | ---------------------------------------------------- |
| t    | top                                                  |
| b    | bottom                                               |
| s    | left, start(default값으로 row가 왼쪽에서 시작하니까) |
| e    | right, end(default값으로 row가 오른쪽에서 끝나니까)  |
| x    | left, right                                          |
| y    | top, bottom                                          |

| 숫자 | 뜻      | px   |
| ---- | ------- | ---- |
| 0    | 0rem    | 0px  |
| 1    | 0.25rem | 4px  |
| 2    | 0.5rem  | 8px  |
| 3    | 1rem    | 16px |
| 4    | 1.5rem  | 24px |
| 5    | 3rem    | 48px |



#### Grid System

요소들의 디자인과 배치에 도움을 주는 시스템으로, 반응형 웹을 만들때 활용한다.

##### 기본요소

- container: column들을 담고 있는 공간

- column: 실제 컨텐츠를 포함하는 부분(12개 또는 16개, 주로 12개 사용, 12, 16인 이유는 배수가 많아서)
- gutter: column과 column 사이의 공간



##### 기본 구조

```html
<div class="container">
    <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
    </div>
</div>    
```

`col - (breakpoint) - (수치)`형태로 표현



##### breakpoint

| breakpoint 표기                      | 의미               | 범위                    | 예시        |
| ------------------------------------ | ------------------ | ----------------------- | ----------- |
| xs(보통 따로 표기 안 하고 숫자만 씀) | extra small        | < 576px (576px 이하)    | col-3       |
| sm                                   | small              | >= 576px (576px 이상)   | col-sm-6    |
| md                                   | medium             | >= 768px (768px 이상)   | col-md-4    |
| lg                                   | large              | >= 992px (992px 이상)   | col-lg-4    |
| xl                                   | extra large        | >= 1200px (1200px 이상) | offset-xl-3 |
| xxl                                  | double extra large | >= 1400px (1400px 이상) | col-xxl-12  |



##### offset

offset은 앞쪽에 적용 됨

offset-breakpoint-0도 가능함(조건에 따라 offset을 없애기 위해서)



---------

### 기타

- css의 주석은 `/* */`이다.
- `태그명.짓고싶은 클래스명` 을 VSC에서 입력 시 태그명에 class명이 부여된 상태로 자동완성됨
- 마크업에 필요한 단축키, 약어 등을 정리해 놓은 사이트
  - https://emmet.io/
  - https://doc.emmet.io/cheat-sheet/

- game하면서 css 익히기
  - https://flexboxfroggy.com/#ko : CSS flexbox를 이용해 개구리들을 옮기는 게임
  - https://cssgridgarden.com/#ko : CSS로 당근밭을 가꾸는 게임
  - http://www.flexboxdefense.com/ : CSS로 대포를 설치하여 적들을 물리치는 디펜스 게임