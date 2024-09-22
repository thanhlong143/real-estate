const asyncHandler = require('express-async-handler')
const db = require('../models')

module.exports = {
   getMe: asyncHandler(async (req, res) => {
      const { uid } = req.user

      // express: req.params -> để lấy params abc/:id
      // req.body -> post / put / patch data / formData
      // req.query -> get / delete params

      const response = await db.User.findByPk(uid, {
         attributes: {
            exclude: ['password', 'resetPwdExpiry', 'resetPwdToken']
         }
      })

      console.log(response);

      return res.json({
         success: true,
         user: response,
      })
   })
}