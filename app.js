// alert("This is a test");
const pokemon = require("./data.js");

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// Exercise 1

console.dir(pokemon, { maxArrayLength: null });

// ----------------------------------------------------------------------------------------------------------------------------

// Exercise 2

console.log('Exercise 2 Result:', game);

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "Medium"; // Assigning a value to the new property "difficulty" in the game object. I can choose any value that fits the game.

console.log('Exercise 3 Result:', game);

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

const starterPokemon = pokemon.find((poke) => poke.starter === true); // Finding the starter Pokémon from the pokemon array.

if (starterPokemon) {
    game.party.push(starterPokemon);
} // Adding the starter Pokémon to the game.party array using the push method. 

console.log('Exercise 4 Result:', game.party); // Output: [ { name: 'Bulbasaur', type: 'Grass', starter: true } ]

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
const pikachu = pokemon.find((poke) => poke.name === "Pikachu"); // Finding a Pokémon object from the pokemon array.
const charmander = pokemon.find((poke) => poke.name === "Charmander");
const squirtle = pokemon.find((poke) => poke.name === "Squirtle");

game.party.push(pikachu, charmander, squirtle); // Adding three more Pokémon to the game.party array using the push method.

console.log('Exercise 5 Result:', game.party);

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.

Solve Exercise 6 here:
*/

game.gyms.forEach((gym) => {  // Looping through the gyms array using the forEach method.
    if (gym.difficulty < 3) {
        gym.completed = true; // Setting the completed property to true for gyms with a difficulty below 3.
    }
});

console.log('Exercise 6 Result:', game.gyms); // Verifying the changes made to the gyms array.

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

const evolvedBulbasaur = pokemon.find((poke => poke.name === "Ivysaur")); // Finding the evolved form of Bulbasaur from the pokemon array.
const evolvedCharmander = pokemon.find((poke => poke.name === "Charmeleon")); 
const evolvedSquirtle = pokemon.find((poke => poke.name === "Wartortle")); 
const evolvedPikachu = pokemon.find((poke => poke.name === "Raichu")); 

game.party.forEach((poke, index) => { // Looping through the game.party array using the forEach method. forEach () is suitable for looping and dynamically accessing index values.
  if (poke.name === "Bulbasaur" && evolvedBulbasaur) {
    game.party.splice(index, 1, evolvedBulbasaur); // Replacing the current starter Pokémon in the party with its evolved form using the splice method. Removes the current starter Pokémon and adds the evolved form in its place.
  }
  if (poke.name === "Charmander" && evolvedCharmander) {
    game.party.splice(index, 1, evolvedCharmander);
  }
  if (poke.name === "Squirtle" && evolvedSquirtle) {
    game.party.splice(index, 1, evolvedSquirtle);
  }
  if (poke.name === "Pikachu" && evolvedPikachu) {
    game.party.splice(index, 1, evolvedPikachu);
  }
});

console.log('Exercise 7 Result:', game.party); // Verifying the changes made to the game.party array. 

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach((poke) => console.log(poke.name)); // Looping through the game.party array using the forEach method to print the name of each Pokémon in the party.

console.log('Exercise 8 Result:', game.party); // Verifying the changes made to the game.party array.

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

const starterPokemon = pokemon.filter((poke) => poke.starter === true); // Filtering the pokemon array to return only the Pokemon where "starter" is true. Filter method also creates a new array (starterPokemon) with just the starter Pokemon.

starterPokemon.forEach((poke) => console.log('Exercise 9 Result:', poke.name)); // Looping through the starterPokemon array using the forEach method to print the name of each starter Pokémon.

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj); 
}; 
// This introduces the concept of adding methods (functions) to objects.
// Adding the pokemonObj to the "game.party" array using the push method. 
// The "this" keyword refers to the object itself ("game" in this case).
// Creating a method called "catchPokemon" and adding it to the "game" object. 

const weedle = pokemon.find((poke) => poke.name === "Weedle"); // Finding a Pokemon object from the pokemon array to pass as an argument to the catchPokemon method.

game.catchPokemon(weedle); // Catch Weedle by calling the catchPokemon method and passing the Weedle object as an argument. Add it to the "game.party" array.

console.log('Exercise 10 Result:', game.party); // Verifying that Weedle has been added to the "game.party" array.

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = function(pokemonObj) { // Copying the catchPokemon method and pasting it below.
  const pokeball = this.items.find((item) => item.name === "pokeball"); // Finding the pokeball object from the items array.
  if (pokeball) {
    pokeball.quantity -= 1; // Decreasing the quantity of pokeballs by 1 each time a Pokemon is caught.
  }
  this.party.push(pokemonObj); // Add the Pokemon object to the party array.
}

const mew = pokemon.find((poke) => poke.name === "Mew"); // Call the method and pass a Pokemon object from the pokemon data to catch it.
game.catchPokemon(mew); // Catch Mew by calling the catchPokemon method and passing the Mew object as an argument.

console.log('Exercise 11 Result:', game.items); // Verifying that the quantity of pokeballs has been decremented.
console.log('Exercise 11 Result:', game.party); // Log the updated game.party array to confirm that Mew has been added.

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

game.gyms.forEach((gym) => { // Looping through the gyms array using the forEach method. Iterate through the gyms. The "gym" variables represents the current gym object in each iteration.
  if (gym.difficulty < 6) {
    gym.completed = true; // The "if" statement checks if the difficulty of the gym is less than 6. Setting the completed property to true for gyms with a difficulty below 6.
  }
});

console.log('Exercise 12 Result:', game.gyms); // Prints the updated array to confirm that all gyms with a difficulty below 6 are marked completed.

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = function() { // Creating a "gymStatus" method in the "game" object.
  const gymTally = { completed: 0, incomplete: 0 }; // Initalize = creating a constant "gymTally" object with completed and incomplete properties set to 0.
  this.gyms.forEach((gym) => { // Iterate = looping through the gyms array using the forEach method.
    if (gym.completed) {
      gymTally.completed += 1; // Incrementing the completed property by 1 if the gym is completed.
    } else {
      gymTally.incomplete += 1; // Incrementing the incomplete property by 1 if the gym is not completed.
    }
  });
  console.log('Exercise 13 Result:', gymTally); // Logging the finally tally of completed and incomplete gyms.
};

game.gymStatus(); // Calling the gymStatus method to see the result.

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function() { // Creating a "partyCount" method in the "game" object.
  return this.party.length; // Returning the number of Pokemon in the party using the length property.
};

console.log('Exercise 14 Result:', game.partyCount()); // Counts the number of Pokemon in the party.

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.gyms.forEach((gym) => {
  // Looping through the gyms array using the forEach method. Iterate through the gyms. The "gym" variables represents the current gym object in each iteration.
  if (gym.difficulty < 8) {
    gym.completed = true; // Setting the completed property to true for gyms with a difficulty below 8.
  }
});

console.log('Exercise 15 Result:', game.gyms); // Prints the updated array to confirm that all gyms with a difficulty below 8 are marked completed.

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log('Exercise 16 Result:', game); // Logging the entire game object to the console to review changes. This prints the game object and all its properties (gyms, party, items, difficulty) to the console.

// ----------------------------------------------------------------------------------------------------------------------------

//Level Up Exercises

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

game.party.sort((poke1, poke2) => poke2.hp - poke1.hp); // Sorting the Pokemon in the game.party array by their HP in descending order (highest HP first) using the sort method.
// The compare function in the sort method compares two values (poke1 and poke2) and returns a positive number if poke2 has higher HP, a negative number if poke1 has higher HP, and 0 if they have the same HP.
// The sort method sorts the Pokemon in the game.party array based on the return value of the compare function.

console.log('Exercise 17 Result:', game.party); // Log the updated game.party array to confirm that the Pokemon are sorted by HP.

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.collection = []; // Adding a new property called "collection" to the game object and initializing it to an empty array.

game.catchPokemon = function(pokemonObj) {
  const pokeball = this.items.find((item) => item.name === "pokeball"); // Finding the pokeball object from the game.items array.
  if (pokeball) {
    pokeball.quantity -= 1; // Decreasing the quantity of pokeballs by 1 each time a new Pokemon is caught.
  }
  if (this.party.length < 6) {
    this.party.push(pokemonObj); // Adding the Pokemon object to the party array if there are less than 6 pokemons in the party.
  } else {
    this.collection.push(pokemonObj); // Adding the Pokemon object to the collection if there are already 6 pokemons in the party and not enough space is available.
  }
};

const dragonite = pokemon.find((poke) => poke.name === "Dragonite"); // Finding a Pokemon object.
game.catchPokemon(dragonite); // Catch Dragonite by calling the catchPokemon method and passing the Dragonite object as an argument.

console.log('Exercise 18 Result: Party', game.party); // Log the updated game.party array to confirm that Dragonite has been added.
console.log('Exercise 18 Result: Collection', game.collection); // Checking the collection array.
console.log('Excercise 18 Result: Items', game.items); // Verify the quantity of pokeballs.

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

game.catchPokemon = function (pokemonObj) {
  const pokeball = this.items.find((item) => item.name === "pokeball"); // Finding the pokeball object from the game.items array.
  if (!pokeball) {
    console.log("You do not have any pokeballs to catch the pokemon.");
    return; // Exit the method if there are no pokeballs available.
  }
  if (pokeball.quantity <=0 ) {
    console.log("You do not have enough pokeballs to catch the pokemon.");
    return; // Exit the method if there are no pokeballs available.
  }

  pokeball.quantity -= 1; // Decreasing the quantity of pokeballs by 1 each time a new Pokemon is caught.

  if (this.party.length < 6) {
    this.party.push(pokemonObj); // Adding the Pokemon object to the party array if there are less than 6 pokemons in the party.
  } else {
    this.collection.push(pokemonObj); // Adding the Pokemon object to the collection if there are already 6 pokemons in the party and not enough space is available.
  }
};

const mewtwo = pokemon.find((poke) => poke.name === "Mewtwo"); // Finding a Pokemon object.
game.catchPokemon(mewtwo); // Catch Mewtwo by calling the catchPokemon method and passing the Mewtwo object as an argument.

console.log('Exercise 19 Result: Party', game.party); // Log the updated game.party array to confirm that Mewtwo has been added.
console.log('Exercise 19 Result: Collection', game.collection); // Checking the collection array.
console.log('Exercise 19 Result: Items', game.items); // Verify the quantity of pokeballs.

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

game.catchPokemon = function (pokemonName) {
  const pokemonObj = pokemon.find((poke) => poke.name.toLowerCase() === pokemonName.toLowerCase()); // Finding the pokemon object in the dataset based on the name passed in (case-insensitive).
  if (!pokemonObj) { // Handle non-existent Pokemon.
    console.log(`The selected Pokemon, '${pokemonName}', does not exist.`); // Use backticks for template literals.
    return; 
  }
  const pokeball = this.items.find((item) => item.name === "pokeball"); // Finding the pokeball item in the game.items array.
  if (!pokeball || pokeball.quantity <= 0) { // Check if there are enough pokeballs to catch the Pokemon.
    return "You do not have enough pokeballs to catch this pokemon.";
  }

  pokeball.quantity -= 1; // Decrement the quantity of pokeballs by 1 each time a pokemon is caught.

  if (this.party.length < 6) { // Check if there is space in the party to add the Pokemon.
    this.party.push(pokemonObj); // Add the pokemon into the party array if there is space.
  } else {
    this.collection.push(pokemonObj); // Add the pokemon into the collection array if there is no more space in the party.
  }

  return `${pokemonObj.name} has been caught!`; // USe backticks for template literals. Return a message indicating that the Pokemon has been caught.
};

console.log(game.catchPokemon("Pikachu")); // Catch Pikachu by calling the catchPokemon method and passing the name of the Pokemon.
console.log(game.catchPokemon("InvalidName")); // Handle the case where the Pokemon name does not exist in the dataset.

console.log('Exercise 20 Result: Party', game.party);
console.log('Exercise 20 Result: Collection', game.collection);
console.log('Exercise 20 Result: Items', game.items);

// ----------------------------------------------------------------------------------------------------------------------------

/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

const pokemonByType = {}; // Creating an empty object to store the Pokemon objects sorted by their types.

pokemon.forEach((poke) => { // Loops through each Pokemon object in the pokemon array using the forEach method.
  if (!pokemonByType[poke.type]) { // Check if the poke.type property exists in the pokemonByType object.
    pokemonByType[poke.type] = []; // Initialize an empty array for the type if it does not exist.
  }
  pokemonByType[poke.type].push(poke); // Add the current Pokemon to the corresponding type array.
});

console.log('Exercise 21 Result:', pokemonByType); // Logs the final object after all Pokemon have been sorted by type.

// ----------------------------------------------------------------------------------------------------------------------------



