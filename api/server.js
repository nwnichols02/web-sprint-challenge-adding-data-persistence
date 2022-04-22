// build your server here and require it from index.js
const express = require('express');

// const projectrouter

const server = express();

server.use(express.json());
// server.use('/api/project..., project router')

server.use('/',  (req, res) => {
    res.send('<h1>working yay!</h1>')
})

module.exports = server;