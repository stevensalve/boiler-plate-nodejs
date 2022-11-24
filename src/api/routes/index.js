'use strict'

import { ResponseBody } from '../../lib'
import { MongoCRED } from './mongoCRED'
import { SERVER_CONFIG } from '../../config';

const { VERSION } = SERVER_CONFIG

const Routes = [
  { path: '/mongoCRED', router: MongoCRED }
]

Routes.init = app => {
  if (!app || !app.use) {
    console.error('[Error] Route Initialization Failed: app / app.use is undefined')
    return process.exit(1)
  }

  Routes.forEach(route => app.use(route.path, route.router))

  app.get('/version', (request, response, next) => {
    const data = { VERSION }
    const responseBody = new ResponseBody(200, 'OK', data)
    response.status(responseBody.statusCode).json(responseBody)
  })

  // Health Check API
  app.get('/health-check', (request, response, next) => {
    console.log('here')
    const responseBody = new ResponseBody(200, 'OK')
    response.status(responseBody.statusCode).json(responseBody)
  })

  app.use('*', (request, response, next) => {
    const error = {
      statusCode: 404,
      message: ['Cannot', request.method, request.originalUrl].join(' ')
    }
    next(error)
  })

  app.use((error, request, response, next) => {
    if (!error) { return }

    if (error.statusCode) {
      response.statusMessage = error.message
      return response.status(error.statusCode).json(error)
    }

    const err = { statusCode: 500, message: error.toString() }
    response.statusMessage = err.message
    return response.status(err.statusCode).json(err)
  })
}

export default Routes
