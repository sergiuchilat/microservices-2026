// server.js
const { Server } = require('socket.io');

// Creăm serverul pe portul 3000
const io = new Server(3000, {
    cors: {
        origin: "*", // Permitem conexiuni de oriunde (pentru testare)
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log(`Client conectat la backend: ${socket.id}`);

    socket.on('message_from_client', (data) => {
        console.log(`Mesaj primit: ${data}`);
        // Trimitem către toți ceilalți
        socket.broadcast.emit('message_from_server', {
            id: socket.id.substring(0, 4),
            text: data
        });
    });

    socket.on('disconnect', () => {
        console.log('Client deconectat');
    });
});

console.log('Backend Socket.io pornit pe portul 3000');