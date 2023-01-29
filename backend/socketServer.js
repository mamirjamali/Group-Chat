const authSocket = require("./middleware/authSocket")
const newConnectionHandler = require("./socketHandlers/newConnectionHandler")
const disconnectHandler = require("./socketHandlers/disconnectHandler")


const registerSocketServer = (server) => {
    const io = require("socket.io")(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        }
    });

    io.use((socket, next) => {
        authSocket(socket, next)
    });

    io.on('connection', (socket) => {
        console.log("User Connected")
        console.log(socket.id)
       
        newConnectionHandler(socket, io);
    
        socket.on('disconnect', () => {
            disconnectHandler(socket)
        });
    });

}

module.exports = {
    registerSocketServer,
}