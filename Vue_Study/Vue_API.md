# Vue_API

![image](https://user-images.githubusercontent.com/93081720/168844525-ff0e1673-11a0-47b9-8251-279a5fa6251b.png)

### Server

클라이언트에게 '정보'와 '서비스'를 제공하는 컴퓨터 시스템

- Django REST Framework(DRF) => JSON 반환
- Django 서버 => HTML 반환

DB와 data가 서버의 핵심 => DB와 통신하며 데이터를 CRUD

요청에 따른 정보를 client에게 응답



### Client

정보 요청을 보내는 주체 / 표현을 하는 주체

서버에게 그 서바가 맡는, 서버가 제공하는 서비스를 올바르게 요청하고, 요청 시 서버가 요구하는 필요한 인자를 그 방식에 맞게 전달하며, 서버로부터 반환되는 응답을 사용자에게 적절한 방식으로 표현하는 기능을 가진 시스템

- 올바르게 보내다 => 서버가 요구하는 형식에 맞게 보내는 것

응답받은 정보를 잘 가공하여 화면에 보여줌



data 설계(어떤 데이터가 필요한가?) -> DB ERD 작성 -> DB 모델링 -> API(클라이언트와 어떤 데이터를 주고 받을지 합의, 어떤 url로 보냈을 때, 이러한 데이터를 준다)

<br>

## CORS(Cross Origin Resource Sharing)

### Origin(출처)

두 URL의 프로토콜, 포트, 호스트가 모두 같을 경우에만 동일한 출처로 인정함



### SOP(Same-Origin Policy, 동일 출처 정책)

특정 출처에서 불러온 문서나 스크립트가 다른 출처에서 가져온 리소스와 상호작용하는 것을 제안하는 보안 방법 => 잠재적으로 해로울 수 있는 문서를 브라우저가 차단하여 공격을 받을 경로를 줄임

![image](https://user-images.githubusercontent.com/93081720/168844784-e2f7396c-a7ee-4b85-b0d6-5d22d5fd6709.png)

<br>

### CORS(Cross-Origin Resource Sharing, 교차 출처 자원 공유)

추가 HTTP header를 사용하여, 특정 출처에서 실행 중인 웹 어플리케이션이 다른 출처의 자원에 접근할 수 있는 권한을 부여하도록 브라우저에게 알려주는 체제

리소스가 자신의 출처(Domain, Protocol, Port)와 다를 때 교차 출처 HTTP 요청을 실행함 => 다른 출처의 리소스를 불러오려면 그 출처에서 올바른 CORS header를 포함한 응답을 반환해야한다.

#### 사용하는 이유?

- 브라우저 & 웹 어플리케이션 보호
  - 악의적인 사이트의 데이터를 가져오지 않도록 사전 차단
  - 응답으로 받는 자원에 대한 최소한의 검증
  - 서버는 정상적으로 응답하지만 브라우저에서 차단하는 것임
- 서버의 자원 관리
  - 누가 해당 리소스에 접근할 수 있는지 관리가 가능함



### Access-Control-Allow-Origin 응답 헤더

브라우저 리소스에 접근하는 임의의 출처로부터 요청을 허용한다고 알리는 응답에 포함

![image](https://user-images.githubusercontent.com/93081720/168846560-052c006f-63b8-450b-a003-b1febc16ef3e.png)

![image](https://user-images.githubusercontent.com/93081720/168846703-b5631c35-8840-4a0b-be89-d96ad60c90e5.png)



### django-cors-headers

응답에 CORS header를 추가해주는 라이브러리

다른 출처에서 보내는 Django 어플리케이션에 대한 브라우저 내의 요청을 허용함

Django App이 header 정보에 CORS를 설정한 상태로 응답을 줄 수 있게 도와주며, 이 설정을 통해 브라우저는 다른 출처에서 요청을 보내는 것이 가능해짐

#### 설치

`$pip install django-cors-headers`

#### INSTALLED_APPS 등록

`'corsheaders'`로 등록

#### 미들웨어 추가

`corsheaders.middleware.CorsMiddleware`

- 단, django.middleware.common.CommonMiddleware보다 위에 위치시켜야함

#### CORS_ALLOWED_ORIGINS 리스트 변수 선언

교차 출처 자원 공유를 허용할 도메인을 등록함

- 예) `http://localhost:8080`

<br>

## Authentication & Authorization

### Authentication

인증

=> 자신이라고 주장하는 유저를 확인하는 과정

일반적으로 인증 이후에 권한이 부여됨

세션, 토큰, 제 3자(소셜 서비스)를 활용하는 등의 다양한 인증 방식이 존재함

<br>

### Authorization

권한 부여, 권한, 허가

=> 인증이 되었어도 모든 권한을 부여 받는 것은 아님

- 예) 로그인(인증)을 했다고 하더라도 다른 사람의 글까지 수정/삭제할 수 있진 않음(권한)

=> "ㅇㅇ"

<br>

## DRF_Authentication

### 다양한 인증 방식

#### 1. Session Based

#### 2. Token Based

- ##### Basic Token

- ##### JWT(JSON Web Token)

#### 3. OAuth

- ##### google, facebook, kakao, naver 등



### Basic Token Authentication 과정

#### 1. 클라이언트가 서버에 요청

![image](https://user-images.githubusercontent.com/93081720/168848884-87a11ac3-b22f-488a-8d59-545392a96f1f.png)

#### 2. 서버에서 확인

![image](https://user-images.githubusercontent.com/93081720/168849103-861ea847-6ebe-4ab0-9afe-adc48af6ee6e.png)

#### 3. 서버가 토큰 값을 반환

![image](https://user-images.githubusercontent.com/93081720/168849266-5cbf347e-bfe0-4302-9cdf-975d325f622e.png)

#### 4. 클라이언트가 토큰 값을 활용하여 서버에 요청

![image](https://user-images.githubusercontent.com/93081720/168849552-f3a8aefc-7656-495e-9374-6af2f0c8fdb3.png)

#### 5. 서버에서 응답 반환

![image](https://user-images.githubusercontent.com/93081720/168849679-dfb2cbab-e457-46cf-9b38-b74effcf7e52.png)

#### 과정 종합

![image](https://user-images.githubusercontent.com/93081720/168849931-3727778b-efa3-402c-a2d7-ef2172afa152.png)

<br>

### JWT

JSON Web Token

JSON 포맷을 활용한 요소 간 안전하게 정보를 교환하기 위한 표준 포멧

암호화 알고리즘에 의한 디지털 서명이 되어 있기 때문에 JWT 자체로 검증 가능

기본 토큰 인증 체계와 달리 DB를 사용하기 때문에 검증에 필요한 정보를 모두 갖고 있어(self-contained) 토큰 유효성 검사를 할 필요가 없음

단, 토큰 탈취 시 서버 측에서 토큰 무효화가 불가능함 => 블랙 리스팅 테이블을 활용해서 막아야 함

따라서 매우 짧은 유효기간(5min)과 Refresh 토큰을 활용하여 구현

One source Multi Use 상황에 적합

<br>

### dj-rest-auth, django-allauth

![image](https://user-images.githubusercontent.com/93081720/168850704-3df1d119-3df0-4d69-8fd1-45f46a7cf355.png)

<br>

![image](https://user-images.githubusercontent.com/93081720/168850826-bdd8dbb8-3ce4-4dc3-ba65-98eb311dfedc.png)
