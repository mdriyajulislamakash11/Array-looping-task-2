// array-looping-tasks
// Task 1
// Write a JavaScript code to reverse the array colors 
// without using the reverse method.

// Input: 
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const output = [];
for (let i = 1; i < colors.length; i++) {
      output.unshift(colors[i])
}
console.log(output)

const ot = []
for(let l = colors.length - 1; i <= 0; l--){
      ot.unshift(colors[l0 ])
}


// // Output:

// ['orange', 'yellow', 'green', 'blue', 'red']