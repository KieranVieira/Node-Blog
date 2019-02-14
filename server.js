const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRouter = require('./routes/user-router');
const postRouter = require('./routes/post-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));


server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);

module.exports = server;