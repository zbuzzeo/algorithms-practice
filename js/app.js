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

// Quick sort
function myQuickAlgorithm() {
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
}

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
