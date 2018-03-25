console.log('the real code buster');

var codeMessage = 'FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.';

var baseAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var codeKey = 'DEFGHIJKLMNOPQRSTUVWXYZABC';

codeMessage = codeMessage.split('');

baseAlpha = baseAlpha.split('');

codeKey = codeKey.split('');

var decodedMessage = [];

for (var i = 0; i < codeMessage.length; i++) {
  if (codeKey.indexOf(codeMessage[i]) !== -1) {
    var a = codeKey.indexOf(codeMessage[i]);
    decodedMessage.push(baseAlpha[a]);
  } else {
    decodedMessage.push(codeMessage[i]);
  }
}

console.log(decodedMessage.join(''));