function positionLetters(sentence){
  var letterTotals = {};
  for(var i = 0; i < sentence.length; i++){
    var letter = [];
    letter[i] = sentence.charAt(i).toLowerCase();
    if (letter[i] === " " || letter[i] === "." || letter[i] === ","){} //Do nothing if a space
    else if(!letterTotals[letter[i]]){ //if letter does not exist, add it with first occuring position
      letterTotals[letter[i]] = i.toString();
    }
    else { // else if if does exist, add the next position to the list with comma
      letterTotals[letter[i]] += ", " + i.toString();
    }
  }
  console.log(letterTotals);
}

//CHANGE TEXT HERE
countMe = "Lightouse in the house.";

console.log(positionLetters(countMe));
