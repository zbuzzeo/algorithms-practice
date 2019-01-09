function random(n) {
  return Math.floor(Math.random() * n) + 1;
}

function makeList(n) {
  let list = [ ];
  for (let i = 0; i < n; i++) {
    list.push(random(10));
  }
  return list;
}

/*  Quick sort...
 *  You must pick a pivot. This is usually the last element in the given array.
 *  All items smaller than the pivot will be in the left array, and the items greater than the pivot will be placed in the right array.
 *  Repeat this step for both the left and the right side of the pivot (pick a pivot, smaller = left; bigger = right)
 */

(function myQuickAlgorithm() {
  const list = makeList(10);

  function quickSort(array) {
    let popped = array.pop();   // comparison value to every other item in the array
    let left = [ ];
    let right = [ ];

    if (array.length === 0) {
      return array;
    }

    for (let i = 0; i < array.length; i++) {
      if (array[i] < popped) {  // if lower than comparison value then push left
        left.push(array[i]);
      } else {
        right.push(array[i]);   // if higher than comparison value then push right
      }
    }
    // update the halves and send them in as the new array when the function is called again.
    left = quickSort(left);
    right = quickSort(right);
    console.log([].concat(left, popped, right));
    return [].concat(left, popped, right);
  }
  
  // console.log(`Quick sort:`);
  // console.log(quickSort(list));
})();

/*  Merge sort...
 *  breaks down an array into smaller arrays with a length of 1.
 *  a number from the left and right side are compared with each pass.
 *  the lesser number is pushed into result and the greater number is saved for the next comparison.
 *  this is done until the array is fully reconstructed in numerical order.
 */

(function myMergeAlgorithm() {
  const list = makeList(10);

  function mergeSort(array) {
    if (array.length === 1) {
      return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle); // from the middle on

    return merge(
      mergeSort(left),
      mergeSort(right),
    );
  }

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

  // console.log(`Merge sort:`);
  // console.log(mergeSort(list)); // [1, 2, 2, 3, 3, 3, 5, 6, 7]
})();

// Selection sort
(function mySelectionAlgorithm() {
  const list = makeList(10);

  function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i; // like the pivot in quick sort, this is your comparison value
      
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j; // j will always be 1 more than minIndex.
        }
      }

      if (minIndex !== i) {
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }

    return array;
  }

  console.log(`Selection sort:`);
  console.log(selectionSort(list)); // [1, 2, 2, 3, 3, 3, 5, 6, 7]
})();

// // Insertion sort
// function myInsertAlgorithm() {

// }
