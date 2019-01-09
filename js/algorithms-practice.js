function random(ceiling) {
  const newNum = Math.floor(Math.random() * ceiling) + 1;
  return newNum;
}

function makeList(population) {
  const newList = [ ];
  for (let i = 1; i <= population; i++) {
    newList.push(random(10));
  }
  return newList;
}

/**
 * Takes in an unsorted array of numbers and organizes their values from lowest to highest
 * based on a pivot value. Lesser values will be placed in a left array and greater values
 * will be placed in a right array.
 * 
 * @param {Array} array the unsorted array passed into the function.
 * @return {Array} sorted returns the array with numbers in their respective places.
 */

function quickSort(array) {
  if (array.length === 0) {
    return array;
  }

  const sorted = [ ];
  let pivot = array.pop();
  let left = [ ];
  let right = [ ];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  left = quickSort(left);
  right = quickSort(right);
  return sorted.concat(left, pivot, right);
}

console.log(`%cQuicksort:`, `color: orange; font-size: 1.6em; font-weight: bold`);
console.log(quickSort(makeList(10)));

/**
 * Recursive function that takes in an unsorted array and breaks it down into smaller arrays
 * of length 1. On the way back up from the recursion, the function rebuilds the arrays based
 * on their number values.
 * 
 * @param {Array} array
 * @return {Array} result: returns a new array with numbers sorted.
 */

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right),
  )
}

/**
 * Compares one number from the left and right arrays at a time. The lesser value is placed in
 * result.
 * 
 * @param {Array} left
 * @param {Array} right
 * @return {Array} result: returns a new array with numbers sorted.
 */

function merge(left, right) {
  let result = [ ];
  let indexLeft = 0;
  let indexRight = 0;
  
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft), right.slice(indexRight));
}

console.log(`%cMergesort:`, `color: orange; font-size: 1.6em; font-weight: bold`);
console.log(mergeSort(makeList(10)));
