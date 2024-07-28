console.log("Question 1")

// Creates Array
var age = [3, 9, 23, 64, 2, 8, 28, 93]
// First element - Last element
console.log (age[0] - age[age.length - 1])
// Add age
age.push(79)
// First element - Last element
console.log (age[0] - age[age.length - 1])
// Creates Average Age loop
let ageSum = 0; // Will be used to find the sum of all the age entities
for(let i = 0; i < age.length; i++) //loop will continue until it equals the length of the array
{
  ageSum += age[i]; // current loop iteration will be used to find next array element and then added to sum
}
const averageAge = ageSum / age.length; // sum is divided by how long the array is
console.log(averageAge)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Question 2")

// Create Array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//Average letters per array Loop
let nameSum = 0; 
for(let i = 0; i < names.length; i++) 
{
  let currentString = names[i]; // creates variable that represent the current element
  nameSum += currentString.length // finds current element length and adds it to sum
}
const averageName = nameSum / names.length; // finds average
console.log(averageName)

// Array Concatenated
let allNames = "" 
for(let i = 0; i < names.length; i++) 
{
    let currentString = names[i]; // creates variable that represent the current element
    allNames += currentString += " " // adds current string to allNames with added space
}
console.log(allNames)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Question 3")

console.log ("How do you access the last element of any array?")
console.log ("You use the code 'array[array.length - 1]'")

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Question 4")

console.log ("How do you access the first element of any array?")
console.log ("You use the code 'array[0]'")

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Question 5")

var nameLengths = []

for(let i = 0; i < names.length; i++) 
    {
      let currentString = names[i]; // creates variable that represent the current element
      nameLengths.push(currentString.length) // finds current element length and adds it to new array
    }
console.log(nameLengths)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
 console.log("Question 6")

let nameLengthSum = 0; // Will be used to find the sum of all the name letters
for(let i = 0; i < nameLengths.length; i++) //loop will continue until it equals the length of the array
{
    var currentNumber = nameLengths[i]; // current loop iteration will be used to find next array element and then added to sum
    nameLengthSum += currentNumber;
}
console.log(nameLengthSum);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Question 7")

function multiWords(word, n){ // Creates function
    console.log(word.repeat(n)); //repeats word n times
  }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Question 8")

function fullName (firstName, lastName) { // Creates function
    return firstName + " " + lastName // Concats names
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Question 9")

function greaterThan (array) { // creates functions
    arraySum = 0
    for(let i = 0; i < array.length; i++) //adds all up the numbers up
          var currentArray = array[i];
          arraySum += currentArray
    if (arraySum > 100) { // if the array is more than 100 it returns true
        return true
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Question 10")
function average (array) {
arrayAvg = 0
for(let i = 0; i < array.length; i++) //loop will continue until it equals the length of the array
{
  arrayAvg += array[i]; // current loop iteration will be used to find next array element and then added to sum
}
const avgArray = arrayAvg / array.length; // sum is divided by how long the array is
return avgArray
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Question 11")

function average (array1,array2) {
    arrayAvg1 = 0
    arrayAvg2 = 0
    for(let i = 0; i < array1.length; i++) //loop will continue until it equals the length of the array
    {
      arrayAvg1 += array1[i]; // current loop iteration will be used to find next array element and then added to sum
    }
    const avgArray1 = arrayAvg1 / array1.length; // sum is divided by how long the array is

    for(let i = 0; i < array2.length; i++) //loop will continue until it equals the length of the array
    {
      arrayAvg2 += array2[i]; // current loop iteration will be used to find next array element and then added to sum
    }
    const avgArray2 = arrayAvg2 / array2.length; // sum is divided by how long the array is
    if (avgArry1 > avgArray2) { // if array1 is more than array2, return true
        return true
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Question 12")

function willBuyDrink (isHotOutside, moneyInPocket) {
if (isHotOutside = true && moneyInPocket > 10.50) { //if its hot and we have enough money, its true
    return true
}
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Question 13")

function antsInvasion (ants, money) {
    if (ants > 100 && money > 100) { //if there is more than 100 ants in your house then you need to call an exterminator but you also need enough money
        return console.log("Great, now you can call an exterminator and get rid of all the ants!")
    
    } else {
        return console.log ("You didnt have enough money and you succumb to the ants")
    }
}