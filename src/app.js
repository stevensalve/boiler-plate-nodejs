'use strict'

import Express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Routes from './api/routes'
import { SERVER_CONFIG } from './config'
import server from './server'
import helmet from 'helmet'

//THIS IS A TEST COMMENT

const { BODY_LIMIT, CORS_ORIGIN, CORS_METHODS, PARAMETERLIMIT } = SERVER_CONFIG

const app = new Express()
const corsOptions = { origin: CORS_ORIGIN, methods: CORS_METHODS }
// Middleware Initializations
app.use(helmet())
app.disable('etag')
app.use(cors(corsOptions))
app.use(bodyParser.json({ limit: BODY_LIMIT }))
app.use(bodyParser.urlencoded({ limit: BODY_LIMIT, extended: true, parameterLimit: PARAMETERLIMIT }))

// Initialize Routes
Routes.init(app)
// Start Server
server(app)
