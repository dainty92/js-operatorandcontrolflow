// Question 3

let classGroup = "Arts"; // Replace "Arts" with the desired class group

if (classGroup === "Science") {
  console.log("Bolatito's subjects are: Physics, Chemistry, Biology, Technical Drawing, English, Mathematics");
} else if (classGroup === "Social Science") {
  console.log("Bolatito's subjects are: Accounting, Commerce, Marketing, Geography, English, Mathematics");
} else if (classGroup === "Arts") {
  console.log("Bolatito's subjects are: Government, Economics, Literature, History, English, Mathematics");
} else {
  console.log("Invalid class group. Bolatito's subjects are: English, Mathematics");
}


// Question 5

let num = 70;
let pwr = 1;

while (pwr < num) {
  pwr *= 2;
}

if ((num - pwr/2) < pwr/2) {
  pwr /= 2;
}

console.log('The number ' + pwr + ' is the power of 2 nearest to ' + num + '.');
