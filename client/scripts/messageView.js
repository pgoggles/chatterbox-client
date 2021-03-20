var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><p><%= username %></p></div>
        <div class="message"><p><%= text %></p></div>
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
    var tweet = this.render(message);
    // put it on the page
    console.log(tweet);
    $('#chats').prepend(tweet);
  }


  // MessageView.render('String')

};

