const { notFound, errorHandler } = require('../middlewares/error-handler')
const auth = require('./auth.route')

const initRoutes = (app) => { 
   app.use('/api/v1/auth', auth)

   app.use(notFound)
   app.use(errorHandler)
}
 
module.exports = initRoutes