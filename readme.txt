-------------------------------------------------

			# WEBSOCKET-WORK #

-------------------------------------------------

########################################################
### Websocket & Socket.io

https://ko.wikipedia.org/wiki/WebSocket

https://developer.mozilla.org/ko/docs/Web/API/WebSockets_API
https://developer.mozilla.org/ko/docs/Web/API/WebSockets_API/Writing_WebSocket_servers
https://developer.mozilla.org/ko/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications

https://socket.io/

https://github.com/sockjs

https://www.npmjs.com/package/websocket-vs-socket.io
https://github.com/rsp/node-websocket-vs-socket.io

https://stomp.github.io/

########################################################
### Reference

https://yuricoding.tistory.com/134
https://tecoble.techcourse.co.kr/post/2020-09-20-websocket/
https://velog.io/@codingbotpark/Web-Socket-%EC%9D%B4%EB%9E%80


https://dev-gorany.tistory.com/235

########################################################
### Websocket & Socket.io Guide

# WebSocket
-----------------------------------------------------------
기존의 단방향 HTTP 프로토콜과 호환되어 양방향 통신을 제공하기 위해 개발된 프로토콜
일반 Socket통신과 달리 HTTP 80 Port를 사용하므로 방화벽에 제약이 없으며 통상 WebSocket으로 불림
접속까지는 HTTP 프로토콜을 이용하고, 그 이후 통신은 자체적인 WebSocket 프로토콜로 통신


WebSocket은 HTTP(Hyper Text Transfer Protocol)를 사용하는 네트워크 데이터 통신의 단점을 보완
HTTP를 사용한 통신은 클라이언트가 먼저 요청을 보내고, 그 요청에 따라 웹 서버가 응답하는 형태이며 
웹 서버는 응답을 보낸 후 웹 브라우저와의 연결을 끊음
양쪽이 데이터를 동시에 보내는 것이 아니기 때문에 이러한 통신 방식을 반이중 통신(Half Duplex)이라고 함 
 

HTTP를 이용한 정보 송수신은 클라이언트의 요청이 없다면, 서버로부터 응답을 받을 수 없는 구조
하지만 WebSocket에서는 서버와 브라우저 사이에 양방향 소통이 가능
클라이언트가 먼저 요청하지 않아도 서버가 먼저 데이터를 보낼 수도 있고, 사용자가 다른 웹사이트로 
이동하지 않아도 최신 데이터가 적용된 웹을 볼 수 있게 처리 


# HTTP에서 실시간성을 보장하는 기법
-----------------------------------------------------------

WebSocket이 존재하기 전에는 Polling이나 Long Polling, Streaming등의 방식으로 해결

* polling
클라이언트가 평범한 HTTP Request를 서버로 계속 요청해 이벤트 내용을 전달받는 방식
가장 쉬운 방법이지만 클라이언트가 지속적으로 Request를 요청하기 때문에 클라이언트의 수가 많아지면 서버의 부담이 급증
HTTP Request Connection을 맺고 끊는 것 자체가 부담이 많은 방식이고, 클라이언트에서 실시간 정도의 빠른 응답을 기대하기 어려움

* Long polling
클라이언트에서 서버로 일단 HTTP Request를 요청
이 상태로 계속 기다리다가 서버에서 해당 클라이언트로 전달할 이벤트가 있다면 그 순간 Response 메세지를 전달하며 연결이 종료
곧이어 클라이언트가 다시 HTTP Request를 요청해 서버의 다음 이벤트를 기다리는 방식. polling보다 서버의 부담은 적으나, 
클라이언트로 보내는 이벤트들의 시간간격이 좁다면 polling과 별 차이 없게 되며, 다수의 클라이언트에게 동시에 
이벤트가 발생될 경우 서버의 부담이 급증

* Streaming
Long Polling과 마찬가지로 클라이언트 -> 서버로 HTTP Request를 요청
서버 -> 클라이언트로 이벤트를 전달할 때 해당 요청을 해제하지 않고 필요한 메세지만 보내기(Flush)를 반복하는 방식
Long Polling과 비교하여 서버에 메세지를 보내지 않고도 다시 HTTP Request 연결을 하지 않아도 되어 부담이 경감

* WebSocket
HTTP 통신의 특징인 (연결 -> 연결 해제) 때문에 효율이 많이 떨어지게 되고, 웹 브라우저 말고 외부 플러그인이 
항상 필요하게 되는 상황을 극복하고자 2014년 HTML5에 WebSocket을 포함
WebSocket은 클라이언트가 접속 요청을 하고 웹 서버가 응답한 후 연결을 끊는 것이 아닌 Connection을 그대로 유지하고
클라이언트의 요청 없이도 데이터를 전송할 수 있는 프로토콜
HTTP 프로토콜에서 HandShaking을 완료한 후, HTTP로 동작하지만, HTTP와는 다른 방식으로 통신

# WebSocket 작동원리
서버와 클라이언트간의 WebSocket 연결은 HTTP프로토콜을 통해 처리 
연결이 정상적으로 이루어진다면 서버와 클라이언트 간에 WebSocket 연결(TCP/IP기반)이 이루어지고 일정 시간이 지나면 HTTP연결은 자동으로 끊음 

WebSocket을 이용하여 서버와 클라이언트가 통신을 하려면 먼저 WebSocket 접속 과정을 거쳐야 함 
WebSocket 접속 과정은 TCP/IP 접속 그리고 WebSocket 열기 HandShake 과정으로 분류됨 
WebSocket도 TCP/IP위에서 동작하므로, 서버와 클라이언트는 WebSocket을 사용하기 전에 서로 TCP/IP 접속이 되어 있어야 함 
TCP/IP 접속이 완료된 후 서버와 클라이언트는 WebSocket 열기 HandShake 과정을 시작
Handshake 과정을 통해 연결이 수립되면 응용 프로그램 계층 프로토콜이 HTTP에서 WebSocket으로 업그레이드
업그레이드가 되면 HTTP는 사용되지 않고, WebSocket 연결이 닫힐 때까지 두 끝 점에서 WebSocket 프로토콜을 사용하여 데이터를 송수신 처리 

# WebSocket HandShake
-----------------------------------------------------------
WebSocket 열기 핸드셰이크는 클라이언트가 먼저 핸드셰이크 요청을 보내고 이에 대한 응답을 서버가 클라이언트로 보내는 구조
서버와 클라이언트는 HTTP 1.1 프로토콜을 사용하여 요청과 응답을 보낸다

WebSocket이 기존의 TCP Socket과 다른 점은 최초 접속이 일반 HTTP Request를 통해 HandShaking 과정을 통해 이뤄진다는 점

HTTP Request를 그대로 사용하기 때문에 기존의 80, 443 포트로 접속을 하므로 추가 방화벽을 열지 않고도 양방향 통신이 가능하고
HTTP 규격인 CORS 적용이나 인증 등 과정을 기존과 동일하게 가져갈 수 있는 것이 장점
WebSocket 연결은 주로 새로고침이나 창 닫기 등의 이벤트 발생 시 닫힌다
 
기본적으로  WebSocket API는 아주 간단한 기능들만을 제공하기 때문에 대부분의 경우 SockJS나 Socket.IO같은 
오픈 소스 라이브러리를 많이 사용하고 있으며 메시지 포맷 또한 STOMP같은 프로토콜을 같이 이용 
node.js를 사용한다면 Socket.io를 이용하는 것이 일반적이고, Spring을 사용한다면 SockJS를 이용하는 것이 일반적

	1. TCP/IP 접속 요청 (client)
	2. TCP/IP 접속 수락 (server)
CLIENT	3. WebSocket 열기 HandShake 요청 (clinet)   SERVER
        4. WebSocket 열기 HandShake 수락 (clinet)      
        5. WebSocket 데이타 송수신 

- WebSocket 열기 HandShake 요청 (clinet)
클라이언트가 HTTP로 WebSocket 연결 요청 WebSocket 연결 요청에는 “Connection:Upgrade”와 “Upgrade:websocket” 헤더를 통해 WebSocket 요청임을 표시
“Sec-WebSocket-Key” 헤더를 통해 핸드쉐이크 응답을 검증할 키 값을 보냅니다.
그 외에도 WebSocket 연결시 보조로 이용할 프로토콜 정보등의 추가적인 정보를 헤더에 담아 보낼 수 있음 
HTTP 버전은 1.1이상 반드시 GET메서드를 사용해야 함 
Upgrade정보는 서버, 전송, 프로토콜 연결에서 다른 프로토콜로 업그레이드 또는 변경하기 위한 규칙
Sec-Websocket-Key는 클라이언트가 요청하는 여러 서브 프로토콜을 의미

GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com

- WebSocket 열기 HandShake 수락 (clinet)
서버의 응답역시 HTTP로 응답 정상적인 응답의 상태코드는 101(Switching Protocols)
“Sec-WebSocket-Key” 헤더를 통해 받은 값에 특정 값을 붙인 후, SHA-1로 해싱하고 base64로 인코딩한 값을 “Sec-WebSocket-Accept” 헤더에 보냄 
이 값을 통해 클라이언트는 정상적인 핸드쉐이크 과정을 검증 클라이언트가 정상적으로 응답을 받으면 핸드쉐이크는 종료되고 
이후부터 WebSocket 프로토콜을 통해 데이터 통신 (핸드 쉐이크가 완료되면 프로토콜이 ws 또는  wss와 같이 데이터 보안을 위해 SSL을 적용한 프로토콜로 변경)

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
 
# WebSocket 프로토콜 특징
-----------------------------------------------------------
최초 접속시에만 http프로토콜 위에서 handshaking을 하기 때문에 http header를 사용
WebSocket을 위한 별도의 포트는 없고, 기존 포트를 사용
프레임으로 구성된 메시지라는 논리적 단위로 송수신
메시지에 포함될 수 있는 교환 가능한 메시지는 텍스트와 바이너리

# WebSocket 한계
-----------------------------------------------------------
1.HTML5 이후에 나온 기술
WebSocket은 HTML5 이후에 나온 기술이기 때문에  이전 기술로 구현된 서비스에서는 Socket.io, SockJS 등을 사용 하여 처리 필요 

2. WebSocket은 문자열들을 주고 받을 수 있게 해줄 뿐 그 이상의 일을 하지 않는다
주고 받은 문자열의 해독은 온전히 어플리케이션에 맡긴다
HTTP는 형식을 정해두어서 모두가 약속을 따르기만 하면 해석 할 수 있지만, WebSocket은 형식이 정해져 있지 않아 어플리케이션에서 쉽게 해석하기 힘들다
그래서 WebSocket방식은 sub-protocols를 사용해 주고 받는 메시지의 형태를 약속하는 경우가 많다
서브프로토콜로 자주 쓰이는게 STOMP(STOMP, Simple Text Oriented Message Protocol)이다

