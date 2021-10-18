// // 5 judges judges code score 1-10, some too low/high, 2,9
// // 1,2,7,9,9

// function standlize(array, lowThreshold, highThreshold) {
//   // find the outscrope number and round it
//   const newArray = array.map((score) => {
//     if (score > highThreshold) return highThreshold;
//     else if (score < lowThreshold) return lowThreshold;
//     else return score;
//   });
//   console.log(newArray);
//   return newArray;
// }

// standlize([2, 3, 4, 5, 6], 4, 7);

// class Stand {
//   standlize(array, lowThreshold, highThreshold) {
//     const newArray = array.map((score) => {
//       if (score > highThreshold) return highThreshold;
//       else if (score < lowThreshold) return lowThreshold;
//       else return score;
//     });
//     console.log(newArray);
//     return newArray;
//   }
// }

// const standInstance = new Stand();

// standInstance.standlize([2, 3, 4, 5, 6], 4, 7);

function solution(A) {
  const newOrderedArray = A.sort(function (a, b) {
    return a - b;
  });

  if (
    newOrderedArray[newOrderedArray.length - 1] <= 0 ||
    newOrderedArray.length === 0
  ) {
    return 1;
  } else {
    let testResult = [];

    for (let i = 0; i < newOrderedArray.length; i++) {
      if (newOrderedArray[i] > 0 && i !== newOrderedArray.length - 1) {
        if (newOrderedArray[i] + 1 < newOrderedArray[i + 1])
          testResult.push(newOrderedArray[i] + 1);
      } else if (i === newOrderedArray.length - 1) {
        if (testResult.length === 0) testResult.push(newOrderedArray[i] + 1);
      }
    }
    if (newOrderedArray.includes(1)) return testResult[0];
    return 1;
  }
}

var firstMissingPositive = function (nums) {
  nums = nums.sort(function (val1, val2) {
    return val1 - val2;
  });

  if (nums.length === 0 || nums[nums.length - 1] <= 0) {
    return 1;
  } // A, B
  for (var i = 0, k = 1; i < nums.length; ++i) {
    // C
    if (nums[i] > k) {
      return k;
    }
    k = nums[i] < k ? k : k + 1;
  }
  return nums[nums.length - 1] + 1; // D
};
