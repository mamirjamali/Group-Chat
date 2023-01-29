const connectedUsers = new Map()

const addNewConnectedUser = ({ socketId, userId }) => {
    connectedUsers.set(socketId, {userId});
    console.log("Connected User: ", connectedUsers)
}

const disconnectUser = (socketId ) => {
    if (connectedUsers.has(socketId)) {

        connectedUsers.delete(socketId);
        console.log("Disconnected User: ", connectedUsers)
        
    }
}

module.exports = {
    addNewConnectedUser,
    disconnectUser
}

