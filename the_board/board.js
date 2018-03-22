var boardSize = 16
var boardPattern = "# " 
var boardArr = []
var printArr = []

// for (var i = 0; i < boardSize; i++) {
//   boardArr.push(boardPattern)
// }
// var line = boardArr.join("") 

line = boardPattern.repeat(boardSize)


for (var i = 0; i < boardSize; i++) {
  if (i % 2 === 0) {
    printArr.push(line)
  } else {
    printArr.push(line.split("").reverse().join(""))
  }
  printArr.push("\n")
}

var boardStr = printArr.join("")
console.log(boardStr)



