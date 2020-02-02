const express = require('express');
const cors = require('cors');

const routes = require('./src/routes');

const app = express();

app.use(cors({
    origin: 'http://localhost:2000'
}));

app.use(express.json());

app.use(routes)

app.listen(88);