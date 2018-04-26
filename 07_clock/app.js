var convertToString = function(number){
  var numberAsString = number.toString();
  if (numberAsString.length < 2) {
    numberAsString = "0" + numberAsString;
  }
  return numberAsString;
}

var getTime = function(){
  var currentTime = new Date();
  var hours = convertToString(currentTime.getHours());
  var minutes = convertToString(currentTime.getMinutes());
  var seconds = convertToString(currentTime.getSeconds());
  var time = `${hours}:${minutes}:${seconds}`;
  
  return time;
}

var $timeDisplay = $('.time-display');

var displayTime = function() {
  $timeDisplay.empty();
  var timeNow = getTime();
  $timeDisplay.append('<div>' + timeNow + '</div>');
}


window.setInterval( displayTime ,1000);

