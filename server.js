// server.js
const express = require('express');
const cors = require('cors')
const sendNotification = require('./sendNotification');

const app = express();
const port = 3100;

app.use(cors())

app.use(express.json());

app.post('/send-notification', (req, res) => {
    const { title, message, token } = req.body;
    sendNotification(title, message, token);
    res.status(200).send('Notification sent');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
