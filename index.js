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

function solutionX(A) {
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

class Animal {
  constructor() {
    this.legs = 4;
  }
  breath() {
    console.log("i breath");
  }
  static walk() {
    console.log("i can walk animal");
  }
}

class Ape extends Animal {
  constructor() {
    super();
    this.child = "ape";
  }
  static walk() {
    super.walk();
    console.log("i am walking ape");
  }
}

const ape = new Ape();
//store the needing index

const twoSum = function (nums, target) {
  const comp = {};

  for (let i = 0; i < nums.length; i++) {
    console.log(comp[nums[i]], i);
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }

    comp[target - nums[i]] = i;
  }
};

function solution(A, X) {
  var N = A.length;
  if (N === 0) {
    return -1;
  }
  var l = 0;
  var r = N - 1;
  while (l < r) {
    var m = Math.floor((l + r) / 2);
    if (A[m] > X) {
      r = m - 1;
    } else {
      l = m;
    }
  }
  if (A[l] === X) {
    console.log(l);
    return l;
  }

  return -1;
}

function test(S) {
  let pattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%\^&*()_])[0-9a-zA-Z!@#$%\^&*()_]{6,}$/;

  return pattern.test(S);
}

function so(N) {
  var enable_print = N % 10;
  while (N > 0) {
    if (enable_print == 0 && N % 10 != 0) {
      enable_print = 1;
    } else if (enable_print == 1) {
      // process.stdout.write((N % 10).toString());
      console.log(N % 10);
      console.log("haha", N);
    }
    N = parseInt(N / 10);
    console.log("157", N);
  }
  console.log("158", N);
}

function seat(N, S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let num = 1;
  let counter = 0;
  const reservedSeats = S.split(" ");

  if (S === "") return 2 * N;

  while (num < N) {
    if (
      reservedSeats.filter(
        (seat) =>
          !seat.includes(num + "B") ||
          !seat.includes(num + "C") ||
          !seat.includes(num + "D") ||
          !seat.includes(num + "E")
      )
    ) {
      const newSeats = [num + "B", num + "C", num + "D", num + "E"];
      reservedSeats.push(...newSeats);
      counter++;
    }

    if (
      reservedSeats.filter(
        (seat) =>
          !seat.includes(num + "F") ||
          !seat.includes(num + "G") ||
          !seat.includes(num + "H") ||
          !seat.includes(num + "J")
      )
    ) {
      const newSeats = [num + "F", num + "G", num + "H", num + "J"];
      reservedSeats.push(...newSeats);
      counter++;
    }

    if (
      reservedSeats.filter(
        (seat) =>
          !seat.includes(num + "D") ||
          !seat.includes(num + "E") ||
          !seat.includes(num + "F") ||
          !seat.includes(num + "G")
      )
    ) {
      const newSeats = [num + "D", num + "E", num + "F", num + "G"];
      reservedSeats.push(...newSeats);
      counter++;
    }

    num++;
  }
  console.log(reservedSeats);
  console.log(counter);
  return counter;
}

const minCost = (s, cost) => {
  let res = 0;
  for (let i = 0, max = 0; i < s.length; i++) {
    res += cost[i];
    max = Math.max(max, cost[i]);
    if (s[i] !== s[i + 1]) {
      res -= max;
      max = 0;
    }
  }
  return res;
};
function findPrimeNumber(num) {
  let array = [];
  // create an array contains 2-100 numbers
  for (let i = 2; i <= num; i++) {
    array[i] = i;
  }
  //using sqrt to get result
  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = i + 1; j <= num; j++) {
      if (array[i] != 0 && array[j] != 0 && array[j] % array[i] === 0) {
        array[j] = 0;
      }
    }
  }
  const newArray = array.filter((num) => num !== 0);
  console.log("prime number array", newArray);
}

// Write a function: that, given two non-negative integers A and B, returns the number of bits set to 1 in the binary representation of the number A * B. For example, given A = 3 and B = 7 the function should return 3, because the binary representation of A * B = 3 * 7 = 21 is 10101 and it contains three bits set to 1. Assume that: In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment

// 2 parameter, non-negative
// a*b = value
// find how many 1s in this binary value

// each index of the binary result

function findOneInBinary(num1, num2) {
  let nonBinaryValue = num1 * num2;

  // convert to binary value first
  let count = 0;
  while (nonBinaryValue >= 1) {
    count += nonBinaryValue & 1;
    nonBinaryValue = nonBinaryValue >> 1;
  }
  return count;
}

function findSingnalInArray(arr) {
  let zeros = [];
  let ones = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && arr[i + 1] === 0 && i !== arr.length - 1) {
      zeros.push(0);
    }

    if (arr[i] === 1 && arr[i + 1] === 1 && i !== arr.length - 1) {
      ones.push(1);
    }

    if (i === arr.length - 1) {
      if (arr[i] === 1 && arr[i - 1] === 1) {
        ones.push(1);
      } else if (arr[i] === 0 && arr[i - 1] === 0) {
        zeros.push(0);
      }
    }
  }

  if (zeros.length > ones.length) {
    console.log("ones", ones.length, "zeros", zeros.length, "return 0");

    return 0;
  } else {
    console.log("ones", ones.length, "zeros", zeros.length);
    return ones.length;
  }
}
