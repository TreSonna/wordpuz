// User inputs sentence 
// Sentence -> string
// all VOWELS replaces with "-"
// original string hidden
// Example:
// String Input: "Believe you can and you're halfway there. Theodore Roosevelt"
// Puzzle Output: "B-l--v- y-- c-n -nd y--'r- h-lfw-y th-r-. Th--d-r- R--s-v-lt"

// input -> array -> split -> replace vowel with - ->combine -> ??

// const userArray = []

$(document).ready(function() {
  $('#formOne').submit(function (event) {
  
  // let testArray = [];
  // testArray.push($('input#userInput').val());

  let testArray = ($('input#userInput').val()).split(" ");
  let testArrayWords = []
  ///// This test has been brought to you by Epicodus!
  
  // testArray.forEach(function(parameter) {
    for (index = 0; index < testArray.length; index += 1) {
      testArrayWords = testArray[index].split("");
    }

    $('#response').append('test ' + testArray + ' TEST')
    $('#response').show();
  });
    event.preventDefault();
  });


// take vowel, replace with dash "-"

// take array, split, have a,e,i,o,u="-"
// add ?
// 
// <span>e<span>
