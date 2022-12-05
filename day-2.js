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
        //X = Lose
        count += 0;
        //Lost to A = 1
        count += 3;
      } else if (entry[0] === "A" && entry[2] === "Y") {
        //Y = Draw
        count += 3;
        //Draw with A = 1
        count += 1;
      } else if (entry[0] === "A" && entry[2] === "Z") {
        //Z = Win
        count += 6;
        //Win Against A = 2
        count += 2;
      } else if (entry[0] === "B" && entry[2] === "X") {
        // X = Lose
        count += 0;
        //B=3
        count += 1;
      } else if (entry[0] === "B" && entry[2] === "Y") {
        //Y = Draw
        count += 3;
        //B=3
        count += 2;
      } else if (entry[0] === "B" && entry[2] === "Z") {
        //Z = Win
        count += 6;
        //B=3
        count += 3;
      } else if (entry[0] === "C" && entry[2] === "X") {
        // X= Lose
        count += 0;
        //C=1
        count += 2;
      } else if (entry[0] === "C" && entry[2] === "Y") {
        //Y = Draw
        count += 3;
        //C=1
        count += 3;
      } else if (entry[0] === "C" && entry[2] === "Z") {
        //Z = Win
        count += 6;
        //C=1
        count += 1;
      }
    });

    console.log(count);
  }
});
