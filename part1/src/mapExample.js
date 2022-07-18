let animals = [
  { name: "bruno", species: "dog" },
  { name: "nacho", species: "dog" },
];

let getNames = animals.filter((animal) => animal.species);

console.log(getNames);
