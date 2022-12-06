const router = require('express').Router()

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
  
module.exports = router
