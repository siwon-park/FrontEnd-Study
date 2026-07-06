var park = {
  name:"SIWON",
  height:170,
  weight:65,
  BMI: function() {
    return (this.weight / (this.height*this.height));
  }
};

console.log(park.BMI());