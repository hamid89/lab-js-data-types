/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const conStr = `${s1} ${s2} ${s3} ${s4} ${s5}`;

// Print out the concatenated string

console.log(conStr);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const temp1 =  `${part1.slice(0,part1.length -1)}${part1[part1.length-1].toUpperCase()}`
const temp2 = `${part2.slice(0,part2.length -1)}${part2[part2.length-1].toUpperCase()}`
const cameLtaiL = temp1 + temp2

// Print the cameLtaiL-formatted string

console.log(cameLtaiL)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tip = (15/100) * billTotal
// Print out the tipAmount

console.log(tip)




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

// Print the generated random number
console.log(num)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log('False')

const expression2 = a || b;
console.log('True')
const expression3 = !a && b;
console.log('False')
const expression4 = !(a && b);
console.log('True')
const expression5 = !a || !b;
console.log('True')
const expression6 = !(a || b);
console.log('False')
const expression7 = a && a;
console.log('True')