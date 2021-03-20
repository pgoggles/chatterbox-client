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
  }


  // MessageView.render('String')

};

// var compiled = _.template(
//   "<div class='module module-movie' style='background-image: url(<%= movieImage %>)'>" +
//     "<div class='movie-info'>" +
//       "<h3 class='movie-title'>" +
//          "<%= movieTitle %>" +
//       "</h3>" +
//       "<p class='movie-director'>" +
//          "<%= movieDirector %>" +
//       "</p>" +
//     "</div>" +
//   "</div>"
// );


// var i, html = "";
//   for (i = 0; i < data.movies.length; i++) {
//     html += compiled(data.movies[i]);
//   }
//   $("#movies").append(html);

