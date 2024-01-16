const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Michael Diogo the Cloud Engineer with DevOps Expertise'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
