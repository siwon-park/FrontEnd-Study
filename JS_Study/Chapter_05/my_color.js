var MyBody = {
  SetColor: function (color) {
    document.querySelector('body').style.color = color;
  },
  SetBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}

var MyLink = {
  SetColor: function (color) {
    var alst = document.querySelectorAll('a');
    var i = 0;
    while (i < alst.length) {
      alst[i].style.color = color;
      i += 1;
    }
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