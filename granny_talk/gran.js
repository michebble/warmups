console.log('Granny Talk')


var randomYear = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
} // creates range and then adds back base to return a number in our wanted range. could use round() instead of floor and '+1', this reduces end probabilities

var question = prompt('Hello honey. What do you want to ask your dear old gran?')

while (question !== 'BYE') {
  if (question === question.toUpperCase()) {
    alert('NO, NOT SINCE ' + randomYear(1930, 1950))
    question = prompt(`What's that darling?`)
    // question = prompt(`NO, NOT SINCE ${randomYear(1930, 1950)}\nWhat\'s that darling?`)
  } else {
    question = prompt('SPEAK UP HONEY!')
  }
}

alert('What\'s that honey, I didn\'t hear you.. zzz')



// var vowels = ['A','E','I','O','U']
// var vowelMix = function(string) {
//   for (i=0;i<string.length; i++) {
//     var newString = string.replace(vowels[i], vowels[randomYear(0,vowels.length-1)])
  
//   }
//   return newString
// }

// var grandpaTalk = function() {
//   while (question !== 'BYE') {
//   if (question === question.toUpperCase()) {

//     question = prompt(`NO, NOT SINCE ${randomYear(1930, 1950)}\nWhat\'s that darling?`)
//   } else {
//     question = prompt('SPEAK UP HONEY!')
//   }
// }

// alert('What\'s that honey, I didn\'t hear you.. zzz')
// }