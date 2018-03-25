console.log('time to flip')


var coinImg = document.getElementById('coin-img');
var headsTally = document.querySelector('.heads-tally');
var tailsTally = document.querySelector('.tails-tally');
var coinFlipBtn = document.querySelector('.coin-flip-btn');
var coinSection = document.querySelector('section');
var heading = document.querySelector('h1');
var messageHeading = document.querySelector('h3');
// var fiveFlipBtn = document.querySelector('.five-flip-btn');

headsTally.textContent = 0;
tailsTally.textContent = 0;

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



var tossIt = function() {
  var toss = coinFlip();
  if (toss === 1) {
    plusOne(headsTally);
    imgFlip('heads');
    changeColor('#F2463E')
    if (Number(headsTally.textContent) >= 5) { 
      messageHeading.textContent = 'heads wins!'
    }
  } else if (toss === 0) {
    plusOne(tailsTally)
    imgFlip('tails')
    changeColor('#3E9EF2');
    if (Number(tailsTally.textContent) >= 5) { 
      messageHeading.textContent = 'tails wins!'
    }
  }

}
 


coinFlipBtn.addEventListener('click', tossIt);




