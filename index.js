function isPalindrome(word) {
  let reverseWord = "";
  for (let i = (word.length -1); i >= 0; i--) {
    reverseWord = reverseWord + (word[i])
    
  }
  if (reverseWord === word) {
      return true;
      } else {
          return false
        }
}


/* 
  Add your pseudocode here
  take string as argument and return either true or false
  - if string backwards is the same as string forwards, return true
  -else return false

  - need to take array, iterate thru it backwards and append each char to new array?

  -one sample test could be if word[0] != word[(word.length - 1)], return false
*/

/*
  Add written explanation of your solution here
  Witihin Function scope of isPalinedrome, we define reverseWord as an empty string.
  We then use a for loop to iterate thru the string starting from (word.length -1)
  Each time we complete the loop, we add that letter to the variable reverseWord
  We then use an if statement to compare reverseWord to the original word, and if they are the same, then the function returns true, confirming it is a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
