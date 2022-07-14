const express = require('express')
const path = require('path')

//localhost
const app = express()
const PORT = process.env.PORT || 3001

app.use((exo = express.urlencoded({ extended: true })))
app.use(express.json())
app.use(routes)

//express App needs this code to display static pages
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})
