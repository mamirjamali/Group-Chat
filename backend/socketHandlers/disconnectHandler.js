const serverStore = require("../serverStore")

const discnnectHandler = (socket) => {
    const socketId = socket.id;
    serverStore.disconnectUser(socketId)
}

module.exports = discnnectHandler