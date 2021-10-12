let socket = io()
console.log(socket)

let messages = document.getElementById('chat')
let form = document.getElementById('form')
let chatMessage = document.getElementById('chat-input')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
  if(chatMessage.value){
      socket.emit('chat message', chatMessage.value)
      chatMessage.value = ''
  }
})

socket.on('chat message', (msg)=>{
  const element = document.createElement('li')
  element.innerHTML = msg
  element.classList.add('word')
  messages.appendChild(element)
  
})