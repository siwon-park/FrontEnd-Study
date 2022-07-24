# HTML(HyperText Markup Language)

### <정의>

웹을 구조화, 의미화하기 위한 언어로 태그(Tag)와 내용(Contents)으로 구성되어 있음

태그는 요소(element)로서 컨텐츠를 감싸는 것으로 그 정보의 성격와 의미를 정의함

내용을 포함한 태그 전체를 요소(Element)라고 하며 태그와 요소는 의미가 다름 



### <특징>

HTML은 DOM(Document Object Model)트리 구조이다. `DOM트리 구조란, 텍스트 파일은 HTML 문서를 브라우저에서 렌더링(표현)하기 위한 구조`를 의미한다.



### < Why HTML ?>

1. Easy To Learn
2. Important
   - 웹 페이지를 만드는 데 사용, 검색 엔진은 전 세계의 모든 웹페이지를 받아서 그 웹페이지의 html코드를 분석하여 결과를 리턴함
   - 의미에 맞게 잘 사용하면 검색 엔진을 통한 노출성이 상승하여 비즈니스 측면에서 가치가 있음
   - 접근성이 높음 → html은 모든 운영체제에서 동작하고, 누구나 볼 수 있고, 이를 기반으로 만든 웹은
     누구나 사용 가능한 공공재임(public domain)



### <관계>

- Program이 여러 Application(App)의 집합이라면, Website는 여러 Webpage의 집합임



### <확장자>

- `<파일명>.html`
- 파일여는 법: 브라우저에서 `Ctrl + O` → `.html`파일 열기
- 테스트: 에디터에서 저장 후 → 해당 웹페이지에서 새로고침(F5)



### <HTML 기본 구조>

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>HTML</title>
    </head>
    <body>
        <h1>Hello, HTML</h1>
    </body>
</html>
```



### <기초 문법>

#### 태그(Tag)`</>`

기본적으로 `여는 태그 <>`와 `닫는 태그</>`로 구성되어 있으나, 아닌 것도 있음

태그는 중첩(nested), 태그 안에 다른 태그가 포함될 수 있음

여/닫힘 태그의 쌍을 잘 확인해야하며, html은 코드를 잘못 작성하더라도 오류를 반환하는 것이 아니라 레이아웃이 깨진 채로 나와서 디버깅이 어려울 수도 있음

※ 중요 핵심 태그(통계치): [https://www.advancedwebranking.com/seo/html-study/]

#### 속성(Attribute)

- 태그별로 사용할 수 있는 속성은 다르다
- 속성은 여는 태그에만 작성하며 속성을 통해 태그의 부가적인 정보를 설정 가능하다
- 속성의 이름(name)과 값(value)이 쌍으로 존재하며, value를 쓸 땐 항상 `" "`(쌍따옴표)를 쓴다.
- `=`을 쓰면서 공백은 쓰지 않는다. ex) `<img src="주소">`
- 모든 태그에 사용가능한 global attribute가 있다.

##### ※ Global attribute

- id, class, data-*, style, title, tabindex 등



##### ※ 시멘틱 태그(sementic tag) - body 부분에 사용

- 시멘틱은 즉, 기계(컴퓨터, 브라우저)가 잘 이해할 수 있도록 하는 것을 뜻함

어떻게하면 기계가 잘 이해할 수 있는가? 마크업 할 때는 의미에 맞는 태그, 요소를 사용하는 것이고

문서를 표현할 때는 구조화를 잘 해주는 것으로써 기계가 좀 더 잘 이해할 수 있게 해줌

- HTML5에서 ''의미론적 요소''를 담은 태그로 등장 → 기존 영역을 의미하는 div태그를 대체하여 사용

요소 간의 의미가 명확해져 코드의 가독성을 높이고 유지보수의 용이성을 높임

- header : 문서 전체나 섹션의 헤더
- nav : 내비게이션
- aside : 사이드에 위치한 공간, 사이드 컨텐츠
- section : 문서의 일반적인 컨텐츠 '그룹'
- article : 문서, 페이지, 사이트 안에서 독립적으로 구분되는 영역
- footer : 문서 전체나 섹션의 마지막 부분



##### 볼드체(강조) - strong

```html
<strong>나는 강조입니다.</strong>
```

※ `<b></b>`를 써도 bold가 되지만, strong을 쓰게 되면 글자 그대로 강조의 의미가 되어, 시각 장애인들을 위한 음성메시지로 전환했을 때, 강조의 의미가 전달된다. (b태그를 쓰면 시각적 효과만 존재함)



##### 이태릭체 - em

```html
<em>나는 이태릭체입니다.</em>
```

※ `<i></i>`: 위의 설명과 마찬가지로, i 태그로 써도 이태릭체가 되긴하지만, 시각적 효과만 존재할 뿐, 의미론적으론 em을 쓰는게 더 바람직하다.



##### 밑줄 - u (underline)

```html
<u>나는 밑줄입니다.</u>
```



##### 헤드 메세지('웹 페이지'의 제목 용도) - h1 ~ 6 (headmessage)

※ 기본적으로 HTML에서는 줄바꿈(`/n`)이 없음. 에디터에서 enter키 타이핑을 해도 줄 바꿈이 발생하지 않음. 그러나 `<h1></h1>`은 기본적으로 줄 바꿈을 포함하고 있음 

```html
<h1>나는 헤드 메세지1 입니다.</h1>
```



##### 줄 바꿈

1. **`<br>`** (line **br**eak)

- `<br>` 1개는 1개의 줄 바꿈(enter) 역할을 함. 여러 개를 써도 됨. 줄 바꿈이라는 시각적 내용만을 담고 있기 때문에 닫힘 태그는 없음

```html
안녕하세요<br>저는 박시원입니다.
```



2. **`<p></p>`** (**p**aragraph)

- `<br>`과 동일하게 줄 바꿈 역할을 하지만, 정확하게는 문단을 표시하는 태그로, 닫힘 태그가 존재함
- 문단(단락)이라는 의미를 담고있기 때문에 `<p></p>` 태그를 쓰면 html문서가 보다 정보로서 가치를 갖게됨
- `<br>`보다 시각적 자유도는 다소 떨어짐

```html
<p>안녕하세요? 저는 박시원입니다.</p><p>나이는 30살입니다.</p>
```



#### 이미지 - img (image)

- 웹페이지에 이미지를 삽입 가능하게 해주는 태그
- src, width와 같은 것들을 `속성(Attribute)`이라고 하며 속성 간 순서는 상관없음
- 속성
  - src: 필수 속성으로 이미지의 경로를 나타냄
  - alt: 필수 속성으로 이미지가 나오지 않을 시 대체할 텍스트를 표기함
  - width/height: 이미지의 가로/세로 크기를 나타내는 선택 속성.  미지정 시 이미지는 원본 크기대로 노출되며, 둘 중 하나만 선언하면 나머지 한 속성은 선언한 속성의 크기에 맞춰 자동으로 비율에 맞게 변경됨. 반면 두 속성 모두 선언하면 이미지는 비율과 무관하게 선언한 크기대로 변경.

※ [https://unsplash.com] 에 있는 이미지는 무료 이미지여서 웹페이지를 만들 때 다운로드하여 테스트 가능

```html
<img src="이미지 주소(디렉토리)" width=100% alt="main.png">
<img width=450 src="이미지 주소" alt="main.png">
```

**※ 상대 경로와 절대 경로**

- **상대 경로**: 현재 디렉토리를 기준으로 상대적인 위치를 나타내는 경로
- **절대 경로**: 파일 또는 폴더가 실제 위치한 곳의 전체 경로를 말함

```html
<!-- 상대경로 -->
<img src="./images/pizza.png" alt="피자">

<!-- 절대경로 -->
<img src="C:/users/document/images/pizza.png" alt="피자">
<img src="http://www.naver.com/pizza.png" alt="피자">
```



#### 테이블(table)

표를 만드는 태그

- `<table>` : 표를 나타내는 태그
- `<thead>`: 제목 행을 그룹화하는 태그
- `<tbody>`: 본문 행을 그룹화하는 태그
- `<tfoot>`: 바닥 행을 그룹화하는 태그
- `<tr>` : 행을 나타내는 태그
  - `<th>` : 제목 셀을 나타내는 태그
  - `<td>` : 셀을 나타내는 태그



> 태그 간 부모-자식 관계(혹은 포함관계)가 있는 것들이 있으며, 경우에 따라 뒤바뀌기도 하지만 서로 거의 반드시 존재하는 경우가 있는 태그들이 존재함
>
> 부모-자식 관계는 공백 2개(2 space)로 표현함(필수는 아님). head, body 밑 lv1까지는 들여쓰기를 안 하기도 함

##### 목록 태그

1. `<li></li>` - (**li**st)

- 목록을 표시하는 태그로, 후술할 `<ul></ul>` 태그와 `<ol></ol>`태그의 자식 태그 관계에 있음

```html
<li>1. 나는 목록입니다.</li>
```

2. `<ul></ul>` - (**u**nordered **l**ist)

- `<li></li>` 태그의 부모로서 li간 경계 및 그룹핑을 짓기 위한 부모태그
- 순서가 없음 → html에서 자동으로 목록(li)에 번호를 매겨주지 않음. 넘버링을 직접 써야함

```html
<ul>
    <li>1. 나는 넘버링을 직접해야하는 목록입니다.</li>
</ul>
```

3. `<ol></ol>` - (**o**rdered **l**ist)

- `<li></li>` 태그의 부모로서 li간 경계 및 그룹핑을 짓기 위한 부모태그
- 순서가 있음 → html에서 자동으로 목록(li)에 번호를 매겨줌. 넘버링을 자동으로 해도 됨

```html
<ol>
    <li>나는 넘버링을 자동으로 해주는 목록입니다.</li>
</ol>
```



> HTML을 구조화하는 태그를 슈퍼 태그라고한다. 슈퍼 태그에는 title, head, body, meta 등이 있다. html의 모든 태그는 헤드태그와 바디태그 둘 중 하나의 아래에 놓인다.

##### 슈퍼 태그

1. `<!doctype html>` : 이 문서는 html 타입의 문서라는 의미이며, html문서의 가장 최상단에 쓴다.
2. `<html>` : html 문서를 표기하기 위한 태그로, `<!doctype html>` 바로 아랫줄에 쓴다.
3. `<head></head>`: html 문서의 머리(head) 부분이라는 의미. 헤드 안에는  `<title></title>`과 인코딩 방법을 명명하는 `<meta charset="utf-8">`을 쓴다.
4. `<body></body>` : html의 몸통으로 본문 내용을 안에 쓴다.
5. `<title></title>` : 탭에 표시되는 웹페이지명을 표기하는 태그

```html
<!doctype html>
<html>
<head>
<title>WEB-HTML</title>
<meta charset="utf-8">
</head>

<body>
<h1><a href="index.html">WEB</a></h1>
<ol>
  <li><a href="1.html">HTML</a></li>
  <li><a href="2.html">CSS</a></li>
  <li><a href="3.html">JavaScript</a></li>
</ol>
<ul>
  <li>1. siwon</li>
  <li>2. Park</li>
</ul>
<h2>HTML</h2>
<p>하이퍼 텍스트 마크업 언어(영어: Hyper Text Markup Language, HTML, 문화어: 초본문표식달기언어, 하이퍼본문표식달기언어)는
  웹 페이지를 위한 지배적인 마크업 언어다. 또한, HTML은 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라
  링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다.
   그리고 이미지와 객체를 내장하고 대화형 양식을 생성하는 데 사용될 수 있다.
   HTML은 웹 페이지 콘텐츠 안의 꺾쇠 괄호에 둘러싸인 "태그"로 되어있는 HTML 요소 형태로 작성한다.
   HTML은 웹 브라우저와 같은 HTML 처리 장치의 행동에 영향을 주는 자바스크립트와 본문과 그 밖의 항목의 외관과 배치를 정의하는 CSS 같은 스크립트를 포함하거나 불러올 수 있다.
   HTML과 CSS 표준의 공동 책임자인 W3C는 명확하고 표상적인 마크업을 위하여 CSS의 사용을 권장한다.</p>
</body>
```



##### anchor 태그 (`<a></a>`)

- 검색 엔진이 존재할 수 있는 이유, 웹의 혈관, 통로, 도로와 같은 역할을 하는 태그 

```html
<a href = "주소" target = "_blank" title = "툴팁표시 내역">oooo</a>
```

- 속성
  -  href(**h**yperlink **ref**erence) : 링크의 목적지가 되는 url을 쓰는 곳
  -  target
     -  `_self` : 현재 화면에 표시함(default 값)
     -  `_blank` : 해당 하이퍼링크를 클릭했을 때, 새 탭에서 열리게 하는 속성
  -  title = "툴팁 표시 내역" : 해당 링크에 마우스를 갖다 댔을 때, 툴팁으로 표시한 내용을 나오게하는속성



#### 의미없는 컨테이너 요소

태그 자체에 아무 의미가 없으며, 단순히 요소들을 묶기 위해 사용되는 태그. 스타일을 주거나 서버에 보내는 데이터를 담기 위한 용도로 사용됨. 사용 빈도는 매우 높으며, 그 이유는  html 태그들은 문서를 웹에 나타내기 위해 제작되어 기본적으로 문서에 최적화되어있는 "의미"를 지니는데, 현재 웹의 형태는 문서 형태에서 많이 벗어났기 때문임

##### div태그

div(division) 태그는 블록 레벨 태그로, 기본적으로 한 줄을 생성해서 내용을 표현함

##### span태그

 span 태그는 인라인 레벨 태그로, 블록 레벨 요소의 한 줄 안에서 내용을 표현함

```html
<div>
    <span>Lorem</span> ipsum dolor sit.
</div>
```

※ lorem: 임의의 더미(dummy) 텍스트 데이터 생성



#### form 태그

웹에서 사용자 정보를 입력하는 여러 방법(text, button, checkbox, file, password 등)을 제공하고,
서버에 정보, 데이터를 전달하는 역할을 담당함 

- form태그의 기본(핵심) 속성
  - `action` : 입력된 데이터를 전달할 서버의 url → 어디로 정보를 보내야 하나?
  - `method` : 입력 데이터를 전달할 때 사용할 HTTP request 방식을 지정 → 어떻게 보내는가?
    ※ HTTP request: GET(읽기), POST(생성), PUT(변경), DELETE(삭제)
    일반적으로 GET과 POST, PUT, DELETE를 나눠서 보기도 함. 왜냐하면 생성, 변경, 삭제는 데이터의 수정을 의미하므로, 보안 등과 관련하여 중요하기 때문임



##### label 태그

사용자 인터페이스 항목에 대한 설명(caption)을 나타내며, input태그와 연결됨

- label 태그의 기본 속성

  - label태그의 **for**와 input태그의 **id**는 반드시 일치해야함

    ```html
    <label for="name">이름:</label> <input type="text" id="name"><br>
    <label for="nickname">별명:</label> <input type="text" id="nickname"><br>
    <label for="address">주소:</label> <input type="text" id="address"><br>
    ```

    

##### input 태그

사용자로부터 데이터를 입력받기 위해 사용함. 내용이 없는 빈 요소이며 type 속성에 따라 동작 방식, 입력 양식의 데이터 유형과 위젯을 달리함

- 속성
  - **name**, value, required, readonly, autofocus, autocomplete, distabled 등
  
    - name과 value는 서버에 보낼 때 쌍으로 보내게 되므로 중요함
    - name에 설정된 값을 키값으로 하여 설정된 값을 가져오거나 보내는데 활용함
    - GET 방식 URL에서는 `?key1=value1&key2=value2`와 같은 형식으로 데이터를 전달함
  
  - type : 입력의 타입
  
    - "text": 주로 아이디, 이름, 주소, 전화번호 등 단순한 텍스트를 입력할 때 사용
  
      - placeholder는 사용자가 입력하기 전 미리 화면에 노출하는 값으로, 입력하는 값의 양식을 표현 가능
  
      ```html
      <input type="text" placeholder="ㅇㅇㅇ">
      ```
  
    - "password": 암호와 같이 공개할 수 없는 내용을 입력할 때 사용
  
      ```html
      <input type="password">
      ```
  
    - "radio":  라디오 버튼을 만들 때 사용함. 중복 선택이 불가능하며 하나의 항목만을 선택해야 함
  
      ```html
      <input type="radio" name="gender"> 남자
      <input type="radio" name="gender"> 여자
      ```
  
    - "checkbox": 중복 선택이 가능한 항목들을 만듦
  
      ```html
      <input type="checkbox" name="hobby"> 등산
      <input type="checkbox" name="hobby"> 독서
      <input type="checkbox" name="hobby"> 운동
      ```
  
  - id : 서버와는 관련x. 특정 HTML요소를 지정해서 작업을 함. 라벨(label)태그의 for에 지정해줄 때 반드시 일치 필요



### <기타, 교훈>

- html의 주석은 `<!--주석내용-->`이다

- 클론 코딩을 하더라도 내가 채울 내용은 내가 좋아하는 내용으로 해야 빨리 실력을 늘릴 수 있다.

- 어려운 것이 반드시 중요한 것은 아니다. 처음 배우는 것들이 쉽지만 어쩌면 가장 중요한 것이다.



#### 인터넷 vs 웹의 차이점?

- 인터넷: 1960년대 등장, 분산/통신 시스템(인프라)
- 웹: 1990년 등장
- 인터넷이 도시라면 웹은 건물, 인터넷이 도로라면, 웹은 자동차, 인터넷이 운영체제라면 웹은 프로그램임 → `웹은 인터넷의 하위 개념`
- https://info.cern.ch : 웹의 시작점
- ![web.png](HTML_Learned.assets/web 2022-02-09 232046.png)





### <단축키>

- IDE, 에디터에서 `Ctrl`키를 누른 채 클릭을 하면 그곳에 커서가 하나 더 추가됨(다중 커서 가능)