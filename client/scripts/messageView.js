var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username <%= username %>"><p><%= username %></p></div>
        <div class="message <%= username %>"><p><%= text %></p></div>
      </div>
    `),

  // Created a new messageView method to renderBold
  // Render Bold adds a new class 'bolderUsename'
  renderBold: _.template(`
      <div class="chat">
        <div class="username <%= username %> boldedUsername"><p><%= username %></p></div>
        <div class="message <%= username %> boldedUsername"><p><%= text %></p></div>
      </div>
    `),

  appendToPage: function(message) {
    //two things
    // get the correct HTML
    var tweet = this.render(message);
    // put it on the page
    $('#chats').append(tweet);
  },

  prependToPage: function(message) {
    //two things
    // get the correct HTML
    if (Friends.friendsList.includes(message.username)) {
      var tweet = this.renderBold(message);
    } else {
      var tweet = this.render(message);
    }
    // put it on the page
    $('#chats').prepend(tweet);
  }


  // MessageView.render('String')

};

