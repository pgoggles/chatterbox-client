var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    App.updatePeriodic();
  },

  // Grab Data and Renders it on the page
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      MessagesView.render(data);

      callback();

    });
  },

  // Grabs Data and Updates it
  fetchUpdate: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      MessagesView.update(data);

      callback();

    });
  },

  // Calls itself over and over again using set timeout
  // Updates the feed continuously
  updatePeriodic: function () {
  // call fetchUpdate
  // Settime out calling this function, 3000 milliseconds

    App.fetchUpdate();
    setTimeout(App.updatePeriodic, 3000);

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
