const express = require('express');
const fs = require('fs');

let key;
let cert;
try {
    key = fs.readFileSync(__dirname + '/keys/key.pem');
    cert = fs.readFileSync(__dirname + '/keys/cert.pem');
} catch (err) {
    console.warn('Could not read SSL key and/or cert; creating server without HTTPS');
}

const PORT = process.env.PORT || 8443;

const app = express();
app.disable('x-powered-by');

app.use((request, response, next) => {
    console.log(`==> Incoming request: ${request.method} ${request.url}`);
    next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.sendFile(`${__dirname}/index.html`);
});

const serverOnInit = () => {
    let proto = 'http';
    if (key && cert) {
        proto += 's';
    }
    console.debug(`🌎 Server is live @ ${proto}://localhost:${PORT}`);
}

if (key && cert) {
    const https = require('https');
    console.debug('*** SSL key and cert found, enabling SSL ***');
    const server = https.createServer({ cert, key }, app);
    server.listen(PORT, serverOnInit);
} else {
    app.listen(PORT, serverOnInit);
}
