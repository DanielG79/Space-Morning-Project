//Hello Everyone! Time for some JS practice!! Please follow these steps to learn about objects, methods, and a little about the solar system as well



// 1.)Please create a new project

// 2.) create an app.js file

// 3.) inside of that file please copy and paste the following and inter your answers in your application. 

// The Solar System, part 1
const solarSystem = [
    { name: "Mercury", ringSystem: false, moons: [] },
    { name: "Venus", ringSystem: false, moons: [] },
    { name: "Earth", ringSystem: false, moons: ["The Moon"] },
    { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
    { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
    { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
    { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

// 1. Print the array of Jupiter's moons to the console (no for loop, just print the entire array).
console.log(solarSystem[4].moons);

// 2. Print the name of Neptune's moon "Nereid" to the console.
console.log(solarSystem[7].moons[1]);

// 3. Add a new moon called "Endor" to Venus' moons array.
solarSystem[1].moons.push("Endor");

// 4. Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
solarSystem.push({ name: "Pluto", ringSystem: false, moons: ["Charon"] });

// 5. Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.
solarSystem[2].diameter = "7,917 miles";

// 6. Change Mercury's ringSystem boolean to true.
solarSystem[0].ringSystem = true;

// 7. Change Uranus' moon "Umbriel" to "Oberon"
solarSystem[6].moons[3] = "Oberon";

// 8. Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others. You want to make a loop that goes over each item in the array, and include an if statement.
for (let i = 0; i < solarSystem.length; i++) {
    if (solarSystem[i].ringSystem === true) {
        console.log(solarSystem[i]);
    }
}

// The Solar System, Part 2
const system = {
    mercury: {
        radiusp: 'same ',
        name: 'Mercury',
        density: 5.43,
        tilt: 2,
        image: 'textures/mercury.gif',
        rotationperiod: 1408,
        period: 0.24,
        radiuse: 2439,
        satellites: 0,
        au: 0.3871,
        eccentricity: 0.206,
        velocity: 47.89,
        mass: 0.06,
        inclination: 7
    },
    // ... (other planets' data)
};

// 1. console.log the mass of Mercury
console.log(system.mercury.mass);

// 2. console.log the eccentricity of Venus
console.log(system.venus.eccentricity);

// 3. console.log the sum of the number of satellites of Jupiter, Saturn, Uranus, and Neptune (131)
let totalSatellites = system.jupiter.satellites + system.saturn.satellites + system.uranus.satellites + system.neptune.satellites;
console.log(totalSatellites);

// 4. Write a conditional that checks if Mercury's radiusp is a string (remember the typeof command). If Mercury's radiusp is a string, change the value to be the same as its radiuse value.
if (typeof system.mercury.radiusp === 'string') {
    system.mercury.radiusp = system.mercury.radiuse;
}

// 5. console.log Mercury's radiusp (should be 2439, not 'same')
console.log(system.mercury.radiusp);

// 6. Find the difference between Jupiter's momentum and Pluto's momentum. (To get momentum, you'll want the product of velocity and mass).
let jupiterMomentum = system.jupiter.velocity * system.jupiter.mass;
let plutoMomentum = system.pluto.velocity * system.pluto.mass;
let momentumDifference = jupiterMomentum - plutoMomentum;
console.log(momentumDifference);