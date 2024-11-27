# sample-webrtc-js
A Sample app for WebRTC on js using socket.io

- Node.js
- Express.js
- Socket.io
- Docker Compose

## Features
- Group Chat
- Automatically enter a room ( When you open the root page of this app )
- Use Trickle ICE for checking connectivity using TURN servers

## Setup
To run this app, you can run bellow command.
```
docker compose up
```

Then, access bellow URL on any Web Browser ( Such as Chrome ).
```
http://localhost:3000
```

To experience group chat, you may open above URL by multiple window or tab.

To stop this app, you can run bellow hotkey on the terminal window where this app is running.
```
Ctrl + C
```

## TODO
- Add how to get MediaStream and attach it to RTCPeerConnection.
