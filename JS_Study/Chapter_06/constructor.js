var d1 = new Date("2022-03-10");
console.log('d1.getFullYear()', d1.getFullYear()); // 2022
console.log('d1.getMonth()', d1.getMonth()); // 2(Month는 0부터 카운팅해서 그러하다)

function Person(name, age, height) {
  this.name = name,
  this.age = age,
  this.height = height,
  this.sum = function() {
    return this.age + this.height;
  }
}

var siwon = new Person("siwon", 30, 170);
console.log(siwon);
console.log(siwon.sum());

