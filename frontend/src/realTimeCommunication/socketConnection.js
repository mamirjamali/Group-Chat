import io from 'socket.io-client';

let socket = null

export const connectWirhSockrtServer = (userDetails) => {
    const jwtToken = userDetails.token
    
    socket = io("http://localhost:5002", {
        auth: {
            token: jwtToken
        }
    });

    socket.on("connect", () => {
        console.log("Succsfully connected with socket.io server")
        console.log(socket.id)

    })
}