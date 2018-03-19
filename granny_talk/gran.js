console.log('Granny Talk')

var randomNum = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
} // creates range and then adds back base to return a number in our wanted range. could use round() instead of floor and '+1', this reduces end probabilities


var vowels = ['A','E','I','O','U']
var grandpaTalk = function(string) {
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]){
        newString[i] = string[i].replace(vowel[j], vowel[randomNum(0,4)])
      } else {
        newString[i] = string[i]
      }
    }
  }
}



var question = prompt('Hello honey. What do you want to ask your dear old gran?')

while (question !== 'BYE') {
  if (question === question.toUpperCase()) {
    question = prompt('NO, NOT SINCE ' + randomNum(1930, 1950) + '\nWhat\'s that darling?')
    console.log(grandpaTalk(question))
  } else {
    question = prompt('SPEAK UP HONEY!')
    console.log(grandpaTalk(question))
  }
}

alert('What\'s that honey, I didn\'t hear you.. zzz')



