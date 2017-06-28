function countLetters(sentence){
  var letterTotals = {};
  for(var i = 0; i < sentence.length; i++){
    var letter = [];
    letter[i] = sentence.charAt(i).toLowerCase();
    if(letterTotals[letter[i]] > 0){ //if letter does exist, add one to count
      letterTotals[letter[i]] += 1;
    }
    else if (letter[i] === " "){} //Do nothing
    else { // else if if doesnt exist, make count 1
      letterTotals[letter[i]] = 1;
    }
  }
  console.log(letterTotals);
}

//CHANGE TEXT HERE
countMe = "Lightouse in the house";

console.log(countLetters(countMe));

//run through every letter in the string
//identify the letter that is in the string
//if the letter does not exist in the array yet, add it
//else if the letter does exist, add to the count of that specific letter
//