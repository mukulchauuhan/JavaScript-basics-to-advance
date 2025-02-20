// -----Conversion-----
// "32" => 32
// "32abc" => NaN
// true => 1; false => 0
// null => 0
// 1 => true; 0=> false
// "" => false
// "mukul" => true
console.log("let's convert a string to number");
let score = "32"
console.log(typeof(score));

let convertedScore = Number(score);
console.log(typeof convertedScore);

console.log("What if we do this like 32abc ?");
let numberWithString = "32abc";
console.log(typeof numberWithString);

let convertItAlso = Number(numberWithString);
console.log(convertItAlso) // it is NaN but
console.log(typeof convertItAlso); // The type is a Number :)

