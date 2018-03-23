console.log('time to flip')


var coinImg = document.getElementById('coin-img');
var headsTally = document.querySelector('.heads-tally')
var tailsTally = document.querySelector('.tails-tally')
var coinFlipBtn = document.querySelector('.coin-flip-btn')



var coinFlip = function() {
  var headsOrTails = Math.floor(Math.random() * 10);
  if (headsOrTails >= 5) {
    return true;
  } else if (headsOrTails <= 4) {
    return false;
  }
}


var totalHeads = 0;
var totalTails = 0;

while (totalTails < 5 && totalHeads < 5) {
  var toss = coinFlip();
  if (toss === true) {
    ++totalHeads;
  } else if (toss === false) {
    ++totalTails;
  }
}

if (totalHeads === 5) {
  console.log('HEADS IS THE WINNER!');
  headsTally.textContent = headsTally.textContent + 1;
} else if (totalTails === 5) {
  console.log('TAILS IS THE WINNER!');
  tailsTally.textContent = tailsTally.textContent + 1;
}

