'use strict'

import { mongoCREDModel } from '../models'
import { ResponseBody } from '../../lib'

// Controller to redirect the operation
export const mongoController = {
  createDoc,
  readDoc,
  editDoc,
  deleteDoc
}

async function createDoc (request, response, next) {
  const { body } = request
  const result = await mongoCREDModel.createMongoDoc(body)
  const responseBody = new ResponseBody(201, 'OK', result)
  response.body = responseBody
  next()
}

async function readDoc (request, response, next) {
  const { params } = request
  const { mongoId } = params
  const result = await mongoCREDModel.readMongoDoc(mongoId)
  const responseBody = new ResponseBody(200, 'OK', result)
  response.body = responseBody
  next()
}

async function editDoc (request, response, next) {
  const { body, params } = request
  const { mongoId } = params
  const result = await mongoCREDModel.editMongoDoc(mongoId, body)
  const responseBody = new ResponseBody(200, 'OK', result)
  response.body = responseBody
  next()
}

async function deleteDoc (request, response, next) {
  const { params } = request
  const { mongoId } = params
  const result = await mongoCREDModel.deleteMongoDoc(mongoId)
  const responseBody = new ResponseBody(200, 'OK', result)
  response.body = responseBody
  next()
}
