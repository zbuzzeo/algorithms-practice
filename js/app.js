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
    let popped = array.pop();
    let left = [ ];
    let right = [ ];

    if (array.length === 0) {
      return array;
    }

    for (let i = 0; i < array.length; i++) {
      if (array[i] < popped) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    left = quickSort(left);
    right = quickSort(right);
    console.log([].concat(left, popped, right));
    return [].concat(left, popped, right);
  }
  
  console.log(`Quick sort:`);
  console.log(quickSort(list));
})();

  // function swap(array, i, j) {
  //   var temp = array[i];
  //   array[i] = array[j];
  //   array[j] = temp;
  // }
  
  // // the Hoare partition
  // function quickSort(array, left, right) {
  //   pivot = Math.floor((left + right) / 2);

  //   while (left < right) {
  //     while(array[left] < array[pivot]) {
  //       left++;
  //     }
  //     while(array[right] > array[pivot]) {
  //       right--;
  //     }
  //   }

  //   if (left < right) {
  //     swap(array, left, right);
  //     left++;
  //     right--;
  //   }

  //   return left;
  // }

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

  console.log(`Merge sort:`);
  console.log(mergeSort(list)); // [1, 2, 2, 3, 3, 3, 5, 6, 7]
})();

// Selection sort
function mySelectionAlgorithm() {

}

// Insertion sort
function myInsertAlgorithm() {

}
