const form = document.querySelector("form");
const message = document.getElementById("message");
const chatLog = document.getElementById("chat-log");
const messages = [];




form.addEventListener("submit", (chorinho)=>{
    chorinho.preventDefault();


    const messageText = message.value;
    const newMessageAPI = {"role": "user", "content": `${messageText}`};


    messages.push(newMessageAPI);
    console.log(messages);
    message.value = "";


    const messageElementDiv = document.createElement("div");
    messageElementDiv.classList.add("message");
    messageElementDiv.classList.add("message--sent");
    messageElementDiv.innerHTML = `
        <div class="message_text">${messageText}</div>
    `
    chatLog.appendChild(messageElementDiv);


    fetch("http://localhost:3000/sendMessage/", {
        method: "POST",
        headers: {
            "Content-Type": "application/Json"
        },
        body: JSON.stringify({
            messages
        })
    })


    .then(res => res.json()
    .then(data => {
        console.log(data);
        const messageElementDiv = document.createElement("div");
        messageElementDiv.classList.add("message");
        messageElementDiv.classList.add("message--received");
        messageElementDiv.innerHTML = `
            <div class="message_text">${data.chat_completion.candidates[0].content.parts[0].text}</div>
        `
        chatLog.appendChild(messageElementDiv);
    }))
});
