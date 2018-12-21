const express = require('express')
const router = express.Router();
const axios = require('axios')

const listing_api = 'https://api.purplebricks.com/listing-search/api/v2/Search/'


router.get('/search', (req, response) => {
  axios.post(listing_api, {
    "page": 5,
    "numberOfBeds": 0,
    "numberOfBaths": 0,
    "maxPrice": 700000,
    "minPrice": 50000,
    "pageSize": 25
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'crossDomain': true,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(res => response.json(res.data))
})


router.get('/listing/:id', (req, response) => {
  
  let listingId = req.params.id
  console.log(listingId)
  
  axios.get(`https://api.purplebricks.com/listing-details/api/v2/listing/${listingId}`, {
    headers: {
      'crossDomain': true,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(res => response.json(res.data))
})



module.exports = router;