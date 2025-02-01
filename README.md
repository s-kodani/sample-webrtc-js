# sample-webrtc-js
A Sample app for WebRTC on js using socket.io

- Node.js
- Express
- Socket.io
- Docker Compose

## Features
- Group Chat
- Automatically enter a room ( When you open the root page of this app )
- Use Trickle ICE for checking connectivity using TURN servers

## Setup (On local machine)
To let this app run, you can run bellow command.
```
docker compose up
```

Then, access bellow URL on any Web Browser ( Such as Chrome ).
```
http://localhost:3000
```

To experience group chat, you may open the above URL in multiple window or tab.

To stop this app, you can run bellow hotkey on the terminal window where this app is running.
```
Ctrl + C
```

## TODO
- [x] Revise flow to get MediaStream and attach it to RTCPeerConnection.
- [ ] Add and remove tracks during in connection.

# Ref
- [RTCPeerConnection](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection)
- [Establishing a connection: The WebRTC perfect negotiation pattern](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Perfect_negotiation)
- [Signaling and video calling](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)

