console.log('time to flip')

var coinImg = document.getElementById('coin-img');
var headsTally = document.querySelector('.heads-tally');
var tailsTally = document.querySelector('.tails-tally');
var coinFlipBtn = document.querySelector('.coin-flip-btn');
var coinSection = document.querySelector('section');
var heading = document.querySelector('h1');
var messageHeading = document.querySelector('h3');
var resetBtn = document.querySelector('.reset-btn');

headsTally.textContent = 0;
tailsTally.textContent = 0;
resetBtn.disabled = true;
messageHeading.textContent = 'First to Five Wins!';

var coinFlip = function() {
  return Math.round(Math.random());
}

var imgFlip = function(side) {
  coinImg.src = side + '.png';
}

var changeColor = function(color) {
  coinSection.style.borderColor = color;
} 

var plusOne = function(tally) {
  tally.textContent = Number(tally.textContent) + 1;
}

var resetGame = function() {
  headsTally.textContent = 0;
  tailsTally.textContent = 0;
  resetBtn.disabled = true;
  coinFlipBtn.disabled = false;
  messageHeading.textContent = ('First to Five Wins!')
}

var tossIt = function() {
  var toss = coinFlip();
  if (toss === 1) {
    plusOne(headsTally);
    imgFlip('heads-icon');
    changeColor('#F2463E')
    if (Number(headsTally.textContent) >= 5) { 
      messageHeading.textContent = 'heads wins!';
      coinFlipBtn.disabled = true;
      resetBtn.disabled = false;
    }
  } else if (toss === 0) {
    plusOne(tailsTally)
    imgFlip('tails-icon')
    changeColor('#3E9EF2');
    if (Number(tailsTally.textContent) >= 5) { 
      messageHeading.textContent = 'tails wins!';
      coinFlipBtn.disabled = true;
      resetBtn.disabled = false;
    }
  }
}

coinFlipBtn.addEventListener('click', tossIt);
resetBtn.addEventListener('click', resetGame);




