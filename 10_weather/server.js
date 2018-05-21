const express = require('express')
const request = require('request');
const querystring = require('querystring');
const lib = require('./lib.js');
const moment = require('moment');
moment().format();

const app = express()
const PORT = 8888;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('public'))


app.get('/', (req, res) => {
//req.query.keyword
  


    const data = {
      city: "your city",
      icon: "clear",
      temp: "25.00"
    }

    
    res.render('home', {data: data})
  ;
})

app.get('/api', (req, res) => {

  const qs = {
    appid: '150fe397273b0898d4e8b500237412d9',
    lat: req.params.lat,
    lon: req.params.lon,
    units: req.params.units
  }

  const url = `http://api.openweathermap.org/data/2.5/forecast?${querystring.stringify(qs)}`

  const options = {
    url: url,
    json: true
  }
  
  request(options, function (error, response, body) {
    const cityName = body.city.name 
    const today = body.list[0]
    
    const iconName = today.weather[0].main
    const temperature = today.main.temp
    const time = today.dt


    const data = {
      city: cityName,
      icon: iconName,
      temp: temperature

    }

    res.json({ data: data})
  })
})
