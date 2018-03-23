console.log('time to flip')


var coinImg = document.getElementById('coin-img');
var headsTally = document.querySelector('.heads-tally');
var tailsTally = document.querySelector('.tails-tally');
var coinFlipBtn = document.querySelector('.coin-flip-btn');
var coinSection = document.querySelector('section');

var coinFlip = function() {
  var headsOrTails = Math.floor(Math.random() * 10);
  if (headsOrTails >= 5) {
    return true;
  } else if (headsOrTails <= 4) {
    return false;
  }
}

var imgFlip = function(side) {
  coinImg.src = side + '.png'
}

var changeColor = function(color) {
  coinSection.style.borderColor = color;
} 

var totalHeads = 0;
var totalTails = 0;

var tossIt = function() {
  var toss = coinFlip();
  if (toss === true) {
    ++totalHeads;
    headsTally.textContent = Number(headsTally.textContent) + 1;
    imgFlip('heads');
    changeColor('mistyrose')
  } else if (toss === false) {
    ++totalTails;
    tailsTally.textContent = Number(tailsTally.textContent) + 1;
    imgFlip('tails')
    changeColor('rebeccapurple');

  }
}

coinFlipBtn.addEventListener('click', tossIt);



