var Friends = {

  $username: $(document),

  // Add a friend list array to check
  initialize: function() {
    this.friendsList = [];
    console.log(this.friendsList);
    Friends.$username.on('click', '.username', Friends.toggleFriend);
  },

  // Push friends in to friend array if it isn't there
  // Spliced friend Out to keep consistent
  toggleFriend: function (event) {
    var friendName = event.currentTarget.innerText;
    if (Friends.friendsList.includes(friendName)) {
      Friends.friendsList.splice(Friends.friendsList.indexOf(friendName), 1);
    } else {
      Friends.friendsList.push(friendName);
    }
    var friendClass = $('.' + event.currentTarget.innerText);
    console.log(friendClass);
    friendClass.toggleClass('boldedUsername');
  }

};