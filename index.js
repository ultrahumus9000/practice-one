// 5 judges judges code score 1-10, some too low/high, 2,9
// 1,2,7,9,9

function standlize(array, lowThreshold, highThreshold) {
  // find the outscrope number and round it
  const newArray = array.map((score) => {
    if (score > highThreshold) return highThreshold;
    else if (score < lowThreshold) return lowThreshold;
    else return score;
  });
  console.log(newArray);
  return newArray;
}

standlize([2, 3, 4, 5, 6], 4, 7);

class Stand {
  standlize(array, lowThreshold, highThreshold) {
    const newArray = array.map((score) => {
      if (score > highThreshold) return highThreshold;
      else if (score < lowThreshold) return lowThreshold;
      else return score;
    });
    console.log(newArray);
    return newArray;
  }
}

const standInstance = new Stand();

standInstance.standlize([2, 3, 4, 5, 6], 4, 7);
