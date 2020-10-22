const express = require('express');

const app = express();

app.use((request, response, next) => {
    console.log(`*** Incoming request: ${request.method} ${request.url}`);
    next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.sendFile(`${__dirname}/index.html`);
});

app.listen(8080, () => {
    console.debug('Server is live @ http://localhost:8080');
})