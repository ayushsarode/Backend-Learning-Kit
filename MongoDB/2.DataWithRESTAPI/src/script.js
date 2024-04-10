const express = require('express');
const app = express();
port = 3000;

app.get('/', (req, res) => {
    console.log('its working');
    res.send('hello world')
})


app.listen(port, () => {
    console.log(`PORT ${port} is running `);
})