const fs = require("fs");

const firstPriority = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const secondPriority = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const file = fs.readFile("data-day-3.txt", "utf8", (error, data) => {
  let count = 0;
  let rucksackCount = 0;
  // If an error occurred, print it to the console
  if (error) {
    console.error(error);
    return;
  } else {
    lines = data.split("\n");

    lines.forEach((line) => {
      console.log(lines.indexOf(line) + 1);
      //Print the length of each line
      //console.log(line.length);
      //Make an array of each line, with the first element being the first half of the line and the second element being the second half
      const firstHalf = line.slice(0, line.length / 2);
      //   console.log("First Half");
      //   console.log(firstHalf.length);
      const secondHalf = line.slice(line.length / 2);
      //   console.log("Second Half");
      //   console.log(secondHalf.length);

      //Make firstHalf an array of each letter
      const firstHalfLetters = firstHalf.split("");
      const secondHalfLetters = secondHalf.split("");

      let repeatedLetter = null;

      secondHalfLetters.forEach((letter) => {
        if (firstHalfLetters.includes(letter)) {
          if (repeatedLetter === null) {
            repeatedLetter = letter;
            if (firstPriority.includes(letter)) {
              //console.log(letter);
              //console.log(firstPriority.indexOf(letter) + 1);
              console.log("Adding First Priority");
              count += firstPriority.indexOf(letter) + 1;
              rucksackCount += 1;
            } else if (secondPriority.includes(letter)) {
              //console.log(letter);
              //console.log(secondPriority.indexOf(letter) + 27);
              console.log("Adding Second Priority");
              count += secondPriority.indexOf(letter) + 27;
              rucksackCount += 1;
            }
          }
        }
      });
    });
    console.log(rucksackCount);
    console.log(count);
  }
});
