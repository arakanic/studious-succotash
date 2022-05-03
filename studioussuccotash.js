// Return the highest and lowest numbers from a given string of numbers which are separated by spaces

function highAndLow(numbers){
    const numbersArray = numbers.split(' ').map(Number)
    return Math.max.apply(0, numbersArray) + ' ' + Math.min.apply(0, numbersArray)
  }