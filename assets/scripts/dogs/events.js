const api = require('./api')
const ui= require('./ui')
const getFormFields = require('../../../lib/get-form-fields')


const onIndexdogs = function () {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}
//
const onDestroydog = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.destroyDog(formData.dog.id)
    .then(ui.onDestroySuccess)
    .catch(ui.onError)
}

const onUpdatedog = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateDog(formData.dog.id, formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

const onCreatedog = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createDog(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

const onDynamicUpdatedog = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = $(form).data('id')
  api.updateDog(id, formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

module.exports = {
  onIndexdogs,
  onDestroydog,
  onUpdatedog,
  onCreatedog,
  onDynamicUpdatedog
}
