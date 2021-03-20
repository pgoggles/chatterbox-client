var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.storage = [];
    this.storageStringified = [];
  },

  // Data is an array with objects
  // The objects have contain keys
  // campus, Created at, text, username
  // loop through the data
  // get the piece you want
  // pass into appendToPage
  render: function(data) {
    for (var i = 0; i < data.length; i++) {
      var messageObj = data[i];
      MessageView.appendToPage(messageObj);
      this.storage.push(messageObj);
      this.storageStringified.push(JSON.stringify(messageObj));
    }
  },

  update: function(data) {
    // Take the new data compare it to the old data
    // Filter out the new pieces of data
    // Push into storage
    // Prepend it to the top of the messageView
    for (var i = 0; i < data.length; i++) {
      if (!this.storageStringified.includes(JSON.stringify(data[i]))) {
        this.storage.push(data[i]);
        this.storageStringified.push(JSON.stringify(data[i]));
        console.log(data[i]);
        MessageView.prependToPage(data[i]);
      }
    }
  }

};