document.addEventListener('DOMContentLoaded', function() {
  // 菜单项激活状态
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menuItems.forEach(mi => mi.classList.remove('active')); // 移除所有激活状态
      this.classList.add('active'); // 激活当前点击项
    });
  });

  // 温度滑块实时显示值
  const temperatureSlider = document.getElementById('temperature');
  const temperatureValueSpan = document.getElementById('temperature-value');
  if (temperatureSlider && temperatureValueSpan) {
    temperatureSlider.addEventListener('input', function() {
      temperatureValueSpan.textContent = this.value;
    });
  }

  // 输入框自动高度调整
  const chatInput = document.getElementById('chat-input');
  if (chatInput) {
    chatInput.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  }

  // 发送按钮点击事件 (示例，实际功能需要后端支持)
  const sendButton = document.getElementById('send-button');
  if (sendButton && chatInput) {
    sendButton.addEventListener('click', function() {
      const messageText = chatInput.value.trim();
      if (messageText) {
        // 这里可以添加发送消息到后端的代码
        console.log('发送消息:', messageText);
        chatInput.value = ''; // 清空输入框
        chatInput.style.height = 'auto'; // 重置输入框高度
        // ... (添加代码动态创建用户消息和助手回复消息到 chat-window) ...
      }
    });
  }
});