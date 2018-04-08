var testString = "The_Andy_Griffith_Show";


var spiner = function(string) {
  var lowerCase = string.toLowerCase();
  var splitArray = lowerCase.split(/[\W+\_]/);
  return splitArray.join('-');
}

console.log(spiner(testString));