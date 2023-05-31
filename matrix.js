function zeroArray(m, n) {
  // creates a 2-d array with m rows and n columns of zero
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // adds the m-th row into newArray
    for (let j = 0; j < n; j++) {
      //pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
