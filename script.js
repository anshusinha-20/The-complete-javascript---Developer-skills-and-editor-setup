// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// 61. Debugging with the console and breakpoints

// const measureKelvin = () => {
//   const measurement = {
//     type: "temp",
//     unit: "celcius",
//     value: Number(prompt("Degree celcius")),
//   };

//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// Coding challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
// 2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]
// GOOD LUCK 😀

// const printForecast = (arr) => {
//   let finalMessage = "";
//   for (let i = 1; i <= arr.length; i++) {
//     finalMessage += `... ${arr[i - 1]}\u00B0C in ${i} days `; // \u00B0 is the unicode for degree symbol in javascript
//   }
//   console.log(finalMessage + "...");
// };

// const arr1 = [17, 21, 23];
// const arr2 = [12, 5, -5, 0, 4];
// printForecast(arr1);
// printForecast(arr2);
