# Vue_API

### Server

클라이언트에게 '정보'와 '서비스'를 제공하는 컴퓨터 시스템

- Django REST framework => JSON 반환
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

두 URL의 프로토콜, 포트, 호스트가 모두 같을 경우에만 같은 URL로 인정함



### SOP(Same Origin Policy, 동일 출처 정책)







## Authentication & Authorization

### Authentication

인증



=> "ㅇㅇㅇ"

<br>

### Authorization

권한 부여, 권한, 허가

=> 인증이 되었어도 모든 권한을 부여 받는 것은 아님

- 예) 로그인(인증)을 했다고 하더라도 다른 사람의 글까지 수정/삭제할 수 있진 않음(권한)

=> "ㅇㅇ"

<br>

## DRF_Authentication



### JWT

JSON Web Token

JSON 포맷을 활용한 요소 간 안전하게 정보를 교환하기 위한 표준 포멧

암호화 알고리즘에 의한 디지털 서명이 되어 있기 때문에 JWT 자체로 검증 가능

검증에 필요한 정보를 모두 갖고 있기 때문에(self-contained) 이를 검증하기 위한 다른 수단이 필요 없음



한계?

- 토큰 탈취 시 서버 측에서 토큰 무효화가 불가능함 => 블랙 리스팅 테이블을 활용해서 막아야 함
- 따라서 매우 짧은 유효기간(5min)과 Refresh 토큰을 활용하여 구현

 

One source Multi Use 상황에 적합

