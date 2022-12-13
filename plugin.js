'use strict'

module.exports = async function plugin (app) {
  app.log.info('plugin loaded')

  app.get('/hello', async function (request, response) {
    return { hello: 'from TEST- PR -1 - NEW' }
  })
}
