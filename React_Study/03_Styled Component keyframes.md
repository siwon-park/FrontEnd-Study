# 02_Styled Component with keyframes

스타일드 컴포넌트에서 keyframes를 활용해 애니메이션 적용하기

## 01_트리거 없는 애니메이션 적용하기

onClick과 같이 어떤 행동에 의해서 트리거링 되는 애니메이션이 아닌 경우 아래와 같이 적용할 수 있다

### 1. keyframes import

![image](https://user-images.githubusercontent.com/93081720/185746763-75e086f3-f362-40d5-985f-750c93b7e48f.png)

<br>

### 2. keyframes 애니메이션 선언

![image](https://user-images.githubusercontent.com/93081720/185746802-19840633-bfc8-456c-a36b-f3518e5a2f2a.png)

<br>

### 3. Styled Component에 적용

![image](https://user-images.githubusercontent.com/93081720/185746855-7abebe3c-d315-4986-8b0c-88bbacb10694.png)

<br>

## 02_트리거가 필요한 애니메이션 적용하기

onClick과 같이 어떤 함수에 의해서 토글링 및 트리거링되어서 애니메이션 적용이 필요한 경우에 다음과 같이 적용할 수 있다.

(예시)

### 1. keyframes, css import

![image](https://user-images.githubusercontent.com/93081720/185746908-3c10e47c-edc5-411a-817f-3a38941ff123.png)

<br>

### 2. keyframes 애니메이션 선언

![image](https://user-images.githubusercontent.com/93081720/185746930-26ccfdaa-e731-438e-b57f-9c9806d714ad.png)

<br>

### 3. Styled Component에 적용

트리거링이 필요하므로 `props`를 사용해야만 한다

![image](https://user-images.githubusercontent.com/93081720/185746953-8f22ad1c-1a7c-46db-89d7-2adf61d4da1d.png)

<br>

