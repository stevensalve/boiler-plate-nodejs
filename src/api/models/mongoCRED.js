'use strict'

import mongoose from 'mongoose'
import { mongoCREDSchema } from '../schemas'

const mongoCREDMongoModel = mongoose.model('mongoCRED', mongoCREDSchema)
// mongo Model Fuctions being exposed
export const mongoCREDModel = {
  createMongoDoc,
  readMongoDoc,
  editMongoDoc,
  deleteMongoDoc
}

async function createMongoDoc (body) {
  const mongoDoc = await mongoCREDMongoModel.create(body)
  return { mongoDoc }
}

async function readMongoDoc (_id) {
  const mongoDoc = await mongoCREDMongoModel.findById(_id)
  return mongoDoc
}

async function editMongoDoc (_id, data) {
  const updatedAt = new Date().toISOString()
  const thisData = { updatedAt, ...data }
  return await mongoCREDMongoModel.updateOne({ _id: _id }, { $set: thisData }, { multi: true })
}

async function deleteMongoDoc (_id) {
  return await mongoCREDMongoModel.deleteOne({_id})
}
