const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function addMessage(sender, text) {
  const p = document.createElement('p');
  p.className = sender;
  p.innerText = text;
  chatWindow.appendChild(p);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendBtn.addEventListener('click', () => {
  const msg = userInput.value.trim();
  if (!msg) return;
  addMessage('user', `You: ${msg}`);
  userInput.value = '';

  // Demo bot logic
  let reply = 'I\'m sorry, could you clarify?';
  if (/hello/i.test(msg)) reply = 'Hello! How can I help you today?';
  else if (/price/i.test(msg)) reply = 'Our pricing starts from just $25.';
  else if (/demo/i.test(msg)) reply = 'Visit our live demo at <your-replit-url>';

  setTimeout(() => addMessage('bot', `Bot: ${reply}`), 500);
});
