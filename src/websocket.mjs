import { createServer } from 'http'
import { Server } from 'socket.io'


const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', async (socket) => {
  socket.on('sendEvent', (data) => {
    socket.emit('responseEvent', 'Server received: ' + data);
  });
});

httpServer.listen(4200, () => {
  console.log('Server is listening to the port 4200');
});
