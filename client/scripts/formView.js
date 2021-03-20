var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    // Grabs user name from window
    // Grabs the text from form using the jquery function .val()

    // Uses messages and creates it / posts it to the server
    event.preventDefault();
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: '4chan'
    };
    Parse.create(message);
    $('form')[0].reset();

    //fetchUpdate
    setTimeout(App.fetchUpdate, 1000);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

/*

var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};







*/