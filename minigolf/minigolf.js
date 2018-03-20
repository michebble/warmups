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
  },
  {name: "Simon",
   card: [35]
  },
  { name: "Spiffy",
    card: [5]
  }
]

var par = [3, 4, 5, 5, 3, 3, 4,3,5]
var parGame = par.reduce(total)
var owings = []

console.log("Course par is " + parGame)

for (i = 0; i < players.length; i++) {
  var result = players[i].card.reduce(total)
  console.log('Player: ' + players[i].name + ' \nScore is: ' + result)
  players[i].final = result - parGame

  if (result > parGame) {
    console.log(players[i].final + " over par") 
  } else if (result === parGame) {
    console.log("Par game") 
  } else if (result < parGame) {
    console.log(players[i].final * -1 + " under par")
  }
}



// each player should pay Fish a dollar for every stroke under.
console.log("\nFish's bets:")
for (i = 0; i < players.length; i++) {
  if (players[i].name !== "Fish" && players[i].final > 0) {
    console.log(players[i].name + " owes Fish \$" + players[i].final + ".")
    owings[i] = players[i].final
  } else if (players[i].name !== "Fish" && players[i].final < 0) {
    console.log("Fish owes " + players[i].name + " \$" + players[i].final * -1 + ".")
    owings[i] = players[i].final
  } else if (players[i].name !== "Fish" && players[i].final === 0) {
    console.log(players[i].name + " doesn't owes Fish this time...")
    owings[i] = players[i].final
  } else if (players[i].name === "Fish" && players[i].final > 0) {
    console.log("Fish owes everyone \$" + players[i].final * + " each.")
    owings[i] = (players[i].final * (players.length -1)) * -1
  } else if (players[i].name === "Fish" && players[i].final < 0) {
    console.log("Everyone owes Fish an extra \$" + players[i].final * -1 + " each.")
    owings[i] = (players[i].final * (players.length -1)) * -1
  }
}

console.log("Fish\'s total winnings: \$" + owings.reduce(total))


// for (i = 0; i < players.length; i++) {
//   var result = players[i].card.reduce(total)
//   console.log('Player: ' + players[i].name + ' \nScore is: ' + result)
//   var final = result - parGame
//   if (result > parGame) {
//     console.log(final + " over par") 
//     overStokes[i] = final
//   } else if (result === parGame) {
//     console.log("perfect game") 
//   } else if (result < parGame) {
//     console.log(final * -1 + " under par")
//   }
// }

// var fishWinnings = overStokes.reduce(total)
// for (i = 0; i < overStokes.length; i++) {
//   console.log(players[i].name + " owes Fish \$" + overStokes[i])
// }


