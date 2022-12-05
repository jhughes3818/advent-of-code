const fs = require("fs");

let lines = null;

let count = 0;
let oldCount = 0;

let countArray = [];

const file = fs.readFile("data-day-1.txt", "utf8", (error, data) => {
  // If an error occurred, print it to the console
  if (error) {
    console.error(error);
    return;
  } else {
    lines = data.split("\n");

    lines.forEach((line) => {
      if (line != "") {
        count += parseInt(line);
      } else {
        oldCount = count;
        countArray.push(count);
        count = 0;
      }
    });

    //Sort count array from highest to lowest
    const sortedArray = countArray.sort((a, b) => b - a);

    //Get sum of first three numbers in sortedArray
    const sum = sortedArray.slice(0, 3).reduce((a, b) => a + b, 0);
    console.log("The combined calories carried by top three elves is: " + sum);
  }
});
