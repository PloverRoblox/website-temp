const express = require('express')
const bodyParser = require('body-parser')
const https = require('https')
const axios = require('axios')

const app = express()

app.use(bodyParser.json())

app.use(express.static('public'))

// GET Requests

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/invite', (req, res) => {
    res.sendFile(`${__dirname}/invite.html`)
})

app.get('/order', (req, res) => {
    res.sendFile(`${__dirname}/order.html`)
})

app.get('/buyer-guidelines', (req, res) => {
  res.sendFile(`${__dirname}/buyer-guidelines.html`)
})

app.get('/community-guidelines', (req, res) => {
  res.sendFile(`${__dirname}/community-guidelines.html`)
})

app.get('/moderation-guidelines', (req, res) => {
  res.sendFile(`${__dirname}/moderation-guidelines.html`)
})

// POST Requests
app.post('/order', (req, res) => {
    console.log(req.body)
    res.send('Success')

    const id = req.body.DiscordID
    const link = req.body.URL
    const desc = req.body.Desc
    const products = req.body.Products
    const budget = req.body.Budget
    const devs = req.body.Devs
    const blacklists = req.body.Blacklists
    const activity = req.body.Activity
    const foundUs = req.body.FoundUs
    const date = req.body.tripettoCreateDate
    const buyerId = req.body.tripettoId


    var data = JSON.stringify({
        "content": null,
        "embeds": [
          {
            "title": "New Order",
            "description": `**User: **<@${id}>\n**Group Link: **${link}\n**Group desc: **${desc}\n**Products: **${products}\n**Budget: **${budget}\n**Developers: **${devs}\n**Blacklists: **${blacklists}\n**Activity (0-10): **${activity}\n**How they found Plover: **${foundUs}\n**Purchase ID: **${buyerId}`,
            "color": 60188
          }
        ]
      });
      
      var config = {
        method: 'post',
        url: 'https://canary.discord.com/api/webhooks/856039989016395787/nOmc25jBT8-M6-qBtLtS9CD6htcY0g6g88gisEYHLlrGwD8mgDmoSgnXzfHtqTvaK3WR',
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json', 
          'Cookie': '__cfruid=d244e28d44208557457fffa2566ea28e801cf155-1624168598; __dcfduid=be612a121b464a58a9dbfb6f5f7b7bd4'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

})

// Port listener

app.listen(3000, () => {
    console.log(`Server up on port 3000`)
})