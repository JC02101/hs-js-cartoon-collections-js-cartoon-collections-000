//1. Dwarf Roll Call - accept array of dwarf names, then return a string with a numbered dwarves. 
function dwarfRollCall(dwarves) {
  var array = [];
  
  for(let i = ; i < dwarves.length; i++) {
    array.push(`${i+1}. ${dwarves[i]} `)
  }
  return array.join('')
}

//2. Summon Captain Planet - accept array of planeteer calls, then convert element to uppercase and add exclamation point at the end. Return array.
function summonCaptainPlanet(planeteerCalls) {
   var array = [];
   
  for(let i = 0; i< planeteerCalls.length; i++) {
    array.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return array 
}


//3. Long Planeteer Calls - function tells if any of the calls are longer than four characters. Return value - false or true.  

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words.length > 4) {
      return true
    }
    return false
  }
}

//4. Find The Cheese - return first string that is type of cheese. Cheese = ["cheddar", "gouda", "camembert"]

function findTheCheese(foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert" ||foods[i] === "swiss cheese") {
      return foods[i]
    }
  }
    return "no cheese!"
}


