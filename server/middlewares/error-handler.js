const notFound = (req, res, next) => { 
   const error = new Error(`Route ${req.method} ${req.originalUrl}  not found.`)
   
   res.status(404)
   next(error)
}

const errorHandler = (error, req, res, next) => {
   const statusCode = res.statusCode === 200 ? 500 : res.statusCode
   const message = error?.message.replaceAll(`\"`, '')

   return res.status(statusCode).json({
      success: false,
      message
   })
}
 
module.exports = {
   notFound,
   errorHandler,
}