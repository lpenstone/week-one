function countLetters(sentence){
  var letterTotals = {};
  var noSpace = sentence.split(" ").join("");
  for(var i = 0; i < noSpace.length; i++){
    var alpha = noSpace.charAt(i).toLowerCase();
    if(letterTotals[alpha] > 0) letterTotals[alpha] += 1;
    else letterTotals[alpha] = 1;
  }
  console.log(letterTotals);
}

//CHANGE TEXT HERE
countMe = "Lightouse in the house";

console.log(countLetters(countMe));
