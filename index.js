function reversedString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  return word === reversedString(word)
}

/*
if(word === reversedString) {
      console.log('It is a palindrome');
    }
    else {
      console.log('It is not a palindrome');
  }

  word === reversedString ? 'It is a palindrome' : 'It is not a palindrome';
*/
 
/* 
  Add your pseudocode here
  split the string using split()
  reverse the array using the Reverse()
  join the reversed with join()
  if string is equal to reversed string
    log palindrome
  else
    log its not palindrome
  
  call function
*/

/*
  Add written explanation of your solution here
  first convert the string into an array using the split() methord then reverse
  the new array's values to get a reversed array then join the reversed array using
  the join() method to end up with a reversed string. i then
  compare if the joined reversed string is equal to/ the same as the initial 
  string using the loose comparison in the if statement and console log if its a palindrome or not.
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
