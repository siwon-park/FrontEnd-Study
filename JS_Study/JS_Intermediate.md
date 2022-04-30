# JS 심화

### ※ JS에서 표준이 중요한 이유

브라우저마다 코드를 따로 만들게되면 작성한 코드가 브라우저 간 호환이 되지 않을 수 있기 때문에 표준이 중요하다.(크로스 브라우징 이슈)

또한 브라우저마다 코드를 따로만들게 되면 코드의 재사용성이 낮아지고 비효율이 증가한다.

<br>

## 1. DOM 기본

### ※ DOM(Document Object Model)

문서를 구조화하고, 구성요소를 하나의 객체로 취급하여 다루는 논리적 트리 모델

문서가 구조화되어 있으며, 각 요소는 객체로 취급

- 주요 객체
  - window => 탭 전체 영역
  - document 등

- **파싱(parsing)**
  - 구문 분석, 해석
  - 브라우저가 문자열을 해석하여 DOM tree로 만드는 과정

- 조작 순서
  - **선택(Select)** => 내가 조작하고 싶은 부분을 선택한다.
  - **변경(Manipulation)** => 선택한 객체를 조작한다

![image](https://user-images.githubusercontent.com/93081720/165534159-33b5a0a6-c5d7-4925-9a12-3ba53c44698c.png)

<br>

### ※ BOM(Browser Object Model)

JS가 브라우저와 소통하기 위한 모델

<br>

----

## 2. DOM 조작

### 1. 선택(Select) 

=> 내가 조작하고 싶은 부분을 선택한다.

### 2. 변경(Manipulation)

=> 선택한 객체를 조작한다.

![image](https://user-images.githubusercontent.com/93081720/165657226-b79c6f24-474c-42f2-82c8-200549de8e6f.png)

<br>

### DOM 객체의 상속 구조

![image](https://user-images.githubusercontent.com/93081720/165537103-f3fc453b-a924-4dca-b255-94faa457f013.png)

<br>

#### 1. Event Target

Event Listener를 가질 수 있는 객체가 구현하는 DOM 인터페이스

<br>

#### 2. Node

여러 가지 DOM 타입들이 상속하는 인터페이스

<br>

#### 3. Element / Document

- Element
  - Document 안의 모든 객체가 상속하는 가장 범용적인 인터페이스
- Document
  - 브라우저가 불러온 웹 페이지
  - DOM 트리의 진입점 역할을 수행

<br>

#### 4. HTML Element

- 모든 종류의 HTML 요소

<br>

---

## 3. DOM 선택 메서드

### document.querySelector(*'selector'*)

제공한 선택자(selector)와 일치하는 첫 번째 element를 **하나 선택**하여 객체 반환(없으면 null)

<br>

### document.querySelectorAll(*'selector'*)

제공한 선택자와 일치하는 모든 element를 선택하여 NodeList로 반환(Static Collection NodeList)

해당하는 객체가 없으면 빈 리스트를 반환함

※ NodeList

- 인덱스로만 각 항목에 접근 가능
- HTML Collection과 달리 배열에서 사용하는 forEach메서드 및 다양한 메서드를 사용 가능함

![image](https://user-images.githubusercontent.com/93081720/165657034-54987f32-9632-48e1-bdac-7d15d29d1eee.png)

<br>

**※ getElementById(), getElementByTagName(), getElementByClassName() 대신 querySelector()와 querySelectorAll()을 사용하는 이유?** 

=> querySelector()와 querySelectorAll()은 id, class, tag 등을 모두 사용 가능하므로 유연하며, 좀 더 구체적인 선택이 가능하기 때문

<br>

#### DOM collection

- Live Collection
  - 문서가 바뀔 때 실시간으로 업데이트 됨
  - DOM의 변경사항을 실시간으로 collection에 반영함
  - 예) HTML Collection, NodeList

<br>

- Static Collection(non-live)
  - DOM이 변경되어도 Collection 내용에는 영향을 주지 않음(실시간 변경 X)
  - querySelectorAll()의 반환 NodeList는 Static Collection임

<br>

---

## 4. DOM 변경 메서드

### document.createElement('tagName')

작성한 태그 명의 HTML요소(DOM 객체)를 생성하여 반환(내용은 빈 컨텐츠임)

꺽쇠('<', '>')를 제외한 태그명만 문자열로 넘겨받음

<br>

### Element/Node.append()

특정 부모 Node의 자식 NodeList 중 마지막 자식 다음에 Node객체나 DOM String을 삽입 ※ DOM String(문자열)

여러 개의 Node 객체, DOM String을 추가할 수 있음

반환값이 없다

![image](https://user-images.githubusercontent.com/93081720/165543401-0622c1f7-6a44-4c3d-9c86-78a0aecdb6a1.png)

<br>

### Element/Node.appendChild()

한 Node를 특정 부모 Node의 자식 NodeList 중 마지막 자식으로 삽입(Node객체만 추가 가능, DOM String 불가)

오직 하나의 Node만 추가할 수 있음(만약 주어진 Node가 이미 문서에 존재하는 다른 Node를 참조한다면 새로운 위치로 이동)

추가된 Node 객체를 반환

![image](https://user-images.githubusercontent.com/93081720/165543047-87fd3539-d83c-47c6-939d-181fd46e8f31.png)

<br>

#### ※ `.innerText` vs. `.innerHTML`

- `.innerText`
  - 해당 요소 내부의 raw text 내용을 표현(줄바꿈 인식, 숨겨진 내용 무시)
- `.innerHTML`
  - 해당 요소 내에 포함된 HTML 마크업을 인식하여 표현
  - XSS(Cross-Site Scripting) 공격에 취약함
    - 공격자가 입력요소(input태그)를 사용하여 웹 사이트 클라이언트 측의 코드에 악성 스크립트를 삽입하여 공격하는 방법으로 사용자(피해자)의 브라우저가 악성 스크립트를 실행하여 공격자가 엑세스 제어를 우회해서 사용자로 가장할 수 있도록 함

![image](https://user-images.githubusercontent.com/93081720/165544555-3563039b-6a86-4384-9b1f-5137f0a6828a.png)

<br>

----

## 5. DOM 삭제 메서드

### Node.remove()

Node가 속한 트리에서 해당 Node를 제거함

<br>

### ParentNode.removeChild(ChildNode)

트리에서 부모 Node의 자식 Node를 제거하고 제거한 Node를 반환함

removeChild에 인자를 넘겨줌

<br>

----

## 6. DOM 속성 메서드

### Element.setAttribute(name, value)

지정된 요소의 값을 설정함

name인자에는 'id' 또는 'class' 및 '속성명'을 지정함

속성이 이미 존재하면 값을 갱신하고, 존재하지 않으면 지정된 이름과 값으로 새 속성을 추가함

<br>

### Element.getAttribute(attributeName)

해당 요소의 지정된 값(문자열)을 반환

인자(attributeName)은 값을 얻고자 하는 속성(id, class, 속성 등)의 이름

![image](https://user-images.githubusercontent.com/93081720/165533431-4519b2fc-5737-4172-9e42-d3d7b1d1f835.png)

<br>

----

## 7. Event

네트워크 활동이나 사용자와의 상호작용 같은 사건의 발생을 알리기 위한 객체

마우스 클릭 및 키보드 누르는 등의 사용자 행동으로 이벤트가 발생할 수 있음

특정 메서드를 호출하는 등 프로그래밍적으로도 이벤트를 발생시킬 수도 있음



"~하면 ~한다" => 예) 클릭하면 경고창을 띄운다





![image](https://user-images.githubusercontent.com/93081720/165467594-99e5ed6e-49f1-4a2c-81f5-6c0a8aa6cea5.png)

- #### 대상(EventTarget)
  
  - 이벤트 대상, HTML 객체(Element, Document, Window 등)
- #### 타입(type)
  
  - 이벤트의 종류, 유형(문자열로 작성)
    - click : 포인팅 장치 버튼이 엘리먼트에서 눌렸다가 놓였을 때
    - mouseover : 포인팅 장치가 리스너가 등록된 엘리먼트나 그 자식 엘리먼트의 위로 이동했을 때
    - mouseout : 포인팅 장치가 리스너가 등록된 엘리먼트 또는 그 자식 엘리먼트의 밖으로 이동했을 때
    - keydown : 키가 눌렸을 때
    - keyup : 키 누름이 해제될 때
    - load : 리소스와 그 의존 리소스의 로딩이 끝났을 때
    - scroll : 다큐먼트 뷰나 엘리먼트가 스크롤되었을 때
    - change : 인풋태그, 셀렉트 태그, 텍스트에어리어 태그에 있는 값의 변경이 발생했을 때(input과는 달리 유저가 변화에 대해 commit했을 때 발생)
    - input :  인풋태그, 셀렉트 태그, 텍스트에어리어 태그에 입력으로 뭔가 들어왔을 때(변화가 있을 때)
- #### 리스너(listener)
  
  - 지정된 타입의 이벤트가 발생했을 때 알림을 받는 객체
  - 함수, 콜백 함수 등(단, 호출을 해서 결과를 넘기는 것이 아니라 함수 자체를 넘겨야함)



<br>

### Event 취소

#### `event.preventDefault()`

- 현재 이벤트의 기본 동작을 중단함

- HTML 요소의 기본 동작을 작동하지 않게 막음
  - 예) form 태그의 기본 동작 form 데이터 전송(submit)을 막음

- 취소할 수 없는 이벤트도 있음

