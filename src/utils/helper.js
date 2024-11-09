export const getNValuesWithDuplicates = (arr, n) => {
    // Select n/2 unique values randomly from the array
    const uniqueValues = [];
    while (uniqueValues.length < n / 2) {
      const randomValue = arr[Math.floor(Math.random() * arr.length)];
      if (!uniqueValues.includes(randomValue)) {
        uniqueValues.push(randomValue);
      }
    }
  
    // Duplicate each unique value
    const duplicates = uniqueValues.reduce((acc, value) => {
      acc.push(value, value); // add each value twice (original and duplicate)
      return acc;
    }, []);
  
    // Shuffle the array of duplicates to ensure random order
    for (let i = duplicates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [duplicates[i], duplicates[j]] = [duplicates[j], duplicates[i]];
    }
  
    return duplicates;
  }