const express = require('express')
const _ = require('lodash')
const ejs = require('ejs')
const request = require('request')
const app = express()

var pgp = require('pg-promise')()
var db = pgp({
  database: 'movies'
})

db.any('SELECT * FROM movies')
    .then(function(movies) {
      console.log(movies[1].title)
    })

// db.none("INSERT INTO movies(title, plot) VALUES('Foobar', 'foobar baz')")
//     .then(() => {
//         console.log('did it')
//     })
//     .catch(error => {
//       console.log('nope')
//     });



app.get('/movies', (req,res) => {

  var options = {
    url: `http://omdbapi.com/?apikey=2f6435d9&page=23&t=${req.query.searchterm}`,
    json: true
  }

  request(options, (error, httpResp, body) => {
    db.none('INSERT INTO movies(title, poster, imdb_id, plot, release_year, runtime) VALUES($1, $2, $3, $4, $5, $6) RETURNING id', [body.Title, body.Poster, body.imbdID, body.Plot, body.Year, body.Runtime ])
          .then(data => {
              res.render('home')
              })
          .catch(error => {
            
          });
  })
})