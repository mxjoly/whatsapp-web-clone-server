import http from 'http';
import app from './app';
import { Socket } from 'socket.io';
import messageModel from './models/message.model';
import userModel from './models/user.model';
import chatModel from './models/chat.model';

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);
const sio = require('socket.io')(server);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);

sio.on('connection', (socket: Socket) => {
  messageModel.watch().on('change', () => {
    socket.emit('change');
  });
  userModel.watch().on('change', () => {
    socket.emit('change');
  });
  chatModel.watch().on('change', () => {
    socket.emit('change');
  });

  socket.on('disconnect', () => {});
});