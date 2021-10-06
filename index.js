// 5 judges judges code score 1-10, some too low/high, 2,9
// 1,2,7,9,9

function standlize(array) {
  // find the outscrope number and round it

  const newArray = array.map((score) => {
    if (score > 9) {
      score = 9;
    }
    if (score < 2) {
      score = 2;
    }
    return score;
  });

  return newArray;
}
