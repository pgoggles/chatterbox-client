var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
  // loop through the data
  // get the piece you want
  // pass into appendToPage

    for (var i = 0; i < data.length; i++) {
      var messageObj = data[i];
      MessageView.appendToPage(messageObj);
    }
  }

};