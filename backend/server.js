const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Backend API is running successfully!');
});

app.listen(5000, () => {
    console.log('Backend server is listening on port 5000');
});