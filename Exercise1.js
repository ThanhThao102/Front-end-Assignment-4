function theMostFrequentNumber(numbers){
  let counted = numbers.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
      return acc;
  }, {});
   let maxCount = Math.max(...Object.values(counted));
   return mostFrequent = Object.keys(counted).filter(num => counted[num] === maxCount);
}

//const array = [1, 2, 3, 1, 2, 1, 1] 
const array = [1, 2, 3, 1, 2, 1, 1, 2, 2];

console.log (theMostFrequentNumber(array))
