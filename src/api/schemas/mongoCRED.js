'use strict'

import mongoose from 'mongoose'

const { Schema } = mongoose

const mongoCREDSchema = new Schema({
  createStatus: { type: Boolean, default: false },
  readStatus: { type: Boolean, default: false },
  editStatus: { type: Boolean, default: false },
  deleteStatus: { type: Boolean, default: false },

  createdAt: { type: Date, default: new Date().toISOString() },
  updatedAt: { type: Date, default: new Date().toISOString() }
})

export { mongoCREDSchema }
