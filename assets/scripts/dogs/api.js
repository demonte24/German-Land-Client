const config = require('../config')
const store = require('./../store')

const index = function () {
  return  $.ajax({
    method: 'GET',
    url: config.apiUrl + '/dogs',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroyDog = function (id) {
  return  $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/dogs/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateDog = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/dogs/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const createDog = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/dogs',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData,
  })
}

module.exports = {
  index,
  destroyDog,
  updateDog,
  createDog
}
