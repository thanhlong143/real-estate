const asyncHandler = require('express-async-handler')
const db = require('../models')

module.exports = {
   getMe: asyncHandler((req, res) => {
      const { uid } = req.user
      
      // express: req.params -> để lấy params abc/:id
      // req.body -> post / put / patch data / formData
      // req.query -> get / delete params
   })
}