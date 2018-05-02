var options = [' Web Design', 'Coding', 'Javascript', 'jQuery', 'Ruby', 'Devices', 'Global'];

var createOptions = function(arr) {
  $gaSelector = $('#accordian');
  arr.forEach(function(element){
    $newOption = document.createElement('option');
    $newOption.textContent =  element;
   

    $gaSelector.append($newOption);
  })
}

createOptions(options);