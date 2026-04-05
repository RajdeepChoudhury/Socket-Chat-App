import socket
import threading

HOST = '127.0.0.1'
PORT = 5001

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((HOST, PORT))
server.listen()

clients = []

def broadcast(message, sender):
    for client in clients:
        if client != sender:
            client.send(message)

def handle_client(conn):
    clients.append(conn)
    while True:
        try:
            message = conn.recv(1024)
            if not message:
                break
            broadcast(message, conn)
        except:
            break
    clients.remove(conn)
    conn.close()

print("Python Backend running on port 5001...")

while True:
    conn, addr = server.accept()
    print("Connected:", addr)
    thread = threading.Thread(target=handle_client, args=(conn,))
    thread.start()
