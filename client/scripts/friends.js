var Friends = {

  $username: $(document),

  initialize: function() {
    this.friendsList = [];
    console.log(this.friendsList);
    Friends.$username.on('click', '.username', Friends.toggleFriend);
  },


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