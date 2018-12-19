const express = require('express')
const router = express.Router();
const axios = require('axios')

const LISTING_API = 'https://api.purplebricks.com/listing-search/api/v2/Search/'
router.get('/search', (req, response) => {
  axios.post(LISTING_API, {
    "page": 5,
    "numberOfBeds": 0,
    "numberOfBaths": 0,
    "maxPrice": 700000,
    "minPrice": 50000,
    "pageSize": 25
  }, {
    headers: {
      'crossDomain': true,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(res => response.json(res.data))
})

// router.get('/search/:query', (req, response) => {
//   let query = req.params.query
//   console.log(query)
//   axios.post('https://api.purplebricks.com/listing-search/api/v2/Search', {
//     "query": `${query},USA`,
//     "page": 1,
//     "numberOfBeds": 0,
//     "numberOfBaths": 0,
//     "maxPrice": 700000,
//     "minPrice": 50000,
//     "pageSize": 12
//   }, {
//     headers: {
//       'crossDomain': true,
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   }).then(res => response.json(res.data))
// })

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
router.get('/hello', (req, res) => {
  res.json('hello from the otherside.')
})

module.exports = router;