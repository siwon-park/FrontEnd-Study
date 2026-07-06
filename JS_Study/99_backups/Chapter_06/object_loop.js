var member = {
  name:"siwonpark",
  age:30,
  gender:"male"
}
console.group('object_loop');
for(var key in member) {
  console.log(key, member[key]);
}
console.groupEnd('object_loop');