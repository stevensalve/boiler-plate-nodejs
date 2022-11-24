'use strict'
const { MONGO_DBNAME, MONGO_HOST, MONGO_PORT, MONGO_USERNAME, MONGO_PASSWORD } = process.env

const options = { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// const CONNECTION_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DBNAME}`
const CONNECTION_URI = 'mongodb://localhost/my_database'
// MongoDB Configuration to required establish connection
const MONGO_CONFIG = {
  MONGO_DBNAME: MONGO_DBNAME,
  MONGO_HOST: MONGO_HOST,
  PORT: MONGO_PORT,
  USERNAME: MONGO_USERNAME,
  PASSWORD: MONGO_PASSWORD,
  OPTIONS: options,
  CONNECTION_URI: CONNECTION_URI
}
// Terminate Server if any DB Configuration is missing
Object.keys(MONGO_CONFIG).forEach((key) => {
  if (!MONGO_CONFIG[key]) {
    console.error('[Error] Missing MongoDB Config:', key)
    return process.exit(1)
  }
})

export { MONGO_CONFIG }
