$(document).ready(function() {
  $('#formOne').submit(function (event) {
    event.preventDefault();
  ///// This test has been brought to you by Epicodus!
  let testArray = ($('input#userInput').val()).split("  ");
  console.log(testArray.toString());

  placeHolder = testArray.toString();
 ///// This test has been brought to you by Epicodus!
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
  // Th-s t-st h-s b--n br--ght t- y-- by -p-c-d-s!
      });
    });



      // let testArrayWords = []
    /// [ "This", "test", "has", "been", "brought", "to", "you", "by", "Epicodus!" ]

    // for (index = 0; index < testArray.length; index += 1) {
    //   testArrayWords = testArray[index].split("");
    //   console.log(testArrayWords)



        
  



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