/////////////////ENUMS////////////////.
/*Enums (Enumeration): A way to define a set of named constants, allowing developers to use meaningful names instead
of numeric values ,making code more readable , maintainable , and less prone to errors.
Enums come in two flavours string and numeric. An enum is a special class that represents a group of constants
(unchangeable variables).
Enums are a feature added to javascript in typescript which makes it easier to handle named sets of constants.
By default an enum is number based, starting at zero, and each option is assigned an increment by one,

We can also add variables, methods, and constructors to it. The main objective of an enum is to define our own
data types(Enumerated Data Types).
The benefits of using enumerations include: Reduces errors caused by transposing or mistyping numbers.
Enum constants are public , static and final (unchangeable- cannot be overridden).*/
// Enums are a feature in TypeScript that allow you to define a set of named constants.
// Enums can be used to represent a set of related values or states.
// Using enums can make your code more readable and maintainable.
// Enums are created using the enum keyword.
// Enums can have explicit or implicit values.
// Explicit values can be assigned to each enum member.
// Implicit values are assigned based on the order of the enum members.
// Enums can be used to create type-safe enums.
// Example of an enum with explicit values / Numeric enums.
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 100] = "North";
    Direction[Direction["East"] = 200] = "East";
    Direction[Direction["South"] = 300] = "South";
    Direction[Direction["West"] = 400] = "West";
})(Direction || (Direction = {}));
console.log(Direction.North); // Output: 100
console.log(Direction.East); // Output: 200
// Another way of printing the output to the console.
console.log(Direction[100]); // Output: "North"
console.log(Direction[200]); // Output: "East"
// Example of an enum with implicit values.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
    Color[Color["White"] = 4] = "White";
    Color[Color["Black"] = 5] = "Black";
    Color[Color["violet"] = 6] = "violet";
    Color[Color["orange"] = 7] = "orange";
    Color[Color["pink"] = 8] = "pink";
})(Color || (Color = {}));
console.log(Color.Red); // Output: 0
console.log(Color.Green); // Output: 1
console.log(Color.Blue); // Output: 2
// Example no 02:
var coffee;
(function (coffee) {
    coffee[coffee["Cappuccino"] = 0] = "Cappuccino";
    coffee[coffee["Espresso"] = 1] = "Espresso";
    coffee[coffee["Latte"] = 2] = "Latte";
    coffee[coffee["Mocha"] = 3] = "Mocha";
    coffee[coffee["Macchiato"] = 4] = "Macchiato";
    coffee[coffee["Americano"] = 5] = "Americano";
    coffee[coffee["Cortado"] = 6] = "Cortado";
    coffee[coffee["Affogato"] = 7] = "Affogato";
    coffee[coffee["Irish"] = 8] = "Irish";
})(coffee || (coffee = {}));
console.log(coffee.Cappuccino); // Output: 0
console.log(coffee.Espresso); // Output: 1
console.log(coffee.Latte); // Output: 2
// Example no 03:
var coffeetype;
(function (coffeetype) {
    coffeetype[coffeetype["Cappuccino"] = 0] = "Cappuccino";
    coffeetype[coffeetype["Espresso"] = 1] = "Espresso";
    coffeetype[coffeetype["Latte"] = 2] = "Latte";
    coffeetype[coffeetype["Irish"] = 3] = "Irish";
    coffeetype[coffeetype["Affogato"] = 4] = "Affogato";
})(coffeetype || (coffeetype = {}));
// You can also access enum members by their name.
// For example, to access the value of the Cappuccino enum member, you can use the following code:
var myCoffee = coffeetype.Cappuccino;
console.log(myCoffee); // Output: 0.
// Example of using an enum with type-safe enums.
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
console.log(Weekday.Monday); // Output: 0.
console.log(Weekday.Tuesday); // Output: 1.
console.log(Weekday.Wednesday); // Output: 2.
// Example no 02.
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
var myDay = Days.Monday;
console.log(myDay); // Output: 0.
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
// printing the answers with dot method.
console.log(Season.Spring); // Output: 0
console.log(Season.Summer); // Output: 1
console.log(Season.Autumn); // Output: 2
console.log(Season.Winter); // Output: 3
// printing the answers with index method.
console.log(Season[0]); // Output: Spring
console.log(Season[1]); // Output: Summer
console.log(Season[2]); // Output: Autumn
console.log(Season[3]); // Output: Winter
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Car"] = 0] = "Car";
    Vehicles[Vehicles["Truck"] = 1] = "Truck";
    Vehicles[Vehicles["Motorcycle"] = 2] = "Motorcycle";
    Vehicles[Vehicles["Bicycle"] = 3] = "Bicycle";
})(Vehicles || (Vehicles = {}));
var myVehicle = Vehicles.Car;
console.log(myVehicle); // Output: 0.
// Another example of using enums.
var Food;
(function (Food) {
    Food[Food["Pizza"] = 0] = "Pizza";
    Food[Food["Burger"] = 1] = "Burger";
    Food[Food["Fries"] = 2] = "Fries";
    Food[Food["Sandwich"] = 3] = "Sandwich";
    Food[Food["Biryani"] = 4] = "Biryani";
    Food[Food["Pasta"] = 5] = "Pasta";
})(Food || (Food = {}));
var myFood = Food.Burger;
console.log(myFood); // Output: 1.
