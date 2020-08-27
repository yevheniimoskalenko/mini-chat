const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')
const app = express()


const server = app.listen(3000,() => {console.log('server is run')})
const io = require('socket.io')(server)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', (req,res)=> {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


io.on('connection', soket => {
  console.log('new connect ')
})


