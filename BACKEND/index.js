require('dotenv').config()
const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github',(req,res)=>{
    res.send("fuck you")
})
app.get('/login',(req,res)=>{
    res.send("fu login")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
