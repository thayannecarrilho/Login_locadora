

const express = require('express')
const session = require('express-session')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const exp = require('constants')
const conn = require('./db/conn')
const login = require('./models/login')
const loginRoutes = require('./routes/loginRoutes')

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.json())

app.use('/', loginRoutes)

conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))

