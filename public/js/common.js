const connect = document.querySelector('.connect')
const socket = io.connect("http://localhost:3000");
const name = document.querySelector('.name')
const form = document.querySelector('.auth')
const sendBTN = document.getElementById('btnSend')
const message = document.getElementById('message')
const formMessage = document.querySelector('.message')
const addMessage = document.querySelector('.allMessage')
socket.on('closeForm', data => {
if(data.form === true){
  form.style.display = 'none'
  formMessage.style.display = 'block'
}
})

socket.on('add_message', data => {
 addMessage.innerHTML += `<div class="chatMessage">
 <span>${data.username}</span>
 <p>${data.message}</p>
 </div>
 `
})

sendBTN.addEventListener('click',(event) =>{
  event.preventDefault()
  const formSend = {
    message: message.value,
    className: 'my'
  }
  socket.emit('send_message', formSend)
})


message.addEventListener('keypress', ()=>{
  socket.emit("typing");
  
})



socket.on("typing", data => {
 console.log('tiping ',data.username)
});
connect.addEventListener('click', (event)=> {
  event.preventDefault() 
  socket.emit('change_name', name.value) 
})