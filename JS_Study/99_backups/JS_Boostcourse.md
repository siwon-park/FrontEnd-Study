# 자바스크립트

## Ch. 01

### 01. JavaScript(자바스크립트, JS)란?

**사용자와 동적으로 상호작용** 하기 위한 웹 페이지에 대한 욕구로서 JS의 탄생을 불러옴

'HTML을 제어하는 언어'



### 02. `<script>`태그

스크립트 태그는 태그 안에 오는 내용이 JS라는 것을 명시해주는 태그임

![image](https://user-images.githubusercontent.com/93081720/159271203-4645dcbe-5ede-4dec-8259-886b02cfb851.png)

※ JS의 주석은 `//`으로 자바에서의 주석과 같다(script 태그 안에서 동작함)



### 03. 이벤트(Event)

어떤 사건이 발생했을 때, 웹 브라우저에서 JS가 실행되는 일을 **이벤트(Event)**라고 한다.

이벤트의 종류에는 `onclick`, `onchange`, `keydown` 등 여러 이벤트가 존재한다(자세한 것은 공식문서 참조)

![image](https://user-images.githubusercontent.com/93081720/159271695-e2fc4f03-27c6-4e53-8f7e-1fa09a7bc7ed.png)



### 04. 콘솔(console)

웹 페이지에서 검사(f12키) 기능을 통해 검사 창에서 콘솔(console)을 실행할 수 있는데, 여기서 JS에 대한 구문을 실행 가능하다(마치 일반 프로그래밍 언어에서 터미널을 사용하는 것과 비슷함)

※ 한번 실행했던 코드는 윗 방향키(↑)를 누르면 다시 쉽게 호출이 가능하다.

- 콘솔차에서 문자열의 길이를 alert을 통해 호출한 예시

![](https://user-images.githubusercontent.com/93081720/159267564-69bfc3af-16f5-4754-9c39-cdc5698f8ae8.png)



### 05. 데이터 타입(Data Type)

JS의 데이터 타입에는 6가지 기본형(Primitive Type)과 객체(Object)가 있다.

- 6가지 기본형: Boolean, Null, Undefined, Number, String, Symbol



### 06. 변수(Variable)

변수는 왜 쓰는가? => 가장 핵심은 재사용성 및 생산성의 향상

※ 변수를 쓸 때는 앞에 키워드로 `var`을 쓰는 것을 '권장'한다.

※ shift+enter키 : 코드 실행 유보



### 07. querySelector()

제어할 태그를 선택하여 동적으로 CSS를 적용 가능함

![image](https://user-images.githubusercontent.com/93081720/159381871-321366e3-8638-4a42-8fd5-3bf7e0403f14.png)



## Ch. 02

### 01. 프로그램, 프로그래밍, 프로그래머

- 프로그램 = 순서
- 프로그래밍 = 순서를 만드는 행위
- 프로그래머 = 순서를 만드는 행위를 하는 사람

HTML은 프로그래밍 언어라고 할 수 없다 => 왜냐하면 '표현'에 그 핵심과 목적이 있기 때문에 순서나 실행이 존재하지 않는다.

반면에 JS는 프로그래밍 언어이다. => 왜냐하면 조건 및 행동에 따른 실행, 순서를 달리할 수 있기 때문이다.



### 02. 조건문

※ 토글(Toggle) : 하나의 설정, 장치 또는 버튼이지만, 조건에 따라서 그 기능을 달리 할 수 있는 것. 가장 대표적인예는 On/Off 버튼

- 비교 연산자 `===`
  - JS에서 비교 연산자는 일반적인 프로그래밍 언어와 달리  `===`이다

![image](https://user-images.githubusercontent.com/93081720/159491384-01f61ec7-9b63-4d88-b421-2d62125a7a73.png)

※ html에서 `<`나 `>`를 쓰면 태그를 나타내는 기호와 중복되어 혼동할 수도 있기 때문에 `&lt;`와 `&gt;`로 쓴다.

![image](https://user-images.githubusercontent.com/93081720/159491491-1616a82c-7948-4745-9a8c-d343e123c036.png)

※ JS에서 document.write()안에 쓰는 문자열에도 html태그를 쓴다면 동일한 기능을 적용 가능함 

![image](https://user-images.githubusercontent.com/93081720/159491251-3f860383-a7f7-4455-bcbe-113ab4c3695d.png)



### 03. Refactoring(리팩토링)

기능적인 면에서는 개선 및 변화를 시키지 않고,  유지보수가 편리하게, 가독성이 좋게 코드를 수정하는 것을 말함

예) 자기자신을 참조하는 키워드 this 사용, 변수활용을 통한 중복 제거 등

![image](https://user-images.githubusercontent.com/93081720/160147161-83768f4e-9582-43b3-988e-acfe1074c54b.png)



### 04. 배열

자바에서는 배열 선언 시 `{}`사용 및 사용 가능하지만, JS는 파이썬과 동일하게 `[]`를 사용함

자료의 삽입은 일반적으로 push()를 사용함(파이썬의 append와 같은 기능)



### 05. 반복문

반복문을 통해 반복적으로 작업 가능함

변수를 받아와서 사용할 때는 `+`를 통해서 문자열 조합하듯이 사용해야함. 그냥 변수명을 그대로 적을 경우 문자열 그자체로 인식한다.

![image](https://user-images.githubusercontent.com/93081720/160147970-aac3b66c-a73e-45e0-a491-a5ec6f0b7de7.png)

※ script 태그 안에는 html 태그를 못 쓴다. 따라서 html태그를 밖에 쓰고 JS적용을 위한 script 태그는 안에 써야한다.

※ a 태그 안에 링크 주소에 변수를 적용시켜서 변화 가능하다. 단, 이 때 헷갈리지 않게 쌍따옴표 및 따옴표 사용에 주의해서 잘 써야한다.

※ "\n"은 개행으로 인식하지 않고 공백 1칸으로 인식한다(" "). 따라서 한 문단 띄워쓰고 싶을 땐 br태그를 JS에서 태그 적용시키듯이 쓴다.

![image](https://user-images.githubusercontent.com/93081720/160148531-c71db3ca-f755-439b-af6f-a310d3c757be.png)



## Ch. 03

### 01. 함수(function)

JS에서 함수 선언 키워드는 `function`이다.

※ 자기 자신을 매개 변수로 받을 때는 self로, 인자로 받을 때는 this로 한다.

![image](https://user-images.githubusercontent.com/93081720/160527641-c44ed4fe-d1b9-4de1-8b6f-1ad49db34758.png)

![image](https://user-images.githubusercontent.com/93081720/160527861-dda13220-8407-4c9c-b6bd-eb50de568bd9.png)



JS의 함수는 자바처럼 함수의 리턴값에 대해 명명하지 않아도 된다. 파이썬처럼 그냥 return 해도 됨

![image](https://user-images.githubusercontent.com/93081720/160242171-de18e7c0-cf49-4c1b-9f56-de0982472b87.png)



## Ch. 04

### 01. 객체(Object)

JS에서 객체는 `{}` 중괄호로 선언한다. Python의 딕셔너리와 매우 유사하다.

객체의 변수를 프로퍼티(Property), 객체의 함수를 메서드(Method)라고 한다.

`.`은 Object Access Operator이다. 대괄호`[]`안에 key값을 써서 value값에도 접근이 가능하다.

![image](https://user-images.githubusercontent.com/93081720/160242319-5b655007-582c-4d02-b608-24bbc4d6ac6c.png)



객체 안에 다음과 같이 함수(메서드)를 담을 수도 있다. 표기형태가 조금 다름에 유의하자. 또한 메서드가 여러 개일 경우, 각 메서드의 선언 끝 이후 콤마를 찍는 것도 잊지 말아야한다.

![image](https://user-images.githubusercontent.com/93081720/160242609-7c4b21dc-8f19-461a-9ad8-1984cb3403c1.png)



### 02. 객체 순회(Iteration)

파이썬의 for - in 구문, 자바의 for each구문과 같이 JS도 객체 순회가 가능하다.

`for(var 변수 in 객체)`형태로 사용한다.

![image](https://user-images.githubusercontent.com/93081720/160242400-1f8cfa0d-3668-481e-980d-8dd2c421e9db.png)



### 03. 메서드 선언

객체의 함수를 메서드라고 하며, 다음과 같이 하나의 변수처럼 선언할 수 있다.

① `객체.메서드 = function()`

② `var 메서드 = function()`

![image](https://user-images.githubusercontent.com/93081720/160242458-65012d27-3d5e-453c-a48d-72f8c8e23b72.png)



※ 객체화의 장점? 객체 안에 함수를 선언해서 넣는데, 동일한 이름으로 해당 객체에서 대해서만 기능하는 함수를 선언할 수도 있음

![image](https://user-images.githubusercontent.com/93081720/160242732-1abcf458-1769-4338-b200-b2c2c498d0eb.png)



## Ch. 05

### 01. JS 활용(JS파일화)

script 태그 안에서 선언했던 재사용 가능한 코드들, 함수, 객체 등만을 묶어서 `.js`파일로 만들어서 script태그의 `src`속성을 통해 불러오기가 가능함. 이렇게 사용하면 관리 및 유지보수에 엄청난 용이성과 효율성이 생길 뿐만 아니라 코드가 명확해지고(html따로, js따로), 가독성이 좋아진다는 장점도 생긴다.

![image](https://user-images.githubusercontent.com/93081720/160273135-7d2d8766-9c5a-4030-91be-e73ef16990f4.png)



또한 파일을 분리하면 캐시(cache)입장에서도 장점이 생기는데, 웹페이지는 js파일을 네트워크에서 일단 한 번 다운로드해서 저장(캐싱)을 해두면, 다음에 해당 웹 페이지를 불러올 때, 네트워크로부터 다시 다운로드할 필요 없이 저장된 것을 불러오기만 하면 되기 때문에 속도면에서도 이점이 생긴다.

[웹 페이지 호출 시, js파일을 네트워크로부터 다운로드해오는 모습]

![image](https://user-images.githubusercontent.com/93081720/160273066-68d9f5fc-0bc5-45d8-bba6-967765dcafcc.png)



### 02. 라이브러리(library)와 프레임워크(framework)

※ 소프트웨어의 사회성? 오늘날 우리는 소프트웨어를 혼자 만들지 않는다. 또한 하나의 툴만 사용해서 만들지 않는다. 여러 명과 협업하며 여러 툴을 활용해서 소프트웨어를 만든다. 이를 소프트웨어의 사회성이라고 한다.

라이브러리와 프레임워크 둘 다 프로젝트 개발에 필요한 재사용 가능성이 있는 유용한 코드 및 기능들을 갖고 있지만, 엄밀히 말해서 서로 다른 개념이다.

라이브러리는 내가 라이브러리와 그 기능들을 가져와서 내 의지에 맞게 프로젝트에 기능을 적용시키는 것인 반면, 프레임워크는 기능 제공을 프레임워크에서 하고, 프레임워크만의 규칙에 따라 프레임워크 위에서 작업을 한다고 보면 됨

#### jQuery(제이쿼리)

[jQuery홈페이지](https://jquery.com/)

JS의 유명하고 유용한 라이브러리 중 하나.

- 적용 방법
  - 자기 자신의 프로젝트 폴더에 jQuery를 다운받아서 집어 넣는다.
  - CDN(Content Delivery Network)를 활용한다.

![image](https://user-images.githubusercontent.com/93081720/160281956-3c6476e9-050d-4c3d-97e7-c29c7ad06eac.png)

html의 head영역 안에 부트스트랩 CDN을 넣듯이 head영역 안 script태그 안에 src의 속성값으로 jQuery CDN을 적용

- 사용하기
  - JS파일에서 jQuery 적용시키기
    - `$`를 사용하며, 다음과 같이 적용 가능하다

![image](https://user-images.githubusercontent.com/93081720/160282050-1517272e-e559-4efc-8177-8b94e6c4e27e.png)

- `$('body').css("color", color)`: body 태그의 css속성 중 color를 color인자로 들어온 값으로 적용시키겠다는 의미
- `$('body').css("backgroundColor", color)`: body 태그의 css속성 중 backgroundColor를 color인자로 들어온 값으로 적용시키겠다는 의미



### 03. UI vs. API

#### UI; User Interface

- 사용자들이 시스템을 사용하면서 접하는 점, 또는 사용자들이 시스템을 제어하기 위해 조작하는 장치(접점)

#### API; Application Programming Interface

- 프로그래머가 사용하는 장치 또는 접점
- 프로그래머는 API를 활용해 다양한 기능들을 구현할 수 있다.



## ch. 06

### 01. 객체

서로 연관된 변수와 함수를 그룹핑하고 이름을 붙인 것

객체를 만드는 이유? 비슷한 것(변수 및 기능)을 그룹핑하여 코드의 재사용성을 높일 수 있음



### 02. node.js

터미널 창에서 `node 파일명`을 입력하여 JS파일을 실행하고 그 결과를 출력할 수 있다.

![image](https://user-images.githubusercontent.com/93081720/160437378-d2b24ef4-2dda-46f9-9085-7b5fb38ca7cf.png)



![image](https://user-images.githubusercontent.com/93081720/160437058-f97c140b-c9cd-4d50-b1eb-5fc741202557.png)

`console.log()`를 통해서 출력 가능 



### 03. this

객체 자기 자신을 참조하는 키워드

![image](https://user-images.githubusercontent.com/93081720/160528689-cbe7ea8e-ae26-4733-b6ba-5da80260ec8b.png)



### 04. 생성자(constructor)

다른 언어에서의 클래스와 같은 개념임. 생성자 함수를 정의하고 new를 통해 호출하여 객체를 만든다.

![image](https://user-images.githubusercontent.com/93081720/161434882-255e6178-e6f9-4402-bd83-df21aafa6554.png)

그러나 이와 같이 매번 생성자 함수 안에서 메서드를 정의하는 것은 생성자가 생성될 때마다 해당 메서드가 계속 생성되고 있다는 의미이므로, 메모리 낭비다.

또한 해당 객체의 sum함수이므로, 수정이 필요할 경우 모든 객체의 sum을 별도로 수정해줘야한다는 비효율이 발생하여 생산성이 너무나도 떨어진다.

이를 해결하기 위해 prototype이라는 개념을 활용한다.



### 05. prototype

JS를 prototype based language라고도 함

아래와 같이 객체들이 공유할 메서드를 prototype으로 정의함으로써 객체가 생성될 때마다 메서드가 생성되는 것이 아니라 메모리를 절약할 수 있음

또한 sum에 수정이 필요할 경우 해당 prototype만 한번 수정하면 되므로 생산성이 높아진다.

![image](https://user-images.githubusercontent.com/93081720/161434999-b807af71-ccd2-4403-b664-30840d57d0d4.png)

그리고 필요할 경우, 아래와 같이 어떤 한 객체에 대한 함수도 수정 가능하다.

![image](https://user-images.githubusercontent.com/93081720/161435074-2987cc0b-0d01-4e6a-b69f-3d85465a96d8.png)
