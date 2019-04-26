function dwarfRollCall(dwarves) {
   var array=[]
  dwarves.forEach(function(dwarf,i) {
  array.push(i+1 + ". " + dwarves[i] + " ")
  })
  return array.join("")
}


function summonCaptainPlanet(planeteerCalls){
 return planeteerCalls.map(ele => ele.toUpperCase() + "!")
}


function longPlaneteerCalls(words) {
	for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
	}
	return false;
}


function findTheCheese (foods) {
   for(var i = 0; i < foods.length; i++){
  if (foods[i] == "cheddar" && "gouda" && "camembert"
   ){
    return foods[i]
  }
}
return "no cheese!"
}

