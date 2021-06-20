const express = require('express')
const bodyParser = require('body-parser')
const https = require('https')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))

// GET Requests

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/invite', (req, res) => {
    res.redirect('https://discord.com/invite/Zjn7rTp')
})

// Port listener

app.listen(3000, () => {
    console.log(`Server up on port 3000`)
})