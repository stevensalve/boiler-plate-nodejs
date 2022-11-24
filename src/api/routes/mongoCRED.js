'use strict'

import Express from 'express'
import { asyncWrapper } from '../helpers'
import { mongoController } from '../controllers'
import { SendResponse } from '../../lib'

const { sendResponse } = SendResponse
const MongoCRED = new Express.Router()

// Route exporuse to Create mongo
MongoCRED.post('/', asyncWrapper(mongoController.createDoc))
// Route exporuse to Read mongo Document
MongoCRED.get('/:mongoId', asyncWrapper(mongoController.readDoc))
// Route exporuse to Edit mongo Document
MongoCRED.patch('/:mongoId', asyncWrapper(mongoController.editDoc))
// Route exporuse to Edit mongo Document
MongoCRED.delete('/:mongoId', asyncWrapper(mongoController.deleteDoc))
// Send Response
MongoCRED.use(sendResponse)

export { MongoCRED }
