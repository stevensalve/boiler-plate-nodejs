'use strict'

import mongoose from 'mongoose'
import { SERVER_CONFIG, MONGO_CONFIG } from './config'

const { PORT } = SERVER_CONFIG
const { CONNECTION_URI, MONGO_DBNAME, OPTIONS } = MONGO_CONFIG

const startServer = async app => {
  try {
    console.log('[Info] Connecting to MongoDB...')
    await mongoose.connect(CONNECTION_URI, OPTIONS)
    console.log(`[Info] MongoDB Connection to Database ' ${MONGO_DBNAME} ' Successful!`)

    await app.listen(PORT)
    console.log(`[Info] Server Started Successfully! Listening on Port: ${PORT}`)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default startServer
