function Person(name, age, height) {
  this.name = name,
  this.age = age,
  this.height = height
}

Person.prototype.sum = function () {
  return this.age + this.height;
}

var park = new Person("siwon", 30, 170);
var kim = new Person("minsoo", 29, 185);

console.log("park.sum():", park.sum());

kim.sum = function() {
  return "modified sum():" + (this.age + this.height);
}

console.log("kim.sum():", kim.sum());