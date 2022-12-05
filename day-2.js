const fs = require("fs");

const file = fs.readFile("data-day-2.txt", "utf8", (error, data) => {
  let count = 0;
  // If an error occurred, print it to the console
  if (error) {
    console.error(error);
    return;
  } else {
    lines = data.split("\n");
    console.log(lines);
    //Turn each line into an array, with each letter being an element in the array
    const letters = lines.map((line) => line.split(""));
    console.log(letters);
    letters.forEach((entry) => {
      if (entry[0] === "A" && entry[2] === "X") {
        //Rock vs Rock Draw = 3 Rock = 1 Total = 4
        count += 4;
      } else if (entry[0] === "A" && entry[2] === "Y") {
        //Rock vs Paper Win = 6 Paper = 2 Total = 8
        count += 8;
      } else if (entry[0] === "A" && entry[2] === "Z") {
        //Rock vs Scissors Lose = 0 Scissors = 3 Total = 3
        count += 3;
      } else if (entry[0] === "B" && entry[2] === "X") {
        //Paper vs Rock Lose = 0 Rock = 1 Total = 1
        count += 1;
      } else if (entry[0] === "B" && entry[2] === "Y") {
        //Paper vs Paper Draw = 3 Paper = 2 Total = 5
        count += 5;
      } else if (entry[0] === "B" && entry[2] === "Z") {
        //Paper vs Scissors Win = 6 Scissors = 3 Total = 9
        count += 9;
      } else if (entry[0] === "C" && entry[2] === "X") {
        //Scissors vs Rock Win = 6 Rock = 1 Total = 7
        count += 7;
      } else if (entry[0] === "C" && entry[2] === "Y") {
        //Scissors vs Paper Lose = 0 Paper = 2 Total = 2
        count += 2;
      } else if (entry[0] === "C" && entry[2] === "Z") {
        //Scissors vs Scissors Draw = 3 Scissors = 3 Total = 6
        count += 6;
      }
    });

    console.log(count);
  }
});
