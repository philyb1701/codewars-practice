function monkeyCount(n) {
    const monkeyArray = []; //Declares empty array.
    for(let seeMonkey=1; seeMonkey<n+1; seeMonkey++){ //For loop. ++ adds 1.
      monkeyArray.push(seeMonkey);//Push into array when monkey spotted.
    }
    return monkeyArray;
   }