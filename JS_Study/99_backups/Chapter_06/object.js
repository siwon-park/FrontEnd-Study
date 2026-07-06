var memberArray = ["siwon", "park"];
console.log(memberArray[0]);

var memberObject = {
  name:"siwonpark"
};
console.log(memberObject['name']);
console.log(memberObject.name);

memberObject.name = "SIWON-PARK";
console.log(memberObject.name);

delete memberObject.name;
console.log(memberObject.name);

