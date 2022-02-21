/*function  calculateAge(birthYear, currentYear) {
    const currentAge = (currentYear - birthYear)
    if (birthYear == currentYear)
    {const youAre = "You were born this very year!" 
    return youAre}
    
    else if (currentAge == 1)
    {const youAre = "You are 1 year old."
    return youAre}
    
    else if (currentAge == -1)
    {const youAre = `You will be born in 1 year.`
    return youAre}
    
    else if (birthYear >= currentYear)
    {const youAre = `You will be born in ${birthYear - currentYear} years.`
    return youAre}
  
    
    else if (currentYear >= birthYear){const youAre = `You are ${currentAge} years old.`
    return youAre}
  }*/
  //Reliance on else if statements, very inefficient. Refactor.
  
  function  calculateAge(birthYear, currentYear) {
    if(birthYear == currentYear) return 'You were born this very year!';
    const year = Math.abs(birthYear-currentYear) == 1 ? 'year' : 'years';
    if(birthYear < currentYear) return "You are "+(currentYear-birthYear)+' '+year+' old.';
    if(birthYear > currentYear) return "You will be born in "+(-currentYear+birthYear)+' '+year+'.';
  }

  //Refactored.