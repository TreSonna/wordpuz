// User inputs sentence 
// Sentence -> string
// all VOWELS replaces with "-"
// original string hidden
// Example:
// String Input: "Believe you can and you're halfway there. Theodore Roosevelt"
// Puzzle Output: "B-l--v- y-- c-n -nd y--'r- h-lfw-y th-r-. Th--d-r- R--s-v-lt"

// input -> array -> split -> replace vowel with - ->combine -> ??

// const userArray = []

  // testArray.forEach(function(parameter) {
    // let testArray = [];
    // testArray.push($('input#userInput').val());

    let testArrayWords = []
    let testArray = []
    let testArray2 = []


$(document).ready(function() {
  $('#formOne').submit(function (event) {
    event.preventDefault();
  ///// This test has been brought to you by Epicodus!
  let testArray = ($('input#userInput').val()).split("  ");
  console.log(testArray.toString());

  placeHolder = testArray.toString();

  var xYa = /a/gi;
  var xYb = /e/gi;
  var xYc = /i/gi;
  var xYd = /o/gi;
  var xYe = /u/gi;
  var xYf = placeHolder.replace(xYa, '-');
  var xYg = xYf.replace(xYb, '-');
  var xYh = xYg.replace(xYc, '-');
  var xYu = xYh.replace(xYd, '-');
  var xYz = xYu.replace(xYe, '-');
  console.log(xYz)
  $('#response').show();
  $('#response').append(xYz);







  // let testArrayWords = []
    /// [ "This", "test", "has", "been", "brought", "to", "you", "by", "Epicodus!" ]

    // for (index = 0; index < testArray.length; index += 1) {
    //   testArrayWords = testArray[index].split("");
    //   console.log(testArrayWords)



        
      });
    });
  
  



        // $('#response').append('test ' + testArray + ' TEST')
      // $('#response').show();

      // for (index = 0; index < testArrayWords.length; index += 1) {
      //   if (testArrayWords.charAt(index) === "a" || testArrayWords.charAt(index) === "e" || testArrayWords.charAt(index) === "i" || testArrayWords.charAt(index) === "o" || testArrayWords.charAt(index) === "u") {
      //     charAt(index) = "-";
      //     console.log(testArrayWords)


// take vowel, replace with dash "-"

// take array, split, have a,e,i,o,u="-"
// add ?
// 