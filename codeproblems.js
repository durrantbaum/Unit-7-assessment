const perf = require('execution-time')();

function hasZeroSum(numbers) {
    const numSet = new Set(numbers);
    
    for (let num of numSet) {
      if (numSet.has(-num)) {
        return true;
      }
    }
    
    return false;
    }

const nums = [1, 2, -3, 4, -1];

//this code should take 101.5 μs of time
perf.start();
const hasZero = hasZeroSum(nums);
let resultsHasZero = perf.stop();

console.log(hasZero);
console.log(resultsHasZero.preciseWords)



  function hasUniqueChars(word) {
    const charSet = new Set();
    
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      
      if (charSet.has(char)) {
        return false;
      } else {
        charSet.add(char);
      }
    }
    
    return true;
  }

const word1 = "hello";
const word2 = "world";

//this code should take 56.8 μs of time
perf.start();
const isUnique1 = hasUniqueChars(word1);
let resultsIsUnique1 = perf.stop();
//this code should take 9.7 μs of time
perf.start();
const isUnique2 = hasUniqueChars(word2);
let resultsIsUnique2 = perf.stop();

console.log(isUnique1);
console.log(resultsIsUnique1.preciseWords)
console.log(isUnique2);
console.log(resultsIsUnique2.preciseWords)


function isPangram(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const letterSet = new Set();
    
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence.charAt(i).toLowerCase();
      
      if (alphabet.includes(char)) {
        letterSet.add(char);
      }
    }
    
    return letterSet.size === alphabet.length;
  }

const sentence1 = "The quick brown fox jumps over the lazy dog.";
const sentence2 = "Fill my crate with five bottles of milk.";
const sentence3 = "This sentence is not a pangram.";


//this code should take 93.2 μs of time
perf.start();
const isPangram1 = isPangram(sentence1);
let resultsIsPanagram1 = perf.stop();

console.log(isPangram1);
console.log(resultsIsPanagram1.preciseWords)

//this code should take 23.3 μs of time
perf.start();
const isPangram2 = isPangram(sentence2);
let resultsIsPanagram2 = perf.stop();

console.log(isPangram2);
console.log(resultsIsPanagram2.preciseWords)

//this code should take 11.9 μs of time
perf.start();
const isPangram3 = isPangram(sentence3);
let resultsIsPanagram3 = perf.stop();

console.log(isPangram3);
console.log(resultsIsPanagram3.preciseWords)


function find_longest_word(words) {
    let longest = 0;
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      
      if (word.length > longest) {
        longest = word.length;
      }
    }
    
    return longest;
  }

const wordList = ["apple", "banana", "cherry", "dragonfruit"];


//this code should take 43.5 μs of time
perf.start();
const longestWordLength = find_longest_word(wordList);
let resultsLongestWordLength = perf.stop();

console.log(longestWordLength);
console.log(resultsLongestWordLength.preciseWords)
