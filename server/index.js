const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT||10000; 


const cors = require('cors')
const crypto = require('crypto')
const axios = require('axios')
const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const ts = new Date().getTime();
const privateKey = process.env.PRIVATE_KEY
const publicKey = process.env.PUBLIC_KEY


const hash = crypto.createHash('md5').update(ts+privateKey+publicKey).digest('hex')



app.listen(port, ()=>{
    console.log(`The server is running on ${port}`)
    
})


app.post('/', async(req, res)=>{
  const {character} = req.body
  const info = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${character}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
  res.send(info.data)
  
})
app.post('/characterinfo', async(req, res)=>{
  const {id} = req.body
  const infoId = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?id=${id}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
  res.send(infoId.data)
  
})





