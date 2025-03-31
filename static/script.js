// Configure marked for security
marked.setOptions({
    sanitize: true,
    breaks: true
});

function createMessageElement(content, isUser = false) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    
    if (isUser) {
        contentDiv.textContent = content;
    } else {
        contentDiv.innerHTML = marked.parse(content);
    }
    
    messageDiv.appendChild(contentDiv);
    return messageDiv;
}

function sendMessage() {
    const userText = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");
    
    if (!userText.trim()) return;
    
    // Show user message
    const userMessage = createMessageElement(userText, true);
    chatBox.appendChild(userMessage);
    
    // Clear input
    document.getElementById("user-input").value = "";
    
    // Send to Flask endpoint
    fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText })
    })
    .then(res => res.json())
    .then(data => {
        if (data.reply) {
            const botMessage = createMessageElement(data.reply);
            chatBox.appendChild(botMessage);
        } else {
            const errorMessage = createMessageElement("Error: " + (data.error || "No reply"));
            chatBox.appendChild(errorMessage);
        }
    })
    .catch(error => {
        console.error("Fetch error:", error);
        const errorMessage = createMessageElement("Error: Failed to get response from Gemini AI");
        chatBox.appendChild(errorMessage);
    });
    
    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle Enter key in textarea
document.getElementById("user-input").addEventListener("keydown", function(e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});
  