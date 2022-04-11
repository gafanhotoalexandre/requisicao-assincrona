const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public'));
});

app.listen(port, () => {
    console.log(`Iniciando servidor na porta http://localhost:${port}`);
});
