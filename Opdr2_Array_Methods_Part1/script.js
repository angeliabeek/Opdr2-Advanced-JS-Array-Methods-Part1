// A - Write a JavaScript function to add the word "cool" to an array of strings. Use the .push method.
const addTheWordCool = function (array) {
    array.push("cool");
    // console.log(array);
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "amazing"]));
// result: ["nice", "awesome", "amazing", "cool"]


// B - Write a JavaScript function that returns the number of elements in an array.

const amountOfElementsInArray = function (array) {
    // console.log(array.length);
    return array.length;
}

console.log(amountOfElementsInArray(['apples', 'pears', 'lemons']));
// 3


// C - Write a JavaScript function that returns the first element of an array. PS: At which number does an array start counting again?

const selectBelgiumFromBenelux = function (array) {
    // console.log(array[0])
    return array[0];
}

console.log(selectBelgiumFromBenelux(["Belgium", "Netherlands", "Luxembourg"]));
// result: "Belgium" 


// D - Write a JavaScript function to return the last element of an array.

const lastElementInArray = function (array) {
    // console.log(array[array.length - 1]);
    return array[array.length - 1]
}

console.log(lastElementInArray(["Hare", "Guinea pig", "Chicken", "Turtle"]));
// result: "Turtle"


// E - Write a JavaScript function to extract the first element from an array and return the remainder. Use .slice and the alternative option .splice. What is the difference between these functions? Hint: Mutability.

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
    // console.log(array.slice(1));
    return array.slice(1, 4);
}
const impeachTrumpSplice = function (array) {
    array.splice(0, 1);
    // console.log(array);
    return array;
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// Slice: no mutation, returns a copy of a portion of an array
// Splice: mutate, changes the content of an array by removing or adding elements


// F - Write a simple JavaScript program to join all elements of the following array into a string (with spaces). ps: the word join is a big tip on what array method you should use.

const stringsTogether = function (array) {
    // console.log(array.join(' '))
    return array.join(' ')
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'fun', ';-}']))
// result: "Winc Academy is fun ;-}"

// G - Write a function that combines 2 arrays ['array 1'] ['array2'] into 1 array ['array1', 'array2']

const combineArrays = function (array1, array2) {
    // const array3 = array1.concat(array2);
    // console.log(array3);
    return array1.concat(array2);
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// resultaat: [1,2,3,4,5,6]

// Note: Ik gebruikte console.log in functions en kreeg daardoor undefined, gebruik daarom return statement.