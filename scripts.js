// this converts two arrays into an object with one array serving as the keys and the second array serving as the values
// in the key value pair
function toObject(keys, submittedArray) {
    let object = {}

    keys.forEach((k, i) => {
        object[k] = submittedArray[i];
    });
    console.log(object);
    return object;
}
// This is the base data from previos lab

// CSV Data we are working with
let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

// Variables created to hold cell data and placeholders
let placeholder = '';
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';

const csvData = [];
csvRow = [];

// Loop for each character
for (char of str) {
    //Switch case to determin what to do with each char
    switch (char) {
        case ',':
            if (!cell1) {
                cell1 = placeholder;
                placeholder = '';
                break;
            } else if (!cell2) {
                cell2 = placeholder;
                placeholder = '';
                break;
            } else {
                cell3 = placeholder;
                placeholder = '';
                break;
            }
        case '\n':
            cell4 = placeholder;
            // here we get the data from our variables and push them to a row
            csvRow.push(cell1, cell2, cell3, cell4);
            csvData.push(csvRow);
            // here we clear the row data so we can add to it again for a new row
            csvRow = [];
            placeholder = '';
            cell1 = '';
            cell2 = '';
            cell3 = '';
            cell4 = '';
            break;
        default:
            placeholder += char;
    }
}

//part 3

// here we have a new array created to store our new objects we are dynamically creating
arrayOfObjects = [];

// here we take out the first row and store it as an array of keys, since that's not changing
// for each object
keys = csvData[0];
// here we call a function that returns an object given two arrays, and pushes that object to our new array
for (let i = 1; i < csvData.length; i++) {
    arrayOfObjects.push(toObject(keys, csvData[i]));
}


// part 4

// unmodified array
console.log(arrayOfObjects);

// remove last element
arrayOfObjects.splice(-1);

// insert element at index 1
arrayOfObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })

// add element to end of array
arrayOfObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

arrayOfObjects.forEach(element => {
    console.log(element);
});

// part 5

// here we are creating an empty new string and appending to that string the ID values of the objects
let newString = ""
newString = newString + Object.keys(arrayOfObjects[0]).toString();


// here we are now appending the values of all of our objects to the new string
arrayOfObjects.forEach(element => {
    newString = newString + Object.values(element);
});

console.log(newString)


