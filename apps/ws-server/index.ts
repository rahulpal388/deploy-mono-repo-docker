import { WebSocketServer } from "ws";
import { client } from "@repo/db/client"

const ws = new WebSocketServer({ port: 8081 }, () => {
    console.log("ws is listening on port 8081.......")
})

ws.on("connection", (socket) => {
    socket.on("message", async () => {

        await client.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()

            }
        })
        socket.send("user added")
    })
})