
const chatbox = document.getElementById('chatbox');
const input = document.getElementById('userInput');

function sendMessage() {
  const message = input.value.trim();
  if (!message) return;

  addMessage('user', message);
  const reply = getBotReply(message);
  addMessage('bot', reply);
  input.value = '';
}

function addMessage(role, text) {
  const div = document.createElement('div');
  div.className = role;
  div.textContent = role === 'user' ? `🙋‍♀️ ${text}` : `🤖 ${text}`;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotReply(message) {
  const lower = message.toLowerCase();

  if (lower.includes('배송')) {
    return '배송은 보통 2~3일 소요됩니다.';
  } else if (lower.includes('환불')) {
    return '환불은 제품 수령 후 7일 이내 가능합니다.';
  } else if (lower.includes('재입고')) {
    return '인기 상품의 경우 2주 이내 재입고 예정입니다.';
  } else if (lower.includes('가격')) {
    return '100매당 1,000원 200매당 2,000원';
  } else {
    const responses = [
      '죄송해요, 조금만 더 자세히 말씀해 주시겠어요?',
      '그 부분은 담당자가 확인 후 연락드릴게요!',
      '조금 어려운 질문이에요. 다른 걸 도와드릴까요?'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
}
