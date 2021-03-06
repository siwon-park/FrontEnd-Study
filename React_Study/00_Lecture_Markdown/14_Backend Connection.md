# 14_Backed Connection

### DB와 연결

![image](https://user-images.githubusercontent.com/93081720/179118851-13b0bb9f-3504-4f84-a9ae-1c540ec3494c.png)

프론트엔드 어플리케이션과 DB와 직접적으로 연결하면 절대 안 됨

- DB와 관련된 기밀이 브라우저에 노출됨 => 누구나 개발자 도구를 통해 DB에 있는 정보를 보거나 접근 가능하게 됨
  - 예) DB에 접근하기 위한 인증 정보 등

- 백엔드에 인증정보를 두고 백엔드 API를 통해 DB와 소통하는 것이 바람직

<br>

### Http 요청 보내기

Axios 라이브러리를 통해 Http 요청을 보낼 수 있음

또는 

내장 Fetch 함수를 통해서 Http 요청을 보낼 수 있다

![image](https://user-images.githubusercontent.com/93081720/179120645-f56c46f9-2152-4e54-aa91-a2edffbd41c9.png) 

=> 그러나 fetch 함수는 .then chain을 계속 호출해야할 수도 있다

<br>

#### async, await

async와 await을 쓰면 코드를 더 간결하게 만들 수 있다

![image](https://user-images.githubusercontent.com/93081720/179260232-234f166e-57ab-45f4-8b32-be8a3ac4ddf0.png)

<br>



### Firebase

구글이 제공하는 서비스로, 코드 작성 없이 사용 가능한 데이터베이스가 함께있는 백엔드 서버 어플리케이션

(Firebase는 데이터베이스가 아님, 제공하는 기능 중 데이터베이스가 있을 뿐이지 백엔드 서버임)

※ 실제 프로젝트에서 파이어베이스를 사용하려면 파이어베이스에 코드를 추가해야함

#### 비동기 POST 요청 보내기

![image](https://user-images.githubusercontent.com/93081720/179334493-79cb81eb-224d-46f5-8f9b-da883c2bbdc4.png)