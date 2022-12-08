const router = require('express').Router()
const places = require('../models/places.js')
// More code here in a moment

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/photo-1551218808-94e220e084d2.avif'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/photo-1509395062183-67c5ad6faff9.avif'
      }]
      
    res.render('places/index', { places })

  })
  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  router.get('/', (req, res) => {
    res.render('places/index', { places })
  })
  
  
  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
module.exports = router
