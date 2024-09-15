require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./configs/db_connection')
const initRoutes = require('./routes')

const app = express()

app.use(cors({
   origin: process.env.CLIENT_URL,
   methods: ['POST', 'PUT', 'DELETE', 'GET'],
}))

app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: true, limit: '5mb' }))

dbConnection()
initRoutes(app)

const port = process.env.PORT || 8888

app.listen(port, () => {
   console.log(`::: Server on ${port}`);
})