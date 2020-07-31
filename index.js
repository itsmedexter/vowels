// write a function called vowels that returns the number of vowels from a string that includes upper/lower case letters, spaces and punctuation.

function vowels(str) {
  // create a variable that is a counter set to 0
  let counter = 0;
  // create variable that are a set a vowels 
  const letter = 'a,e,i,o,u';

  // make a for loop that goes through the string of characters, don't forget to use lowercase method on string so you don't have to change case for letter variable
  for (let char of str.toLowerCase()) {
    // write an if statement that checks if vowels included in string. Each vowel found, counter is incremented by 1
    if (letter.includes(char)) {
      counter++;
    }
  }
  // return final count of vowels found in string
  return counter;
}