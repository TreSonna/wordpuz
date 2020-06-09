// User inputs sentence 
// Sentence -> string
// all VOWELS replaces with "-"
// original string hidden
// Example:
// String Input: "Believe you can and you're halfway there. Theodore Roosevelt"
// Puzzle Output: "B-l--v- y-- c-n -nd y--'r- h-lfw-y th-r-. Th--d-r- R--s-v-lt"

// input -> array -> split -> replace vowel with - ->combine -> ??

const userArray = []

$(document).ready(function() {
  $('#formOne').submit(function (event) {
  
    let testArray = [];
    
    testArray.push($('input#userInput').val());

  alert(testArray);
  console.log(testArray);

  testArray.forEach(function(parameter) {
    $('#response').append('test ' + testArray + ' TEST')
    $('#response').show();



    
  });


    event.preventDefault();
  });
});