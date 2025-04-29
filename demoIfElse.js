var rain = true;


if (rain) {
	console.log("Take an umbrella");
} else {
	console.log("Enjoy the sunshine");
}

// ---------------------------------------------------------------------------------------------------------------
//Logical AND and OR operators

console.log(false && true & true);
console.log(false || false || true);

// ---------------------------------------------------------------------------------------------------------------
//Logical not operator

console.log(!false);

// ---------------------------------------------------------------------------------------------------------------

var trafficLight = "red";

if (trafficLight === "red") {
    console.log("Stop.");
} else if (trafficLight === "yellow") {
    console.log("Get Ready.");
} else if (trafficLight === "green") {
    console.log("Go.");
} else {
    console.log("Invalid traffic light color.");
}

// ---------------------------------------------------------------------------------------------------------------

var season = "spring";

if (season === "spring") {
    console.log("Enjoy the blooming flowers.");
} else if (season === "summer") {
    console.log("Have fun in the sun.");
} else if (season === "autumn" || season === "fall") {
    console.log("Admire the colorful leaves.");
} else if (season === "winter") {
    console.log("Bundle up and stay warm.");
} else {
    console.log("Invalid season.");
}