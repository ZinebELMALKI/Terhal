

document.addEventListener('DOMContentLoaded', () => {
    const chatBody = document.querySelector('.chat-body');
    const chatInput = document.querySelector('.chat-footer input');
    const sendButton = document.querySelector('.chat-footer button');

    
    const addUserMessage = (message) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'user-message');
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
        chatBody.scrollTop = chatBody.scrollHeight; 
    };

    
    sendButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            addUserMessage(message);
            chatInput.value = ''; 
        }
    });

    
    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });



   
   const changeBackground = () => {
    const photos = [
        'Logo/48930fb1-69b6-4416-b3c1-cfc450a6b085.jpg',
        'Logo/Morocco\ map.jpg',
        'Logo/Terhal_bot.png'
    ];
    let currentIndex = 0;

    setInterval(() => {
        body.style.backgroundImage = `url('${photos[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % photos.length; 
    }, 30000); 
};

changeBackground();

});
