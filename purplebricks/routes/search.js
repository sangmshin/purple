const express = require('express')
const router = express.Router();
const axios = require('axios')

router.get('/search', (req, response) => {
  axios.post('https://api.purplebricks.com/listing-search/api/v2/Search', {
    "query": "California"
  }, {
    headers: {
      'crossDomain': true,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(res => response.json(res.data))

})

router.get('/hello', (req, res) => {
  res.json('hi')
})

module.exports = router;