const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/user-router')
const postRouter = require('./routes/post-router');

const server = express();

server.use(express.json())
server.use(morgan('dev'))

server.use('/api/users', userRouter)
server.use('/api/posts', postRouter)

module.exports = server;