const jwt = require('jsonwebtoken')
const db = require('../models')

const verifyToken = (req, res, next) => {
   if (req.headers.authorization?.startsWith('Bearer')) {
      const token = req.headers.authorization.split(' ')[1]

      jwt.verify(token, process.env.SECRET_JWT_KEY, (error, user) => {
         if (error) {
            return res.json({
               success: false,
               message: 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!'
            })
         }

         req.user = user
         next()
      })
   } else {
      return res.json({
         success: false,
         message: 'Bạn chưa đăng nhập!'
      })
   }
}

module.exports = {
   verifyToken,
}