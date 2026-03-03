const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('A new client connected!');

    ws.on('close', () => {
        console.log('WebSocket server closed');
    });
});



console.log('WebSocket server is running on ws://localhost:8080');