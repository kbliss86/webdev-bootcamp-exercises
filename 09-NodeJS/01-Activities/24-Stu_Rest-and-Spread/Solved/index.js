// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// Which operator is being used here?
// We are using the spread operator to copy the 'songs' array into another array
// Arrays are passed by reference and not by value. Spread operator creates an entirely new array by copying the value.  
// For more info in value vs reference see https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apA.md#values-vs-references
const newSongs = [...songs];
// We can now edit newSongs without editing songs
newSongs.push("Joleen")
console.log(newSongs)
console.log(songs)

// What do you expect to be logged in the console?
// ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // What does the reduce() method do?
  // The reduce() method executes the reducer function on each element of the array
  return array.reduce((a, b) => a + b, 0);
};
// What do you expect to be logged in the console?
// 6
console.log(addition(1, 2, 3));

// What is this syntax that is being used as the parameter?
// We are using the rest parameter syntax that allows us to represent an indefinite number of arguments as an array
const additionSpread = (...array) => {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

// What do you expect to be logged in the console?
// 6
console.log("line 31", additionSpread(1, 2, 3));
// Iteration steps of reduce
// acc = 0 curr = 1 func 0+1
// acc = 1 curr = 2 func 1+2
// acc = 3 curr = 3 func 3+3
// return 6

// What do you expect to be logged in the console?
// 110
console.log(additionSpread(1, 2, 3, 4, 100));
// Iteration steps of reduce
// acc = 0  curr = 1 func 0+1
// acc = 1  curr = 2 func 1+2
// acc = 3  curr = 3 func 3+3
// acc = 6  curr = 4 func 6+4
// acc = 10 curr = 100 10+100
// return 110