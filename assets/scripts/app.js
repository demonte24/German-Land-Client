'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const dogEvents = require('./dogs/events')
const authEvents = require('./auth/events')
$('#change-password').hide()
$('#sign-out').hide()

$('#dogs-index').hide()
$('#dogs-create').hide()
$('#dogs-update').hide()
$('#dogs-destroy').hide()

$('.card-group').hide()

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  $('#dogs-index').on('click', dogEvents.onIndexdogs)
  $('#dogs-destroy').on('submit', dogEvents.onDestroydog)
  $('#dogs-update').on('submit', dogEvents.onUpdatedog)
  $('#dogs-create').on('submit', dogEvents.onCreatedog)
  $('#dogs-display').on('submit', '.dogs-update-dynamic', dogEvents.onDynamicUpdatedog)
  $('#dogs-display').on('submit', '.dogs-delete-dynamic', dogEvents.onDynamicDeletedog)
})
