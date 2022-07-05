# 05_Rendering and Conditional Content

### 컴포넌트 반복하기

![image](https://user-images.githubusercontent.com/93081720/177260391-35ba55cb-4ccc-42c1-bafe-17c2ba48a035.png)

<br>

### 조건부 컴포넌트 렌더링

#### 옵션1 - 조건부 표현식 사용

삼항 연산자를 사용한 조건부 렌더링

![image](https://user-images.githubusercontent.com/93081720/177264617-54b0b986-3297-4789-8faa-3dbb8d31686f.png)

<br>

#### 옵션2 - &&(AND) 활용

A and B에서 A와 B 모두 둘다 True이면 B가 결과로서 도출되는 것을 활용한 표현법

![image](https://user-images.githubusercontent.com/93081720/177266074-310e5d15-25ae-49c9-baf3-34505f91bb66.png)

<br>

#### 옵션3 - JSX구문을 변수화하여 조건부 표현

변수에 JSX구문을 저장할 수 있음을 이용해 조건부 표현

조건부 표현을 하므로 변수를 let 키워드를 통해 생성한다

![image](https://user-images.githubusercontent.com/93081720/177266856-45fca536-fcf9-4984-b391-0f3fbd1d2f10.png)

<br>

### 동적 스타일 바인딩

다음과 같이 동적으로 CSS 스타일 바인딩을 할 수 있음

이중 중괄호 중에서 안에 있는 중괄호는 객체를 의미하는 중괄호임

스타일링이 객체를 받기 때문에 이렇게 사용하는 것임

![image](https://user-images.githubusercontent.com/93081720/177366048-5a3f3752-8c5a-476a-aaa5-dc592503ee7c.png)

![image](https://user-images.githubusercontent.com/93081720/177366512-7433c1a6-7c88-4551-8c4a-b148375fc632.png)

![image](https://user-images.githubusercontent.com/93081720/177366665-e9b98f23-909c-4410-b99a-b20eb3517f8b.png)

- 속성명에 대시가 있을 경우 문자열 형태로 선언하여 사용해야한다.