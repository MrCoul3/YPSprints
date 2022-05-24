const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('./dist'))

app.get("/api/v1/text", (req, res) => {
    res.status(200).send("Hello, World!");
});

app.put("/api/v1/json", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(201).send({"data": {"items": [1, 2, 3]}});
});

app.listen(PORT, () => {
    console.log(`Мой текст и порт: ${PORT}!`);
});