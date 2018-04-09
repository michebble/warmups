console.log('the real code buster');

// var codeMessage = 'FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.';

// var message = 'TWO SYMBOLS KISSING EACH OTHER'

var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var offset = 3;

var codeKey = 'DEFGHIJKLMNOPQRSTUVWXYZABC';

var input = document.querySelector('.input-message');
var offset = document.querySelector('.offset-number');
var output = document.querySelector('.output-message');
var offetBtn = document.querySelector('.set-offset');
var encodeBtn = document.querySelector('.encode-btn');
var decodeBtn = document.querySelector('.decode-btn');

baseAlpha = baseAlpha.split('');

keygenb {
  var newkey = baseAlpha.slice(0, offset)

}

//bad function TODO remove alphabets as input, change to string
var swapLetters = function(inputAplha, outputAlpha) {
  var message = input.value.split('');
  var newMessage = [];
  for (var i = 0; i < message.length; i++) {
    if (inputAplha.indexOf(message[i]) !== -1) {
      var newLetter = inputAplha.indexOf(message[i]);
      newMessage.push(outputAlpha[newLetter]);
    } else {
      newMessage.push(message[i]);
    }
  }
  output.textContent = newMessage.join('');
}

var decoder = function() {
  swapLetters(codeKey, baseAlpha);
}

var encoder = function() {
  swapLetters(baseAlpha, codeKey);
}

// offsetBtn.addEventListener('click', keyGen);
encodeBtn.addEventListener('click', encoder);
decodeBtn.addEventListener('click', decoder);