// The Solar System, part 1
const solarSystem = [
    { name: "Mercury", ringSystem: false, moons: [] },
    { name: "Venus", ringSystem: false, moons: ["Endor"] },
    { name: "Earth", ringSystem: false, moons: ["The Moon"], diameter: "7,917 miles" },
    { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
    { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
    { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Oberon"] },
    { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] },
    { name: "Pluto", ringSystem: false, moons: ["Charon"] }
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
        radiusp: 2439,
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
    venus: {
        radiusp: 6051,
        name: 'Venus',
        density: 5.24,
        tilt: 177,
        image: 'textures/venus.gif',
        rotationperiod: 5832,
        period: 0.62,
        radiuse: 6051,
        satellites: 0,
        au: 0.72,
        eccentricity: 0.007,
        velocity: 35.04,
        mass: 0.82,
        inclination: 3.39
    },
    earth: {
        radiusp: 6371,
        name: 'Earth',
        density: 5.51,
        tilt: 23.44,
        image: 'textures/earth.gif',
        rotationperiod: 23.93,
        period: 1.00,
        radiuse: 6371,
        satellites: 1,
        au: 1.00,
        eccentricity: 0.017,
        velocity: 29.79,
        mass: 1.00,
        inclination: 0.00
    },
    jupiter: {
        radiusp: 69911,
        name: 'Jupiter',
        density: 1.33,
        tilt: 3.12,
        image: 'textures/jupiter.gif',
        rotationperiod: 9.92,
        period: 11.86,
        radiuse: 69911,
        satellites: 79,
        au: 5.20,
        eccentricity: 0.048,
        velocity: 13.06,
        mass: 317.89,
        inclination: 1.31
    },
    saturn: {
        radiusp: 58232,
        name: 'Saturn',
        density: 0.69,
        tilt: 26.73,
        image: 'textures/saturn.gif',
        rotationperiod: 10.66,
        period: 29.46,
        radiuse: 58232,
        satellites: 82,
        au: 9.51,
        eccentricity: 0.056,
        velocity: 9.64,
        mass: 95.18,
        inclination: 2.49
    },
    uranus: {
        radiusp: 25362,
        name: 'Uranus',
        density: 1.27,
        tilt: 97.77,
        image: 'textures/uranus.gif',
        rotationperiod: 17.24,
        period: 84.01,
        radiuse: 25362,
        satellites: 27,
        au: 19.19,
        eccentricity: 0.046,
        velocity: 6.81,
        mass: 14.54,
        inclination: 0.77
    },
    neptune: {
        radiusp: 24622,
        name: 'Neptune',
        density: 1.64,
        tilt: 28.32,
        image: 'textures/neptune.gif',
        rotationperiod: 16.11,
        period: 164.79,
        radiuse: 24622,
        satellites: 14,
        au: 30.06,
        eccentricity: 0.009,
        velocity: 5.43,
        mass: 17.14,
        inclination: 1.77
    },
    pluto: {
        radiusp: 1188,
        name: 'Pluto',
        density: 2.03,
        tilt: 122.53,
        image: 'textures/pluto.gif',
        rotationperiod: 153.31,
        period: 247.94,
        radiuse: 1188,
        satellites: 1,
        au: 39.48,
        eccentricity: 0.244,
        velocity: 4.74,
        mass: 0.002,
        inclination: 17.16
    }
};

// 1. console.log the mass of Mercury
console.log(system.mercury.mass);

// 2. console.log the eccentricity of Venus
console.log(system.venus.eccentricity);

// 3. console.log the sum of the number of satellites of Jupiter, Saturn, Uranus, and Neptune (131)
let totalSatellites = system.jupiter.satellites + system.saturn.satellites + system.uranus.satellites + system.neptune.satellites;
console.log(totalSatellites);

// 4. Write a conditional that checks if Mercury's radiusp is a string (remember the typeof command). If Mercury's radiusp is a string, change the value to be the same as