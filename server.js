const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()
const port = 80

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', cors(), (req, res) => {
    const gas = JSON.parse(fs.readFileSync('ethgasAPI.json'));
    res.send(gas);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});