let name = "Pepe";
console.log("Name:", name);

let age = 25;
console.log("Age:", age);

let price = 99.9;
console.log("Price using interpolation", `$${price}`);

let favoriteSeries = [
  "Sword Art Online",
  "Fairy Tail",
  "Black Clover",
  "The Simpson",
];
console.log("My favorite series:", favoriteSeries);

let favoriteMovies = [
  {
    name: "Constantine",
    premireYear: 2005,
    protagonists: ["Keanu Reeves", "Rachel Weisz", "Shia LaBeouf"],
  },
  {
    name: "Angels & Demons",
    premireYear: 2009,
    protagonists: ["Tom Hanks", "Ewan McGregor", "Ayelet Zurer"],
  },
  {
    name: "The Da Vinci Code",
    premireYear: 2006,
    protagonists: ["Tom Hanks", "Audrey Tautou", "Ian McKellen"],
  },
  {
    name: "Inception",
    premireYear: 2010,
    protagonists: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
  },
  {
    name: "Ex Machina",
    premireYear: 2014,
    protagonists: ["Alicia Vikander", "Domhnall Gleeson", "Oscar Isaac"],
  },
  {
    name: "Predestination",
    premireYear: 2014,
    protagonists: ["Ethan Hawke", "Sarah Snook", "Noah Taylor"],
  },
];

console.log("My favorite movies:", favoriteMovies);

let ageIncrement = ++age;
console.log("Age plus 1:", ageIncrement);

favoriteSeries.push("Boku no hero");
console.log('Add another serie', favoriteSeries);