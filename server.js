const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

let messages = [];

app.get('/messages/:username', (req, res) => {
    const { username } = req.params;

    const receivedMessages = messages.filter(message => message.sentTo === username);

    if (receivedMessages.length === 0) return res.status(404).json({ message: 'No messages found' });

    res.status(200).json(receivedMessages);
});

app.post('/messages', (req, res) => {
    const { sentBy, sentTo, message } = req.body;
    const register = {};

    Object.assign(register, { sentBy, sentTo, message });

    messages.push(register);

    console.log(messages)

    res.status(201).send();
});

app.listen(3000, () => console.log('Server is running...'));