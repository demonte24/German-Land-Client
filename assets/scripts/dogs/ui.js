const onIndexSuccess = function (responseData) {
const dogs = responseData
let dogsHtml = ''
  dogs.forEach(dog => {
    dogsHtml += `
      <h4>Name: ${dog.name}</h4>
      <p>Breed: ${dog.breed}</p>
      <p>Age: ${dog.age}<p>


        <form class='dogs-update-dynamic' data-id=${dog._id}>
          <input type='text' name='dog[name]' placeholder='Enter Name Here' required>
          <input type='text' name='dog[breed]' placeholder='Enter Breed Here' required>
          <input type='number' name='dog[age]' placeholder='Enter Age Here' required>
          <button class='button'>Update dog</button>
          <hr>
        </form>

        <form class='dogs-delete-dynamic' data-id=${dog._id}>
          <button class='button'>Delete dog</button>
          <hr>
        </form>
    `
  })
  $('#dogs-display').html(dogsHtml)
  $('#message').text('Here is a list of all the matches!')
  $('form').trigger('reset')
}
const onIndexFailure = function () {
  $('#error-message').text('Do not forget to add a match first!')
  $('form').trigger('reset')
}

const onDestroySuccess = function () {
  $('#message').text('dog successfully deleted!')
  $('#dogs-display').text('dogs have changed! Click "See Matches" again to see all the matches')
  $('#dogs-destroy-message').addClass('success')
  $('form').trigger('reset')
}
const onDestroyFailure = function () {
  $('#error-message').text('Destroy failed Try Again!')
  $('form').trigger('reset')
}

const onUpdateSuccess = function (responseData) {
  $('#message').text('You successfully updated the match')
  $('#dogs-display').text('matches have changed! Click "See Matches" again to see all the matches.')
  $('form').trigger('reset')
}
const onUpdateFailure = function () {
  $('#error-message').text('Update failed Try Again!')
  $('form').trigger('reset')
}

const onCreateSuccess = function () {
  $('#message').text('You created a new dog!')
  $('#dogs-display').text('matches have changed! Click "See Matches" again to see all the matches.')
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#dogs-index').show()
  $('#dogs-update').show()
  $('#dogs-destroy').show()
}
const onCreateFailure = function () {
  $('#error-message').text('Create failed Try Again!')
  $('form').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onIndexFailure,
  onDestroyFailure,
  onUpdateFailure,
  onCreateFailure,
}
