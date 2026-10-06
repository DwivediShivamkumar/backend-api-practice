//console.log("Shivam Dubey")
require('dotenv').config()


const express = require('express');
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('Shivam Dubey')
})


app.get('/signup', (req, res) => {
  res.send('Gopalganj')
})


app.get('/about', (req, res) => {
  res.send('<h1>Software Engineer</h1>')
})

app.get('/contact', (req,res) => {
  res.send(8709045678)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})