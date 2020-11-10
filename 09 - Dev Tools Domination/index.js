const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular

console.log("Hello");

// Interpolated

console.log("Hello, I am a %s string.", "💩");

// Styled

console.log(
  "%c I am some great text.",
  "font-size: 50px; background-color: red; font-weight: bold;"
);

// warning!

console.warn("You're going to die.");

// Error :|

console.error("I AM ERROR.");

// Info

console.info("Whiptail lizards are all female and reproduce asexually.");

// Testing

console.assert(1 === 2, "That is wrong.");

// clearing

console.clear();

// Viewing DOM Elements

const p = document.querySelector("p");

console.dir(p);

// Grouping together

dogs.forEach((dog) => {
  // console.group(`${dog.name}`)
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count("Wes");
console.count("Wes");
console.count("Laurel");
console.count("Wes");
console.count("Wes");
console.count("Laurel");
console.count("Wes");

// timing

console.time("Fetching data");

fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("Fetching data");
    console.log(data);
  });
