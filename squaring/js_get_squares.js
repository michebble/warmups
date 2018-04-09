
var getSquares = function(array) {
  var trueSquares =[];
  array.forEach(function(number) {
    if ((Math.sqrt(number) % 1) === 0) {
      trueSquares.push(number)
    }
  })
  var noDuplicates = new Set(trueSquares);
  var readyToSort =Array.from(noDuplicates);
  return readyToSort.sort(function(a, b){return a - b});
}

getSquares([4, 1, 16, 1, 10, 35, 22]);