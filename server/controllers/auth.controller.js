const asyncHandler = require('express-async-handler')
const db = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const hash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

module.exports = {
   loginWithGoogle: asyncHandler(async (req, res, next) => {
      const { email, fullname, avatar, password } = req.body
      let uid
      const user = await db.User.findOne({ where: { email } })
      if (!user) {
         const newUser = await db.User.create({ email, fullname, avatar, password: hash(password) })

         if (!newUser) throw new Error('Lỗi đăng ký')
         uid = newUser.id
      } else {
         uid = user.id
      }

      const token = jwt.sign({ uid }, process.env.SECRET_JWT_KEY, { expiresIn: '7d' })

      return res.json({
         success: !!token,
         accessToken: token,
         message: token ? 'Đăng nhập thành công!' : 'Đăng nhập thất bại!'
      })
   }),

   checkNewUserFromEmail: asyncHandler(async (req, res) => {
      const { email } = req.params

      const user = await db.User.findOne({ where: { email } })

      let token = null
      if (user) token = jwt.sign({ uid: user.id }, process.env.SECRET_JWT_KEY, { expiresIn: '7d' })

      return res.json({
         success: true,
         hasUser: !!user,
         accessToken: token,
         message: token ? 'Đăng nhập thành công!' : 'New user'
      })
   })
}