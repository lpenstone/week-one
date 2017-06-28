function positionLetters(sentence){
  var letterTotals = {};
  for(var i = 0; i < sentence.length; i++){
    var alpha = sentence.charAt(i).toLowerCase();
    if (alpha === " " || alpha === "." || alpha === ","){} //Do nothing if a space
    else if(!letterTotals[alpha]){ //if letter does not exist, add it with first occuring position
      letterTotals[alpha] = i.toString();
    }
    else{ // else if if does exist, add the next position to the list with comma
      letterTotals[alpha] += ", " + i.toString();
    }
  }
  console.log(letterTotals);
}

//CHANGE TEXT HERE
countMe = "Lightouse in the house.";
positionLetters(countMe);

