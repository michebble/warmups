console.log('Granny Talk')


function randomYear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

var question = prompt('Hello honey. What do you want to ask your dear old gran?')


while (question !== 'BYE') {
  if (question === question.toUpperCase()) {
    question = prompt(`NO, NOT SINCE ${randomYear(1930, 1950)}\nWhat\'s that darling?`)
  } else {
    question = prompt('SPEAK UP HONEY!')
  }
}

alert('What\'s that honey, I didn\'t hear you.. zzz')
