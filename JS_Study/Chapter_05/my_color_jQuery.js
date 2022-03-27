var MyBody = {
  SetColor: function (color) {
    $('body').css("color", color);
  },
  SetBackgroundColor: function (color) {
    $('body').css("backgroundColor", color);
  }
}

var MyLink = {
  SetColor: function (color) {
    $('a').css("color", color);
  }
}

function dayNnight(self) {
  if (self.value === 'night') {
    MyBody.SetBackgroundColor('gray');
    MyBody.SetColor('white');
    self.value = 'day';
    MyLink.SetColor('powderblue');
  } else {
    MyBody.SetBackgroundColor('white');
    MyBody.SetColor('black');
    self.value = 'night';
    MyLink.SetColor('blue');
  }
}