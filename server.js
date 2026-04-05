const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Socket connection
io.on("connection", (socket) => {
    console.log("New user connected:", socket.id);

    // Receive message from sender
    socket.on("chatMessage", (message) => {
        console.log("Message received:", message);

        // Send message to ALL OTHER clients
        socket.broadcast.emit("chatMessage", message);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
