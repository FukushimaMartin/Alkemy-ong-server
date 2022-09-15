const { Router } = require('express')
const { updateTestimonial } = require('../controllers/testimonials.controller')
const router = Router()

router.put('/:id', updateTestimonial)

module.exports = router