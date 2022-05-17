const express = require('express')
const app =  express()
const morgan = require('morgan')


//middlewares
app.use(morgan('dev'))
app.use(express.json())