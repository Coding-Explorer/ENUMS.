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
enum Direction {
    North = 100,
    East = 200,
    South = 300,
    West = 400
}

console.log(Direction.North); // Output: 100
console.log(Direction.East); // Output: 200

// Another way of printing the output to the console.
console.log(Direction[100]); // Output: "North"
console.log(Direction[200]); // Output: "East"

// Example of an enum with implicit values.
enum Color {
    Red,
    Green,
    Blue,
    Yellow,
    White,
    Black,
    violet,
    orange,
    pink
}

console.log(Color.Red); // Output: 0
console.log(Color.Green); // Output: 1
console.log(Color.Blue); // Output: 2

// Example no 02:
enum coffee {
    Cappuccino,
    Espresso,
    Latte,
    Mocha,
    Macchiato,
    Americano,
    Cortado,
    Affogato,
    Irish
}

console.log(coffee.Cappuccino); // Output: 0
console.log(coffee.Espresso); // Output: 1
console.log(coffee.Latte); // Output: 2

// Example no 03:
enum coffeetype {
    Cappuccino,
    Espresso,
    Latte,
    Irish,
    Affogato
}

// You can also access enum members by their name.
// For example, to access the value of the Cappuccino enum member, you can use the following code:
let myCoffee: coffeetype = coffeetype.Cappuccino;

console.log(myCoffee); // Output: 0.





// Example of using an enum with type-safe enums.
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(Weekday.Monday); // Output: 0.
console.log(Weekday.Tuesday); // Output: 1.
console.log(Weekday.Wednesday); // Output: 2.

// Example no 02.
enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let myDay: Days = Days.Monday;

console.log(myDay); // Output: 0.



enum Season {
    Spring,
    Summer,
    Autumn,
    Winter
    }
    
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

    enum Vehicles {
        Car,
        Truck,
        Motorcycle,
        Bicycle
    }

    let myVehicle: Vehicles = Vehicles.Car;

    console.log(myVehicle); // Output: 0.

// Another example of using enums.
enum Food {
    Pizza,
    Burger,
    Fries,
    Sandwich,
    Biryani,
    Pasta
}

let myFood: Food = Food.Burger;

console.log(myFood); // Output: 1.

