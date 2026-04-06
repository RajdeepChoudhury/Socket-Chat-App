const socket = io();

const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");

function sendMessage() {
  const message = messageInput.value.trim();
  if (message === "") return;

  displayMessage("You", message);
  socket.emit("chatMessage", message);

  messageInput.value = "";
}

socket.on("chatMessage", (message) => {
  displayMessage("Friend", message);
});

function displayMessage(sender, message) {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${sender}:</strong> ${message}`;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
