import express from 'express'
import path from 'path'
import cors from 'cors'

import 'express-async-errors'

import './database/connection'

import routes from './routes'
import errorHandler from './errors/handler' //tratamento de erros

const app = express()

app.use(cors()) //em produção passar endereço de acesso do frontend
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))) //exibição de imagens
app.use(errorHandler)

app.listen(3333)