'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const dogEvents = require('./dogs/events')
const authEvents = require('./auth/events')
$('#change-password').hide()
$('#sign-out').hide()
$('#nav-bar').hide()

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
})
