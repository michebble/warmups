console.log("Mini golf!")

// var bob   = [3, 2, 6, 11, 9, 2, 6, 9, 10]
// var jimbo = [5, 12, 9, 22, 13, 7, 16, 10, 11]
// var fish  = [2, 2, 4, 5, 4, 3, 6, 4, 1]

var total = function(total, number) {
  return total + number //total is the accumulated value, number is the next number in the array
} 

var players = [
  { name: "Bob",
    card: [3, 2, 6, 11, 9, 2, 6, 9, 10]
  },
  { name: "Jimbo",
    card: [5, 12, 9, 22, 13, 7, 16, 10, 11]
  },
  { name: "Fish",
    card: [2, 2, 4, 5, 4, 3, 6, 4, 1]
  }
]

var par = [3, 4, 5, 5, 3, 3, 4,3,5]
var parGame = par.reduce(total)
var overStokes = []

console.log("Course par is " + parGame)

for (i = 0; i < players.length; i++) {
  var result = players[i].card.reduce(total)
  console.log('Player: ' + players[i].name + ' \nScore is: ' + result)
  var final = result - parGame
  if (result > parGame) {
    console.log(final + " over par") 
    overStokes[i] = final
  } else if (result === parGame) {
    console.log("perfect game") 
  } else if (result < parGame) {
    console.log(final * -1 + " under par")
  }
}

var fishWinnings = overStokes.reduce(total)
for (i = 0; i < overStokes.length; i++) {
  console.log(players[i].name + " owes Fish \$" + overStokes[i])
}

