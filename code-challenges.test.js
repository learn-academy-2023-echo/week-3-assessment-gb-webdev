// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// describe ("fibonacci", () => {
//   it("returns an array the same amount of digits that the var number is. But the new array is the fibonaci sequence", () => {
//     expect(fibonacci(fibLength1)).toEqual([0, 1, 1, 2, 3, 5, 8])
//     expect(fibonacci(fibLength2)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })


// const fibLength1 = 7
// Expected output: [0, 1, 1, 2, 3, 5, 8]

// const fibLength2 = 11
// Expected output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// const fibonacci = n =>
//   Array.from({ length : n }).reduce(
//     (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
//     []
//   );
// console.log(fibonacci(fibLength1)); 
// console.log(fibonacci(fibLength2)); 

// Pseudo code: create a variable, turn the var into an array with .from() round the numbers with .reduce. Add in our for loop and console log the the function and var.
// I tried to get rid of the 0 too but couldn't manage.


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// describe ("objecSort", () => {
//   it("returns sorted values from an object passed in, they're sorted from least to greatest.", () => {
//   expect(objecSort(studyMinutesWeek1).toEqual([15, 15, 20, 30, 30, 60, 90]))
//   expect(objecSort(studyMinutesWeek2).toEqual([10, 15, 20, 45, 60, 65, 100]))
//   })
// })

// Good Failure: ReferenceError: objecSort is not defined

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.





// console.log(Object.values(studyMinutesWeek1).sort((a, b) => a - b))
// console.log(Object.values(studyMinutesWeek2).sort((a, b) => a - b))

// Pseudo code: I was unable to get a function to to order studyMinutes2 into order. This was the only way I could do it. I'd like to see how it's done next week.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// describe ("arrSum", () => {
//   it("returns an array the same size, but as the sum of the add and minus as in previous array.", () => {
//   expect(arrSum(accountTransactions1).toEqual([100, -17, -23, -9]))
//   expect(arrSum(accountTransactions2).toEqual([250, -89, 100, -96]))
//   expect(arrSum(accountTransactions3).toEqual([]))
//   })
// })

// Good failure:  ReferenceError: arrSum is not defined

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

let arrSum = 0
accountTransactions1.forEach(a => {
  arrSum += a;
})


console.log(arrSum)

// Pseudo code: I was able to return const 1 and 2 correct earlier but I can't manage to get #3.
// I need to see this on Monday too.
