

var region = function(arr,x,y, treasureSpot, regionSize,regionType) {
  var xCoord = Math.floor(Math.random() * (x - regionSize))
  var yCoord = Math.floor(Math.random() * (y - regionSize))

  for (var rowSelector = xCoord; rowSelector < xCoord + regionSize; rowSelector++){
    for (var columnSelector = yCoord; columnSelector < yCoord + regionSize; columnSelector++) {
      arr[rowSelector].splice(columnSelector, 1, regionType);
    }
  }
  arr = fakeTreasureSpot(arr,xCoord,yCoord,treasureSpot);
  return arr;
}





var fakeTreasureSpot = function(arr,x,y,treasureSpot) {
  debugger
  return arr[Math.floor(Math.random() * x)][Math.floor(Math.random() * y)] = treasureSpot;

}

var makeFakeMap = function(x,y,treasureSpot, regionSize, regionType) {
  var map = [];
  var mapRow = "A".repeat(x);

  for (var i = 0; i < y; i++) {
    map.push(mapRow.split(""));
  }

  map = region(map, x, y, treasureSpot, regionSize, regionType);

  

  return map.join('\n');// broken here
}

console.log(makeFakeMap(6,6,'T',3,"F"));