function getNumberHasAverageOccurrences(numbers){
  let counted = numbers.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
      return acc;
  }, {});
  let maxCount = Math.max(...Object.values(counted));
  let minCount = Math.min(...Object.values(counted))
  return medianNumber = Object.keys(counted).filter(num => counted[num] !== maxCount && counted[num] !== minCount);
}

//const array = [1, 2, 3, 1, 2, 1, 1] 
const array = [1, 2, 3, 1, 2, 7, 7, 1, 1, 4, 5];

console.log (getNumberHasAverageOccurrences(array))