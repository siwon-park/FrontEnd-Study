# 06_React Component Styling

리액트 앱을 만든다는 것은 결국 앱을 스타일링하는 것

### 조건부 동적 스타일링

#### 방법1

변수 사용 및 삼항 연산자 활용 조건부 스타일링

![image](https://user-images.githubusercontent.com/93081720/177377621-d75e5bb3-a762-461e-b0d5-c40ed4a97125.png)

- 인라인 스타일링은 항상 최우선 순위를 가짐

<br>

#### 방법2

백틱과 CSS를 활용한 동적 스타일링

![image](https://user-images.githubusercontent.com/93081720/177598037-e6ebb161-ff69-4ace-83b7-7cc269d16019.png)

<br>

### Styled Component

서드 파티 라이브러리

고유한 범위를 가진 스타일로, 미리 스타일이 지정된 컴포넌트를 설정 가능

![image](https://user-images.githubusercontent.com/93081720/177601042-752e4964-96fb-482f-afd2-3d0e1ac06edd.png)

- button은 버튼 태그를 생성하는 styled 객체의 메서드임
- div태그 생성을 위해 styled.div`` 과 같이 쓸 수도 있음
- 백틱 안에 스타일 내용을 적어서 스타일링 가능(여러 줄로 사용 가능)

![image](https://user-images.githubusercontent.com/93081720/177601683-7cde53b2-8e15-425c-b815-447b42039e61.png)

<br>

- &의 의미는 this와 같음 => 해당 메서드로 생성한 태그에서만 :행동이 발생했을 시 스타일을 적용한다는 의미가 됨

![image](https://user-images.githubusercontent.com/93081720/177601989-fcd6d29f-5c46-43ed-b28b-212c8385a79d.png)

<br>

- 다음과 같이 선언하여 컴포넌트로도 사용 가능

![image](https://user-images.githubusercontent.com/93081720/177764186-41e02296-8582-4407-b0c7-92e1aae78755.png)

![image](https://user-images.githubusercontent.com/93081720/177764045-5ba04fb1-3cab-4a31-baeb-09629e1aa8ea.png)

<br>

#### props를 활용한 동적 스타일링

![image](https://user-images.githubusercontent.com/93081720/177765560-e89c42a8-a415-4a64-b148-3f78461e722f.png)

![image](https://user-images.githubusercontent.com/93081720/177765614-6f97500c-4423-4024-869b-90f83dba567a.png)

props를 받아서 위와 같이 css를 동적으로 바인딩할 수 있음

<br>

#### media query(미디어 쿼리) 적용

![image](https://user-images.githubusercontent.com/93081720/177766292-2728d2dc-cc4c-49d5-a1e3-002383185b23.png)

<br>

### CSS Modules

CSS파일을 유지하되, 적용 범위를 전역이 아니라 해당 컴포넌트에게만 한정시킬 수 있는 방법

- 파일명 수정: Button.css → Button.module.css

![image](https://user-images.githubusercontent.com/93081720/177769240-956ae707-d225-431a-ac2c-804614f63ff1.png)

<br>

- styles라는 이름으로 import하여, css 스타일링의 클래스 명을 속성으로 사용

![image](https://user-images.githubusercontent.com/93081720/177769585-50f51fb7-5314-48c5-aaa0-c5182367865f.png)

<br>

#### 동적 스타일링

아래와 같이 대시(-)가 있는 클래스는 어떻게 적용할까?

![image](https://user-images.githubusercontent.com/93081720/177773413-349b0aff-665c-408d-be42-7443f0aca127.png)

- 다음과 같이 styles 대괄호에 속성값을 넣는 형태로 사용한다

![image](https://user-images.githubusercontent.com/93081720/177773721-921add70-b0ce-4cd3-92e3-626980be74a5.png)

<br>

아래와 같이 다중 클래스일 경우에는 어떻게 할까?

![image](https://user-images.githubusercontent.com/93081720/177773991-78221d34-fe19-4210-93eb-ab549b73d5df.png)

- 백틱을 활용하여 동적으로 바인딩해줘야한다.

![image](https://user-images.githubusercontent.com/93081720/177774521-a9d2769e-8e72-461c-9521-2c4106baabde.png)

<br>

#### 미디어 쿼리 적용

일반적인 미디어쿼리 적용법과 같다

![image](https://user-images.githubusercontent.com/93081720/177772356-8480761b-638c-4adb-89ae-7a2b07299e2a.png)