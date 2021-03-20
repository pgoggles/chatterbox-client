var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    ///$("#selectList").append(new Option("option text", "value"));

  },

  render: function() {
    for (var i = 0; i < Rooms.rooms.length; i ++) {
      RoomsView.$select.append(new Option(Rooms.rooms[i], 'value'));
    }

  }

};
