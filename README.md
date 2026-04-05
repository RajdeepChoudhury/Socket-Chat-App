# 💬 Multi-Client Chat Server (Python)

A simple **real-time chat server** built using Python sockets and threading. This server allows multiple clients to connect simultaneously and exchange messages in real time.

---

## 🚀 Features

* 🔗 Supports multiple client connections
* ⚡ Real-time message broadcasting
* 🧵 Multi-threaded handling of clients
* 🖥️ Lightweight and easy to run
* 📡 Uses TCP socket communication

---

## 🛠️ Technologies Used

* Python 3
* `socket` module
* `threading` module

---

## 📂 How It Works

1. The server listens on a specified host and port.
2. Multiple clients can connect to the server.
3. Each client connection runs on a separate thread.
4. Messages sent by one client are broadcast to all other connected clients.

---

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd <repo-folder>
```

### 2. Run the server

```bash
python server.py
```

### 3. Connect clients

You can connect using:

* Custom Python client
* Telnet (for testing)
* Any TCP-based client application

---

## 📌 Code Overview

* **Socket Initialization**: Creates and binds the server
* **Threading**: Handles multiple clients concurrently
* **Broadcast Function**: Sends messages to all connected clients
* **Client Handler**: Manages communication for each client

---

## ⚠️ Limitations

* No username support
* No encryption (not secure for production)
* No GUI (console-based)
* No message history

---

## 🔮 Future Improvements

* ✅ Add usernames for clients
* 🔐 Implement encryption (SSL/TLS)
* 💬 Private messaging support
* 🖥️ Build a frontend UI (web or app)
* 📁 Store chat history

---

## 🤝 Contributing

Feel free to fork this project and improve it. Pull requests are welcome!

---

## 👨‍💻 Author

Developed as a simple backend chat server using Python sockets.
