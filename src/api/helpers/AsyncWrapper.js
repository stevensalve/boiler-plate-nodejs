'use strict'

const asyncWrapper = fn => (request, response, next) => Promise.resolve(fn(request, response, next)).catch(next)

export { asyncWrapper }
