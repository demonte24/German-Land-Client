const store = require('./../store')
const events = require('./events')
const api = require('./api')


const signUpSuccess = function(response) {
  $('#message').text('Thank you for signing up!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function(response) {
  $('#error-message').text('Sign up failed, try again')
  $('#error-message').trigger('reset')
}

const signInSuccess = function(response) {
  store.user = response.user
$('#message').text('Welcome to German Land!')
  $('#sign-in').trigger('reset')
  $('#change-password').show()
  $('#nav-bar').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()

  $('#dogs-create').show()
  
}

const signInFailure = function(response) {
  $('#error-message').text('Sign In failed, try again')
  $('form').trigger('reset')
}

const changePasswordSuccess = function(response) {
  $('#message').text('Your password has been successfully changed!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function(response) {
  $('#error-message').text('Change Password failed, try again')
  $('form').trigger('reset')
}

const signOutSuccess = function(response) {

  $('#message').text('Thank you for adding a potential match!')
    $('#sign-out').trigger('reset')
    $('#sign-in').show()
    $('#sign-up').show()
    $('#change-password').hide()
    $('#sign-out').hide()
    $('#nav-bar').hide()

    $('#dogs-index').hide()
    $('#dogs-create').hide()
    $('#dogs-update').hide()
    $('#dogs-destroy').hide()
    $('#dogs-display').hide()
}

const signOutFailure = function(response) {
  $('#error-message').text('Sign Out failed, try again')
  $('form').trigger('reset')
}


module.exports = {
  signUpSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
