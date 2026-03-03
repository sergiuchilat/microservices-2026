const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Cineva s-a conectat la canalul principal.');

    // Ascultăm mesajele de la orice client
    ws.on('message', (data) => {
        const message = data.toString();
        console.log('Mesaj primit:', message);

        // TRIMITE MESAJUL TUTUROR (Broadcast)
        console.log('Clienții conectați:', wss.clients);
        wss.clients.forEach((client) => {
            // Trimitem doar celorlalți (nu și celui care l-a scris), 
            // și doar dacă au conexiunea deschisă
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Un utilizator a ieșit de pe canal.');
    });
});

console.log('Serverul de chat rulează pe ws://localhost:8080');