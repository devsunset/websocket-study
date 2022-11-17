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
https://inpa.tistory.com/entry/WEB-%F0%9F%8C%90-%EC%9B%B9-%EC%86%8C%EC%BC%93-Socket-%EC%97%AD%EC%82%AC%EB%B6%80%ED%84%B0-%EC%A0%95%EB%A6%AC
https://ko.javascript.info/websocket
https://hudi.blog/websocket-with-nodejs/
https://hyeon-jinhyeok.tistory.com/38
https://dev-gorany.tistory.com/235
https://velog.io/@jguuun/Socketio-WS-diff
https://basemenks.tistory.com/253
https://berkbach.com/node-js%EC%99%80-socket-io%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%B1%84%ED%8C%85-%EA%B5%AC%ED%98%84-1-cb215954847b
https://brunch.co.kr/@springboot/695


########################################################
### Websocket Guide 

웹소켓(WebSocket)은 하나의 TCP 접속에 전이중 통신 채널을 제공하는 컴퓨터 통신 프로토콜이다. 웹소켓 프로토콜은 2011년 IETF에 의해 RFC 6455로 표준화되었으며 웹 IDL의 웹소켓 API는 W3C에 의해 표준화되고 있다.
웹소켓은 HTTP와 구별된다. 두 프로토콜 모두 OSI 모델의 제7계층에 위치해 있으며 제4계층의 TCP에 의존한다. 이들에 차이가 있으나 “RFC 6455”에 따르면 웹소켓은 HTTP 포트 80과 443 위에 동작하도록 설계되었으며 HTTP 프록시 및 중간 층을 지원하도록 설계되었으므로 HTTP 프로토콜과 호환이 된다. 호환을 달성하기 위해 웹소켓 핸드셰이크는 HTTP 업그레이드 헤더를 사용하여[1] HTTP 프로토콜에서 웹소켓 프로토콜로 변경한다.
웹소켓 프로토콜은 HTTP 풀링과 같은 반이중방식에 비해 더 낮은 부하를 사용하여 웹 브라우저(또는 다른 클라이언트 애플리케이션)과 웹 서버 간의 통신을 가능케 하며, 서버와의 실시간 데이터 전송을 용이케 한다. 이는 먼저 클라이언트에 의해 요청을 받는 방식이 아닌, 서버가 내용을 클라이언트에 보내는 표준화된 방식을 제공함으로써, 또 연결이 유지된 상태에서 메시지들을 오갈 수 있게 허용함으로써 가능하게 되었다. 이러한 방식으로 양방향 대화 방식은 클라이언트와 서버 간에 발생할 수 있다. 통신은 TCP 포트 80(TLS 암호화 연결의 경우 443)를 통해 수행되며 방화벽을 통해 웹이 아닌 인터넷 연결을 차단하는 일부 환경에 도움이 된다. 단순 양방향 브라우저-서버 통신은 코멧 등의 스톱갭(stopgap) 기술을 사용하는 비표준 방식으로 수행된다.

- 위키피디아


기존의 단방향 HTTP 프로토콜과 호환되어 양방향 통신을 제공하기 위해 개발된 프로토콜
일반 Socket통신과 달리 HTTP 80 Port를 사용하므로 방화벽에 제약이 없으며 통상 WebSocket으로 불림
접속까지는 HTTP 프로토콜을 이용하고, 그 이후 통신은 자체적인 WebSocket 프로토콜로 통신
RFC 6455 로 국제적으로 표준화 되어있다. HTTP 와 웹소켓은 모두 OSI 참조 모델의 7계층에 위치해있고, TCP 에 의존

WebSocket은 HTTP(Hyper Text Transfer Protocol)를 사용하는 네트워크 데이터 통신의 단점을 보완
HTTP를 사용한 통신은 클라이언트가 먼저 요청을 보내고, 그 요청에 따라 웹 서버가 응답하는 형태이며 
웹 서버는 응답을 보낸 후 웹 브라우저와의 연결을 끊음
양쪽이 데이터를 동시에 보내는 것이 아니기 때문에 이러한 통신 방식을 반이중 통신(Half Duplex)이라고 함 
WebSocket은 TCP/IP 의 소켓과 마찬가지로 전이중통신(Full-Duplex Communication) 을 지원
 
HTTP를 이용한 정보 송수신은 클라이언트의 요청이 없다면, 서버로부터 응답을 받을 수 없는 구조
하지만 WebSocket에서는 서버와 브라우저 사이에 양방향 소통이 가능
클라이언트가 먼저 요청하지 않아도 서버가 먼저 데이터를 보낼 수도 있고, 사용자가 다른 웹사이트로 
이동하지 않아도 최신 데이터가 적용된 웹을 볼 수 있게 처리 

- WebSocket 서버 종류 
pywebsocket(apache)
phpwebsocket(php)
jWebSocket(java,javascript)
web-socket-ruby(ruby)
Socket.IO(node.js)

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

* WebSocket 열기 HandShake 요청 (clinet)
클라이언트가 HTTP로 WebSocket 연결 요청 WebSocket 연결 요청에는 “Connection:Upgrade”와 “Upgrade:websocket” 헤더를 통해 WebSocket 요청임을 표시
“Sec-WebSocket-Key” 헤더를 통해 핸드쉐이크 응답을 검증할 키 값을 보냅니다.
그 외에도 WebSocket 연결시 보조로 이용할 프로토콜 정보등의 추가적인 정보를 헤더에 담아 보낼 수 있음 
HTTP 버전은 1.1이상 반드시 GET메서드를 사용해야 함 
Upgrade정보는 서버, 전송, 프로토콜 연결에서 다른 프로토콜로 업그레이드 또는 변경하기 위한 규칙
Sec-Websocket-Key는 클라이언트가 요청하는 여러 서브 프로토콜을 의미

WebSocket 핸드셰이크는 모방이 불가능
바닐라 자바스크립트로 헤더를 설정하는 건 기본적으로 막혀있기 때문에 XMLHttpRequest나 fetch로 위 예시와 유사한 헤더를 가진 HTTP 요청을 만들 수 없음 

GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com

* WebSocket 열기 HandShake 수락 (clinet)
서버의 응답역시 HTTP로 응답 정상적인 응답의 상태코드는 101(Switching Protocols)
“Sec-WebSocket-Key” 헤더를 통해 받은 값에 특정 값을 붙인 후, SHA-1로 해싱하고 base64로 인코딩한 값을 “Sec-WebSocket-Accept” 헤더에 보냄 
이 값을 통해 클라이언트는 정상적인 핸드쉐이크 과정을 검증 클라이언트가 정상적으로 응답을 받으면 핸드쉐이크는 종료되고 
이후부터 WebSocket 프로토콜을 통해 데이터 통신 
(핸드 쉐이크가 완료되면 프로토콜이 ws 또는  wss와 같이 데이터 보안을 위해 SSL을 적용한 프로토콜로 변경)

* ws, wss 두 프로토콜의 관계는 HTTP와 HTTPS의 관계와 유사
wss://는 보안 이외에도 신뢰성(reliability) 측면에서 ws보다 좀 더 신뢰할만한 프로토콜
ws://를 사용해 데이터를 전송하면 데이터가 암호화되어있지 않은 채로 전송되기 때문에 데이터가 그대로 노출
오래된 프락시 서버는 WebSocket이 무엇인지 몰라서 ‘이상한’ 헤더가 붙은 요청이 들어왔다고 판단하고 연결을 차단 
반면 wss://는 TSL(전송 계층 보안(Transport Layer Security))이라는 보안 계층을 통과해 전달되므로 송신자 측에서 데이터가 암호화되고, 복호화는 수신자 측에서 처리 데이터가 담긴 패킷이 암호화된 상태로 프락시 서버를 통과하므로 프락시 서버는 패킷 내부를 확인 불가 

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat

- Extensions와 Subprotocols 헤더
	WebSocket 통신은 Sec-WebSocket-Extensions와 Sec-WebSocket-Protocol 헤더를 지원
	두 헤더는 각각 WebSocket 프로토콜 기능을 확장(extension)할 때와 서브 프로토콜(subprotocal)을 사용해 데이터를 전송할 때 사용

    Sec-WebSocket-Extensions: deflate-frame – 이 헤더는 브라우저에서 데이터 압축(deflate)을 지원한다는 것을 의미
    Sec-WebSocket-Extensions은 브라우저에 의해 자동 생성되는데, 그 값엔 데이터 전송과 관련된 무언가나 WebSocket 프로토콜 기능 확장과 관련된 무언가가 여러 개 나열됩니다.

    Sec-WebSocket-Protocol: soap, wamp – 이렇게 헤더가 설정되면 평범한 데이터가 아닌 SOAP나 WAMP(The WebSocket Application Messaging Protocol) 프로토콜을 준수하는 데이터를 전송하겠다는 것을 의미
    WebSocket에서 지원하는 서브프로토콜 목록은 IANA 카탈로그에서 확인 가능  개발자는 이 헤더를 보고 앞으로 사용하게 될 데이터 포맷을 확인
    두 헤더는 new WebSocket의 두 번째 매개변수에 값을 넣어서 설정

    서브 프로토콜로 SOAP나 WAMP를 사용하고 싶다고 가정, 두 번째 매개변수에 다음과 같이 배열을 설정

    let socket = new WebSocket("wss://javascript.info/chat", ["soap", "wamp"]);

	이때 서버는 지원 가능한 익스텐션과 프로토콜을 응답 헤더에 담아 클라이언트에 전달

	GET /chat
	Host: javascript.info
	Upgrade: websocket
	Connection: Upgrade
	Origin: https://javascript.info
	Sec-WebSocket-Key: Iv8io/9s+lYFgZWcXczP8Q==
	Sec-WebSocket-Version: 13
	Sec-WebSocket-Extensions: deflate-frame
	Sec-WebSocket-Protocol: soap, wamp

	101 Switching Protocols
	Upgrade: websocket
	Connection: Upgrade
	Sec-WebSocket-Accept: hsBlbuDTkk24srzEOTBUlZAlC2g=
	Sec-WebSocket-Extensions: deflate-frame
	Sec-WebSocket-Protocol: soap

	이 경우 서버에선 'deflate-frame’이라는 익스텐션과 요청 프로토콜 중 SOAP라는 서브 프로토콜만 지원한다는 사실을 알 수 있음 

# WebSocket 프로토콜 특징
-----------------------------------------------------------
최초 접속시에만 http프로토콜 위에서 handshaking을 하기 때문에 http header를 사용
WebSocket을 위한 별도의 포트는 없고, 기존 포트를 사용
프레임으로 구성된 메시지라는 논리적 단위로 송수신
메시지에 포함될 수 있는 교환 가능한 메시지는 텍스트와 바이너리

* event 
	WebSocket이 정상적으로 만들어지면 아래 네 개의 이벤트를 사용할 수 있게 됨 

    open – 커넥션이 제대로 만들어졌을 때 발생함
    message – 데이터를 수신하였을 때 발생함
    error – 에러가 생겼을 때 발생함
    close – 커넥션이 종료되었을 때 발생함

	커넥션이 만들어진 상태에서 무언가를 보내고 싶으면 socket.send(data)를 사용

	ex)
	let socket = new WebSocket("wss://...");

	socket.onopen = function(e) {
	  alert("connection open");
	  socket.send("Hello World");
	};

	socket.onmessage = function(event) {
	  alert("response: ${event.data}");
	};

	socket.onclose = function(event) {
	  if (event.wasClean) {
	    alert("connection close (code=${event.code} reason=${event.reason})");
	  } else {
	    alert("network fail :  (code=${event.code} reason=${event.reason})");
	  }
	};

	socket.onerror = function(error) {
	  alert("error");
	};

* 데이터 전송 - https://datatracker.ietf.org/doc/html/rfc6455#section-5
	WebSocket 통신은 '프레임(frame)'이라 불리는 데이터 조각을 사용
	프레임은 서버와 클라이언트 양측 모두에서 보낼 수 있는데, 프레임 내 담긴 데이터 종류에 따라 다음과 같이 분류

	텍스트 프레임(text frame) – 텍스트 데이터가 담긴 프레임
	이진 데이터 프레임(binary data frame) – 이진 데이터가 담긴 프레임
	핑 또는 퐁 프레임(ping/pong frame) – 커넥션이 유지되고 있는지 확인할 때 사용하는 프레임으로 서버나 브라우저에서 자동 생성해서 보내는 프레임
	이 외에도 '커넥션 종료 프레임(connection close frame) 등 다양한 프레임이 있음

	브라우저 환경에서 개발자는 텍스트나 이진 데이터 프레임만 다루게 됨 
	이유는 WebSocket .send() 메서드는 텍스트나 바이너리 데이터만 보낼 수 있기 때문
	socket.send(body)를 호출할 때, body엔 문자열이나 Blob, ArrayBuffer등의 이진 데이터만 들어갈 수 있음 
	데이터 종류에 따라 특별히 무언가 세팅을 해줘야 할 필요는 없고, 텍스트나 바이너리 타입의 데이터를 넣어주면 알아서 데이터가 전송

	데이터를 받을 때는 텍스트 데이터는 항상 문자열 형태로 응답 됨 
	이진 데이터를 받을 때엔 Blob이나 ArrayBuffer 포맷 둘 중 하나를 고를 수 있음  
	socket.binaryType 프로퍼티를 사용하면 Blob이나 ArrayBuffer 포맷 둘 중 하나를 고를 수 있는데, 프로퍼티 기본값은 "blob"이라서 이진 데이터는 기본적으로 Blob 객체 형태로 전송받게 됨
	Blob은 고차원(high-level)의 이진 객체인데, <a>나 <img> 등의 태그와 바로 통합할 수 있어서 기본값으로 아주 적절
	하지만 이진 데이터를 처리하는 과정에 개별 데이터 바이트에 접근해야 하는 경우엔 프로퍼티 값을 "arraybuffer"로 바꿀 수도 있음 

	socket.binaryType = "arraybuffer";
	socket.onmessage = (event) => {
	// event.data는 (텍스트인 경우) 문자열이거나 (이진 데이터인 경우) arraybuffer 입니다.
	};

* Rate limiting
    데이타 전송량이 많거나 네트워크가 느린 경우 아래와 같이 처리 
	// 100ms마다 소켓을 확인해 쌓여있는 바이트가 없는 경우에만 전송
	// only if all the existing data was sent out
	setInterval(() => {
	  if (socket.bufferedAmount == 0) {
	    socket.send(moreData());
	  }
	}, 100);

* Connection close
	socket.close([code], [reason]);
    code is a special WebSocket closing code (optional)
    reason is a string that describes the reason of closing (optional)

    가장 많이 사용하는 코드
    https://www.rfc-editor.org/rfc/rfc6455#section-7.4.1
    1000 – 기본값으로 정상 종료를 의미함(code값이 주어지지 않을 때 기본 세팅됨)
    1006 – 1000 같은 코드를 수동으로 설정할 수 없을 때 사용하고, 커넥션이 유실(no close frame)되었음을 의미함
    1001 – 연결 주체 중 한쪽이 떠남(예: 서버 셧다운, 부라우저에서 페이지 종료)
    1009 – 메시지가 너무 커서 처리하지 못함
    1011 – 서버 측에서 비정상적인 에러 발생

* Connection state
    socket.readyState    
    0 – “CONNECTING”: the connection has not yet been established
    1 – “OPEN”: 연결이 성립되고 통신 중
    2 – “CLOSING”: 커넥션 종료 중
    3 – “CLOSED”: 커넥션이 종료됨


# WebSocket 사용시 고려 사항 
-----------------------------------------------------------
1.HTML5 이후에 나온 기술
WebSocket은 HTML5 이후에 나온 기술이기 때문에  이전 기술로 구현된 서비스에서는 Socket.io, SockJS 등을 사용 하여 처리 필요 

2. WebSocket은 문자열들을 주고 받을 수 있게 해줄 뿐 그 이상의 일을 하지 않는다
주고 받은 문자열의 해독은 온전히 어플리케이션에 맡긴다
HTTP는 형식을 정해두어서 모두가 약속을 따르기만 하면 해석 할 수 있지만, WebSocket은 형식이 정해져 있지 않아 어플리케이션에서 쉽게 해석하기 힘들다
그래서 WebSocket방식은 sub-protocols를 사용해 주고 받는 메시지의 형태를 약속하는 경우가 많다
서브프로토콜로 자주 쓰이는게 STOMP(STOMP, Simple Text Oriented Message Protocol)이다

3.프로그램 구현에 보다 많은 복잡성 초래 
WebSocket은 HTTP와 달리 Stateful protocol이기 때문에 서버와 클라이언트 간의 연결을 항상 유지해야 하며 만약 바정상적으로 연결이 끊어졌을 때 적절하게 대응해야 함 이는 기존의 HTTP 사용 시와 비교했을 때 코딩의 복잡성을 가중시키는 요인이 됨 

4.서버와 클라이언트 간의 Socket 연결을 유지한다는 것 자체가 비용이 드는 일, 트래픽양이 많은 서버 같은 경우에는 CPU에 큰 부담이 될 수 있음 

5.서버와 클라이언트 간의 연결이 끊어졌을 때 생성되는 에러 메세지가 구체적이지 않아서 (예를 들어 여러가지 다른 이유로 연결이 끊어졌는데 에러 메세지가 같은 경우) 디버깅을 하는데 어려움이 많음 

# Websocket Example (Simple chat based on nodejs) - chat_websocket
-----------------------------------------------------------

1) express 프로젝트 생성
  $ mkdir chat_websocket && cd chat_websocket
  $ yarn init
  $ yarn add express
  $ yarn add ws

2) client page 작성 
  $ mkdir public && cd public
  $ vi index.html
  	<!DOCTYPE html>
	<html lang="ko">
	  <head>
	    <meta charset="UTF-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <title>Websocket Chatting</title>
	  </head>
	  <body>
	    <h1>Hello Express</h1>
	  </body>
	</html>

3) express server 작성 
  $ cd chat_websocket
  $ vi app.js
  	const express = require("express")
	const app = express()

	app.use(express.static("public"))

	app.listen(8000, () => {
	  console.log('Example app listening on port 8000')
	})

4) express 서버 기동 
   $ node app.js
   http://localhost:8000

5) WebSocket server 구현 
    app.js 파일에 아래 내용 추가 

    const WebSocket = require('ws');

	// 웹소켓 서버 생성
	const wss = new WebSocket.Server({ port: 8001 })

	// 웹소켓 서버 연결 이벤트 바인드
	wss.on("connection", ws => {
	  console.log(`WebSocket connection`)
	  // 데이터 수신 이벤트 바인드
	  ws.on("message", data => {
		console.log(`Received from client: ${data}`)
		// 서버의 답장
		ws.send(`Received ${data}`) 
	  })
	})


6) client WebSocket Request
   index.html 파일에 아래 내용 추가 
   <script>
	  const ws = new WebSocket("ws://localhost:8001")

	  function send() {
	    ws.send("Hello") // 서버에 데이터 전송
	  }
   </script>	

   <h1>Hello Express</h1>
   <button onClick="send()">send</button>

7) 서버 재시작 후 send 버튼 클릭 서버 로그 출력 확인 
   node app.js 
   http://localhost:8000
   send 버튼을 클릭 하면 서버 로그에 아래와 같이 출력 됨 
   Received from client: Hello

8) WebSocket server Response
   app.js 파일 내용 아래 부분 처럼 수정 

	// 웹소켓 서버 연결 이벤트 바인드
	wss.on("connection", (ws, request) => {
	  console.log(`Hello, ${request.socket.remoteAddress}`)
	  ws.send(`Hello, ${request.socket.remoteAddress}`)
	  // 연결 직후 해당 클라이언트로 데이터 전송

	  // 데이터 수신 이벤트 바인드
	  ws.on("message", data => {
		console.log(`Received from client: ${data}`)
		// 서버의 응답 추가 
		ws.send(`Received ${data}`) 
	  })
	})

9) 서버 재시작 후 브라우저 개발자 도구에서 ws 항목에서 send, receive 데이타 흐름 확인 가능 


10) chat 서비스 구현 
   현재 까지 작업 백업 
   index.html -> index.html.original
   app.js -> app.js.original

   1) index.html 파일 수정 
	<!DOCTYPE html>
	<html lang="ko">
	  <head>
	    <meta charset="UTF-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <title>Websocket Chatting</title>

	    <script>
		  const ws = new WebSocket("ws://localhost:8001")
		  
		  function clearMessage() {
			document.getElementById("message").value = ""
		  }

	      // 메세지 전송
	      function sendMessage() {
			const nickname = document.getElementById("nickname").value
			const message = document.getElementById("message").value
			const fullMessage = `${nickname}: ${message}`

			ws.send(fullMessage)
			clearMessage()
		  }
		  
	      // 메세지 수신
		  function receiveMessage(event) {
			const chat = document.createElement("div")
			const message = document.createTextNode(event.data)
			chat.appendChild(message)

			const chatLog = document.getElementById("chat-log")
			chatLog.appendChild(chat)
		  }

		  ws.onmessage = receiveMessage
	    </script>
	  </head>
	  <body>
	    <h1>WebSocket Chat</h1>
	    <div>
	      <input
	        type="text"
	        id="nickname"
	        placeholder="닉네임"
	        style="width: 50px"
	      />
	      <input
	        type="text"
	        id="message"
	        placeholder="메세지"
	        style="width: 200px"
	      />
		  <button onClick="sendMessage()">전송</button>
	    </div>

	    <div id="chat-log"></div>
	  </body>
	</html>

   2) app.js 파일 수정 
	const express = require("express")
	const app = express()
	const WebSocket = require('ws');

	app.use(express.static("public"))

	app.listen(8000, () => {
		console.log('Example app listening on port 8000')
	})

	// 웹소켓 서버 생성
	const wss = new WebSocket.Server({ port: 8001 })

	wss.broadcast = (message) => {
		wss.clients.forEach((client) => {
			client.send(message);
		})
	}
	  
	wss.on("connection", (ws, request) => {
		ws.on("message", (data) => {
			wss.broadcast(data.toString());
		});

		ws.on("close", () => {
			wss.broadcast(`유저 한명이 떠났습니다. 현재 유저 ${wss.clients.size} 명`);
		});

		wss.clients.forEach((client) => {
			wss.broadcast(
				`새로운 유저가 접속했습니다. 현재 유저 ${wss.clients.size} 명`
			);
		});
	});

11) 서버 재시작 후 브라우저 2개 뛰어서 확인 

# WebSocket 에러 트러블슈팅
-----------------------------------------------------------
* Q: WebSocket이 무슨 문제로 실패했는지 상세하게 출력 안됨 
  A: WebSocket 에러가 failed: 이후로 상세 메시지가 뜨지 않는 것은 크롬 개발자도구의 오류
     다른 브라우저에서 확인 


* Q: NET::ERR_CERT_DATE_INVALID
  A: HTTPS 프로토콜을 사용하면서도 SSL 인증서가 만료되었거나, 잘못된 인증서를 사용하는 경우 발생
     인증서를 새로히 갱신하여 적용하거나, 인증서가 잘못 발급되지 않았는지 확인 localhost에 디버깅 시에 발생한다면, 잘못된 인증서를 사용한다는 NET::ERR_CERT_COMMON_NAME_INVALID 에러가 추가적으로 발생
     NET::ERR_CERT_AUTHORITY_INVALID 인증서는 인증 사슬이 잘못 구성되었을 가능성

* Q: failed: Error during WebSocket handshake: Unexpected response code: 200
  A: response로 status code 101 (switching protocol)이 반환되지 않고, 200 Ok 가 전달되어서 나타나는 오류
     대체적으로 nginx 의 기본 설정이 잘못되어서 발생

     nginx Upgrade 헤더와 Connection 헤더를 같이 프록시에 전달
	 location /chat/ {
		proxy_pass http://backend;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
	 }

	 nginx를 사용하고 있지 않는 상황에서 200번 에러가 발생하는 경우에는 백엔드의 path 맵핑이 잘못되어 있을 수 있음 

* Q: failed: Error during WebSocket handshake: Unexpected response code: 404
  A: 백엔드 맵핑이 없거나, 잘못된 요청을 보냈거나, 다른 WebSocket 맵핑이 중복되는 등의 사유로 발생

     spring의 경우 debug모듈 활성화 해서 상세 내용 확인 
     #logging.level.org.springframework.web=DEBUG
	 debug=true


########################################################
### Socket.io Guide

https://socket.io/

WebSocket은 HTML5의 기술이고 아직 확정된 상태가 아니기 때문에  브라우저 별로 지원하는 WebSocket 버전이 다름 
오래된 버전의 웹 브라우저는 WebSocket을 지원하지 않음 
이를 해결하기 위해 나온 여러 기술 중 하나가 Socket.io 

WebSocket, FlashSocket, AJAX Long Polling, AJAX Multi part Streaming, IFrame, JSONP Polling 등, 다양한 방법을 하나의 API로 추상화한 것
브라우저가 WebSocket을 지원하면 WebSocket 방식으로 동작하고, 지원하지 않는 브라우저라면 일반 http를 이용해서 실시간 통신을 처리 

Socket.io는 node.js 기반으로 만들어진 기술로, 거의 모든 웹 브라우저와 모바일 장치를 지원하는 실시간 웹 애플리케이션 지원 라이브러리
이것은 100% 자바스크립트로 구현되어 있으며, 현존하는 대부분의 실시간 웹 기술들을 추상화

WebSocket 프로토콜은 표준 프로토콜이기 때문에 WebSocket을 지원하는 여러 서버 구현체들이 있지만 Socket.io는 Node.js에 밖에 없다는 점이 특징


# WebSocket & Socket.io 차이 
-----------------------------------------------------------

* WebSocket
    HTML5 웹 표준 기술
    매우 빠르게 작동하며 통신할 때 아주 적은 데이터를 이용함
    이벤트를 단순히 듣고, 보내는 것만 가능함
    원하는대로 코드 작성 용이
    string형으로 데이터를 전송 하기 때문에 데이터를 parsing 하는 처리가 필요 
    연결이 끊어졌을 때, 복구되지 않으므로 같은 기능을 구현하려면 추가적인 코드 처리 필요 

* Socket.io
    표준 기술이 아니며, 라이브러리임
    소켓 연결 실패 시 fallback을 통해 다른 방식으로 알아서 해당 클라이언트와 연결을 시도함
    방 개념을 이용해 일부 클라이언트에게만 데이터를 전송하는 브로드캐스팅이 가능함
    기능이 많고 쉽게 사용하기 쉬우며 직관적 배우기 쉬움 
    클라이언트 추가적인 설치 필요 (socket.io는 js파일을 추가 필요)
    socket.io는 이벤트명과 데이터를 명확하게 구분하고 모든 자료형을 주고 받을 수 있음 ]
    room과 broadcast와 같은 기능 제공 
    서버.broadcast.emit('이벤트명, 데이터)으로 자신을 제외한 사용자에게 데이터를 전송 가능 ws에서는 클라이언트.send(데이터)를 for문 반복으로 처리 필요 
    연결이 끊어졌을 때 socket.io는 주기적으로 연결을 시도


서버에서 연결된 소켓(사용자)들을 세밀하게 관리해야하는 서비스인 경우에는 Broadcasting 기능이 있는 socket.io을 쓰는게 유지보수 측면에서 훨씬 이점
반면 가상화폐 거래소같이 데이터 전송이 많은 경우에는 빠르고 비용이 적은 표준 WebSocket을 이용하는게 용이 


# Socket.io Example (Simple chat based on nodejs)  - chat_socketio
-----------------------------------------------------------



########################################################
### Spring WebSocket & STOMP 

https://brunch.co.kr/@springboot/695

https://github.com/sieunkr/spring-websocket-repo
