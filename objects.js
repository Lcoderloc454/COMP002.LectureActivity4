//syntax for creating an object
let myCar = {
    wheels: 4,
    transmission: "Automatic",
    trunkContents: ["Donut Tire", "Jumper Cables", "Water Bottles"]
};

//accessing properties of an object
console.log('myCar has ${myCar.wheels} wheels');
console.log('myCar has a/an ${myCar.transmission} transmission');

// change property values
myCar.transmission = "Manual/Conventional";
console.log('myCar has a/an ${myCar.transmission} transmission');