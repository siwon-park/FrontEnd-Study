var MyObject = {
  PI:3.141456,
  random: function() {
    return Math.random();
  },
  floor: function(num) {
    return Math.floor(num);
  },
  ceil: function(num) {
    return Math.ceil(num);
  }
}

console.log(MyObject.PI);
console.log(MyObject.floor(3.14));
console.log(MyObject.ceil(5.4));