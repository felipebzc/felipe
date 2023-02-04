let varA = 'A'; // b
let varB = 'B'; // c 
let varC = 'C'; // a

let varAtemp = varA

varA = varB
varB = varC
varC = varAtemp

console.log(varA, varB, varC);
